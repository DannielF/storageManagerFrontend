import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ProductService } from './product.service';
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      exhaustMap(() =>
        this.productService.getAllProducts().pipe(
          map((products) => ({
            type: ProductActions.productsLoadedSuccess.type,
            payload: products,
          })),
          catchError(() => of({ type: '[Product] Products Loaded Error' }))
        )
      )
    )
  );
  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.createProduct),
      exhaustMap((action) =>
        this.productService.createProduct(action.payload).pipe(
          map((product) => ({
            type: ProductActions.createProductSuccess.type,
            payload: product,
          })),
          catchError(() => of({ type: '[Product] Create Product Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
