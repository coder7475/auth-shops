/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Exclude } from 'class-transformer';
import { IsEmail, IsString, IsUUID, IsDate } from 'class-validator';

export class User {
  @IsUUID()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  @Exclude({ toPlainOnly: true })
  password: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
