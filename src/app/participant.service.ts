import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from './types';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class ParticipantService {

    constructor(private httpClient: HttpClient) { }

    getParticipants(): Observable<Participant[]> {
        return this.httpClient.get<Participant[]>('/books');
    }

    getParticipantById(id: number): Observable<Participant> {
        return this.httpClient.get<Participant>(`/participants/${id}`);
    }

    addParticipant(participant: Participant): Observable<Participant> {
        return this.httpClient.post<Participant>(`/participants`,
            participant,
            httpOptions
        );
    }

    editParticipant(participant: Participant): Observable<Participant> {
        return this.httpClient.put<Participant>(`/participants/${participant.id}`,
            participant,
            httpOptions
        );
    }

    deleteParticipant(id: number): Observable<any> {
        return this.httpClient.delete<any>(`/participants/${id}`);
    }

}