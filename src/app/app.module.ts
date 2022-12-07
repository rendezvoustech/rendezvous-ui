import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { RendezvousListComponent } from './rendezvous-list/rendezvous-list.component';
import { HttpInterceptorImpl } from './http.interceptor';
import { AddNewParticipantComponent } from './add-new-participant/add-new-participant.component';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';
import { RendezvousDialogComponent } from './rendezvous-dialog/rendezvous-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        ParticipantListComponent,
        ParticipantFormComponent,
        RendezvousListComponent,
        AddNewParticipantComponent,
        EditParticipantComponent,
        RendezvousDialogComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatToolbarModule,
        LayoutModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        ReactiveFormsModule
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorImpl, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule { }