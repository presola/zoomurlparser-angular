import { NgModule } from '@angular/core';

import {TableComponent} from './table.component';
import {TableRoutingModule} from './table-routing.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    TableRoutingModule
  ],
  providers: [],
  bootstrap: [TableComponent]
})
export class TableModule { }
