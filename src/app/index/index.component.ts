/****************************************************/
// Filename: index.components.ts
// Created: Marcelo Bosso
// Change history:
// 05.11.2019 / Marcelo Bosso
// 06.11.2019 / Marcelo Bosso
/****************************************************/
// Summary: - Get top 10 characters from marvels endpoint
//          - Navigate to details on click
/****************************************************/


import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { IndexService } from './index.service';
import { Observable } from 'rxjs';
import { Character } from '../models/character';


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    public id: number;
    headers: string[];
    config: any;
    chars: Character[] = [];
    showSection = false;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private indexService: IndexService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getFirst10();
    }

    getFirst10(): void {
        this.showIndexResponse();
    }

    showIndexResponse(): void {
        this.indexService.getCharactersResponse()
            .subscribe(resp => {
                const keys = resp.headers.keys();
                this.headers = keys.map(key =>
                    `${key}: ${resp.headers.get(key)}`);

                resp.body.data.results.map((x) => {
                    this.chars.push({
                        id: x.id,
                        name: x.name,
                    });
                });
                this.showSection = true;
            });
    }

    navigateTo(dest: string) {
        if (dest) {
            this.router.navigate([`character/${dest}`]);
        }
        return false;
    }

}
