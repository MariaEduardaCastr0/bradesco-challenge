import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: string = 'close';
  @Input() alt: string = 'close icon';
  @Input() clickable: boolean = false;

  ngOnInit() {
  }

  get iconUrl(): string {
    return `../../../../assets/icons/${this.icon}.svg`;
  }

}
