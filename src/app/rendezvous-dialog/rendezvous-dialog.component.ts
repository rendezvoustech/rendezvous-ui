import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../rendezvous.service';
import { Participant } from '../types';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
    selector: 'app-rendezvous-dialog',
    templateUrl: './rendezvous-dialog.component.html',
    styleUrls: ['./rendezvous-dialog.component.css']
})
export class RendezvousDialogComponent implements OnInit {

    participant: Participant;
    rendezvousName = "Rendezvous";

    constructor(
        public dialogRef: MatDialogRef<RendezvousDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Participant,
        private rendezvousService: RendezvousService,
    ) {
        this.participant = data;
    }

    ngOnInit(): void {
    }

    createRendezvous(): void {
        const rendezvousRequest = {
            ownerId: this.participant.id || 0,
            name: this.rendezvousName
        };
        this.rendezvousService.createRendezvous(rendezvousRequest)
            .subscribe(() => this.dialogRef.close());
    }

}