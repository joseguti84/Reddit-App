import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'entryDate'
})
export class EntryDatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const now = moment();
    return moment.duration(moment.unix(value).diff(now)).humanize();
  }

}
