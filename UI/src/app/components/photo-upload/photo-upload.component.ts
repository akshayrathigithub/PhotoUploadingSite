import { Component, OnInit, Renderer2 } from "@angular/core"
import { UploadService } from "src/app/services/upload.service"

@Component({
  selector: "app-photo-upload",
  templateUrl: "./photo-upload.component.html",
  styleUrls: ["./photo-upload.component.css"],
})
export class PhotoUploadComponent implements OnInit {
  Files: any
  FileName: string
  FileDragged: boolean = false
  FileDropped: boolean = false
  DraggedPhoto: any
  DraggedPhotoThumbnail: string
  DroppedOn: any
  DroppedOnThumbnail: string
  flag: boolean = true
  ColorArr = [
    "#63b598",
    "#ce7d78",
    "#ea9e70",
    "#a48a9e",
    "#c6e1e8",
    "#1350ce",
    "#10e5b1",
    "#fff4d7",
    "#cb2582",
    "#ce00be",
    "#df77b9",
    "#986b53",
    "#f50422",
    "#983f7a",
    "#ea24a3",
  ]
  constructor(private renderer: Renderer2, private FileUploadService: UploadService) {
    this.FileUploadService.getStatus()
  }

  ngOnInit(): void {}

  onDragStart(e) {
    this.DraggedPhoto = e.target
    this.DraggedPhotoThumbnail = e.target.style.backgroundColor
  }
  onDrop(e) {
    console.log(e.dataTransfer.files)
    e.preventDefault()
    this.FileDropped = true
    this.FileDragged = false
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
    if (!this.flag && this.DroppedOn != this.DraggedPhoto) {
      this.renderer.setStyle(this.DroppedOn, "backgroundColor", this.DraggedPhotoThumbnail)
      this.renderer.setStyle(this.DraggedPhoto, "backgroundColor", this.DroppedOnThumbnail)
      this.flag = true
    }
  }
  onPhotoDragEnter(e) {
    if (this.flag && e.target != this.DraggedPhoto) {
      console.log("photo Entered", this.flag, "expected flag is true")
      this.DroppedOn = e.target
      this.DroppedOnThumbnail = e.target.style.backgroundColor
      this.renderer.setStyle(e.target, "backgroundColor", this.DraggedPhotoThumbnail)
      this.renderer.setStyle(this.DraggedPhoto, "backgroundColor", this.DroppedOnThumbnail)
      this.flag = false
    }
  }
  onPhotoDragLeave(e: Event) {
    if (!this.flag && this.DroppedOn != this.DraggedPhoto) {
      console.log("photo left", this.flag, "expected flag is false")
      this.renderer.setStyle(this.DroppedOn, "backgroundColor", this.DroppedOnThumbnail)
      this.renderer.setStyle(this.DraggedPhoto, "backgroundColor", this.DraggedPhotoThumbnail)
      this.flag = true
    }
  }
  SelectFile(e) {
    this.FileName = e.target.files[0].name
    this.Files = e.target.files
    let NoOfFiles = this.Files.length
    console.log(this.Files.length)
    for (let i = 0; i < NoOfFiles; i++) {
      if (this.Files[i].type.match("image.*")) {
        console.log("image file")
      } else {
        console.log("Not a image file", this.Files[i].type)
      }
    }
  }
  Upload() {
    // let FileId = `${this.FileName}-${this.File.lastModified}`
  }
}
