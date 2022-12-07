import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewParticipantComponent } from './add-new-participant/add-new-participant.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';
import { RendezvousListComponent } from './rendezvous-list/rendezvous-list.component';

const routes: Routes = [
    { path: 'browse-participants', component: ParticipantListComponent, pathMatch: 'full' },
    { path: 'add-participant', component: AddNewParticipantComponent },
    { path: 'edit-participant/:id', component: EditParticipantComponent },
    { path: 'my-rendezvous', component: RendezvousListComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }