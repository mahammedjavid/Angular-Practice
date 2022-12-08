import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { PriceComponent } from './price/price.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SingleroomComponent } from './singleroom/singleroom.component';
import { ChangeDeteComponent } from './change-dete/change-dete.component';

const routes: Routes = [
  { path: "rooms", component: RoomsComponent },
  { path: "single", component: SingleroomComponent },
  { path: 'single/:id', component: ContainerComponent },
  { path: 'price', component: PriceComponent },
  { path: 'todos', component: ChangeDeteComponent },
  { path: 'comment', loadChildren: () => import('./comment/comment.module').then((x) => x.CommentModule) },
  { path: "book", loadChildren: () => import('./bookroom/bookroom.module').then((x) => x.BookroomModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
