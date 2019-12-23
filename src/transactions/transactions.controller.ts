import { Controller, Get, Body ,Post, Render} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import {CreateTransactionDto} from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {

    constructor(private readonly transactionsService: TransactionsService){

    }

    @Get()
    async myHttpRoute(): Promise<any> {
    var trans = this.transactionsService.myHttpCall()
    var arr = [];
    trans.then((result)=>{
        result.sort((a,b) => b.amount_usd - a.amount_usd);
        for(var i = 0; i < result.length; i++){
            if(result[i].blockchain == 'bitcoin'){
                //this.addTrans(result[i].blockchain,result[i].symbol,result[i].id,result[i].transaction_type,result[i].hash,result[i].from,result[i].to,result[i].timestamp,result[i].amount,result[i].amount_usd,result[i].transaction_count);
                arr.push(result[i]);
            }
        }
        return arr;
    })
    .catch(function(error){
        console.log(error);
    });
    return arr;
    }
    

    async addTrans(
        transBlockchain: string,
        transSymbol: string,
        transId: string,
        transType: string,
        transHash: string,
        transFrom: object,
        transTo: object,
        transTimestamp: string,
        transAmount: number,
        transAmountUsd: number,
        transCount: string,
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
