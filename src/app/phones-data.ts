import { Phone } from './phone';

interface PhoneInventory extends Phone {
    inStockQuantity: number;
}

// 记录在售手机的初始库存情况
export const phones: PhoneInventory[] = [
    { id: 0, modelName: "phone1", description: "desc1", inStockQuantity: 1, price: 100 },
    { id: 1, modelName: "phone2", description: "desc2", inStockQuantity: 10, price: 200 },
    { id: 2, modelName: "phone3", description: "desc3", inStockQuantity: 20, price: 300 },
    { id: 3, modelName: "phone4", description: "desc4", inStockQuantity: 100, price: 400 }
];
