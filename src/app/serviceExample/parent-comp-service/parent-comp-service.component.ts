import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommunicationServiceService } from 'src/app/communication-service.service';

@Component({
	selector: 'app-parent-comp-service',
	templateUrl: './parent-comp-service.component.html',
	styleUrls: ['./parent-comp-service.component.css'],
})
export class ParentCompServiceComponent implements OnInit, OnDestroy {
	result: string = '';
	result$: Observable<number> = new Observable();
	mySubscription: Subscription = new Subscription();
	constructor(private communicationServiceService: CommunicationServiceService) {}

	ngOnInit(): void {
		this.mySubscription.add(
			this.communicationServiceService.getResult().subscribe((res) => {
				this.result = 'Result:' + res;
			})
		);
		this.result$ = this.communicationServiceService.getResult();
	}

	ngOnDestroy() {
		this.mySubscription.unsubscribe();
	}

	displayFun(value: number) {
		this.result = 'Result:' + value;
	}

	reset() {
		this.communicationServiceService.setResult(0);
		this.communicationServiceService.setReset(true);
	}
}
