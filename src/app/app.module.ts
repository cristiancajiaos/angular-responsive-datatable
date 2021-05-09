import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CommentsComponent } from './shared/components/comments/comments.component';
import { PostsComponent } from './shared/components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
