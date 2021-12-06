import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface IStudent {
	id: number;
	name: string;
}

@Component({
	selector: 'app-students',
	templateUrl: './students.component.html',
	styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
	students: IStudent[] = [
		{
			id: 1,
			name: 'Ayesha',
		},
		{
			id: 2,
			name: 'Ali',
		},
		{
			id: 3,
			name: 'Umer',
		},
		{
			id: 4,
			name: 'Fahad',
		},
	];
	constructor(private router: Router) {}

	ngOnInit(): void {}

	loadStudent(student: IStudent) {
		this.router.navigate(['student', student.id], { state: { student } });
	}
}
