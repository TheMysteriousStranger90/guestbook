import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {MaterialModule} from "./modules/material/material.module";
import {FormsModule} from "@angular/forms";
import {PostsModule} from "./modules/posts/posts.module";
import {FooterComponent} from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    PostsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
