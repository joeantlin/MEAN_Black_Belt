import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
    pets: object[] = [];
    constructor(
        private _httpService: HttpService,
        // private _route: ActivatedRoute,
        // private _router: Router
    ){}

    ngOnInit() {
      this.allPets()
    }
    allPets(){
      this._httpService.getPets().subscribe(data => {
          console.log('Got our Pets!', data);
          this.pets = data['data'];
      });
    }
    // this._router.navigate(['']);
}
