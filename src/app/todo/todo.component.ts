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
      this.model.items.push({ description: this.inputText, action: false });
      this.inputText = '';
    } else {
      alert('Lütfen bir bilgi giriniz ... ');
    }
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
