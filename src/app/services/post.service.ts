import { Subject } from 'rxjs';

  

export class PostService {

MesPostsSubject = new Subject<any[]>();

//création de l'array MesPosts 

     private MesPosts = [
    {
      title: 'Mon premier post',
      content: 'Durant l\'Antiquité grecque\, les mathématiques se composaient de 4 sciences ou quadrivium \: l\'arithmétique\, la géométrie mais aussi la musique et l\'astronomie. Ce regroupement s\'expliquait par le fait que chaque discipline permettait selon eux d\'appréhender l\'harmonie du monde.',
      love:0
     
    },
    {
      title: 'Mon deuxième post',
      content: 'Sur les quatre anciens présidents de la République de Corée du Sud encore en vie aujourd\'hui, tous sont allés en prison. Ils furent tous condamnés, à la fin de leurs mandats, pour des affaires de corruption.',
      love:0
    
    },
    {
      title: 'Encore un post',
      content: 'Le Soleil n\'est pas fixe, il tourne autour du centre de notre galaxie à une vitesse d\'environ 250 km/sec entrainant le système solaire avec lui. Il lui faudrait environ 226 millions d\'années pour faire une rotation complète, ce qui signifie qu\'il a dû en faire une vingtaine dans sa vie.',
      love:0
  
    }
  ];
// on crée une méthode qui permet au service que quand il reçoit de nouvelles données, qui puisse faire émettre ces données par le Subject 
  emitMesPostsSubject() {
    this.MesPostsSubject.next(this.MesPosts.slice());
  }

  //méthodes des likes
  addlike(i:number) {
  this.MesPosts[i].love++;
  this.emitMesPostsSubject();
  }
  
  //méthode des unlike
  deductlike(i:number) {
  this.MesPosts[i].love--;
  this.emitMesPostsSubject();
  }

//méthode de création des Posts
  addPost(titre: string, contenu: string) {
    const PostObject = {
      title: '',
      content: '',
      love:0
    };
    PostObject.title = titre;
    PostObject.content = contenu;
    PostObject.love = 0;
    this.MesPosts.push(PostObject);
    this.emitMesPostsSubject();
}

// méthode de suppression des posts

deletePost(i:number){
if(confirm('Etes-vous sûr de vouloir suppimer ce message  ?')){
this.MesPosts.splice(i,1);
this.emitMesPostsSubject();
}else {
      return null;
    }

}
  
}