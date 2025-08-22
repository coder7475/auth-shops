/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SigninDto, SignupDto } from './dto/auth.dto';
import bcrypt from 'bcrypt';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  // signUp - Register
  async signup(dto: SignupDto) {
    const { user_name, password, shopNames } = dto;

    if (!user_name) {
      throw new Error('user_name is required');
    }

    const isUserExits = await this.prisma.user.findUnique({
      where: { user_name },
    });

    if (isUserExits) {
      throw new BadRequestException('Username Unavailable!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await this.prisma.user.create({
        data: {
          user_name,
          password: hashedPassword,
          shops: {
            create: shopNames.map((name) => ({ shop_name: name })),
          },
        },
        include: { shops: true },
      });

      return user;
    } catch (err: unknown) {
      if (
        err &&
        typeof err === 'object' &&
        'code' in err &&
        err.code === 'P2002'
      ) {
        throw new BadRequestException('Shop name must be globally unique');
      }
      throw err;
    }
  }

  async signin(dto: SigninDto, res: Response) {
    const { user_name, password, rememberMe } = dto;

    const user = await this.prisma.user.findUnique({
      where: { user_name },
      include: { shops: true },
    });

    if (!user) throw new NotFoundException('User not found!');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException('Incorrect password!');

    const payload = { sub: user.user_id, username: user.user_name };

    const token = await this.jwtService.signAsync(payload);

    res.cookie('Authentication', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      // * TODO: Must be available after frontend is finished
      //   domain: process.env.COOKIE_DOMAIN,
      maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 30 * 60 * 1000,
    });

    const data = {
      userName: user.user_name,
    };

    return { message: 'Login successful!', data };
  }
}
