import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { tb_usuario, Pagination, PaginatedResult } from '../models/Models';
import { Observable } from 'rxjs';
import { ConfigService } from "../Utils/config.service";
import { catchError, map, tap } from 'rxjs/operators'
@Injectable()
export class usuarioService {

    _baseUrl: string = '';
    list: any = [];
    constructor(private http: Http, private configService: ConfigService) {
        this._baseUrl = configService.getWebApiURL();
    }
    getSel_usuario(reporte: tb_usuario, pagina: Pagination): Observable<PaginatedResult<tb_usuario[]>> {
        var peginatedResult: PaginatedResult<tb_usuario[]> = new PaginatedResult<tb_usuario[]>();
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", 'application/json');
        let options = new RequestOptions({ headers: myHeaders });
        var data = [];
        // data[0] = pagina.CurrentPage;
        // data[1] = pagina.ItemsPerPage;
        // data[2] = reporte.Serie;
        // data[3] = reporte.Numerodoc;
        // data[4] = reporte.Fecha_Ini;
        // data[5] = reporte.Fecha_Fin;
        //return this.http.post(this._baseUrl + 'listarReporte',JSON.stringify({  reportes: reporte,      paginacion: pagina }),options)
        return this.http.post(this._baseUrl + 'sel_usuario', data, options).pipe(
            map(res => {
                this.list = res.json();
                peginatedResult.result = JSON.parse(this.list.DataJson);
                var paginationHeader: Pagination = this.getSerialized<Pagination>(JSON.parse(this.list.paginacion));
                peginatedResult.pagination = paginationHeader;
                return peginatedResult;
            }), catchError(this.handleError)
        );

    }
    getSerialized<T>(arg: any): T {
        return <T>JSON.parse(JSON.stringify(arg));
    }
    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
}