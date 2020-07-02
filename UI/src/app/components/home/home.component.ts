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
  LargePhoto: boolean = true
  MainInd: number = 0
  PicInd: number
  GridDiv: any
  Array = [
    { Ind: "1/1/6/4", photos: ["#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8"] },
    { Ind: "1/4/6/7", photos: ["#f205e6", "#1c0365", "#14a9ad", "#4ca2f9", "#a4e43f"] },
    { Ind: "1/7/9/11", photos: ["#79806e", "#61da5e", "#cd2f00"] },
    {
      Ind: "1/11/9/15",
      photos: ["#2f3f94", "#2f7b99", "#da967d", "#34891f", "#b0d87b", "#ca4751", "#7e50a8"],
    },
    { Ind: "1/15/7/21", photos: ["#c4d647", "#e0eeb8", "#11dec1", "#289812"] },
    { Ind: "6/1/14/7", photos: ["#05d371", "#5426e0", "#4834d0"] },
    { Ind: "9/7/19/12", photos: ["#615af0", "#21538e", "#89d534", "#d36647"] },
    { Ind: "9/12/14/15", photos: ["#ab4653", "#67eb4b", "#986b53"] },
    { Ind: "14/12/19/15", photos: ["#4e67cd", "#3b8c2a", "#986b53", "#f50422", "#983f7a"] },
    { Ind: "14/1/19/4", photos: ["#c63b4e", "#983f7a", "#ea24a3"] },
    { Ind: "14/4/19/7", photos: ["#93f2d7", "#9b5c2a", "#15b9ee"] },
    { Ind: "13/15/19/21", photos: ["#df77b9", "#986b53", "#f50422", "#983f7a", "#ea24a3"] },
    {
      Ind: "7/15/13/18",
      photos: ["#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49"],
    },
    { Ind: "7/18/13/21", photos: ["#1350ce", "#10e5b1", "#fff400", "#cb2582", "#ce00be"] },
  ]

  constructor(private renderer: Renderer2) {}

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
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
          let height = parseInt(
            this.linkRefs._results[randomPhoto].nativeElement.style.height.replace("%", "")
          )
          let width = parseInt(
            this.linkRefs._results[randomPhoto].nativeElement.style.width.replace("%", "")
          )
          let Dir = this.linkRefs._results[randomPhoto].nativeElement.style.transform.replace(
            "translate3d(",
            ""
          )
          const totalChildren = this.linkRefs._results[randomPhoto].nativeElement.children.length
          let limit = parseFloat((-100 + 100 / totalChildren).toFixed(2))
          let Proposed = ""
          if (height > width) {
            let PresentY = parseFloat(Dir.replace("%,0px)", "").replace("0%,", ""))
            if (Math.round(PresentY) === Math.round(limit)) {
              Proposed = `translate3d(0%,0%,0px)`
            } else {
              Proposed = `translate3d(0%,${parseFloat(
                (PresentY - 100 / totalChildren).toFixed(2)
              )}%,0px)`
            }
          } else {
            let PresentX = parseFloat(Dir.replace(",0%,0px)", "").replace("%", ""))
            if (Math.round(PresentX) === Math.round(limit)) {
              Proposed = `translate3d(0%,0%,0px)`
            } else {
              Proposed = `translate3d(${parseFloat(
                (PresentX - 100 / totalChildren).toFixed(2)
              )}%,0%,0px)`
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
    let height = parseInt(
      this.linkRefs._results[this.currentPic].nativeElement.style.height.replace("%", "")
    )
    let width = parseInt(
      this.linkRefs._results[this.currentPic].nativeElement.style.width.replace("%", "")
    )
    let Dir = this.linkRefs._results[this.currentPic].nativeElement.style.transform.replace(
      "translate3d(",
      ""
    )
    const totalChildren = this.linkRefs._results[this.currentPic].nativeElement.children.length
    let limit = parseFloat((-100 + 100 / totalChildren).toFixed(2))
    this.renderer.setStyle(
      this.linkRefs._results[this.currentPic].nativeElement,
      "transform",
      "translate3d(0%,0%,0px)"
    )

    const quickTimeout = (Type: string, Limit: number, TC: number, currVal: number) => {
      setTimeout(() => {
        let value = parseFloat((currVal - 100 / TC).toFixed(2))
        if (Math.round(currVal) <= Math.round(Limit) || this.currentPic === -1) {
          null
        } else {
          if (Type === "X" && this.currentPic >= 0) {
            this.renderer.setStyle(
              this.linkRefs._results[this.currentPic].nativeElement,
              "transform",
              `translate3d(${value}%,0%,0px)`
            )
          } else {
            if (this.currentPic >= 0) {
              this.renderer.setStyle(
                this.linkRefs._results[this.currentPic].nativeElement,
                "transform",
                `translate3d(0%,${value}%,0px)`
              )
            }
          }
          quickTimeout(Type, Limit, TC, value)
        }
      }, 1600)
    }
    if (height > width) {
      quickTimeout("Y", limit, totalChildren, 0)
    } else {
      quickTimeout("X", limit, totalChildren, 0)
    }
  }

  MouseMoved(ID: number, stat: string) {
    if (stat === "Enter" && this.LargePhoto) {
      setTimeout(() => {
        this.currentPic = ID
        this.QuickSlider()
      }, 500)
    } else {
      console.log("left")
      this.currentPic = -1
    }
  }
  PhotoClicked(ID: number, id: number, gridDiv: any) {
    this.MainInd = ID
    this.PicInd = id
    this.GridDiv = gridDiv
    if (this.LargePhoto) {
      // this.renderer.setStyle(gridDiv, "filter", "blur(4px)")
      this.renderer.setStyle(gridDiv, "opacity", "0.2")
    } else {
      // this.renderer.setStyle(gridDiv, "filter", "none")
      this.renderer.setStyle(gridDiv, "opacity", "1")
    }
    this.LargePhoto = !this.LargePhoto
    console.log(ID, "photo Clicked", id, gridDiv)
  }
  SlideAction(action: string, previewDiv: any) {
    let limit = this.Array[this.MainInd].photos.length
    if (action === "right") {
      if (this.PicInd === limit) {
        this.renderer.setStyle(previewDiv, "transform", "translate3d(0%, 0%, 0px)")
        this.PicInd = 0
      } else {
        this.renderer.setStyle(previewDiv, "transform", `translate3d(-${this.PicInd*100}%, 0%, 0px)`)
        this.PicInd = this.PicInd + 1
      }
    } else if (action === "left") {
      if(this.PicInd === 0){
        this.renderer.setStyle(previewDiv, "transform", `translate3d(-${(limit-1)*100}%, 0%, 0px)`)
        this.PicInd = limit - 1
      }else{
        this.renderer.setStyle(previewDiv, "transform", `translate3d(-${this.PicInd*100}%, 0%, 0px)`)
        this.PicInd = this.PicInd - 1
      }
    } else {
      this.LargePhoto = !this.LargePhoto
      this.renderer.setStyle(this.GridDiv, "filter", "none")
    }
    console.log(this.PicInd, limit)
  }
}
