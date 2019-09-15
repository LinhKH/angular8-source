import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from '../app.config';
import { catchError, map, tap, finalize } from 'rxjs/operators';
import * as _ from "lodash";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as config from './config/config';
import { AlertService } from './alert.service';
import { FileService } from './file.service';

export interface HttpOptions {
  headers?: { [key: string]: string };
  query?: { [key: string]: string };
}
@Injectable()
export class RequestService {
  private httpOptions;
  public BASE_URL = `${this.config.API_ENDPOINT}`;
  private router: Router;
  public onRequest = false;
  constructor(
    private http: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig,
    private alertService: AlertService,
    private fileService: FileService,
  ) { }

  send_request(url: string, method: string = 'POST', params: any, BodyType?: any, calback?: any): Observable<any> {
    let _header = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('TOKEN') ? 'ProDrivers ' + localStorage.getItem('TOKEN') : '!@#%$&*&*%^ERHDF#$^G',
      'charset': 'utf-8',
      'Accept': '*/*',
    };
    this.httpOptions = new HttpHeaders(_header);
    if (params && params['REFRESH_TOKEN'] == true) _header.Authorization = 'ProDrivers ' + localStorage.getItem('SECRET_TOKEN');
    let curLocalData = localStorage.getItem(url);
    if (curLocalData && curLocalData != null) {
      let data = JSON.parse(curLocalData);
      let callAPI = true;      
    }
    this.onRequest = true;
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    });
    url = (config.API.ENV.isProxy ? '' : this.BASE_URL) + url;

    let request = this.http.request(
      method,
      url,
      {
        body: params,//httpParams,
        responseType: "json",
        params: (method == 'GET') ? httpParams : null,
        headers: this.httpOptions,
        observe: 'response'
      }
    ).pipe(
      map(data => {
        if (data.status == 200 && data.ok) {
          let dataH = data.headers.get('Data-Header');
          if (typeof (dataH) != 'undefined') {
            try {
              let tempKey = JSON.parse(dataH);
              try {
                let temp = JSON.parse(localStorage.getItem(data.url.replace(/^.*\/\/[^\/]+\//, '')));
                if (temp) data.body['data'] = Object.assign(temp['data'], data.body['data']);
              } catch (e) {
                console.log(e, 'error');
              }
              localStorage.setItem((data.url.split('?')[0]).replace(/^.*\/\/[^\/]+\//, ''), JSON.stringify(data.body));
            }
            catch (e) {
            }
          }
          if (data.body.hasOwnProperty('code')) {
            switch (data.body['code'].toString()) {
              case config.ERR_CODE.APP_ERROR_COMMON.toString():
                this.alertService.dialog(config.ERR_MSG[data.body['code']] + ': ' + data.body['message']);
                break;
              case config.ERR_CODE.SQL_ERROR.toString():
                this.alertService.dialog(config.ERR_MSG[config.ERR_MSG['SQLERROR']]);
                break;
              case config.ERR_CODE.SQL_FIELD_ERROR.toString():
                this.alertService.dialog(config.ERR_MSG[config.ERR_MSG['SQL_FIELD_ERROR']]);
                break;
            }
          }
        }
        this.onRequest = false;
        return data.body;
      }),
      finalize(() => { this.onRequest = false }),
    );

    return request;
  }
  errorHandler(e: any): void {
    if (e.code == config.ERR_CODE.SERVER_ERROR) {
      this.alertService.dialog(config.ERR_MSG.SQLERROR);
      return;
    }
    if (typeof (e.ok) == 'undefined' || e.ok === false) {
      this.alertService.dialog(config.ERR_MSG.SQLERROR, 'confirm', 'メッセージ', () => { this.router.navigate(['login']) });
      this.onRequest = false;
      console.log('refresh token plss');//refresh token plss
    }
  }
  // get(url: string, options: HttpOptions = {}): Observable<object> {
  //   return this.http.get(`${this.BASE_URL}${url}`, {
  //     headers: new HttpHeaders(options.headers),
  //     params: new HttpParams({fromObject: options.query}),
  //   });
  // }

  // post(url: string, data: any, options: HttpOptions = {}): Observable<object> {
  //   return this.http.post(`${this.BASE_URL}${url}`, data, {
  //     headers: new HttpHeaders(options.headers),
  //   });
  // }

  // delete(url: string, options: HttpOptions = {}): Observable<object> {
  //   return this.http.delete(`${this.BASE_URL}${url}`, {
  //     headers: new HttpHeaders(options.headers),
  //     params: new HttpParams({fromObject: options.query}),
  //   });
  // }

  checkLocalStoreExists(url, params, data, callAPI = true) {
    if (url == config.API.get_common_master) {
      Object(params.mst_id).forEach(function (k, i) {
        if (typeof (this.data[k]) != 'undefined') {
          delete (params.mst_id[i]);
        }
      }.bind(data));
      if (Object.keys(params.mst_id).length != 0) callAPI = false;
    }
    if (url == config.API.get_postal_code) { callAPI = false; }
    return callAPI;
  }

  /*
  * get blob content
  * @param: string url api url
  * @param: object params parameters
  * @return: Observable
  */
  public getFileContent(url, params: any, options: any = {}): Observable<object> {
    let _httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('TOKEN') ? 'ProDrivers ' + localStorage.getItem('TOKEN') : '!@#%$&*&*%^ERHDF#$^G',
      'charset': 'utf-8',
      'Accept': '*/*',
    });

    let _options: any = {
      headers: _httpHeaders,
      //responseType: 'blob',
    }
    if (options) {
      _options = Object.assign(_options, options);
    }

    this.onRequest = true;
    return this.http.post(`${this.BASE_URL}${url}`, params, _options).pipe(
      map(data => {
        this.onRequest = false;
        return data;
      }),
      catchError((e: any) => Observable.throw(this.errorHandler(e)))
    );
  }

  /*
  * download file from data content
  * @param: string url api url
  * @param: object params parameters
  * @return: void
  */
  public downloadFileFromDataContent(url, params: any) {
    let options = {
      responseType: 'blob',
      observe: 'response'
    }
    this.getFileContent(url, params, options).subscribe(res => {
      let x = res['headers'].get('Content-Disposition');
      if (x) {
        let url = window.URL.createObjectURL(res['body']);
        let sFilename = x.split(';')[1].trim().split('=')[1];

        if (sFilename !== '') {
          this.fileService.download(url, sFilename);
        }
      } else {
        console.log('File doesn`t exists');
      }
    });
  }

  public getFile(url, params: any): Observable<object> {
    let options = {
      responseType: 'blob',
    }
    return this.getFileContent(url, params, options);
  }

  public getFileFormURL(url, params: any) {
    let options = {
    }
    this.getFileContent(url, params, options).subscribe(res => {
      if (res['code'] === 200) {
        if (typeof res['data']['path'] !== 'undefined') {
          let sFilename = res['data']['path'].substring(res['data']['path'].lastIndexOf('/') + 1).split('?')[0];
          if (sFilename) this.fileService.download(res['data']['path'], sFilename);
        } else {
          console.log('File doesn`t exists');
        }
      }
    });
  }

  uploadCSV(files: Set<File>, formData: FormData = new FormData(), url, callback = null) {
    url = (config.API.ENV.isProxy ? '' : this.BASE_URL) + url;

    files.forEach(file => {
      formData.append("file", file, file.name);
    });

    this.httpOptions = new HttpHeaders({
      'Authorization': localStorage.getItem('TOKEN') ? 'ProDrivers ' + localStorage.getItem('TOKEN') : '!@#%$&*&*%^ERHDF#$^G',
    });

    let obj_rq = this.http.request('POST',
      url,
      {
        body: formData,
        responseType: "json",
        params: null,
        headers: this.httpOptions,
        observe: 'response'
      });
    return obj_rq;
  }
}
