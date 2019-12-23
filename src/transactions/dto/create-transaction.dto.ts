

export class CreateTransactionDto{
    readonly blockchain: string;
    readonly symbol: string;
    readonly id: string;
    readonly transaction_type: string;
    readonly hash: string;
    readonly from: string;
    readonly to: string;
    readonly timestamp: string;
    readonly amount: string;
    readonly amount_usd: string;
    readonly transaction_count: string;
}