import { Component } from '@angular/core';
import { StudyBuddy } from '../study-buddy';
import { StudyBuddyService } from '../study-buddy.service';

@Component({
  selector: 'app-fav-question-list',
  templateUrl: './fav-question-list.component.html',
  styleUrls: ['./fav-question-list.component.css']
})
export class FavQuestionListComponent {
  favQuestions: StudyBuddy[] =[];
  newFavQuestion:StudyBuddy = ({} as any) as StudyBuddy; 

  constructor(private StudyBuddyAPI: StudyBuddyService){}

  ngOnInit(){
    this.loadFavQuestions();
  }

  loadFavQuestions():void{
    this.StudyBuddyAPI.getAllFavorites().subscribe(
      (result) => {
        this.favQuestions = result;
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

  addFavQuestions(newFavQuestion:StudyBuddy){
    this.favQuestions.push(newFavQuestion);  
    this.loadFavQuestions();
  }

  // showForm():void{
  //   this.displayForm = !this.displayForm;
  // }
}