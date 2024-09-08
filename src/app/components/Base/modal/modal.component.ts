import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Título';
  @Output() close = new EventEmitter<string>();

  isVisible: boolean = false;

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) this.changeVisible();
  }

  changeVisible(payload = this.isOpen) {
    this.isVisible = payload;
    if (!this.isVisible) this.close.emit();
  }

}
