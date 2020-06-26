import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {
  Dragged: boolean = false
  Dropped: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onDragStart(e: Event){
    // console.log("drag started")
    null
  }
  onDrop(e){
    e.preventDefault()
    this.Dropped = true
    this.Dragged = false
    console.log("Drop")
  }
  onDragEnd(e: Event){
    // console.log("drag Ended")
    null
  }
  onDragOver(e: Event){
    console.log("dragged")
    e.preventDefault()
    e.stopPropagation()
  }
  onDragEnter(e){
    this.Dragged = true
    console.log("drag Entered")
  }
  onDragLeave(e){
    this.Dragged = false
    console.log("drag Left")
  }
}
