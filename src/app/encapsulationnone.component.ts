import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'encapusulation-none',
  template: `<h1>Hello im none</h1>`,
  styles: [`h1 {color: yellow}`],
  encapsulation: ViewEncapsulation.None
})
export class encapsulationNoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
