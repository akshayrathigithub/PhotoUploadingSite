import { Component, OnInit, ViewEncapsulation, ViewChildren, Renderer2 } from "@angular/core"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  @ViewChildren("Picture") linkRefs
  currentPic: number
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
  RandomPhotoSlider(Num: number) {
    setTimeout(() => {
      if (Num === 20) {
        console.log("Completed")
      } else {
        this.RandomPhotoSlider(Num + 1)
        let randomPhoto = Math.floor(Math.random() * 10)
        if (randomPhoto === this.currentPic) {
          null
        } else {
          let Dir = this.linkRefs._results[randomPhoto].nativeElement.style.transform.replace(
            "translate",
            ""
          )
          const totalChildren = this.linkRefs._results[randomPhoto].nativeElement.children.length
          let limit = Math.floor(100 - 100 / totalChildren) * -1
          let Proposed = ""
          if (Dir[0] === "Y") {
            let PresentY = parseInt(Dir.replace("Y(", "").replace("%)", ""))
            if (PresentY === limit) {
              Proposed = `translateY(0%)`
            } else {
              Proposed = `translateY(${PresentY - 100 / totalChildren}%)`
            }
          } else {
            let PresentX = parseInt(Dir.replace("X(", "").replace("%)", ""))
            if (PresentX === limit) {
              Proposed = `translateX(0%)`
            } else {
              Proposed = `translateX(${PresentX - 100 / totalChildren}%)`
            }
          }
          this.renderer.setStyle(
            this.linkRefs._results[randomPhoto].nativeElement,
            "transform",
            Proposed
          )
        }
      }
    }, 4000)
  }
  ngOnInit(): void {
    this.RandomPhotoSlider(0)
  }

  QuickSlider() {
    let Dir = this.linkRefs._results[this.currentPic].nativeElement.style.transform.replace(
      "translate",
      ""
    )
    const totalChildren = this.linkRefs._results[this.currentPic].nativeElement.children.length
    let limit = Math.floor(100 - 100 / totalChildren) * -1
    let Proposed = ''
    if (Dir[0] === "Y") {
      this.renderer.setStyle(
        this.linkRefs._results[this.currentPic].nativeElement,
        "transform",
        "translateY(0%)"
      )
    } else {
      this.renderer.setStyle(
        this.linkRefs._results[this.currentPic].nativeElement,
        "transform",
        "translateX(0%)"
      )
    }
    const quickTimeout = (Type: string, Limit: number, TC: number, currVal: number)=>{
      setTimeout(() => {
        let value = currVal - 100 / TC
        if(currVal === Limit){
          null
        }else{
          if(Type === 'X'){
            this.renderer.setStyle(
              this.linkRefs._results[this.currentPic].nativeElement,
            "transform",
            `translateX(${value}%)`
            )
          }else{
          this.renderer.setStyle(
            this.linkRefs._results[this.currentPic].nativeElement,
            "transform",
            `translateY(${value}%)`
            )
          }
          quickTimeout(Type, Limit, TC, value)
        }
      }, 1600);
    }
    quickTimeout(Dir[0], limit, totalChildren, 0)
  }

  MouseMoved(ID: number, stat: string) {
    if (stat === "Enter") {
      this.currentPic = ID
      this.QuickSlider()
    } else {
      this.currentPic = -1
    }
  }
}
