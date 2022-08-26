import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
// import { UserService } from './user/user.service';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost:27017/demoNestjs')],
  controllers: [],
  providers: [],
})
export class AppModule { }
