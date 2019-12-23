import { Controller, Get, Body ,Post} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import {CreateTransactionDto} from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {

    constructor(private readonly transactionsService: TransactionsService){

    }

    @Get()
    async myHttpRoute(): Promise<any> {
    return this.transactionsService.myHttpCall();
    }

    @Post()
    async addTransaction(
        @Body('blockchain') transBlockchain: string,
        @Body('symbol') transSymbol: string,
        @Body('id') transId: string,
        @Body('transaction_type') transType: string,
        @Body('hash') transHash: string,
        @Body('from') transFrom: object,
        @Body('to') transTo: object,
        @Body('timestamp') transTimestamp: string,
        @Body('amount') transAmount: number,
        @Body('amount_usd') transAmountUsd: number,
        @Body('transaction_count') transCount: string,
    ){
        const genId = await this.transactionsService.inserTransaction(
            transBlockchain,
            transSymbol,
            transId,
            transType,
            transHash,
            transFrom,
            transTo,
            transTimestamp,
            transAmount,
            transAmountUsd,
            transCount,
        );
        return {id:genId};
    }
    
}
