package co.grandcircus.StudyBuddy;

public class QuestionNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;
		
	public QuestionNotFoundException(Long id) {
		super("Could not find question with id " + id);
	}

}
