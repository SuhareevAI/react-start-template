import { categories } from '../../Category/Const/CategoryConst';
import { products } from '../Const/ProductConst';
import { ProductModel } from '../Model/ProductModel';
import { getRandomNumber, getRandomString } from '../../../app/services/HelperService';

// Максимальная стоимость продукта
const maxProductPrice = 5000;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): ProductModel => {
  const categoryIndex = getRandomNumber(categories.length);
  const category = categories[categoryIndex];

  const productIndex = getRandomNumber(products.length);
  const productName = products[productIndex].name;
  const { description } = products[productIndex];
  const { photo } = products[productIndex];

  const productId = getRandomString();
  const price = getRandomNumber(maxProductPrice, 1);

  const product = new ProductModel();
  product.id = productId;
  product.name = productName;
  product.photo = photo;
  product.createdAt = createdAt;
  product.price = price;
  product.category = category;
  product.desc = description;

  return product;
};
