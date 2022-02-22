import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive ({
    selector: '[highlight]',
})

export class highlihghtDirective {
    constructor(public eleref:ElementRef) {
    }

    @HostListener('mouseover') mouceenter () {
        this.eleref.nativeElement.style.color = 'red';
    }

    @HostListener('mouseleave') mouseleave () {
        this.eleref.nativeElement.style.color = 'blue';
    }
}