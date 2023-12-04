import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneFormat' })
export class PhoneNumberFormatPipe implements PipeTransform {
    transform(value: string | number): string {
        const input = typeof value === 'number' ? value.toString() : value;

        if (!input || isNaN(Number(input))) {
            return `Input must be a number, but received ${input}`;
        }

        if (input.length === 10) {
            return input.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        } else if (input.length < 10) {
            return 'Not enough numbers provided; please pass a 10-digit number';
        } else if (input.length > 10) {
            return 'Too many numbers provided; please pass a 10-digit number';
        } else {
            return 'Something went wrong';
        }
    }
}
