import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudyBuddy } from './study-buddy';
import { StudyBuddyFav } from './study-buddy-fav';

@Injectable({
  providedIn: 'root'
})
export class StudyBuddyService {
  url:string = "http://localhost:8080/questions";
  favsURL:string = "http://localhost:8080/favorites"
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

  getAllFavorites():Observable<StudyBuddyFav[]> {
    return this.http.get<StudyBuddyFav[]> (this.favsURL); 
  }

  getFavorites(id:number):Observable<StudyBuddyFav> {
    return this.http.get<StudyBuddyFav>(this.favsURL + "/"+id);
  }

  deleteFavorites(id:number):Observable<void> {
    console.log(id);
    return this.http.delete<void>(this.favsURL + "/" + id);
    
  }

  addToFavorites(newFavorite:StudyBuddyFav):Observable<Object> {
    return this.http.post(this.favsURL, newFavorite);
  }
}
