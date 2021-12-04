import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IStudent } from '../students.component';

@Component({
	selector: 'app-student',
	templateUrl: './student.component.html',
	styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit, OnDestroy {
	student: IStudent = {
		id: 0,
		name: '',
	};
	mySubscriptions: Subscription = new Subscription();
	constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		// this.student.id = this.activatedRoute.snapshot.params['id'];
		this.mySubscriptions.add(
			this.activatedRoute.params.subscribe((params: Params) => {
				console.log('===========Path Params============');
				console.log(params);
				console.log('====================================');
				this.student.id = params.id;
				this.student.name = this.router.getCurrentNavigation()?.extras?.state?.student?.name;
			})
		);

		this.mySubscriptions.add(
			this.activatedRoute.queryParams.subscribe((params: Params) => {
				console.log('===========Query Params============');
				console.log(params);
				console.log('====================================');
			})
		);
	}
	ngOnDestroy() {
		this.mySubscriptions.unsubscribe();
	}
}
