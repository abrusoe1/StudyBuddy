export interface StudyBuddy {
    id:          number;
    question: string;
    answer:  string;

}

export class StudyBuddyJunior{
    display:boolean = false;
    studyBuddy:StudyBuddy;
    constructor(buddy:StudyBuddy){
        
        this.studyBuddy = buddy;
    }
}