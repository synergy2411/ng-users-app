import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input('appUnless') set appUnless(condition) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef) {
    console.log(this.templateRef);
  }

}
