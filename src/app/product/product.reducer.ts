import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '../core/model/product.model';
import * as ProductActions from './product.actions';

export interface ProductState extends Product {}

export const initialState: ProductState = {
  id: '',
  name: '',
  inInventory: 0,
  enabled: true,
  min: 0,
  max: 0,
};

export const productReducer = createReducer(
  initialState
  //on(ProductActions.loadProducts, state => state),
);
