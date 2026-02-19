import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageController } from './Controllers/image.controller';
import { ImagesModule } from './images/images.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ImagesModule, UsersModule],
  controllers: [AppController, ImageController],
  providers: [AppService],
})
export class AppModule {}
