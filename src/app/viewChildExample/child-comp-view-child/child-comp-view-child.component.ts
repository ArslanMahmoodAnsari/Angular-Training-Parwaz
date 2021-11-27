import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-child-comp-view-child',
	templateUrl: './child-comp-view-child.component.html',
	styleUrls: ['./child-comp-view-child.component.css'],
})
export class ChildCompViewChildComponent implements OnInit {
	firstNumber: number = 0;
	secondNumber: number = 0;
	result: number = 0;

	@Output()
	displayFun: EventEmitter<number> = new EventEmitter<number>();
	constructor() {}

	ngOnInit(): void {}
	add(): void {
		this.result = this.firstNumber + this.secondNumber;
		this.displayFun.emit(this.result);
	}

	subtract(): void {
		this.result = this.firstNumber - this.secondNumber;
		this.displayFun.emit(this.result);
	}

	multiply(): void {
		this.result = this.firstNumber * this.secondNumber;
		this.displayFun.emit(this.result);
	}

	divide(): void {
		this.result = this.firstNumber / this.secondNumber;
		this.displayFun.emit(this.result);
	}

	public clear(): void {
		this.firstNumber = 0;
		this.secondNumber = 0;
		this.result = 0;
		this.displayFun.emit(this.result);
	}
}
