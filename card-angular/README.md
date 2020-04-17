# CardAngular

A small exercise to build a reusable material card component using Angular

[Live link](https://card-angular.scotteau.now.sh/)


##data
```typescript
interface CardData {
  header: string;
  subhead: string;
  desc: string;
  content:string[];
  liked: boolean;
}

cardData =  {
    header: "Shrimp and Chorizo Paella",
    subhead: "September 14, 2016",
    desc:
      "The impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    content: [
      "Method:",
      "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)",
      "Set aside off of the heat to let rest for 10 minutes, and then serve.",
    ],
    liked: true,
  } as CardData;

```

##app.component.html
```html
<app-card [data]="cardData" [theme]="'light'"></app-card>
<app-card [data]="cardData" [theme]="'dark'"></app-card>
```

##card.component.html
```html
<div class="card" [ngClass]="theme === 'dark' ? 'card--dark' : 'card--light'">
  <div class="card__title">
    <div class="card__title__thumbnail">R</div>
    <div class="card__title__headers">
      <span class="header">{{ data.header }}</span>
      <span class="subhead">{{ data.subhead }}</span>
    </div>
  </div>
  <div class="card__media">
    <img src="../../../assets/media.jpg" alt="paella image" />
  </div>
  <div class="card__body">
    <p class="card__body__desc">{{ data.desc }}</p>
  </div>
  <div class="card__actions">
    <div class="card__actions__icons">
      <span
        class="material-icons favorite"
        [ngClass]="hearted ? 'hearted' : ''"
        (click)="toggleHearted()"
      >
        favorite
      </span>
      <span class="material-icons">
        share
      </span>
    </div>
    <div class="card__actions__buttons">
      <span
        class="material-icons"
        [ngClass]="shouldCollapse ? 'collapse' : ''"
        (click)="toggleCollapse()"
      >
        expand_less
      </span>
    </div>
  </div>

  <div
    class="card__content"
    [ngStyle]="{'max-height.px':shouldCollapse? 0 : contentHeight}"
    #content
  >
    <ng-container *ngIf="data.content">
      <p *ngFor="let p of data.content">{{ p }}</p>
    </ng-container>
    <p></p>
  </div>
</div>

```

##card.component.ts
```typescript
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CardData } from '../../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() data: CardData;
  @Input() theme: string;
  @ViewChild('content') cardContentRef: ElementRef;

  hearted = false;
  shouldCollapse = true;
  contentHeight = 0;

  constructor() {}

  ngOnInit(): void {
    this.hearted = this.data.liked;
  }

  toggleHearted(): void {
    console.log('toggle hearted');
    this.hearted = !this.hearted;
  }

  ngAfterViewInit(): void {
    this.contentHeight = this.cardContentRef.nativeElement.scrollHeight;
  }

  toggleCollapse() {
    this.shouldCollapse = !this.shouldCollapse;
  }
}
```