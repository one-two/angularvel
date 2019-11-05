import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class IndexService {
    constructor(private http: HttpClient) { }

    charsUrl = 'https://gateway.marvel.com:443/v1/public/characters?ts=1572901735&apikey=185018cbded40bc4dea72bfef68be45f&hash=bd731caa191b51297ce83aa3472baf90&limit=10';

    getCharacters() {
        return this.http.get<any>(this.charsUrl);
    }

    getCharactersResponse(): Observable<any> {
        return this.http.get<any>(
            this.charsUrl, { observe: 'response' });
    }

    private handleError (operation = 'operation', result?: any) {
        return (error: any): Observable<any> => {
      
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
      
          // TODO: better job of transforming error for user consumption
          //this.log(`${operation} failed: ${error.message}`);
      
          // Let the app keep running by returning an empty result.
          return result;
        };
      }

}