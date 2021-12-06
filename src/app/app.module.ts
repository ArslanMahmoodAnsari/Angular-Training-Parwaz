import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { HighlightDirective } from './shared/highlight.directive';
import { ParentCompViewChildComponent } from './viewChildExample/parent-comp-view-child/parent-comp-view-child.component';
import { ChildCompViewChildComponent } from './viewChildExample/child-comp-view-child/child-comp-view-child.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChildCompServiceComponent } from './serviceExample/child-comp-service/child-comp-service.component';
import { ParentCompServiceComponent } from './serviceExample/parent-comp-service/parent-comp-service.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { LocalDatePipe } from './shared/pipes/local-date.pipe';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HttpClientModule} from "@angular/common/http";
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@NgModule({
	declarations: [
		AppComponent,
		AttributeDirectiveComponent,
		StructureDirectiveComponent,
		HighlightDirective,
		ParentCompViewChildComponent,
		ChildCompViewChildComponent,
		ChildCompServiceComponent,
		ParentCompServiceComponent,
		PipesExampleComponent,
		LocalDatePipe,
  AngularFormsComponent,
  ModelDrivenFormsComponent,
  EmployeeListComponent,
  EmployeeAddComponent,
	],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
