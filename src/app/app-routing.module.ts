import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PostComponent } from './pages/post/post.component';
import { PostsTableComponent } from './pages/posts-table/posts-table.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { LoginComponent } from './components/login/login.component';
import { GuardAuthService } from './guard-auth.service';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'post/:id', component: PostComponent },
  {
    path: 'admin',
    component: PostsTableComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: 'admin/post/:id',
    component: EditPostComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: 'admin/newPost',
    component: NewPostComponent,
    canActivate: [GuardAuthService],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
