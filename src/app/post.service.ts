import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BlogPost } from './BlogPost';

const perPage = 6;
const serverURL = `https://phase2node.herokuapp.com/`;

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts(
    page: number,
    tag: string,
    category: string
  ): Observable<BlogPost[]> {
    let params = `?page=${page}&perPage=${perPage}`;
    if (tag) params += `&tag=${tag}`;

    if (category) params += `&category=${category}`;

    return this.http.get<BlogPost[]>(`${serverURL}/posts${params}`);
  }

  getPostbyId(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${serverURL}/posts/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${serverURL}/categories`);
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`${serverURL}/tags`);
  }

  getAllPosts(): Observable<BlogPost[]> {
    let params = `?page=1&perPage=${Number.MAX_SAFE_INTEGER}`;
    return this.http.get<BlogPost[]>(`${serverURL}/posts${params}`);
  }

  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`${serverURL}/posts`, data);
  }

  //function invoke the "put" method
  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`${serverURL}/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`${serverURL}/posts/${id}`);
  }
}
