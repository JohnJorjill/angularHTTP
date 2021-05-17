import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component'; // app component will use BlogComponent

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent
  ],
  imports: [
    HttpClientModule, // use HttpClientModule
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
