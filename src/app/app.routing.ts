import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { NeedAuthComponent } from './need-auth/need-auth.component';
import { NoComponetFoundComponent } from './no-componet-found/no-componet-found.component';
import { ClassesComponent } from './routing-example/classes/classes.component';
import { StudentComponent } from './routing-example/students/student/student.component';
import { StudentsComponent } from './routing-example/students/students.component';
import { TeacherComponent } from './routing-example/teacher/teacher.component';

const routes: Routes = [
	{ path: '', redirectTo: 'class', pathMatch: 'full' }, //localhost:4200/class
	{ path: 'class', component: ClassesComponent, canActivate: [AuthGuard] }, //localhost:4200/class
	{ path: 'teacher', component: TeacherComponent, canActivate: [AuthGuard] }, //localhost:4200/teacher
	{
		path: 'student',
		component: StudentsComponent,
		canActivate: [AuthGuard],
		canActivateChild: [AuthGuard],
		children: [{ path: ':id', component: StudentComponent }],
	},
	{ path: 'pleaseLogin', component: NeedAuthComponent },
	{ path: '404', component: NoComponetFoundComponent },
	{ path: '**', redirectTo: '404' }, //wildCard
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
