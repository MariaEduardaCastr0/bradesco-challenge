import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() customClass: string = "";
  @Input() showHeader: boolean = false;

  @Output() clicked = new EventEmitter();

  ngOnInit() {
  }

  handleClick(event: MouseEvent) {
    this.clicked.emit();
    event.stopPropagation();
  }

}
