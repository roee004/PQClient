import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  nav(page: string) {
    this.router.navigate([page]);
  }
}
