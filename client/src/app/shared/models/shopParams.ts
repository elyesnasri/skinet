import { IBrand } from './brands';
import { IType } from './productType';

export class ShopParams {
  brandId: IBrand;
  typeId: IType;
  sort = { name: 'Alphabetical', value: 'name' };
  pageIndex = 1;
  pageSize = 6;
}
