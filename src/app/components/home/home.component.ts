import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  Array = [
    { Ind: '1/1/6/4', color: "rgba(136, 16, 16, 0.452)"},
    { Ind: '1/4/6/7', color: "#000121"},
    { Ind: '1/7/9/11', color: "#eb00a5"},
    { Ind: '1/11/9/15', color: "#6a4389"},
    { Ind: '1/15/7/21', color: "#cfcd83"},
    { Ind: '6/1/14/7', color: "#8ad69f"},
    { Ind: '9/7/19/12', color: "#177857"},
    { Ind: '9/12/14/15', color: "#ab4653"},
    { Ind: '14/12/19/15', color: "#4e67cd"},
    { Ind: '14/1/19/4', color: "#c63b4e"},
    { Ind: '14/4/19/7', color: "#c9aea8"},
    { Ind: '13/15/19/21', color: "#df77b9"},
    { Ind: '7/15/13/18', color: "#1ea49c"},
    { Ind: '7/18/13/21', color: "#4a1bac"}
  ];
  photos = ["red", "yellow"];
  constructor() {}

  ngOnInit(): void {}
}
