import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewParticipantComponent } from './add-new-participant.component';

describe('AddNewBookComponent', () => {
    let component: AddNewParticipantComponent;
    let fixture: ComponentFixture<AddNewParticipantComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AddNewParticipantComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddNewParticipantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});