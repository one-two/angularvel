import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'character/:id', component: DetailsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
