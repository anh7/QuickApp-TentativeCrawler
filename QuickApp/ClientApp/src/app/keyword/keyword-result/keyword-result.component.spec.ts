import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordResultComponent } from './keyword-result.component';

describe('KeywordResultComponent', () => {
  let component: KeywordResultComponent;
  let fixture: ComponentFixture<KeywordResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
