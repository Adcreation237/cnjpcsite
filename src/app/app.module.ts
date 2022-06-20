import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NbThemeModule, NbLayoutModule, NbSelectModule, NbUserModule, NbCardModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRouteRoutingModule } from './app-route-routing.module';
import { DortoirComponent } from './dortoir/dortoir.component';
import JeunesseComponent from './jeunesse/jeunesse.component';
import { CarousselComponent } from './home/caroussel/caroussel.component';
import { ToolbarModule } from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import { HeroComponent } from './home/hero/hero.component';
import { HeadJeComponent } from './jeunesse/head-je/head-je.component';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {DividerModule} from 'primeng/divider';
import {ChartModule} from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { WebService } from './services/web.service';
import { HttpClientModule } from '@angular/common/http';
import {PanelMenuModule} from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadDortComponent } from './dortoir/head-dort/head-dort.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ListboxModule} from 'primeng/listbox';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DortoirComponent,
    JeunesseComponent,
    CarousselComponent,
    HeroComponent,
    HeadJeComponent,
    HeadDortComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRouteRoutingModule,
    NbThemeModule.forRoot(),
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    NbLayoutModule,
    DropdownModule,
    NbSelectModule,
    NbUserModule,
    NbCardModule,
    DividerModule,
    ChartModule,
    HttpClientModule,
    PanelMenuModule,
    MultiSelectModule,
    SelectButtonModule,
    ListboxModule,
    DialogModule,
    
  ],
  providers: [WebService],
  bootstrap: [AppComponent],
})
export class AppModule { }
