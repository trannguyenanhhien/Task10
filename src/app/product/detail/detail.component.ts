import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { list_addidas, list_nike, list_balen } from '../list';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor( public Route: ActivatedRoute) { }
  public p_addidas = list_addidas;
  public p_nike = list_nike;
  public p_balen = list_balen;
  public res = null;


  ngOnInit() {
    // this.Route.params.subscribe(id => {
    //   for (let i = 0; i < this.p_addidas.length; i++) {
    //     if (this.p_addidas[i].id == id.id) {
    //       this.res = this.p_addidas[i];
    //       break;
    //     }
    //   }
    // });

      if (this.p_nike[1].type === 'Nike') {
        this.Route.params.subscribe(id => {
          for (let i = 0; i < this.p_nike.length; i++) {
            if (this.p_nike[i].id == id.id) {
              this.res = this.p_nike[i];
              break;
            }
          }
        });
      }
      if (this.p_addidas[1].type === 'Addidas') {
        this.Route.params.subscribe(id => {
          for (let i = 0; i < this.p_addidas.length; i++) {
            if (this.p_addidas[i].id == id.id) {
              this.res = this.p_addidas[i];
              break;
            }
          }
        });
      }
      if (this.p_balen[1].type === 'Balencia') {
        this.Route.params.subscribe(id => {
          for (let i = 0; i < this.p_balen.length; i++) {
            if (this.p_balen[i].id == id.id) {
              this.res = this.p_balen[i];
              break;
            }
          }
        });
      }

    // this.Route.paramMap.subscribe(id => {
    //   this.p_addidas.forEach(element => {
    //   });
    // });
}
}
