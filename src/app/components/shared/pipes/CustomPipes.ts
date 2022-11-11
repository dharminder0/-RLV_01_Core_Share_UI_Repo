import { Pipe, PipeTransform, NgModule, Injectable } from '@angular/core';

@Pipe({
  name: 'searchFilterPipe'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
   if (!value) return items;
   let tempVal:string = "";
   let output:boolean = false;

   return items.filter(function(it){
    output = false;
    tempVal = "";
    tempVal = it[field];

    if(tempVal.toLowerCase().indexOf(value.toLowerCase()) >= 0){
      return it;
    }
   });
 }
}


@Pipe({
  name: 'booleanFieldSearch'
})

@Injectable()
export class BooleanFieldSearchPipe implements PipeTransform {
 transform(items: any[], field: string, value: boolean): any[] {
   if (!value) return items;

   return items.filter(function(it){
    if(it[field] && it[field] === value){
      return it;
    }    
   });
 }
}

@Pipe({
  name: 'searchArrayPipe'
})

@Injectable()
export class SearchArrayPipe implements PipeTransform {
 transform(items: any[], value: string): any[] {
   if (!value) return items;

   return items.filter(function(it){
    if(it.categoryName.toLowerCase() === value.toLowerCase()){
      return it;
    }
   });
 }
}


@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [
    SearchFilterPipe,
    SearchArrayPipe,
    BooleanFieldSearchPipe,
  ],
  exports: [
    SearchFilterPipe,
    SearchArrayPipe,
    BooleanFieldSearchPipe,
  ]
})
export class ApplicationPipes {}
