import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOpratorsComponent } from './rxjs-oprators.component';

describe('RxjsOpratorsComponent', () => {
  let component: RxjsOpratorsComponent;
  let fixture: ComponentFixture<RxjsOpratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOpratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOpratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
