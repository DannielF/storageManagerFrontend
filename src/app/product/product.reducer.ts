import { createReducer, on } from '@ngrx/store';
import { Product } from '../core/model/product.model';
import * as ProductActions from './product.actions';

export interface ProductState {
  products: Product[];
  product: Product;
}

export const initialState: ProductState = {
  products: [],
  product: {
    id: '',
    name: '',
    inInventory: 0,
    enabled: false,
    min: 0,
    max: 0,
  },
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({
    ...state,
  })),
  on(ProductActions.productsLoadedSuccess, (state, { payload }) => ({
    ...state,
    products: payload,
  }))
);
