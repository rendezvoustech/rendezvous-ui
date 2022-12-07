import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Participant } from '../types';
import { ParticipantService } from '../participant.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RendezvousDialogComponent } from '../rendezvous-dialog/rendezvous-dialog.component';

@Component({
    selector: 'app-participant-list',
    templateUrl: './participant-list.component.html',
    styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

    participants: Participant[] = [];

    colNumber = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => matches ? 2 : 3));

    constructor(
        public dialog: MatDialog,
        private participantService: ParticipantService,
        private breakpointObserver: BreakpointObserver,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.participantService.getParticipants().subscribe(participants => this.participants = participants);
    }

    removeParticipant(id: number): void {
        this.participantService.deleteParticipant(id)
            .subscribe(() => {
                this.router.navigateByUrl('/browse-participants');
            });
    }

    createRendezvous(participant: Participant): void {
        const dialogRef = this.dialog.open(RendezvousDialogComponent, {
            width: '250px',
            data: participant
        });

        dialogRef.afterClosed().subscribe(() => {
            this.router.navigateByUrl('/my-rendezvous');
        });
    }

}