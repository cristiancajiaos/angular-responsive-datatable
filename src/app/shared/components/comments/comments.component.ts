import { Comment } from './../../interfaces/comment';
import { CommentService } from './../../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  columns: any = [
    { data: 'Post ID' },
    { data: 'ID' },
    { data: 'Name' },
    { data: 'Email' },
    { data: 'Body'}
  ];
  comments: Comment[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: any = new Subject();

  constructor(
    private comment: CommentService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      paging: true,
      lengthChange: false,
      search: false,
      scrollX: true,
      columns: [
        {
          width: '85px'
        },
        {
          width: '50px'
        },
        {
          width: '200px'
        },
        {
          width: '200px'
        },
        {
          width: '1200px'
        }
      ],
    };

    this.comment.getComments().subscribe(comments => {
      this.comments = comments;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
