import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: string = "button";
  @Input() disabled: boolean = false;

  constructor() { }
}
