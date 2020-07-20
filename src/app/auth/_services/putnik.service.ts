import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { environment } from '@environments/environment';
import { Putnik } from '../../shared/putnik.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Putnik[]>('http://localhost:61134/api/Putnik');
    }
}