import { Phone } from './phone';

interface PhoneInventory extends Phone {
    inStockQuantity: number;
}

// 记录在售手机的初始库存情况
export const phones: PhoneInventory[] = [
    { id: 0, modelName: "PhoneX", description: "新的 Phone, 比更新还更新。", inStockQuantity: 7, price: 999 },
    { id: 1, modelName: "PhoneS", description: "小的 Phone, 玲珑小巧。", inStockQuantity: 10, price: 1999 },
    { id: 2, modelName: "PhoneLLLL", description: "充满创新，充满伟大的创新。", inStockQuantity: 9, price: 2999 },
    { id: 3, modelName: "Phone12", description: "快来体验最新技术。", inStockQuantity: 16, price: 3999 }
];
