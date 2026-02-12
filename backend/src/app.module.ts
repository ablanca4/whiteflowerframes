import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageController } from './Controllers/image.controller';

@Module({
  imports: [],
  controllers: [AppController, ImageController],
  providers: [AppService],
})
export class AppModule {}
