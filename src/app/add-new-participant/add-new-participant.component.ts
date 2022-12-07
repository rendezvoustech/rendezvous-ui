import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantService } from '../participant.service';
import { Participant} from '../types';

@Component({
    selector: 'app-add-new-participant',
    templateUrl: './add-new-participant.component.html',
    styleUrls: ['./add-new-participant.component.css']
})
export class AddNewParticipantComponent implements OnInit {

    constructor(private participantSerice: ParticipantService, private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(participant: Participant): void {
        this.participantSerice.addParticipant(participant)
            .subscribe(() => {
                this.router.navigateByUrl('/browse-participants');
            });
    }

}