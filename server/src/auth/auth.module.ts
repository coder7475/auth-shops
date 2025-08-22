import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  providers: [AuthService],
  imports: [PrismaModule],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
