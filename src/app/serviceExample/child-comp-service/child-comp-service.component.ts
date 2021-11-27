import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from 'src/app/communication-service.service';

@Component({
	selector: 'app-child-comp-service',
	templateUrl: './child-comp-service.component.html',
	styleUrls: ['./child-comp-service.component.css'],
})
export class ChildCompServiceComponent implements OnInit {
	firstNumber: number = 0;
	secondNumber: number = 0;

	constructor(private communicationServiceService: CommunicationServiceService) {}

	ngOnInit(): void {}

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
