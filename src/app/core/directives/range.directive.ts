import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[atRange]'
})
export class RangeDirective {

  _range: number[];

  @Input()
  set atRange(value) {
    console.log(`[RangeDirective]`, value);
  }

  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {
  }

}
