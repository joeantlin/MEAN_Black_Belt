import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient) {}
    getPets() {
        return this._http.get('/pets');
    }
    createPet(create) {
        return this._http.post('/pet', create);
    }
    getPet(id) {
        return this._http.get('/pet/' + id);
    }
    updatePet(id, update) {
      return this._http.put('/pet/' + id, update);
    }
    deletePet(id) {
      return this._http.delete('/pet/' + id);
    }
    createLike(id, create) {
      return this._http.put('/like/' + id, create);
    }
}
