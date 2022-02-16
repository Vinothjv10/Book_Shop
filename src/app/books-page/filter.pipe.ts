import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from './modules';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Jobs[], filterString: string, locationString: string, categoryString: string, countryString: string, countrystring: string): Jobs[] {

    if (!items) return items;

    return items.filter(job =>

      job.medium.toLocaleLowerCase().includes(filterString.toLocaleLowerCase()) &&
      job.class.toLocaleLowerCase().includes(countryString.toLocaleUpperCase()) &&
      job.chapter.toLocaleLowerCase().includes(locationString.toLocaleLowerCase()) &&
      job.subject.toLocaleLowerCase().includes(categoryString.toLocaleLowerCase()) &&
      job.class.toLocaleLowerCase().includes(countrystring.toLocaleLowerCase())
    );

  }

}
