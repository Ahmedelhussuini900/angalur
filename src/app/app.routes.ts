import { Routes } from '@angular/router';
import { ErrorComponent} from './components/error/error.component';
import { HomeComponent} from './components/home/home.component';
import { DetailsComponent} from './components/details/details.component';
import { UpdateComponent} from './components/update/update.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"student/:id",component:DetailsComponent},
    {path:"student/:id/edit",component:UpdateComponent},
    {path:"**",component:ErrorComponent}
];
