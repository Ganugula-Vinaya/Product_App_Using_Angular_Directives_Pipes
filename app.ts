import { Component, signal } from '@angular/core';
import { ProductList } from './products/product-list/product-list';
import { PriceFormatPipe } from './pipes/price-format-pipe';
import { Highlight } from './directives/highlight';
//it is safer to declare above directives and pipesmin root
@Component({
  selector: 'app-root',
  imports: [ProductList,PriceFormatPipe,Highlight],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

// @NgModule({
//   declaration:[
//     AppComponent,PriceFormatPipe,ProductList,Highlight
//   ], ..
// })
export class App {
  protected readonly title = signal('product-demo');
}
