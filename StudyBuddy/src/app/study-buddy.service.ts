import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudyBuddyService {
  url:string = "http://localhost:8080/questions";
  constructor() { }
}
