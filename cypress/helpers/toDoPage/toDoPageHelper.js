import { TodoPage } from '../../page-object/pages/todoPage';

export class ToDoPageHelper {

    addListOfItems(items) {
        items.forEach(itemName => {
            new TodoPage().inputField.type(`${itemName}{enter}`);
        });
    }
}