import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.less']
})
export class AllItemsComponent implements OnInit {

  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.fillItemsList();
  }

  fillItemsList() {
    this.itemsService.getAllItems().subscribe(data => {
      this.items=data as Item [];
    }
    )
  }

}
