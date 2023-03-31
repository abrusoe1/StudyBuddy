import { Component, EventEmitter, Output } from '@angular/core';
import { StudyBuddy } from '../study-buddy';
import { StudyBuddyService } from '../study-buddy.service';

@Component({
  selector: 'app-adding-question',
  templateUrl: './adding-question.component.html',
  styleUrls: ['./adding-question.component.css']
})
export class AddingQuestionComponent {
  @Output() questionSave = new EventEmitter<StudyBuddy>(); 
  newQuestion:StudyBuddy = ({} as any) as StudyBuddy; 
  constructor(private StudyBuddyAPI:StudyBuddyService){}

  addQuestion(){
    this.StudyBuddyAPI.createQuestion(this.newQuestion).subscribe(
      () =>{
        this.questionSave.emit(this.newQuestion);
        this.newQuestion = ({} as any) as StudyBuddy; 
      }
    );

  }
}
