import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavQuestionListComponent } from './fav-question-list.component';

describe('FavQuestionListComponent', () => {
  let component: FavQuestionListComponent;
  let fixture: ComponentFixture<FavQuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavQuestionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
