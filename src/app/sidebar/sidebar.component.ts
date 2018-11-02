import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, Route } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router) {
    //router.events.subscribe((_: NavigationEnd) => (this.currentUrl = _.url));
    //YT Comment Fix
    router.events.subscribe(_ => {
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;

        //Attempt at activated fix
        var usersIcon = document.getElementById("users");
        var postsIcon = document.getElementById("posts");

        console.log(this.currentUrl);
        if (this.currentUrl == "/" || this.currentUrl.includes("user")) {
          usersIcon.classList.add("activated");
          postsIcon.classList.remove("activated");
        }
        if (this.currentUrl.includes("post")) {
          postsIcon.classList.add("activated");
          usersIcon.classList.remove("activated");
        }
        //END Attempt at activated fix
      }
    });
  }

  ngOnInit() {}
}
