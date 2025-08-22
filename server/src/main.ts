import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import cors from 'cors';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  try {
    const app = await NestFactory.create(AppModule);
    const corsDomain = process.env.CORS_DOMAIN;
    const port = process.env.PORT ?? 3000;

    if (!corsDomain) {
      throw new Error('CORS_DOMAIN environment variable is required');
    }

    logger.log(`CORS Domain: ${corsDomain}`);

    app.use(cookieParser());

    app.use(
      cors({
        origin: (origin, callback) => {
          // Allow requests with no origin (mobile apps, curl, etc.)
          if (!origin) return callback(null, true);

          // Escape special regex characters and create exact domain match
          const escapedDomain = corsDomain.replace(
            /[.*+?^${}()|[\]\\]/g,
            '\\$&',
          );

          // Allow exact domain and its direct subdomains only
          const allowedPatterns = [
            new RegExp(`^https?://${escapedDomain}$`), // exact domain
            new RegExp(`^https?://[a-z0-9][a-z0-9-]*\\.${escapedDomain}$`), // direct subdomains
          ];

          const isAllowed = allowedPatterns.some((pattern) =>
            pattern.test(origin),
          );

          if (isAllowed) {
            callback(null, true);
          } else {
            logger.warn(`CORS blocked origin: ${origin}`);
            callback(new Error(`Origin ${origin} not allowed by CORS policy`));
          }
        },
        credentials: true,
        optionsSuccessStatus: 200, // For legacy browser support
      }),
    );

    await app.listen(port);
    logger.log(`Application is running on: http://localhost:${port}`);
  } catch (error) {
    logger.error('Failed to start application', error);
    process.exit(1);
  }
}

bootstrap().catch((error) => {
  console.error('Unhandled error during bootstrap:', error);
  process.exit(1);
});
