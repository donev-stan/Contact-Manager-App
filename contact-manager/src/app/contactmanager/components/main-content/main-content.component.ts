import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (!id) id = 1;

      // this.user = null; // Just to show the spinner

      this.service.users.subscribe((users) => {
        if (users.length > 0) {
          // Just to show the spinner
          // setTimeout(() => {
          this.user = this.service.userById(Number(id));
          // }, 500);
        }
      });
    });
  }
}