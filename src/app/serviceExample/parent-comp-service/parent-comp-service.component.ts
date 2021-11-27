import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from 'src/app/communication-service.service';

@Component({
	selector: 'app-parent-comp-service',
	templateUrl: './parent-comp-service.component.html',
	styleUrls: ['./parent-comp-service.component.css'],
})
export class ParentCompServiceComponent implements OnInit {
	result: string = '';
	constructor(private communicationServiceService: CommunicationServiceService) {}

	ngOnInit(): void {
		this.communicationServiceService.getResult().subscribe((res) => {
			console.log('====Hello form sunscribe==');
			console.log(res);
			console.log('====================================');
			this.result = 'Result:' + res;
		});
	}

	displayFun(value: number) {
		this.result = 'Result:' + value;
	}

	reset() {
		// this._childControls.clear();
	}
}
