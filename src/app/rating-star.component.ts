import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'rating-star',
  templateUrl: 'app/rating-star.component.html',
  styleUrls: ['app/rating-star.component.css']
})

export class RatingComponent implements OnChanges{
  @Input() rating: number;
  starWidth: number;
  //@Output() rating_clicado: EventEmitter<string> = new EventEmitter<string>();
  @Output() rating_clicado: EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(): void{
    this.starWidth = this.rating * 86/5;
  }

  onClick(): void{
    this.rating_clicado.emit({valor_rating: this.rating});
  }

}
