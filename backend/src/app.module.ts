import { Module } from '@nestjs/common';
import { ImagesController } from './images/images.controller';
import { ImagesService } from './images/images.service';
import { ImagesModule } from './images/images.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ImagesModule, UsersModule],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class AppModule { }
