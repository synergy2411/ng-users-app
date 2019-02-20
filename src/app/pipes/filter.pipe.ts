import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false     // making filter pipe impure
})
export class FilterPipe implements PipeTransform {

  transform(todos: any, filteredStatus: string, status: string): any {
    console.log("[INSIDE PIPE]");
    if (filteredStatus == "") {
      return todos;
    }
    let resultArray = [];
    for (let todo of todos) {
      if (todo[status] == filteredStatus) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }

}
