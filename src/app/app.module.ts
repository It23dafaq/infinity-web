import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincontainerComponent } from './containers/maincontainer/maincontainer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componenets/navbar/navbar.component';

import { PagenotfoundComponent } from './componenets/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';
import { VirtualwalkComponent } from './containers/virtualwalk/virtualwalk.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DetaildialogComponent } from './componenets/modals/detaildialog/detaildialog.component';
import { FbxdialogComponent } from './componenets/modals/fbxdialog/fbxdialog.component';
import {MatIconModule} from '@angular/material/icon';
import { ImagedialogComponent } from './componenets/modals/imagedialog/imagedialog.component';



@NgModule({
  declarations: [
    AppComponent,
    MaincontainerComponent,
    NavbarComponent,
    PagenotfoundComponent,
    DashboardComponent,
    VirtualwalkComponent,
    DetaildialogComponent,
    FbxdialogComponent,
    ImagedialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [DetaildialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
