/* eslint-disable @typescript-eslint/no-unsafe-call */
// import { Exclude } from 'class-transformer';
import { IsString, IsUUID, IsDate } from 'class-validator';

export class User {
  @IsUUID()
  user_id: string;

  @IsString()
  user_name: string;

  @IsDate()
  createdAt: Date;
}
