import { Component, Input, OnInit, Output, HostBinding } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() aslam : string | undefined;
  @Output() he: string | undefined;

  @HostBinding('style.color') color ='red';
}
