import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onDragStart(e: Event){
    console.log("drag started")
  }
  onDrop(e){
    e.preventDefault()
    console.log(e.dataTransfer.items)
  }
  onDragEnd(e: Event){
    console.log("drag Ended")
  }
  onDragOver(e: Event){
    console.log("dragged")
    e.preventDefault()
    e.stopPropagation()
  }
}
