import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChildren,
  Renderer2,
} from "@angular/core"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  @ViewChildren("Picture") linkRefs
  Array = [
    { Ind: "1/1/6/4", photos: ["rgba(136, 16, 16, 0.452)", "#7fb411"] },
    { Ind: "1/4/6/7", photos: ["#000121", "#0023b8"] },
    { Ind: "1/7/9/11", photos: ["#eb00a5", "#3b8c2a"] },
    { Ind: "1/11/9/15", photos: ["#6a4389", "#986b53"] },
    { Ind: "1/15/7/21", photos: ["#cfcd83", "#f50422"] },
    { Ind: "6/1/14/7", photos: ["#8ad69f", "#983f7a"] },
    { Ind: "9/7/19/12", photos: ["#177857", "#ea24a3"] },
    { Ind: "9/12/14/15", photos: ["#ab4653", "#3b8c2a", "#986b53"] },
    { Ind: "14/12/19/15", photos: ["#4e67cd", "#3b8c2a", "#986b53", "#f50422", "#983f7a"] },
    { Ind: "14/1/19/4", photos: ["#c63b4e", "#983f7a", "#ea24a3"] },
    { Ind: "14/4/19/7", photos: ["#c9aea8", "#3b8c2a", "#f50422", "#983f7a"] },
    { Ind: "13/15/19/21", photos: ["#df77b9", "#986b53", "#f50422", "#983f7a", "#ea24a3"] },
    { Ind: "7/15/13/18", photos: ["#1ea49c", "#f50422", "#983f7a", "#ea24a3"] },
    { Ind: "7/18/13/21", photos: ["#4a1bac", "#7fb411", "#f50422", "#ea24a3"] },
  ]
  constructor(private renderer: Renderer2) {}
  Repeat(Num: number) {
    setTimeout(() => {
      if (Num === 20) {
        console.log("Completed")
      } else {
        this.Repeat(Num + 1)
        let randomPhoto = Math.floor(Math.random() * 10)
        let Dir = this.linkRefs._results[randomPhoto].nativeElement.style.transform.replace(
          "translate",
          ""
        )
        let Proposed = ""
        if (Dir[0] === "Y") {
          let PresentY = Dir.replace('Y(','').replace('%)','')
          if (PresentY === "0") {
            Proposed = "translateY(-50%)"
          } else if (PresentY === "-50") {
            Proposed = "translateY(0%)"
          } else {
            Proposed = "translateY(-100%)"
          }
        }else{
          let PresentX = Dir.replace('X(','').replace('%)','')
          if (PresentX === "0") {
            Proposed = "translateX(-50%)"
          } else if (PresentX === "-50") {
            Proposed = "translateX(0%)"
          } else {
            Proposed = "translateX(-100%)"
          }
        }
        console.log(this.linkRefs._results[randomPhoto].nativeElement)
        this.renderer.setStyle(
          this.linkRefs._results[randomPhoto].nativeElement,
          "transform",
          Proposed
        )
      }
    }, 4000)
  }
  ngOnInit(): void {
    this.Repeat(0)
  }
  getDimension(length: number) {
    console.log(length)
    let randomInt = Math.floor(Math.random() * 10)
    if (randomInt % 2 === 0) {
      return {
        display: 'flex',
        width: (length * 100) + '%',
        height: '100%',
        position: 'absolute',
        'flex-direction': 'row',
        transform: 'translateX(0%)',
        transition: 'all 1.5s ease-in-out'
      }
    } else {
      return {
        display: 'flex',
        width: '100%',
        height: (length * 100) + '%',
        position: 'absolute',
        'flex-direction': 'column',
        transform: 'translateY(0%)',
        transition: 'all 1.5s ease-in-out'
      }
    }
  }
}
