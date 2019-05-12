import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangeDirective } from './directives/range.directive';

const DIRECTIVES = [
  RangeDirective,
];

@NgModule({
  declarations: [
    DIRECTIVES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DIRECTIVES
  ],
  providers: []
})
export class CoreModule { }
