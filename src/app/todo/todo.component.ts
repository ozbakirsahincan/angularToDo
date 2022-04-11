import { Model } from '../model';
import { Component } from '@angular/core';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {
    this.model.items = this.getItemsFromLS();
  }

  private name: string = 'Şahincan';
  model = new Model();

  displayAll: boolean = false;
  inputText: string = '';
  id: number = 0;

  getName() {
    return this.model.name;
  }
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }
  addItem() {
    if (this.inputText != '') {
      let data = { id: this.id, description: this.inputText, action: false };
      this.id = this.id + 1;
      this.model.items.push(data);
      console.log(data);

      let items = this.getItemsFromLS();
      items.push(data);
      localStorage.setItem('items', JSON.stringify(items));
      this.inputText = '';
    } else {
      alert('Lütfen bir bilgi giriniz ... ');
    }
  }
  getItemsFromLS() {
    let items: TodoItem[] = [];
    let value = localStorage.getItem('items');
    if (value != null) {
      items = JSON.parse(value);
    }
    return items;
  }
  onActionChanged(item: TodoItem) {
    let items = this.getItemsFromLS();
    localStorage.clear();

    items.forEach((i) => {
      if (i.id == item.id) {
        i.action = item.action;
      }
    });
    localStorage.setItem('items', JSON.stringify(items));
  }
  displayCount() {
    return this.model.items.filter((i) => i.action).length;
  }
  getBtnClasses() {
    return {
      disabled: this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-success': this.inputText.length > 0,
    };
  }
}
