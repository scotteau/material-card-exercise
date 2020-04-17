import { Component } from '@angular/core';


export interface CardData {
  header: string;
  subhead: string;
  desc: string;
  content:string[];
  liked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'card-angular';
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
}
