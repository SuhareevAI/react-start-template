import { Category } from '../../Category/Model/Category';

export class ShortProductInfoModel {
  id: string;
  price: number;
  photo: string;
  name: string;
  desc?: string;
}

/**
 * Продукт
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 */
export class ProductModel extends ShortProductInfoModel {
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
  commandId : string;
}

export class CartProductModel {
  id: string;
  image: string;
  title: string;
  cost: number;
}
