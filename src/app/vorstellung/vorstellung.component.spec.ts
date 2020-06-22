import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VorstellungComponent } from './vorstellung.component';

describe('VorstellungComponent', () => {
  let component: VorstellungComponent;
  let fixture: ComponentFixture<VorstellungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VorstellungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VorstellungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
