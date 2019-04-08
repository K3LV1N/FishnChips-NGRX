import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishnchipsComponent } from './fishnchips.component';

describe('FishnchipsComponent', () => {
  let component: FishnchipsComponent;
  let fixture: ComponentFixture<FishnchipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishnchipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishnchipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
