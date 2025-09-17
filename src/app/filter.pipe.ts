import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      // Return employees where the skill property contains the search text
      return item.skill.toLowerCase().includes(searchText);
    });
  }
}