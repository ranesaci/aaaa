import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sort'
}
)

export class SortPipe implements PipeTransform {

    transform(value: any[], args: string): any {

        if (args == 'asc') {
            return value.sort();
        }
        if (args === 'desc') {
            return value.sort().reverse();
        }

    }

}  