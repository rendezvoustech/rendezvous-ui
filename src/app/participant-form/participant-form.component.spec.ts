import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantFormComponent } from './participant-form.component';

describe('ParticipantFormComponent', () => {
    let component: ParticipantFormComponent;
    let fixture: ComponentFixture<ParticipantFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ParticipantFormComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ParticipantFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});