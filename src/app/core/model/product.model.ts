/**
 * Product model
 * @export
 * @interface Product
 * @property {string} id - Product id
 * @property {string} name - Product name
 * @property {number} inInventory - Product inventory
 * @property {boolean} enabled - Product enabled
 * @property {number} min - Product min
 * @property {number} max - Product max
 * version 1.0.0
 * since 1.0.0
 * author: dannielf
 */
export interface Product {
  id?: string;
  name: string;
  inInventory: number;
  enabled: boolean;
  min: number;
  max: number;
}
