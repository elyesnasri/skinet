import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [ShopComponent, ProductItemsComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ListboxModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
  ],
  exports: [ShopComponent],
})
export class ShopModule {}
