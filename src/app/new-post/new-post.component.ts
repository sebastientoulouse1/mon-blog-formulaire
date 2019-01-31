import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService,
              private router: Router) { }


  ngOnInit() {
  }

  // on crée la fonction onSubmit pour récupérer les données du formulaire, ajouter le post et orienter l'utilisateur sur les posts
onSubmit(form: NgForm) {
    const title = form.value['titre'];
    const contenu = form.value['contenu'];
    this.postService.addPost(title,contenu);
    this.router.navigate(['/post']);
}
}
