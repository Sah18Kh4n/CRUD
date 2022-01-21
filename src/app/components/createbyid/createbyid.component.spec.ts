import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebyidComponent } from './createbyid.component';

describe('CreatebyidComponent', () => {
  let component: CreatebyidComponent;
  let fixture: ComponentFixture<CreatebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
