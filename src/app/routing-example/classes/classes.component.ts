import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-classes',
	templateUrl: './classes.component.html',
	styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
	constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {}

	refreshPage() {
		//localhost:4200/home/aboutUs
		//localhost:4200/home/aboutUs/bio
		// this.router.navigate(['home/bio'], { relativeTo: this.activatedRoute });
		// this.router.navigate(['home/aboutUs'], { relativeTo: this.activatedRoute });

		//localhost:4200/home/bio
		// this.router.navigate(['class'], { relativeTo: this.activatedRoute });
		// this.router.navigate(['class']);
		this.router.navigate(['student', 4], { queryParams: { editing: 1 } });
	}
}
