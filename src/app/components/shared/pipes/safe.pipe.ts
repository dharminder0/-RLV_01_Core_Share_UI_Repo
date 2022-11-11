import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class safePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

}



@Pipe({
  name: 'safeHtml'
})
export class safeHtmlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

transform(data:string) {
    return this.sanitizer.bypassSecurityTrustHtml(data);
}

}