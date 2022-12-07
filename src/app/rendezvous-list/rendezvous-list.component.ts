import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Rendezvous } from '../types';
import { RendezvousService } from '../rendezvous.service';

@Component({
    selector: 'app-rendezvous-list',
    templateUrl: './rendezvous-list.component.html',
    styleUrls: ['./rendezvous-list.component.css']
})
export class RendezvousListComponent implements OnInit {

    rendezvous: Rendezvous[] = [];

    colNumber = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => matches ? 2 : 3));

    constructor(
        private breakpointObserver: BreakpointObserver,
        private rendezvousService: RendezvousService
    ) {}

    ngOnInit(): void {
        this.rendezvousService.getRendezvvousList().subscribe(rendezvous => this.rendezvous = rendezvous);
    }

}