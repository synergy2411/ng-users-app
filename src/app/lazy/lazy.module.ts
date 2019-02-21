import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IAmLazyComponent } from './i-am-lazy/i-am-lazy.component';
import { LAZY_ROUTES } from './lazy.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(LAZY_ROUTES)
  ],
  declarations: [IAmLazyComponent]
})
export class LazyModule { }
