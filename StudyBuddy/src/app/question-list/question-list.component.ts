import { Component, EventEmitter, Output } from '@angular/core';
import { StudyBuddy, StudyBuddyJunior } from '../study-buddy';
import { StudyBuddyService } from '../study-buddy.service';
import { StudyBuddyFav } from '../study-buddy-fav';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  @Output() favQuestionSave = new EventEmitter<StudyBuddy>(); 
  questions: StudyBuddy[] =[];
  studyBuddyJrArray:StudyBuddyJunior[]=[];
  newQuestion:StudyBuddy = ({} as any) as StudyBuddy; 
  newFavQuestion:StudyBuddyFav = ({} as any) as StudyBuddyFav;
  displayAnswersQ:boolean = false;

  constructor(private StudyBuddyAPI: StudyBuddyService){
    this.loadQuestions();
  }

  ngOnInit(){
    this.loadQuestions();
  }

  loadQuestions():void{
    this.StudyBuddyAPI.getAllQuestions().subscribe(
      (result) => {
        this.questions = result;
        this.studyBuddyJrArray = [];
        for (let i=0; i<result.length;i++){
          let sbj = new StudyBuddyJunior(result[i]);
          this.studyBuddyJrArray.push(sbj);
        }
        console.log(this.studyBuddyJrArray);

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

  addFavQuestion(id:number){
    for (let i = 0; i<this.questions.length;i++){
      if(this.questions[i].id===id){
        this.newFavQuestion = this.questions[i];
      }
    }
    this.StudyBuddyAPI.addToFavorites(this.newFavQuestion).subscribe(
      () =>{
        this.favQuestionSave.emit(this.newFavQuestion);
        this.newQuestion = ({} as any) as StudyBuddyFav; 
      }
    );

  }
  
  showAnswerQ(i:number):void{  
    this.studyBuddyJrArray[i].display = !this.studyBuddyJrArray[i].display;
  }
}