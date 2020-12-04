import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LanguageModel } from '../models/language-model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private readonly http: HttpClient) {}

  getLanguageList(): Observable<LanguageModel[]> {
    const file$ = this.http.get<LanguageModel[]>(
      '../../../../assets/languages/languages.json'
    );
    return file$.pipe(tap(console.log));
  }
}
