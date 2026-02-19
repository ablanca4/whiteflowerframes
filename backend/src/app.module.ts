import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesController } from './images/images.controller';
import { ImagesService } from './images/images.service';
import { ImagesModule } from './images/images.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ImagesModule, UsersModule],
  controllers: [AppController, ImagesController],
  providers: [AppService, ImagesService],
})
export class AppModule {}
