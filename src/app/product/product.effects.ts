import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ProductService } from './product.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Product] Load Products'),
      exhaustMap(() =>
        this.productService.getAllProducts().pipe(
          map((products) => ({
            type: '[Product] Products Loaded Success',
            payload: products,
          })),
          catchError(() => of({ type: '[Product] Products Loaded Error' }))
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
