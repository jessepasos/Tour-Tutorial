import { NgModule }      		from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule }   		from '@angular/forms'; 
import { HttpModule }    		from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  		from './app.component';
import { HeroDetailComponent } 	from './hero-detail.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }     	from './heroes.component';

import { HeroService }         	from './hero.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,    
		InMemoryWebApiModule.forRoot( InMemoryDataService )
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroDetailComponent,
		HeroesComponent
	],
	providers: [ HeroService ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
