import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CommunicationServiceService {
	resultSubject: BehaviorSubject<number>;
	result$: Observable<number>;

	resetSubject: BehaviorSubject<boolean>;
	reset$: Observable<boolean>;

	constructor() {
		this.resultSubject = new BehaviorSubject<number>(0);
		this.result$ = this.resultSubject.asObservable();
		this.resetSubject = new BehaviorSubject<boolean>(true);
		this.reset$ = this.resetSubject.asObservable();
	}

	setReset(val: boolean) {
		this.resetSubject.next(val);
	}

	getReset(): Observable<boolean> {
		return this.reset$;
	}

	getResult(): Observable<number> {
		return this.result$;
	}

	setResult(res: number) {
		this.resultSubject.next(res);
	}

	clear(): void {
		this.resultSubject.next(0);
	}
}
