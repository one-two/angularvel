import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { ConfigService } from '../config.service';
import { Observable } from 'rxjs';
import { Characters } from '../characters/characters';


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

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private configService: ConfigService,
    ) { }

    ngOnInit() {

        this.getId();
    }
    showConfigResponse(): void {
        this.configService.getCharactersResponse()
            // resp is of type `HttpResponse<Config>`
            .subscribe(resp => {
                // display its headers
                const keys = resp.headers.keys();
                this.headers = keys.map(key =>
                    `${key}: ${resp.headers.get(key)}`);

                // access the body directly, which is typed as `Config`.
                //this.config = { ...resp.body };
                //console.log(this.headers);
                //console.log(this.config);
                this.config = resp.body.data.results.map((x) => {
                    this.chars.push({
                        id: x.id,
                        name: x.name,
                        description: x.description,
                        thumbnail: x.thumbnail.path + x.thumbnail.extension
                    })
                    console.log(x)
                })

                console.log(this.chars);
            });
    }

    getId(): void {
        console.log(this.route.snapshot.paramMap.get('id'));
        this.id = +this.route.snapshot.paramMap.get('id');
        const md5 = new Md5();
        console.log(this.location);
        console.log(md5.appendStr('1572901735' + '327f627a52d8dbc01a3d5064140f196712129bd3' + '185018cbded40bc4dea72bfef68be45f').end());
        //https://gateway.marvel.com:443/v1/public/characters?ts=1572901735&apikey=185018cbded40bc4dea72bfef68be45f&hash=bd731caa191b51297ce83aa3472baf90&limit=10
        this.showConfigResponse();
        console.log(this.headers);
        console.log(this.config);
    }

}
