import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { map , toArray, filter, mergeAll, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Product} from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {
  constructor(private http: HttpClient) { }
  // getData()
  // {
  //   return this.http.get(this.url).pipe(
  //     mergeAll()
  //   );
  // }

  // getAll(){
  //   return this.getData().pipe(
  //     toArray()
  //   )
  // }



  getAllAPI() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getData() {
    return this.getAllAPI().pipe(
      mergeAll()
    );
  }

  getAPIArr() {
      return this.getData().pipe(
      toArray()
    );
  }

  getById(id: number) {
    return this.getData().pipe(
      filter((value: Product) => value.id === id)
    );
  }
}
