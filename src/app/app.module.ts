import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { SkillsComponent } from './skills/skills.component';
import { ClientItemComponent } from './shared/client-item/client-item.component';
import { ClientsService } from './services/clients.service';
import { ClientFormComponent } from './client-form/client-form.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ClientsComponent,
        SkillsComponent,
        ClientItemComponent,
        ClientFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatToolbarModule,
        MatNativeDateModule,
        MatButtonModule
    ],
    providers: [
        ClientsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
