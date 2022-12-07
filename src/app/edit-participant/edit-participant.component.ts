import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantService } from '../participant.service';
import { Participant } from '../types';

@Component({
    selector: 'app-edit-participant',
    templateUrl: './edit-participant.component.html',
    styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {

    participant!: Participant;

    constructor(private route: ActivatedRoute, private participantService: ParticipantService, private router: Router) { }

    ngOnInit(): void {
        const id = +(this.route.snapshot.paramMap.get('id') || 0);
        this.participantService.getParticipantById(id)
            .subscribe(participant => this.participant = participant);
    }

    onSubmit(participant: Participant): void {
        this.participantService.editParticipant(participant)
            .subscribe(() => {
                this.router.navigateByUrl('/browse-participants');
            });
    }

}