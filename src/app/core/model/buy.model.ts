import { ProductSold } from './productSold.model';

//buy model
/**
 * Buy model
 * @export
 * @interface Buy
 * @property {string} id - Buy id
 * @property {string} idType - Buy idType
 * @property {string} idNumber - Buy idNumber
 * @property {string} clientName - Buy clientName
 * @property {ProductSold[]} products - Buy products
 * version 1.0.0
 * since 1.0.0
 * author: dannielf
 */
export interface Buy {
  id: string;
  idType: string;
  idNumber: string;
  clientName: string;
  products: ProductSold[];
}
