import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexService } from './index/index.service';
import { DetailsComponent } from './details/details.component';
import { DetailsService } from './details/details.service';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        IndexService,
        DetailsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
