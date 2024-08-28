import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServicesService {

  apiUrl = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getAllPosts() {
    return this.httpClient.get(this.apiUrl + '/posts');
  }
  createPost(postData: any) {
    return this.httpClient.post(this.apiUrl + '/posts', postData);
  }
  updataPost(id: number, postData: any) {
    return this.httpClient.put(this.apiUrl + '/posts/' + id, postData);
  }
  deletePost(id: number) {
    return this.httpClient.delete(this.apiUrl + '/posts/' + id);
  }
}


