import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Config } from "../../config";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private config: Config){
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Set Header
        let authReq: any = req.clone({
            url: this.config.settings.ApiUrl+req.url,
            headers: req.headers
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer RLV1ADGhoepymjasdhas')
        });
        if(!req.url.includes('/ip-api')){
            return next.handle(authReq);
        }
        else{
            return next.handle(req);
        }
    }

}