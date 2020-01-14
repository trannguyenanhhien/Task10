
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interface/product';
import { list_addidas, list_nike, list_balen } from '../product/list';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  public p_addidas = list_addidas;
  public p_nike = list_nike;
  public p_balen = list_balen;
  ngOnInit() {

  }

}
