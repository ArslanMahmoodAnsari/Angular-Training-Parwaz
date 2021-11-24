import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-attribute-directive',
	templateUrl: './attribute-directive.component.html',
	styleUrls: ['./attribute-directive.component.css'],
})
export class AttributeDirectiveComponent implements OnInit {
	useClass: boolean = false;
	color: string = '';

	constructor() {}

	ngOnInit(): void {}

	changeColor() {
		this.useClass = !this.useClass;
	}
}
