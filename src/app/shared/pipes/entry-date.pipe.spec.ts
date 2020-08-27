import {EntryDatePipe} from './entry-date.pipe';
import * as moment from 'moment';

describe('EntryDatePipe', () => {
  it('create an instance', () => {
    const pipe = new EntryDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('Should be display the post date formatted like moment humanize', () => {
    const pipe = new EntryDatePipe();
    const date = 1598494228;
    const now = moment();
    const dateFormatted = moment.duration(moment.unix(date).diff(now)).humanize();

    expect(pipe.transform(date)).toEqual(dateFormatted);
  });
});
