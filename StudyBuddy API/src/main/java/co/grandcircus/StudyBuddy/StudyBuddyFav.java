package co.grandcircus.StudyBuddy;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="favorite_questions")
public class StudyBuddyFav {

	@Id
	long id;
	String question;
	String answer;
	
	public StudyBuddyFav() {
		
	}
	
	public StudyBuddyFav(long id, String question, String answer) {
		this.id = id;
		this.question = question;
		this.answer = answer;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	@Override
	public String toString() {
		return "StudyBuddy [id=" + id + ", question=" + question + ", answer=" + answer + "]";
	}
}
