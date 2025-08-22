import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.use(
    cors({
      origin: ['http://localhost:5173'], // allowed origins
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true, // allow cookies / auth headers
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
