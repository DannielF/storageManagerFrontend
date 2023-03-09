import { Action, createReducer, createSelector, on } from '@ngrx/store';
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
  on(ProductActions.productsLoadedSuccess, (state, { products }) => ({
    ...state,
    ...products,
  }))
);

export const getAppState = (state: ProductState) => state;

export const getProducts = createSelector(
  getAppState,
  (state: ProductState) => state.products
);
