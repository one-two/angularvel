/****************************************************/
// Filename: details.components.ts
// Created: Marcelo Bosso
// Change history:
// 05.11.2019 / Marcelo Bosso
// 06.11.2019 / Marcelo Bosso
/****************************************************/
// Summary: - Show details from "id" character off of marvels endpoint
/****************************************************/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DetailsService } from './details.service';
import { CharDetail } from '../models/charDetail';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    id: string;
    char: CharDetail;
    showArticle = false;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private detailsService: DetailsService,
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getCharDetails(this.id);
    }

    getCharDetails(id: string) {
        this.detailsService.getCharactersResponse(id)
        .subscribe(resp => {

            resp.body.data.results.map((resp) => {
                this.char = {
                    id: resp.id,
                    name: resp.name,
                    thumbnail: resp.thumbnail.path + `.` + resp.thumbnail.extension,
                    description: resp.description
                };
                this.showArticle = true;
            });

        });
        return;
    }

}
