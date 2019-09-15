import { Injectable } from '@angular/core';

@Injectable()
export class FileService { 
	download(url : string, filename: string, ) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.href = url;
    a.download = filename;
    a.click();
  }
}