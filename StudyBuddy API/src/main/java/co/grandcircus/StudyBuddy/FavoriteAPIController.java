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
public class FavoriteAPIController {

	@Autowired
	private StudyBuddyFavRepository repository;
	
//	@RequestMapping("/")
//	public String home() {
//		return "redirect:/favorites";
//	}
//	

	// C(R)UD -- Read All
	@GetMapping("/favorites")
	public List<StudyBuddyFav> readAll() {
		return repository.findAll();
	}
	
	
	//Read One
	@GetMapping("/favorites/{id}")
	public StudyBuddyFav readOne(@PathVariable("id")Long id) {
		return repository.findById(id).orElseThrow(()-> new FavoriteNotFoundException(id));
	}
	
	//Create
	@PostMapping("/favorites")
	@ResponseStatus(HttpStatus.CREATED)
	public StudyBuddyFav create(@RequestBody StudyBuddyFav sb) {
		repository.save(sb);
		return sb;
	}
	
	//delete
	@DeleteMapping("/favorites/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete (@PathVariable("id")Long id) {
		repository.deleteById(id);
		}
	
	//update
	@PutMapping("/favorites/{id}")
	public StudyBuddyFav update(@PathVariable("id") Long id, @RequestBody StudyBuddyFav sb) {
		sb.setId(id);
		return repository.save(sb);
	}
	@ResponseBody
	@ExceptionHandler(FavoriteNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	String characterNotFoundHandler(FavoriteNotFoundException ex) {
		return ex.getMessage();
	}
	
}
