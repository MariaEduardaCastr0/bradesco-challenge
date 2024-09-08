import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() options = [];

  isOpen = false;
  depositModalModel = false;

  ngOnInit() {
  }

  handleClick(event: MouseEvent) {
    this.isOpen = !this.isOpen;
    event.stopPropagation();
  }

  handleCallbackOption(callback: () => void) {
    this.isOpen = false;
    callback();
  }
}
