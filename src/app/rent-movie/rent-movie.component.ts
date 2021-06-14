import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-movie',
  templateUrl: './rent-movie.component.html',
  styleUrls: ['./rent-movie.component.css']
})
export class RentMovieComponent implements OnInit {
  title = 'Noleggia un film'
  total2 = 0;
  price = 15;
  discount = 20;
  total = 0;
  quantity = 0;

  constructor() { }
  calculate(q) {
    let subtotal = q * this.price;
    let totaldiscount = subtotal * this.discount / 100;
    this.total = subtotal - totaldiscount;
    this.total2 = this.total * 1.22
  }

  ngOnInit(): void {
  }

}
