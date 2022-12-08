import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SingleroomComponent } from './singleroom/singleroom.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FilterPipe } from './filter.pipe';
import { PriceComponent } from './price/price.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentModule } from './comment/comment.module';
import { HoverDirective } from './hover.directive';
import { injectionToken } from './config.service';
import { ChangeDeteComponent } from './change-dete/change-dete.component';
import { ChildComponent } from './change-dete/child/child.component';
import { ClickDirective } from './click.directive';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    SingleroomComponent,
    HeaderComponent,
    ContainerComponent,
    NavComponent,
    FilterPipe,
    PriceComponent,
    HoverDirective,
    ChangeDeteComponent,
    ChildComponent,
    ClickDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    CommentModule
  ],
  providers: [
    {
      provide: injectionToken,
      useValue: {
        title: 'InjectionToken Value'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
