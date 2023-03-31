import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudyBuddy } from './study-buddy';

@Injectable({
  providedIn: 'root'
})
export class StudyBuddyService {
  url:string = "http://localhost:8080/questions";
  favsURL:string = "http://localhost:8080/favorites"
  constructor(private http:HttpClient) { }
  
  getAllQuestions():Observable<StudyBuddy[]>{
    return this.http.get<StudyBuddy[]> (this.url); 
  }

  getQuestion(id:number):Observable<StudyBuddy>{
    return this.http.get<StudyBuddy>(this.url + "/"+id);
  }

  deleteQuestion(id:number):Observable<StudyBuddy>{
    return this.http.delete(this.url+"/" +id);
 }

 createQuestion(newQuestion:StudyBuddy):Observable<StudyBuddy>{
  return this.http.post(this.url, newQuestion);
}
}
