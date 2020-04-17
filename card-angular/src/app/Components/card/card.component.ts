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
