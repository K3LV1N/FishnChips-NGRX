import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FishnChipsReducer } from './store/fishnchips.reducer';
import { StoreModule } from '@ngrx/store';
import { FishnchipsComponent } from './component/fishnchips.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('fishnchips', FishnChipsReducer)
  ],
  exports: [FishnchipsComponent],
  declarations: [FishnchipsComponent]
})
export class FishnchipsModule { }
