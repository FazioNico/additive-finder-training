import { Injectable } from '@angular/core';
import { AdditiveData } from './additive.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdditiveService {

  constructor() { }

  load(): Observable<{
    id: string;
    name: string;
    level: string;
    type: string;
    info: string;
  }[]> {
    return of(AdditiveData);
  }
}
