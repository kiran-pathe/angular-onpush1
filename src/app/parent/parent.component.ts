import { Component, OnInit } from "@angular/core";
import { SharedDataService } from "../shared-data.service";
import { User } from "../User";

@Component({
  selector: "app-parent",
  template: `
    <div>
      <h1>Counter Value: {{ user.counter }}</h1>
      <input
        type="button"
        (click)="this.updateCounter()"
        value="Update Counter"
      />
      <hr />
      <child-component [title]='title' [parentCounter]="user"></child-component>
    </div>
  `
})
export class ParentComponent {
  title ='rushi'
  user: User;
  val=0;
  constructor(private sharedService: SharedDataService) {
    this.user = new User(0);
    console.log(this.user)
    // setInterval(() => {
    //   this.val++;
    //   this.user = new User(this.val);
    // }, 2000);
  }

  updateCounter() {
    this.user.counter += 1;
    //this.title = 'kiran';
    this.val++;
    //this.user = new User(this.val);
    this.sharedService.latestNews.next(this.val);
    console.log("ParentComponent => updateCounter");
  }
}
