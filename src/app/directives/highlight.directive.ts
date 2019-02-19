import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector : '[app-highlight]'
})
export class HighlightDirective{

    @Input('myColor') myColor : string;

    @HostBinding('style.backgroundColor') bgColor : any;

    @HostListener('mouseenter')
    onmouseenter(){
        // console.log("Mouse Entered!");
        // this.bgColor = "yellow";
        this.bgColor = this.myColor;
    }

    @HostListener('mouseleave')
    onmouseleave(){
        this.bgColor = "transparent";
    }

    constructor(private elRef : ElementRef){
        // console.log(this.elRef.nativeElement);
        // this.elRef.nativeElement.style.backgroundColor = "aqua";
    }
}

// <my-dir></my-dir>
// <div my-dir></div>
// <div class="mydir"></div>