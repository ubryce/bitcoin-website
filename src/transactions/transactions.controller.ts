import { Controller, Get, Body ,Post, Render} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import {CreateTransactionDto} from './dto/create-transaction.dto';
import { Request, Response } from "express";

@Controller('transactions')
export class TransactionsController {

    constructor(private readonly transactionsService: TransactionsService){

    }

    // this just calls the function and then with that promise we
    // add everything in that JSON into our database
    async myHttpRoute(): Promise<any> {
    var trans = this.transactionsService.myHttpCall()
    trans.then((result)=>{
        for(var i = 0; i < result.length; i++){
            if(result[i].blockchain == 'bitcoin'){
                this.addTrans(result[i].blockchain,result[i].symbol,result[i].id,result[i].transaction_type,result[i].hash,result[i].from,result[i].to,result[i].timestamp,result[i].amount,result[i].amount_usd,result[i].transaction_count);
            }
        }
    })
    .catch(function(error){
        console.log(error);
    });
    }
    
    //when we /transactions it will get transactions from api
    //then get transactions from database
    //and return the JSON of all transactions 
    @Get()
    async getAllTransactions() {
        this.myHttpRoute();
        const transactions = await this.transactionsService.getTransactions();
        return transactions;
    }
    
    //just able to add transactions
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

    //being able to add into the database by post
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
