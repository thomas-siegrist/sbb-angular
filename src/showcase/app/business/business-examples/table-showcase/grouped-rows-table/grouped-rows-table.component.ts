import { Component } from '@angular/core';
import { SbbTableDataSource } from '@sbb-esta/angular-business/table';

import { TABLE_SHOWCASE_DATA_GROUPED_ROWS } from '../table-showcase-data';

@Component({
  selector: 'sbb-table-grouped-rows-showcase',
  templateUrl: './grouped-rows-table.component.html'
})
export class GroupedRowsTableComponent {
  displayedColumns: string[] = ['deviceName', 'orderDate', 'arrivalDate', 'lifecycleEnd', 'status'];
  dataSource: SbbTableDataSource<any> = new SbbTableDataSource(TABLE_SHOWCASE_DATA_GROUPED_ROWS, [
    ['orderDate', 'arrivalDate', 'lifecycleEnd']
  ]);

  isGroup(_index: number, item: { isGroupBy: boolean }): boolean {
    return item.isGroupBy;
  }
}
