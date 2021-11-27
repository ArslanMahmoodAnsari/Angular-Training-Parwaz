import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'localDate',
	pure: true,
})
export class LocalDatePipe implements PipeTransform {
	transform(value: Date, ...args: unknown[]): unknown {
		return value.toLocaleString(args[0] as string);
	}
}
