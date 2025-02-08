import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  @Output() editItemEvent = new EventEmitter<Item>();

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
    });
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(() => {
      this.loadItems();
    });
  }

  loadItems(): void {
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
    });
  }

  editItem(item: Item): void {
    this.editItemEvent.emit(item);
  }

  trackByItemId(index: number, item: Item): number {
    return item.id;
  }
}
