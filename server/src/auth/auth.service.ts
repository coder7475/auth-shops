import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SignupDto } from './dto/auth.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

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
}
