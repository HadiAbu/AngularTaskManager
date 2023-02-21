import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  color!: string;
  @Input()
  text!: string;
  // function passed down from parent, will be emitted when there's a button click
  @Output() btnClick = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  //emit function 'btnClick' that's passed from parent
  onClick() {
    this.btnClick.emit();
  }
}
