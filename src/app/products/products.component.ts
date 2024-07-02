import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[{
    "id": 1,
    "name": "Minimalist Analog Watch",
    "price": 109,
    "color": "Black",
    "available": "Available",
    "image": "/assets/products/Minimalist Analog Watch.jfif"
  },
  {
    "id": 2,
    "name": "Hisense Ultra HD Smart TV",
    "price": 3339,
    "color": "Black",
    "available": "Not Available",
    "image": "/assets/products/Hisense Ultra HD Smart TV.jpg"
  },
  {
    "id": 3,
    "name": "Apple iPhone 12",
    "price": 1855,
    "color": "Black",
    "available": "Available",
    "image": "/assets/products/Apple iPhone 12.webp"
  },
  {
    "id": 4,
    "name": "LG Fully Automatic Washing Machine",
    "price": 1765,
    "color": "White",
    "available": "Available",
    "image": "/assets/products/LG Fully Automatic Washing Machine.jfif"
  },
  {
    "id": 5,
    "name": "LG Refrigerator with Door Cooling",
    "price": 2815,
    "color": "White",
    "available": "Not Available",
    "image": "/assets/products/LG Refrigerator with Door Cooling.png"
  },
  {
    "id": 6,
    "name": "DELL Inspiron One 27 Ryzen 7",
    "price": 2145,
    "color": "White",
    "available": "Available",
    "image": "/assets/products/DELL Inspiron One 27 Ryzen 7.jpg"
  },
  {
    "id": 7,
    "name": "Sony PlayStation 5",
    "price": 499,
    "color": "Black",
    "available": "Available",
    "image": "/assets/products/Sony PlayStation 5.jpg"
  }
]

}
