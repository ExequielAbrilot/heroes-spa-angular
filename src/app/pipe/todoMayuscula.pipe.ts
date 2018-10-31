import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'todoMayuscula'
})
export class TodoMayuscula implements PipeTransform{
    transform(value, a,b,c):string{
        console.log(value);
        console.log(a);
        console.log(b);

        console.log(c);


        return value.toUpperCase();
    }
}
