import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CommunicationServiceService {
	// firstNumber: number = 0;
	// secondNumber: number = 0;
	// result: number = 0;
	resultSubject: BehaviorSubject<number>;
	result$: Observable<number>;

	constructor() {
		this.resultSubject = new BehaviorSubject<number>(0);
		this.result$ = this.resultSubject.asObservable();
	}

	// add(): void {
	// 	this.result = this.firstNumber + this.secondNumber;
	// }

	// subtract(): void {
	// 	this.result = this.firstNumber - this.secondNumber;
	// }

	// multiply(): void {
	// 	this.result = this.firstNumber * this.secondNumber;
	// }

	// divide(): void {
	// 	this.result = this.firstNumber / this.secondNumber;
	// }

	getResult(): Observable<number> {
		return this.result$;
	}

	setResult(res: number) {
		this.resultSubject.next(res);
	}

	clear(): void {
		// this.firstNumber = 0;
		// this.secondNumber = 0;
		this.resultSubject.next(0);
	}
}
