import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeExamen'
})
export class PipeExamenPipe implements PipeTransform {
  transform(text:string, param: string): any {
        
    if(text!=null){
      if(param == 'capitalize' || param == null){
        return text.substring(0,1).toUpperCase() + text.substring(1).toLowerCase();
    }else{
      if(param=='upper'){
        return text.toLocaleUpperCase();
      }else{
        if(param=='lower'){
          return text.toLowerCase();
        }else{
          if(param='allfirstupercase'){
            
          }else
          return text.substring(0,1).toLocaleUpperCase() +
          text.substring(1).toLowerCase();}
        }
      }
    }

  }
}
