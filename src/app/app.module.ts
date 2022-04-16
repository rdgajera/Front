import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TagsComponent } from './components/tags/tags.component';
import { PostDataComponent } from './components/post-data/post-data.component';
import { PagingComponent } from './components/paging/paging.component';
import { FooterPostsComponent } from './components/footer-posts/footer-posts.component';
import { PostsTableComponent } from './pages/posts-table/posts-table.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { LoginComponent } from './components/login/login.component';
import { InterceptTokenService } from './intercept-token.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PageNotFoundComponent,
    PostCardComponent,
    SearchWidgetComponent,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent,
    PostDataComponent,
    PagingComponent,
    FooterPostsComponent,
    PostsTableComponent,
    EditPostComponent,
    NewPostComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptTokenService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
