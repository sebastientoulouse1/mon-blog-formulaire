import { Component,Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})


export class PostListItemComponent implements OnInit {

@Input() PostTitle: string;

@Input() content: string;

@Input() love: number;

@Input() index: number;


Created_at = new Date();


  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  //création des fonctions likes et dislikes et delete
  
Like() {
    
    this.postService.addlike(this.index);
}
DisLike() {
    
    this.postService.deductlike(this.index);
}

Delete()
{
this.postService.deletePost(this.index);
}
	
}
