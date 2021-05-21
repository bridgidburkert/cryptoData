import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}

const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'MSV2Ejeml96cWRKhkwCSUivMasog5ols4E8baJh7274X40hHvCHRelDJTcgDo4aq',
  APISECRET: 'PaQAZM7EOMQ1ZzpXVbhQWd8sg92vZl4fXgVsxtvYWJx8chxowl6LbRLRvgHER587
'
});
