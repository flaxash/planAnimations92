import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';


//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';


import { Animation } from './animation';

@Injectable()
export class AnimationService {

  //private animationsUrl = 'https://www.reseau-canope.fr/atelier-hauts-de-seine/drupal7/?q=gateway/views/animations.json';
  private animationsUrl = 'assets/animations.json';
  constructor(private http: Http) { }


  /*getAllAnimations(): Promise<Animation[]> {
    console.log('http request begining ...');
    return this.http.get(this.animationsUrl)
      .toPromise()
      .map((m: any) => new Animation(m.nid, m.title, m.field_categorie, m.field_docs_joints, m.field_horaire, m.field_jour, m.body,
        m.field_lien, m.field_lieu, m.field_mois, m.field_sstitre, m.field_urlinscription, m.field_image, false))
      .then(response => response.json() as Animation[])
      .catch(this.handleError);
  }*/
  
  getAnimations(): Observable<Animation[]> {
    return this.http.get(this.animationsUrl)
      .map(res => res.json())
      .map((animations: Array<any>) => {
        let result: Array<Animation> = [];
        if (animations) {
          //console.log(animations);
          animations.forEach((m) => {
            result.push(new Animation(m.nid, m.title, m.field_categorie, m.field_docs_joints, m.field_horaire, m.field_jour, m.body,
              m.field_lien, m.field_lieu, m.field_mois, m.field_sstitre, m.field_urlinscription, m.field_image, false));
              //console.log(result[result.length-1].nid);
          });
        }
        return result;
      }
      );
  }
  /*private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }*/
}