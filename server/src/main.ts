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
          if (!origin) return callback(null, true);

          // Allow exact domain and any subdomain
          const escapedDomain = corsDomain.replace(
            /[.*+?^${}()|[\]\\]/g,
            '\\$&',
          );
          const pattern = new RegExp(
            `^${protocol}://([a-z0-9-]+\\.)*${escapedDomain}$`,
          );

          if (pattern.test(origin)) {
            callback(null, true);
          } else {
            logger.warn(`CORS blocked origin: ${origin}`);
            callback(new Error(`Origin ${origin} not allowed by CORS policy`));
          }
        },
        credentials: true,
        optionsSuccessStatus: 200,
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
