import { TodoItem } from './todoitem';
export class Model {
  name: string = '';
  items: TodoItem[];
  constructor() {
    this.name = 'Şahincan';
    this.items = [
      // { description: 'Kahvaltı', action: true },
      // { description: 'Spor', action: true },
      // { description: 'Ders', action: false },
    ];
  }
}
