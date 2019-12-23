import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsController } from './transactions/transactions.controller';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [HttpModule, TransactionsModule, MongooseModule.forRoot('mongodb+srv://user2:user2@cluster0-wbncb.mongodb.net/test?retryWrites=true&w=majority'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
