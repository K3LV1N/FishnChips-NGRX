import { FishnChips } from './../models/fishnchipsorder.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, first } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as fromReducer from '../store/fishnchips.reducer';
import * as fromModel from '../models/fishnchipsorder.model';
import * as fromSelector from '../store/fishnchips.selector';
import * as actions from '../store/fishnchips.actions';

@Component({
  selector: 'app-fishnchips',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fishnchips.component.html',
  styleUrls: ['./fishnchips.component.scss']
})

export class FishnchipsComponent implements OnInit {

  orders$: Observable<FishnChips[]>;

  constructor(private store: Store<fromReducer.State>) { }

  ngOnInit() {
    this.orders$ = this.store.pipe(select(fromSelector.selectAll));
  }

  createOrder() {
    const order: fromModel.FishnChips = {
      id: new Date().getMilliseconds(),
      quantity: 1,
      includeTomatoSauce: true,
      image: this.getRandomImage()
    };

    this.store.dispatch(new actions.Create(order));
  }

  saveOrder(id, quantity, includeTomatoSauce): number {
    // NOTE: The unary + operator on quantity.
    quantity = +quantity;

    this.store.dispatch(new actions.Update(id, { quantity, includeTomatoSauce }));

    return null;
  }

  deleteOrder(id) {
    this.store.dispatch(new actions.Delete(id));
  }

  orderUpdated(id, quantity, includeTomatoSauce): number {
    // Only care about updates. We need to check that the existing order values are NOT the same
    let order: FishnChips = null;

    // NOTE: The unary + operator on quantity.
    // This effectively turns the quantity value coming in as a function param from a string to a number
    this.store.pipe(
      select(fromSelector.selectItemById(id)),
      first(o => o.quantity === +quantity && o.includeTomatoSauce === includeTomatoSauce))
      .subscribe(o => order = o);

    if (order === null) {
      // console.log(`Order ID: ${ id } has been updated.`);
      return id;
    } else {
      // console.log(`Order ID: ${ id } has not changes.`);
      return null;
    }
  }

  getRandomImage(): string {
    let random = 1;

    // Generate random number between 1 and 4 inclusive
    random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

    return `fishnchips${random}.jpg`;
  }
}
