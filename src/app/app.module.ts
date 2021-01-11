import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { SkillsComponent } from './skills/skills.component';
import { ClientItemComponent } from './shared/client-item/client-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ClientsService } from './services/clients.service';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ClientsComponent,
        SkillsComponent,
        ClientItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule
    ],
    providers: [
        ClientsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
