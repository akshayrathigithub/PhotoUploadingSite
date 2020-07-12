import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class UploadService {
  constructor(private http: HttpClient) {}
  getStatus() {
    // let headers = new HttpHeaders({
    //   "size": this.File.size.toString(),
    //   "x-file-id": FileId,
    //   'name': this.FileName
    // });
    console.log("Called")
    this.http.get("http://localhost:4000/Status").subscribe((res: any) => {
      console.log(res)
    })
  }
}
