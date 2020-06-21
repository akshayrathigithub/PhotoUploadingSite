import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  Array = [
    { Ind: '', color: "rgba(136, 16, 16, 0.452)"},
    { Ind: 2, color: "#000121"},
    { Ind: 3, color: "#eb00a5"},
    { Ind: 4, color: "#6a4389"},
    { Ind: 2, color: "#cfcd83"},
    { Ind: 3, color: "#8ad69f"},
    { Ind: 4, color: "#177857"},
    { Ind: 3, color: "#ab4653"},
    { Ind: 1, color: "#4e67cd"},
    { Ind: 2, color: "#c63b4e"},
    { Ind: 3, color: "#c9aea8"},
    { Ind: 4, color: "#df77b9"},
    { Ind: 1, color: "#1ea49c"},
    { Ind: 2, color: "#4a1bac"},
    { Ind: 1, color: "#319607"},
    { Ind: 2, color: "#312007"},
    { Ind: 3, color: "#000"}
  ];
  photos = ["red", "yellow"];
  constructor() {}

  ngOnInit(): void {}
}
