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
      { 'name': 'general', 'icon': 'home' },
      { 'name': 'business', 'icon': 'at' },
      { 'name': 'entertainment', 'icon': 'apps' },
      { 'name': 'health', 'icon': 'medkit' },
      { 'name': 'science', 'icon': 'school' },
      { 'name': 'sports', 'icon': 'football' },
      { 'name': 'technology', 'icon': 'cloudy' },
    ];
  }

  ngOnInit() {
  }

  itemClick(value) {
    this.popCtl.dismiss(value);
  }
}
