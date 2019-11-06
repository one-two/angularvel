/****************************************************/
// Filename: details.service.ts
// Created: Marcelo Bosso
// Change history:
// 05.11.2019 / Marcelo Bosso
/****************************************************/
// Summary: - Request character(id) details from marvels endpoint
/****************************************************/

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DetailsService {
    constructor(private http: HttpClient) { }

    baseUrl = 'https://gateway.marvel.com:443/v1/public/characters/';
    detailsUrl = '?ts=1572901735&apikey=185018cbded40bc4dea72bfef68be45f&hash=bd731caa191b51297ce83aa3472baf90';

    getCharactersResponse(id: string): Observable<any> {
        return this.http.get<any>(
            this.baseUrl + id + this.detailsUrl, { observe: 'response' });
    }
}