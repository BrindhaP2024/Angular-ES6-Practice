import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../../item.model';
import { ItemService } from '../item.service';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr/node';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-form',
  imports:[FormsModule,CommonModule],
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  @Input() item: Item = { id: 0, name: '', description: '' };

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  saveItem(): void {
    if (this.item.id) {
      // Update item
      this.itemService.updateItem(this.item).subscribe(() => {
        this.resetItem();
      });
    } else {
      this.itemService.addItem(this.item).subscribe(() => {
        this.resetItem();
      });
    }
  }

  editItem(item: Item): void {
    this.item = { ...item };
  }

  resetItem(): void {
    this.item = { id: 0, name: '', description: '' };
  }
}
