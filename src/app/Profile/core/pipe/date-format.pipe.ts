import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDate'
})
export class DateFormatPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return value;

        const dateObj = new Date(value);
        const day = ('0' + dateObj.getDate()).slice(-2);
        const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
        const year = dateObj.getFullYear();

        return `${day}-${month}-${year}`;
    }
}