/****************************************************/
// Filename: details.service.ts
// Created: Marcelo Bosso
// Change history:
// 05.11.2019 / Marcelo Bosso
/****************************************************/
// Summary: - Request top 10 characters from marvels endpoint's list
/****************************************************/

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class IndexService {
    constructor(private http: HttpClient) { }

    charsUrl = 'https://gateway.marvel.com:443/v1/public/characters?ts=1572901735&apikey=185018cbded40bc4dea72bfef68be45f&hash=bd731caa191b51297ce83aa3472baf90&limit=10';

    getCharactersResponse(): Observable<any> {
        return this.http.get<any>(
            this.charsUrl, { observe: 'response' });
    }
}