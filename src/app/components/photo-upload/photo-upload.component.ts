import { Component, OnInit, Renderer2 } from "@angular/core"

@Component({
  selector: "app-photo-upload",
  templateUrl: "./photo-upload.component.html",
  styleUrls: ["./photo-upload.component.css"],
})
export class PhotoUploadComponent implements OnInit {
  Dragged: boolean = false
  Dropped: boolean = false
  DraggedPhoto: any
  DroppedOn: any
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  onDragStart(e: Event) {
    this.DraggedPhoto = e.target
    this.renderer.setStyle(e.target, 'backgroundColor', 'pink')
    null
  }
  onDrop(e) {
    e.preventDefault()
    this.Dropped = true
    this.Dragged = false
    console.log("Drop")
  }
  onDragEnd(e: Event) {
    // console.log("drag Ended")
    null
  }
  onDragOver(e: Event) {
    console.log("dragged")
    e.preventDefault()
    e.stopPropagation()
  }
  onDragEnter(e) {
    this.Dragged = true
    console.log("drag Entered")
  }
  onDragLeave(e) {
    this.Dragged = false
    console.log("drag Left")
  }
  PhotoDropped(e: Event) {
    e.preventDefault()
    this.DroppedOn = e.target
    this.renderer.setStyle(this.DroppedOn, 'backgroundColor', 'red')
  }
  onPhotoDragEnter(e: Event) {
    if(e.target != this.DraggedPhoto)
    this.renderer.setStyle(e.target, 'backgroundColor', 'yellow')
  }
  onPhotoDragLeave(e: Event) {
    if(e.target != this.DraggedPhoto)
    this.renderer.setStyle(e.target, 'backgroundColor', 'rgba(86, 50, 122, 0.541)')
  }
}
