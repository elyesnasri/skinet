import * as core from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@core.Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss'],
})
export class ProductItemsComponent implements core.OnInit {
  @core.Input() product: IProduct;
  
  constructor() {}

  ngOnInit(): void {}
}
