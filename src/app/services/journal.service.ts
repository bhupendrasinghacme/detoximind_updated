import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(
    private http: HttpClient
  ) { }

  createNewNotes(data): Observable<any> {
    return this.http.post(environment.wordpress.api_url + "wp-json/wp/v2/journal_notes/form", JSON.stringify(data));
  }
}
