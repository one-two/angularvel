import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { IndexService } from './index.service';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters';


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    public id: number;
    headers: string[];
    config: any;
    chars: Characters[] = [];
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
                    console.log(x);
                });
                this.showSection = true;
                console.log(this.chars);
            });
    }

    getFirst10(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        const md5 = new Md5();
        md5.appendStr('1572901735' + '327f627a52d8dbc01a3d5064140f196712129bd3' + '185018cbded40bc4dea72bfef68be45f').end();
        this.showIndexResponse();
    }

    navigateTo(dest: string) {
        if (dest) {
            this.router.navigate([`character/${dest}`]);
        }
        return false;
    }

}
