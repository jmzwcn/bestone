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
      { 'name': 'general', 'note': 'General', 'icon': 'home' },
      { 'name': 'business', 'note': 'Business', 'icon': 'at' },
      { 'name': 'entertainment', 'note': 'Entertainment', 'icon': 'apps' },
      { 'name': 'health', 'note': 'Health', 'icon': 'medkit' },
      { 'name': 'science', 'note': 'Science', 'icon': 'school' },
      { 'name': 'sports', 'note': 'Sports', 'icon': 'football' },
      { 'name': 'technology', 'note': 'Technology', 'icon': 'cloudy' },
    ];
  }

  ngOnInit() {
  }

  itemClick(value) {
    this.popCtl.dismiss(value);
  }
}
