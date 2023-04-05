import { Component, EventEmitter, Output } from '@angular/core';
import { StudyBuddy } from '../study-buddy';
import { StudyBuddyService } from '../study-buddy.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  @Output() favQuestionSave = new EventEmitter<StudyBuddy>(); 
  questions: StudyBuddy[] =[];
  newQuestion:StudyBuddy = ({} as any) as StudyBuddy; 
  newFavQuestion:StudyBuddy = ({} as any) as StudyBuddy;

  constructor(private StudyBuddyAPI: StudyBuddyService){}

  ngOnInit(){
    this.loadQuestions();
  }

  loadQuestions():void{
    this.StudyBuddyAPI.getAllQuestions().subscribe(
      (result) => {
        this.questions = result;
      }
    )
  }

  deleteQuestion(id:number):void{
    this.StudyBuddyAPI.deleteQuestion(id).subscribe(
      (result)=>{
        console.log('Item deleted at ' + id);
        this.loadQuestions();
      }
    );
  }

  addQuestions(newQuestion:StudyBuddy){
    this.questions.push(newQuestion);
    this.loadQuestions();
  }

  addFavQuestion(){
    this.StudyBuddyAPI.addToFavorites(this.newFavQuestion).subscribe(
      () =>{
        this.favQuestionSave.emit(this.newFavQuestion);
        this.newQuestion = ({} as any) as StudyBuddy; 
      }
    );

  }

}