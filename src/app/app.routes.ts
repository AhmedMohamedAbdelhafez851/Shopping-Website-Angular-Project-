import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { ItemBoxComponent } from './pages/item-box/item-box.component';
import { HomeeComponent } from './pages/homee/homee.component';
import { SliderComponent } from './pages/slider/slider.component';
import { CartComponent } from './pages/cart/cart.component';
import { UsersComponent } from './pages/users/users.component';
import { AddItemFormComponent } from './pages/add-item-form/add-item-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/homee', pathMatch: 'full' },

    {path:'about', component: AboutComponent},
    {path:'services', component: ServicesComponent},
    {path:'contact', component: ContactComponent},
    {path:'posts', component: PostsComponent},
    {path:'homee', component: HomeeComponent},
    {path:"item-details/:id",component:ItemDetailsComponent},
    {path:'item-box', component: ItemBoxComponent},
    {path:'slider', component: SliderComponent},
    { path: 'cart', component: CartComponent },
    {path:'user' , component:UsersComponent},
    {path:'AddItem' , component:AddItemFormComponent},







    {path:'**', component: PagenotfoundComponent},
];
