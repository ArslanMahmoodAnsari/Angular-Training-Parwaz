import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pipes-example',
	templateUrl: './pipes-example.component.html',
	styleUrls: ['./pipes-example.component.css'],
})
export class PipesExampleComponent implements OnInit {
	public todayDate: Date = new Date();
	public amount: number = 100;
	public message: string = 'Angular is a Component Based Framework';

	constructor() {}

	ngOnInit(): void {}

	// formatDate(date: Date) {
	// 	return '10/12/21';
	// }
}
