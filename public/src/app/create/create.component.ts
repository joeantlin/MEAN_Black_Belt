import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  petAdd: object = {
    name: '',
    type: '',
    description: '',
    skills: {
      skillone: '',
      skilltwo: '',
      skillthree: ''
    }
  };

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ){}

  ngOnInit() {
  }
  addPet() {
      this._httpService.createPet(this.petAdd).subscribe(data => {
        if (data['error']) {
          console.log("Found Errors", data['error']);
          alert('That name has already been taken, please choose another');
        } else {
          console.log('Created the Pet', data);
          this._router.navigate(['']);
        }
      });
    }
}
