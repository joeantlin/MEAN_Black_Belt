import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // pets: object[] = [];
    // petAdd: object = {name: '', content: ''};
    // petEdits: object = {name: '', content: ''};
    // petID: string;
    constructor(private _httpService: HttpService){}

    // allPets(){
    //     this._httpService.getPets().subscribe(data => {
    //         console.log('Got our Pets!', data);
    //         this.pets = data['data'];
    //     });
    // }
    // addPet() {
    //     this._httpService.createPet(this.petAdd).subscribe(data => {
    //         console.log('Created the Pet', data);
    //     });
    // }
    // getPet() {
    //     this._httpService.getPet(this.petID).subscribe(data => {
    //         console.log('Got the Pet', data);
    //         this.petEdits = {
    //             name: data['data'].name,
    //             content: data['data'].content
    //         };
    //     });
    // }
    // editPet() {
    //     this._httpService.updatePet(this.petID, this.petEdits).subscribe(data => {
    //         console.log('Updated the Pet', data);
    //     });
    // }
    // removePet() {
    //     this._httpService.deletePet(this.petID).subscribe(data => {
    //         console.log('Updated the Pet', data);
    //     });
    // }
    // addLike(id) {
    //       this._httpService.createLike(id, this.likeAdd).subscribe(data => {
    //           console.log('Added the Like', data);
    //       });
}
