import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {
  Active: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onDragStart(e: Event){
    // console.log("drag started")
    null
  }
  onDrop(e){
    
    e.preventDefault()
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
    this.Active = true
    console.log("drag Entered")
  }
  onDragLeave(e){
    this.Active = false
    console.log("drag Left")
  }
}
