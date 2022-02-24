import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordUploadComponent } from './keyword-upload.component';

describe('KeywordUploadComponent', () => {
  let component: KeywordUploadComponent;
  let fixture: ComponentFixture<KeywordUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
