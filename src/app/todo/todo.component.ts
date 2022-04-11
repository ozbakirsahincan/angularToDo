import { Model } from '../model';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}

  private name: string = 'Şahincan';
  model = new Model();

  displayAll: boolean = false;

  getName() {
    return this.model.name;
  }
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }
  addItem(value: string) {
    if (value != '') {
      this.model.items.push({ description: value, action: false });
    } else {
      alert('Lütfen bir bilgi giriniz ... ');
    }
  }
  displayCount() {
    return this.model.items.filter((i) => i.action).length;
  }
}
