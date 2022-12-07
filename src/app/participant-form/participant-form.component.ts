import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Participant} from '../types';

@Component({
    selector: 'app-participant-form',
    templateUrl: './participant-form.component.html',
    styleUrls: ['./participant-form.component.css']
})
export class ParticipantFormComponent implements OnInit {

    @Input() buttonText = 'Submit';
    @Input() titleText = 'Participant Information';
    @Input() currentParticipant: Participant | undefined;
    @Output() onSubmit = new EventEmitter<Participant>();

    participant: Participant = {
        id: undefined,
        usernames: [],
        name: ''
    };

    constructor() { }

    ngOnInit(): void {
        if (this.currentParticipant) {
            this.participant = this.currentParticipant;
        }
    }

    onButtonClicked(): void {
        this.onSubmit.emit(this.participant);
    }

}