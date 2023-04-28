import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {


  transform(arrayOfObject: any, inputSearchBoxValue: any): any {

    console.log('value', arrayOfObject);
    console.log('args', inputSearchBoxValue);

    if (!inputSearchBoxValue) {
      return arrayOfObject;
    }

    inputSearchBoxValue = inputSearchBoxValue.toLowerCase();
    return arrayOfObject.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(inputSearchBoxValue)
    })
  }

}
