import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  categories: any;
  constructor(private popCtl: PopoverController) {
    this.categories = [
      { 'name': 'general', 'value': 'general', 'icon': 'home' },
      { 'name': 'business', 'value': 'business', 'icon': 'at' },
      { 'name': 'entertainment', 'value': 'entertainment', 'icon': 'apps' },
      { 'name': 'health', 'value': 'health', 'icon': 'medkit' },
      { 'name': 'science', 'value': 'science', 'icon': 'school' },
      { 'name': 'sports', 'value': 'sports', 'icon': 'football' },
      { 'name': 'technology', 'value': 'technology', 'icon': 'cloudy' },
    ];
  }

  ngOnInit() {
  }

  itemClick(value) {
    this.popCtl.dismiss(value);
  }
}
