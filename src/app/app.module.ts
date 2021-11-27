import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { HighlightDirective } from './shared/highlight.directive';
import { ParentCompViewChildComponent } from './viewChildExample/parent-comp-view-child/parent-comp-view-child.component';
import { ChildCompViewChildComponent } from './viewChildExample/child-comp-view-child/child-comp-view-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		AttributeDirectiveComponent,
		StructureDirectiveComponent,
		HighlightDirective,
		ParentCompViewChildComponent,
		ChildCompViewChildComponent,
	],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
