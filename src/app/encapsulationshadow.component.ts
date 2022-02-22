import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'encapusulation-shadow',
  template: `<h1>Hello im shadow</h1>`,
  styles: [`h1 {color: black}`],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class encapsulationShadowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
