import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[atRange]'
})
export class RangeDirective {

  _range: number[] = [];

  @Input()
  set atRange(range: [number, number]) {
    this.createRange(range[0], range[1]);
    this._range.forEach(no => {
      this.vcr.createEmbeddedView(this.tpl, { $implicit: no });
    });
  }

  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {
  }

  private createRange(from: number, to: number) {
    for (let i = from; i <= to; i++) {
      this._range.push(i);
    }
  }

}
