import { Controller, Get, Post } from '@nestjs/common';

@Controller('images')
export class ImagesController {
  @Post()
  create(): string {
    return 'this uploads a new image';
  }

  @Get()
  findAll(): string {
    return 'This gets all images';
  }
}
