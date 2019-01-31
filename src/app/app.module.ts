import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

// création des routes avec les compoments de destination
const appRoutes: Routes = [
  { path: 'post', component: PostListComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', component: PostListComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListComponent,
    FourOhFourComponent,
    NewPostComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],

  // on injecte le servie PostService
  providers: [
  PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
