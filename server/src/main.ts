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
    const protocol = process.env.PROTOCOL;

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
          // use http for localhost - switch to https for production
          const allowedPatterns = [
            new RegExp(`^${protocol}}?://${escapedDomain}$`), // exact domain
            new RegExp(
              `^${protocol}?://[a-z0-9][a-z0-9-]*\\.${escapedDomain}$`,
            ), // direct subdomains
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
    logger.log(`Application is running on: ${protocol}://localhost:${port}`);
  } catch (error) {
    logger.error('Failed to start application', error);
    process.exit(1);
  }
}

bootstrap().catch((error) => {
  console.error('Unhandled error during bootstrap:', error);
  process.exit(1);
});
