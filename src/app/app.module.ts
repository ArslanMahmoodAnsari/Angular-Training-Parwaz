import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { HighlightDirective } from './shared/highlight.directive';

@NgModule({
	declarations: [
		AppComponent,
		AttributeDirectiveComponent,
		StructureDirectiveComponent,
		HighlightDirective,
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
