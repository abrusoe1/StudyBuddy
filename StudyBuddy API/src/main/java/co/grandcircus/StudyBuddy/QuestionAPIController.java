package co.grandcircus.StudyBuddy;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class QuestionAPIController {

	@Autowired
	private StudyBuddyRepository repo;
	
	@RequestMapping("/")
	public String home() {
		return "redirect:/questions";
	}
	
	// C(R)UD -- Read All
	@GetMapping("/questions")
	public List<StudyBuddy> readAll() {
		return repo.findAll();
	}
	
	//C(R)UD -- Read One
	@GetMapping("/questions/{id}")
	public StudyBuddy readOne(@PathVariable("id") Long id) {
		return repo.findById(id).orElseThrow(() -> new QuestionNotFoundException(id) );
	}
	
	//(C)RUD -- Create
	@PostMapping("/questions")
	@ResponseStatus(HttpStatus.CREATED)
	public StudyBuddy create(@RequestBody StudyBuddy sb) {
		repo.save(sb);
		return sb;
	}
	
	//CRU(D) -- Delete
	@DeleteMapping("/questions/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}
	
	//CR(U)D -- Update
	@PutMapping("/questions/{id}")
	public StudyBuddy update(@PathVariable("id") Long id, @RequestBody StudyBuddy sb) {
		sb.setId(id);
		return repo.save(sb);
	}
	
	@ResponseBody
	@ExceptionHandler(QuestionNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	String characterNotFoundHandler(QuestionNotFoundException ex) {
		return ex.getMessage();
	}
	
}