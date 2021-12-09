import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentPageComponent } from './Components/incident-page/incident-page.component';
import { ClientsPageComponent } from './Components/clients-page/clients-page.component';
import { PolicyPageComponent } from './Components/policy-page/policy-page.component';
import { PageHeaderComponent } from './Shared/page-header/page-header.component';
import { PageFooterComponent } from './Shared/page-footer/page-footer.component';

/** prime components */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuModule} from 'primeng/menu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {ChipsModule} from 'primeng/chips';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentPageComponent,
    ClientsPageComponent,
    PolicyPageComponent,
    PageHeaderComponent,
    PageFooterComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    MessagesModule,
    ButtonModule,
    MessageModule,
    MenuModule,
    TableModule,
    FieldsetModule,
    ToolbarModule,
    ChipsModule,
    DialogModule,
    DropdownModule,
    ToastModule,
    CardModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
