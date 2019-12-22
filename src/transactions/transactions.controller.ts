import { Controller, Get } from '@nestjs/common';
import { TransactionsService } from './transactions.service';


@Controller('transactions')
export class TransactionsController {

    constructor(private readonly transactionsService: TransactionsService){

    }

    @Get('http')
    async myHttpRoute(): Promise<any> {
    return this.transactionsService.myHttpCall();
    }
    
      //https://api.whale-alert.io/v1/transactions?api_key=KtE5Gw2adzR9RT0SX8TGuF2e0k72Y1mq&min_value=1000000&start=1550237797&end=1577002990&cursor=2bc7e46-2bc7e46-5c66c0a7
}
