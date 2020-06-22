import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChildren,
  Renderer2,
  AfterViewInit,
} from "@angular/core"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren("Picture") linkRefs: { _results: { nativeElement: any }[] }
  currentPic: number
  Array = [
    { Ind: "1/1/6/4", photos: ["#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8"] },
    { Ind: "1/4/6/7", photos: ["#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f"] },
    { Ind: "1/7/9/11", photos: ["#79806e" ,"#61da5e" ,"#cd2f00"] },
    { Ind: "1/11/9/15", photos: ["#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8"] },
    { Ind: "1/15/7/21", photos: ["#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ] },
    { Ind: "6/1/14/7", photos: ["#05d371", "#5426e0", "#4834d0"] },
    { Ind: "9/7/19/12", photos: ["#615af0", "#21538e", "#89d534", "#d36647"] },
    { Ind: "9/12/14/15", photos: ["#ab4653", "#67eb4b", "#986b53"] },
    { Ind: "14/12/19/15", photos: ["#4e67cd", "#3b8c2a", "#986b53", "#f50422", "#983f7a"] },
    { Ind: "14/1/19/4", photos: ["#c63b4e", "#983f7a", "#ea24a3"] },
    { Ind: "14/4/19/7", photos: ["#93f2d7", "#9b5c2a", "#15b9ee"] },
    { Ind: "13/15/19/21", photos: ["#df77b9", "#986b53", "#f50422", "#983f7a", "#ea24a3"] },
    { Ind: "7/15/13/18", photos: ["#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49"] },
    { Ind: "7/18/13/21", photos: ["#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be"] },
  ]

  constructor(private renderer: Renderer2) {}

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  RandomPhotoSlider(Num: number) {
    setTimeout(() => {
      if (Num === 60) {
        console.log("Completed")
      } else {
        this.RandomPhotoSlider(Num + 1)
        let randomPhoto = this.getRandomInt(0, 14)
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

  VisibleTimeout(ID: number) {
    setTimeout(() => {
      if (ID === 14) {
        this.RandomPhotoSlider(0)
      } else {
        this.renderer.setStyle(
          this.linkRefs._results[ID].nativeElement.parentElement,
          "opacity",
          "1"
        )
        this.VisibleTimeout(ID + 1)
      }
    }, 1000)
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.VisibleTimeout(0)
  }
  
  QuickSlider() {
    let Dir = this.linkRefs._results[this.currentPic].nativeElement.style.transform.replace(
      "translate",
      ""
    )
    const totalChildren = this.linkRefs._results[this.currentPic].nativeElement.children.length
    let limit = Math.floor(100 - 100 / totalChildren) * -1
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
    const quickTimeout = (Type: string, Limit: number, TC: number, currVal: number) => {
      setTimeout(() => {
        let value = currVal - 100 / TC
        console.log(limit, currVal)
        if (currVal <= Limit || this.currentPic === -1) {
          null
        } else {
          if (Type === "X" && this.currentPic >= 0) {
            this.renderer.setStyle(
              this.linkRefs._results[this.currentPic].nativeElement,
              "transform",
              `translateX(${value}%)`
            )
          } else {
            if (this.currentPic >= 0) {
              this.renderer.setStyle(
                this.linkRefs._results[this.currentPic].nativeElement,
                "transform",
                `translateY(${value}%)`
              )
            }
          }
          quickTimeout(Type, Limit, TC, value)
        }
      }, 1600)
    }
    quickTimeout(Dir[0], limit, totalChildren, 0)
  }

  MouseMoved(ID: number, stat: string) {
    if (stat === "Enter") {
      this.currentPic = ID
      this.QuickSlider()
    } else {
      let Dir = this.linkRefs._results[ID].nativeElement.style.transform.replace("translate", "")
      if (Dir[0] === "Y") {
        this.renderer.setStyle(
          this.linkRefs._results[ID].nativeElement,
          "transform",
          "translateY(0%)"
        )
      } else {
        this.renderer.setStyle(
          this.linkRefs._results[ID].nativeElement,
          "transform",
          "translateX(0%)"
        )
      }
      this.currentPic = -1
    }
  }
}
