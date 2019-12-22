import { Injectable, HttpService, HttpModule} from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { resolve } from 'dns';
import * as https from 'https';

import { Observable } from 'rxjs';
import { response } from 'express';

@Injectable()
export class TransactionsService {


    // using axios
    private axios: AxiosInstance;
    // using Http package
    private https;


    
    myHttpCall(): Promise<any> {
        // create a new promise because the http package is based on callbacks. Resolve or reject depending on if there is an error or not
        return new Promise((resolve, reject) => {
        https.get('https://api.whale-alert.io/v1/transactions?api_key=KtE5Gw2adzR9RT0SX8TGuF2e0k72Y1mq&min_value=500000&start=1577048460&end=1577074460&cursor=2bc7e46-2bc7e46-5c66c0a7', (resp) => {
            let data  = '';
            resp.on('data', (chunk) => {
            data += chunk;
            });

            resp.on('end', () => {
            data = JSON.parse(data).transactions;
            resolve(data);
            });
        })
        .on('error', (err) => {
            reject(err);
        });
        });
    }

    

}

    /** 
    http = require('http');

    apiRoot: string = 'https://api.whale-alert.io/v1';
    term: string = '1577042040';
    search(term:string) {
    let promise = new Promise((resolve, reject) => {
        let apiURL = `${this.apiRoot}/transactions?api_key=KtE5Gw2adzR9RT0SX8TGuF2e0k72Y1mq&min_value=500000&start=${term}&end=1577068040&cursor=2bc7e46-2bc7e46-5c66c0a7`;
        this.http.get(apiURL)
        .toPromise()
        .then(
            res => { // Success
            console.log(res.json());
            resolve();
            }
        );
    });
    return promise;
    }*/
    
    /** 
    let promise = new Promise((resolve, reject) => {
        this.axios.get('https://api.whale-alert.io/v1/transactions?api_key=KtE5Gw2adzR9RT0SX8TGuF2e0k72Y1mq&min_value=1000000&start=1550237797&end=1577002990&cursor=2bc7e46-2bc7e46-5c66c0a7')
        .then((response)=> {
            console.log(response)
        }, (err) => {
            reject(err);
        });
    });


/** 
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
          baseURL: 'https://api.whale-alert.io/v1',
          params: {
            api_key: 'KtE5Gw2adzR9RT0SX8TGuF2e0k72Y1mq',
          },
        });
      }

      async ofTrans(startT:any): Promise<object> {
        const response = await this.client.get('transactions', {
          params: { start: startT},
        });
        return response.data;
      }

    //getTransactions(){
    //    return this.http.get('https://api.whale-alert.io/v1/transactions?api_key=KtE5Gw2adzR9RT0SX8TGuF2e0k72Y1mq&min_value=1000000&start=1550237797&end=1577002990&cursor=2bc7e46-2bc7e46-5c66c0a7')
    //        .pipe(
    //            map(response => response.data)
    //        );        
   // }**/
