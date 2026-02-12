import { Controller, Get, Post } from '@nestjs/common';

@Controller('image')
export class ImageController {
  @Post()
  create(): string {
    return 'this uploads a new image';
  }

  @Get()
  findAll(): string {
    return 'This gets all images';
  }
}
