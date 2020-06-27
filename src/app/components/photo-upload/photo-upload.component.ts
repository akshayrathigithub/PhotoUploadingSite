import { Component, OnInit, Renderer2 } from "@angular/core"

@Component({
  selector: "app-photo-upload",
  templateUrl: "./photo-upload.component.html",
  styleUrls: ["./photo-upload.component.css"],
})
export class PhotoUploadComponent implements OnInit {
  FileDragged: boolean = false
  FileDropped: boolean = false
  DraggedPhoto: any
  DraggedPhotoProperty: string;
  DroppedOn: any
  DroppedOnProperty: string;
  ColorArr = ["#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8","#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be", "#df77b9", "#986b53", "#f50422", "#983f7a", "#ea24a3"]
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  onDragStart(e) {
    this.DraggedPhoto = e.target
    this.DraggedPhotoProperty = e.target.style.backgroundColor
    // this.renderer.setStyle(e.target, 'opacity', '0.5')
  }
  onDrop(e) {
    e.preventDefault()
    this.FileDropped = true
    this.FileDragged = false
    console.log("Drop")
  }
  onDragOver(e: Event) {
    e.preventDefault()
    e.stopPropagation()
  }
  onDragEnter(e) {
    this.FileDragged = true
    console.log("drag Entered")
  }
  onDragLeave(e) {
    this.FileDragged = false
    console.log("drag Left")
  }
  PhotoDropped(e: Event) {
    e.preventDefault()
    this.DroppedOn = e.target
    if(this.DroppedOn != this.DraggedPhoto){
      this.renderer.setStyle(this.DroppedOn, 'backgroundColor', this.DraggedPhotoProperty)
      this.renderer.setStyle(this.DraggedPhoto, 'backgroundColor', this.DroppedOnProperty)
    }
  }
  onPhotoDragEnter(e) {
    if(e.target != this.DraggedPhoto){
      this.DroppedOnProperty = e.target.style.backgroundColor
      console.log(this.DroppedOnProperty)
      this.renderer.setStyle(e.target, 'backgroundColor', this.DraggedPhotoProperty)
    }
  }
  onPhotoDragLeave(e: Event) {
    if(e.target != this.DraggedPhoto){
      this.renderer.setStyle(e.target, 'backgroundColor', this.DroppedOnProperty)
    }
  }
}
