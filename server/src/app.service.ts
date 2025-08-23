import { Injectable } from '@nestjs/common';
import { IResponse } from './common/interfaces/response.interface';

@Injectable()
export class AppService {
  getHello(): IResponse<null> {
    return {
      success: true,
      message: 'Shops backend is running!',
      data: null,
    };
  }
}
