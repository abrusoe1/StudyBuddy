import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudyBuddy } from './study-buddy';

@Injectable({
  providedIn: 'root'
})
export class StudyBuddyService {
  url:string = "http://localhost:8080/questions";
<<<<<<< HEAD
  favsUrl:string = "http://localhost:8080/favorites";
=======
  favsURL:string = "http://localhost:8080/favorites"
>>>>>>> 7a97c81268bb1fc92b5bcc271072591715a7caee
  constructor(private http:HttpClient) { }
  
  getAllQuestions():Observable<StudyBuddy[]> {
    return this.http.get<StudyBuddy[]> (this.url); 
  }

  getQuestion(id:number):Observable<StudyBuddy> {
    return this.http.get<StudyBuddy>(this.url + "/"+id);
  }

  deleteQuestion(id:number):Observable<Object> {
    return this.http.delete(this.url + "/" + id);
  }

  createQuestion(newQuestion:StudyBuddy):Observable<Object> {
    return this.http.post(this.url, newQuestion);
  }
}
