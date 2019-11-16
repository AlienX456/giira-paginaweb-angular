import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiiraComponent } from './giira.component';

describe('GiiraComponent', () => {
  let component: GiiraComponent;
  let fixture: ComponentFixture<GiiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
