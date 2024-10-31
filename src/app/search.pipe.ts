import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  SearchText='';
  transform(items: any, ...args: any[]): any {
    return items.data===this.SearchText;
  }

}
