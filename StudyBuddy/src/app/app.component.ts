import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurantFrontend';
  constructor(private StudyBuddyAPI:StudyBuddyService){  //something is wrong here

    this.StudyBuddyAPI.getAllQuestions().subscribe(
      (result)=>{
        console.log(result);
      }
    )

    this.StudyBuddyAPI.getQuestion(1).subscribe(
      (result) => { 

        console.log(result);
      }
    )
  }
}