import { Pipe, PipeTransform } from '@angular/core';

// generic pipe
// sort array of objects
// by propertyName price, qty
// asc or desc

// {{ items | sort:'price':'asc'  }}

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {

  // angualr calls transform function
  // left side of pipe value is passed as first arg
  // after that right :, passed 2,3rd parameters..
  // return sorted values

  transform(items: any[], fieldName: string, sortType: string = 'asc'): any[] {

    console.log("pipe called", items, fieldName, sortType)

    if (!items || !fieldName) {
      console.log("returning as is")
      return items;
    }



    if (sortType == 'desc') {
      return items.sort ( (left, right) => {
        if (left[fieldName] < right[fieldName])
          return 1;

        return -1
      })
    }

     // asc
     return items.sort ( (left, right) => {
      if (left[fieldName] > right[fieldName])
        return 1;

      return -1
    })

  }

}
