import { CartProductModel } from '../../../entities/Product/Model/ProductModel';

export interface CartProductProps extends CartProductModel {
  style?: React.CSSProperties;
}
