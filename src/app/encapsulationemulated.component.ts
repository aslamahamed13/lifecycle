import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'encapusulation-emulated',
  template: `<h1>Hello im emulated</h1>`,
  styles: [`h1 {color: red}`],
  encapsulation: ViewEncapsulation.Emulated
})
export class encapsulationEmulatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
