import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../../BlogPost';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  blogPost: BlogPost;
  tags: string;

  constructor(
    private service: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.service.getPostbyId(id).subscribe((data) => {
      this.blogPost = data;
      this.tags = this.blogPost.tags.toString();
    });
  }

  formSubmit(): void {
    this.blogPost.tags = this.tags.split(',').map((tag) => tag.trim());

    this.service
      .updatePostById(this.blogPost._id, this.blogPost)
      .subscribe(() => {
        this.router.navigate(['/admin']);
      });
  }

  deletePost(): void {
    this.service.deletePostById(this.blogPost._id).subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }
}
