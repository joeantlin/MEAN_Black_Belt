import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  petEdits: object = {
    name: '',
    type: '',
    description: '',
    skills: {
      skillone: '',
      skilltwo: '',
      skillthree: ''
    }
  };
  petID: string;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.petID = params['id']
    });
    this.getPet();
  }
  getPet() {
    this._httpService.getPet(this.petID).subscribe(data => {
        console.log('Got the Pet', data);
        this.petEdits = {
            name: data['data'].name,
            type: data['data'].type,
            description: data['data'].description,
            skills: {
              skillone: data['data'].skills.skillone,
              skilltwo: data['data'].skills.skilltwo,
              skillthree: data['data'].skills.skillthree
            }
        };
    });
  }
  editPet() {
      this._httpService.updatePet(this.petID, this.petEdits).subscribe(data => {
        if (data['error']) {
          console.log("Found Errors", data['error']);
          alert('That name has already been taken, please choose another');
        } else {
          console.log('Updated the Pet', data);
          this._router.navigate(['/view/' + this.petID]);
        }
      });
  }
}
