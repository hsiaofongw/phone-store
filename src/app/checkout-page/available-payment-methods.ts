import { PaymentMethod } from './paymentMethod';

export const availablePaymentMethods: PaymentMethod[] = [
    {
        id: 'alipay',
        name: '支付宝'
    },
    {
        id: 'wechat',
        name: '微信'
    },
    {
        id: 'applepay',
        name: 'ApplePay'
    },
    {
        id: 'paypal',
        name: 'PayPal'
    },
    {
        id: 'bitcoin',
        name: 'BitCoin'
    },
    {
        id: 'creditcard',
        name: '信用卡'
    },
    {
        id: 'unionpay',
        name: '银联支付'
    },
    {
        id: 'bankaccounttransfer',
        name: '银行转账'
    },
    {
        id: 'postoffice',
        name: '邮局汇款'
    }
]