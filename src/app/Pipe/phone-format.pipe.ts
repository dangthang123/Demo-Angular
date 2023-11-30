import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneNumberFormat' })
export class PhoneNumberFormatPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return value;

        const cleaned = ('' + value).replace(/\D/g, '');
        const formatted = cleaned.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
        return formatted;
    }
}
