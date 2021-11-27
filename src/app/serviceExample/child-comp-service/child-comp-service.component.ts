import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationServiceService } from 'src/app/communication-service.service';

@Component({
	selector: 'app-child-comp-service',
	templateUrl: './child-comp-service.component.html',
	styleUrls: ['./child-comp-service.component.css'],
})
export class ChildCompServiceComponent implements OnInit, OnDestroy {
	firstNumber: number = 0;
	secondNumber: number = 0;
	mySubscription: Subscription = new Subscription();

	constructor(private communicationServiceService: CommunicationServiceService) {}

	ngOnInit(): void {
		this.mySubscription.add(
			this.communicationServiceService.getReset().subscribe((res) => {
				this.firstNumber = 0;
				this.secondNumber = 0;
			})
		);
	}

	ngOnDestroy() {
		this.mySubscription.unsubscribe();
	}

	add(): void {
		this.communicationServiceService.setResult(this.firstNumber + this.secondNumber);
	}

	subtract(): void {
		this.communicationServiceService.setResult(this.firstNumber - this.secondNumber);
	}

	multiply(): void {
		this.communicationServiceService.setResult(this.firstNumber * this.secondNumber);
	}

	divide(): void {
		this.communicationServiceService.setResult(this.firstNumber / this.secondNumber);
	}

	public clear(): void {
		this.firstNumber = 0;
		this.secondNumber = 0;
		this.communicationServiceService.setResult(0);
		// this.displayFun.emit(this.result);
	}
}
