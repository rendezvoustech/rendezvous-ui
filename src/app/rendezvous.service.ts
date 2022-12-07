import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rendezvous, RendezvousRequest } from './types';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class RendezvousService {

    constructor(private httpClient: HttpClient) { }

    getRendezvvousList(): Observable<Rendezvous[]> {
        return this.httpClient.get<Rendezvous[]>('/rendezvous');
    }

    createRendezvous(rendezvousRequest: RendezvousRequest): Observable<any> {
        return this.httpClient.post<any>(`/rendezvous`,
            rendezvousRequest,
            httpOptions
        );
    }
}