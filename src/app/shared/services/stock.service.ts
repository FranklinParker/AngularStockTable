import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Stock} from '../models/stock';


@Injectable()
export class StockService {

  constructor(private http: HttpClient) {
  }


  getStocks(): Observable<Stock[]> {
    return this.http.get('http://localhost:3000/stocks')
      .map((stocks: Stock[]) => {
        console.log('stocks', stocks);
        return stocks;
      }).catch(error => Observable.throw('Error'));


  }

  createStock(stock: Stock): Observable<any> {
    return this.http.post('http://localhost:3000/stocks', {code: stock.code, name: stock.name});
  }

  updateStock(stock: Stock): Observable<any> {
    return this.http.put('http://localhost:3000/stocks/' + stock.id, {code: stock.code, name: stock.name});
  }

  deleteStock(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/stocks/' + id);
  }
}
