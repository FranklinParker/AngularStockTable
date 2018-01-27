import {Component, OnInit} from '@angular/core';
import {StockService} from '../../services/stock.service';
import {Stock} from '../../models/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks: Stock [] = [];
  selectedStock: Stock = null;
  name = 'joe';
  show = true;
  stockExchange = 'LSE';
  myColor = 'blue';
  myFontSize = '24px';
  isMyclass = true;
  isCenter = true;
  newStock = new Stock(null, 'test', 'tets');
  deleteId = null;

  constructor(private stockService: StockService) {
  }

  get showUpdate() {
    return this.selectedStock !== null;
  }

  ngOnInit() {
    this.loadStocks();
  }

  loadStocks() {
    this.stockService.getStocks().subscribe((resp) => {
      console.log('component', resp);
      this.stocks = resp;
    });

  }

  saveNewStock() {
    this.stockService.createStock(this.newStock).subscribe(result => {
      console.log('stock created', result);
      this.loadStocks();
      this.newStock = new Stock(null, null, null);
    });
  }

  updateStock() {
    this.stockService.updateStock(this.selectedStock).subscribe(result => {
      console.log('stock updated', result);
      alert(`Stock ${this.selectedStock.name} Updated`);
      const tableStock = this.stocks.find((stock) => stock.id === this.selectedStock.id);
      tableStock.name = this.selectedStock.name;
      tableStock.code = this.selectedStock.code;
      this.selectedStock = null;
    });
  }

  deleteStock() {
    this.stockService.deleteStock(this.deleteId).subscribe(result => {
      console.log('stock deleted! ');
      this.stocks = this.stocks.filter((stock) => stock.id !== this.deleteId);

    });

  }

  selectStock(selectStock: Stock) {
    this.selectedStock = new Stock(selectStock.id, selectStock.code, selectStock.name);
  }

  setDeleteId(id: number){
    this.deleteId = id;
  }

}
