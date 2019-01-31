import { Component,Input, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

Posts: any [];
MesPostsSubscription: Subscription;

 constructor(private postService: PostService) {}

// on stocke l'array MesPosts dans un objet Subscription
   
  ngOnInit() {
  this.MesPostsSubscription=this.postService.MesPostsSubject.subscribe(
  (Posts: any[]) => {
  this.Posts = Posts;
  }
  );
  this.postService.emitMesPostsSubject();
    
}
 ngOnDestroy() {
    this.MesPostsSubscription.unsubscribe();
  }
  }
