import { Module } from '@nestjs/common';
import { ImagesController } from './images/images.controller';
import { ImagesService } from './images/images.service';
import { ImagesModule } from './images/images.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Users } from './users/user.entity';
import 'dotenv/config';

const postGresConnectionOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_POST!),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Users],
};

@Module({
  imports: [
    TypeOrmModule.forRoot(postGresConnectionOptions),
    ImagesModule,
    UsersModule,
  ],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class AppModule {}
