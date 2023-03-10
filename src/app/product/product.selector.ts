import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const selectProductState =
  createFeatureSelector<ProductState>('product');

export const getProducts = createSelector(
  selectProductState,
  (state) => state.products
);
export const getProduct = createSelector(
  selectProductState,
  (state) => state.product
);
