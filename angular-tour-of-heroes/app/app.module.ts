import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import {HeroesComponent}      from './heroes.component';
import {HeroDetailComponent}  from './hero-detail.component';
import {HeroService}            from "./hero.service";
import {AppComponent}           from "./app.component";
import {DashboardComponent}     from "./dashboard.component";
import {AppRoutingModule}       from "./app-routing.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent],
    bootstrap: [
        AppComponent],
    providers: [
        HeroService]
})

export class AppModule { }