import * as mongoose from 'mongoose';

export const TransactionSchema = new mongoose.Schema({
    blockchain: {type: String, required: true},
    symbol: {type: String, required: true},
    id: {type: String, required: true},
    transaction_type: {type: String, required: true},
    hash: {type: String, required: true},
    from: {type: Object, required: true},
    to: {type: Object, required: true},
    timestamp: {type: String, required: true},
    amount: {type: Number, required: true},
    amount_usd: {type: Number, required: true},
    transaction_count: {type: String, required: true},

});

export interface Transaction{
    blockchain: string;
    symbol: string;
    id: string;
    transaction_type: string;
    hash: string;
    from: object;
    to: object;
    timestamp: string;
    amount: number;
    amount_usd: number;
    transaction_count: string;
}