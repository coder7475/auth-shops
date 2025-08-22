import { Injectable } from '@nestjs/common';
import { IResponse } from './common/interfaces/response.interface';

@Injectable()
export class AppService {
  getHello(): IResponse<Promise<void>> {
    return {
      statusCode: 200,
      message: 'Shops backend is running!',
      data: null,
    };
  }
}
