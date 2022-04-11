import { Model } from '../model';
import { Component, OnInit } from '@angular/core';
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
      let data = { description: this.inputText, action: false };
      this.model.items.push(data);

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
      if (i.description == item.description) {
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
