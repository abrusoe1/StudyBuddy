package co.grandcircus.StudyBuddy;

public class FavoriteNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID =- 1L;
	
	public FavoriteNotFoundException(Long id) {
		super("Could not find favorite question with id " + id);
	}

}
