import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  petID: string;
  pet:object = {
    name: '',
    type: '',
    description: '',
    skills: {
    }
  };
  like: object = {
    like: 1
  }
  likeShow: boolean = true;
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
        this.pet = data['data'];
    });
  }
  likePet() {
    this._httpService.createLike(this.petID, this.like).subscribe(data => {
        console.log('Added the Like', data);
        this.likeShow = false;
        this.getPet();
    });
  }
  likeAmount(data){
    let len: number =  data.likes.length;
    return len;
  }
  removePet() {
    this._httpService.deletePet(this.petID).subscribe(data => {
        console.log('Adopted the Pet', data);
        this._router.navigate(['']);
    });
  }
}
