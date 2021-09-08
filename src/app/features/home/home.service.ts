import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { BaseService } from 'src/app/core/services/base.service';
import {ApiEndpoints} from 'src/app/core/enums/api-endpoints.enum';
import { from, Observable } from 'rxjs';

import { DataLists } from 'src/app/core/models/data-lists.model';
import { map } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { DropDownItem } from 'src/app/core/models/drop-down-item.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService
{

  constructor(protected _http: HttpClient, 
    private _baseService: BaseService){ 
  }

  // getDropDownListData() : Observable<DataLists>
  // {
  //   //return super.findAll();
  //   return this.findAll(ApiEndpoints.RegistrationForm).pipe(map(
  //     (value:any)=>{ 
  //     const data:DataLists = {genderList: value.gender_List,
  //                             orgSizeList : value.orgSize_List,
  //                             orgOwnershipTypeList : value.orgOwnershipType_List,
  //                             memberRoleList:value.memberRole_List,
  //                             sectorList:value.sector_List,
  //                             countryList:value.country_List
  //                           };
  //     return data;
  //   }));
  // }
  dataList : DropDownItem[] = []; 
  $dropDownList: Observable<DropDownItem[]> | undefined;
  getDropDownListData()  //: Observable<DataLists>
  {
    this._baseService.findAll<DropDownItem[]>().subscribe((dataListResponse:DropDownItem[]) => this.dataList = dataListResponse);
  }

  getDropDownListDataObservable() : Observable<DropDownItem[]>
  {
    return this._baseService.findAll<DropDownItem[]>();
  }

  getDropDownListDataById(Id : number):Observable<DropDownItem>  //: Observable<DataLists>
  {

    return this._baseService.findById<DropDownItem>(Id);

  }
  
}
