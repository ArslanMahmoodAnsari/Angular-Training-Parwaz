import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildCompViewChildComponent } from '../child-comp-view-child/child-comp-view-child.component';

@Component({
	selector: 'app-parent-comp-view-child',
	templateUrl: './parent-comp-view-child.component.html',
	styleUrls: ['./parent-comp-view-child.component.css'],
})
export class ParentCompViewChildComponent implements OnInit {
	result: string = '';
	@ViewChild(ChildCompViewChildComponent, { static: true })
	_childControls: ChildCompViewChildComponent = new ChildCompViewChildComponent();

	constructor() {}

	ngOnInit(): void {}

	displayFun(value: number) {
		this.result = 'Result:' + value;
	}

	reset() {
		this._childControls.clear();
	}
}
