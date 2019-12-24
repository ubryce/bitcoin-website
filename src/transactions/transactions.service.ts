import { Injectable, HttpService, HttpModule} from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { resolve } from 'dns';
import * as https from 'https';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Transaction } from './transactions.model';

@Injectable()
export class TransactionsService {
    
    private transactions: Transaction[] = [];

    // using axios
    private axios: AxiosInstance;
    // using Http package
    private https;

    constructor(@InjectModel('Transaction') private readonly transactionModel: Model<Transaction>){}
    
    //gets all transactions from database
    async getTransactions(){
        const transactions = await this.transactionModel.find().exec();
        transactions.sort((a,b) => b.amount_usd - a.amount_usd);
        return transactions as Transaction[];
    }
    
    //inserts transaction into database
    async inserTransaction(blockchain: string,
        symbol: string,
        id: string,
        transaction_type: string,
        hash: string,
        from: object,
        to: object,
        timestamp: string,
        amount: number,
        amount_usd: number,
        transaction_count: string){
            const newTransaction = new this.transactionModel({blockchain,
                symbol,
                id,
                transaction_type,
                hash,
                from,
                to,
                timestamp,
                amount,
                amount_usd,
                transaction_count});
            const result = await newTransaction.save();
            return result.id as string;
        }
    
    // gets data from whale alert and put it into a promise
    myHttpCall(): Promise<any> {
        // create a new promise because the http package is based on callbacks. Resolve or reject depending on if there is an error or not
        return new Promise((resolve, reject) => {
        var ends = Math.round((new Date()).getTime() / 1000);
        https.get('https://api.whale-alert.io/v1/transactions?api_key=KtE5Gw2adzR9RT0SX8TGuF2e0k72Y1mq&min_value=1000000&start=1577048460&end=1577074460&cursor=2bc7e46-2bc7e46-5c66c0a7', (resp) => {
            let data  = '';
            resp.on('data', (chunk) => {
            data += chunk;
            });

            resp.on('end', () => {
            var deta = {};
            deta = JSON.parse(data).transactions;
            
            resolve(deta);
            });
        })
        .on('error', (err) => {
            reject(err);
        });
        });
    }


    

}
