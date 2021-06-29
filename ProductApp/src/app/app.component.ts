import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProductApp';
  products: IProduct[] = [];

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('init');
    this.products = this.getProducts();
    console.log(this.products);
  }

  getProducts(): IProduct[] {
    return [
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2019",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      }
    ]
  }
}
