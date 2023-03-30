package co.grandcircus.StudyBuddy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class FavoriteAPIController {

	@Autowired
	private StudyBuddyRepository repo;
	
	
	//Read One
	@GetMapping("/favorites/{id}")
	public StudyBuddy readOne(@PathVariable("id")Long id) {
		return repo.findById(id).orElseThrow(()-> new FavoriteNotFoundException(id));
	}
	
	//Create
	@PostMapping("/favorites")
	@ResponseStatus(HttpStatus.CREATED)
	public StudyBuddy create(@RequestBody StudyBuddy sb) {
		repo.save(sb);
		return sb;
	}
	
	//delete
	@DeleteMapping("/favorites{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete (@PathVariable("ID")Long id) {
		repo.deleteById(id);
		}
	
	//update
	@PutMapping("/favorites/{id}")
	public StudyBuddy update(@PathVariable("id") Long id, @RequestBody StudyBuddy sb) {
		sb.setId(id);
		return repo.save(sb);
	}
}
