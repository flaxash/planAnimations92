import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Animation } from './animation';
import { AnimationService } from './animation.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnimationService]
})
export class AppComponent implements OnInit {
  titre = 'Programme des animations';
  sstitre =  'Atelier Canopé 92';
  animations: Animation[];
  anim : Animation;
  //animations classées par mois
  animationsOctobre:Animation[];
  animationsNovembre:Animation [];
  animationsDecembre:Animation [];
  animationsJanvier:Animation[];
  animationsFevrier:Animation[];
  animationsMars:Animation[];
  animationsAvril:Animation[];
  animationsMai:Animation[];

  constructor(private animationService: AnimationService) { }

  ngOnInit(): void {
    this.getAnimations();
  }

  getAnimations(): void {
    this.animationService
    .getAnimations()
    .subscribe(res => {this.sortResult(res)},error=> console.error('Error: ' + error), ()=> console.log('finish!'));  
  }
  sortResult(anims: Animation[]): void {
    //this.animations = anims;
    this.animationsOctobre = anims.filter(this.isOctobre);
    this.animationsOctobre = this.animationsOctobre.sort(this.compareJour);
    
    this.animationsNovembre = anims.filter(this.isNovembre);
    this.animationsNovembre = this.animationsNovembre.sort(this.compareJour);

    this.animationsDecembre = anims.filter(this.isDecembre);
    this.animationsDecembre = this.animationsDecembre.sort(this.compareJour);

    this.animationsJanvier = anims.filter(this.isJanvier);
    this.animationsJanvier = this.animationsJanvier.sort(this.compareJour);

    this.animationsFevrier = anims.filter(this.isFevrier);
    this.animationsFevrier = this.animationsFevrier.sort(this.compareJour);

    this.animationsMars = anims.filter(this.isMars);
    this.animationsMars = this.animationsMars.sort(this.compareJour);
    
    this.animationsAvril = anims.filter(this.isAvril);
    this.animationsAvril = this.animationsAvril.sort(this.compareJour);
    
    this.animationsMai = anims.filter(this.isMai);
    this.animationsMai = this.animationsMai.sort(this.compareJour);   
  }
  compareJour(a:Animation, b:Animation) {
    if (Number(a.field_jour) > Number(b.field_jour)) { return 1;}
    if (Number(a.field_jour) < Number(b.field_jour)) { return -1;}
    return 0;
  }
  isOctobre(element:Animation, index:Number, array:Animation []):boolean {
    return (element.field_mois == "Octobre")
  }
  isNovembre(element:Animation, index:Number, array:Animation []):boolean {
    return (element.field_mois == "Novembre")
  }
  isDecembre(element:Animation, index:Number, array:Animation []):boolean {
    return (element.field_mois == "Decembre")
  }
  isJanvier(element:Animation, index:Number, array:Animation []):boolean {
    return (element.field_mois == "Janvier")
  }
  isFevrier(element:Animation, index:Number, array:Animation []):boolean {
    return (element.field_mois == "Fevrier")
  }
  isMars(element:Animation, index:Number, array:Animation []):boolean {
    return (element.field_mois == "Mars")
  }
  isAvril(element:Animation, index:Number, array:Animation []):boolean {
    return (element.field_mois == "Avril")
  }
  isMai(element:Animation, index:Number, array:Animation []):boolean {
    return (element.field_mois == "Mai")
  }
  reduit(animation:Animation):void {
    animation.isOpen=!animation.isOpen;
    console.log(animation.title + " : " +animation.isOpen)
  }
}
