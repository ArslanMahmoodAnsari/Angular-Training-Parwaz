import { Component, OnInit } from '@angular/core';

interface IStudent {
	name: string;
	section: string;
	grade: string;
}

@Component({
	selector: 'app-structure-directive',
	templateUrl: './structure-directive.component.html',
	styleUrls: ['./structure-directive.component.css'],
})
export class StructureDirectiveComponent implements OnInit {
	shouldShow: boolean = true;
	studentsNames: string[] = ['fahad', 'ali', 'Ayesha', 'bilal'];

	students: IStudent[] = [
		{
			name: 'fahad',
			section: 'A',
			grade: 'A',
		},
		{
			name: 'ali',
			section: 'A',
			grade: 'B',
		},
		{
			name: 'Ayesha',
			section: 'A',
			grade: 'C',
		},
		{
			name: 'bilal',
			section: 'A',
			grade: 'D',
		},
	];

	constructor() {}

	ngOnInit(): void {}

	toggleMe() {
		this.shouldShow = !this.shouldShow;
	}
}
