import { Pipe, PipeTransform } from '@angular/core';
import { ROOM } from './type';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(room: ROOM[], rent: any): ROOM[] {
    return room.filter((value) => value.rent > rent)
  }

}
