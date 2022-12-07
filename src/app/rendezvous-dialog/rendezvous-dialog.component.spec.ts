import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousDialogComponent } from './rendezvous-dialog.component';

describe('RendezvousDialogComponent', () => {
    let component: RendezvousDialogComponent;
    let fixture: ComponentFixture<RendezvousDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ RendezvousDialogComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RendezvousDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});