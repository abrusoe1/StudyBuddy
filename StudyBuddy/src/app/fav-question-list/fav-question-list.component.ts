import { Component } from '@angular/core';
import { StudyBuddy } from '../study-buddy';
import { StudyBuddyService } from '../study-buddy.service';
import { StudyBuddyFav } from '../study-buddy-fav';

@Component({
  selector: 'app-fav-question-list',
  templateUrl: './fav-question-list.component.html',
  styleUrls: ['./fav-question-list.component.css']
})
export class FavQuestionListComponent {
  favQuestions: StudyBuddyFav[] =[];
  newFavQuestion:StudyBuddyFav = ({} as any) as StudyBuddyFav; 
  displayAnswersF:boolean = false;

  constructor(private StudyBuddyAPI: StudyBuddyService){}

  ngOnInit(){
    this.loadFavQuestions();
  }

  loadFavQuestions():void{
    this.StudyBuddyAPI.getAllFavorites().subscribe(
      (result) => {
        this.favQuestions = result;
        console.log(result);
      }
    )
  }

  deleteFavQuestion(id:number):void{
    this.StudyBuddyAPI.deleteFavorites(id).subscribe(
      (result)=>{
        console.log('Item deleted at ' + id);
        this.loadFavQuestions();
      }
    );
  }

  addFavQuestions(newFavQuestion:StudyBuddyFav){
    this.favQuestions.push(newFavQuestion);  
    this.loadFavQuestions();
  }

  showAnswerF():void{
    this.displayAnswersF = !this.displayAnswersF;
  }
}