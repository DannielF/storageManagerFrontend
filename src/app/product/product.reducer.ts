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
  on(ProductActions.loadProducts, (state) => {
    console.debug('State load', state);
    return {
      ...state,
    };
  }),
  on(ProductActions.productsLoadedSuccess, (state, { payload }) => {
    console.debug('State loaded', state);
    console.debug('Products', payload);
    return {
      ...state,
      products: payload,
    };
  })
);
