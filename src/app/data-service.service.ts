import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface MenuItem {
  name: string;
  link?: string;
}
export interface TextItem {
  type: string;
  text: string;
  title?: string;
}
export interface ServicesItem {
  name: string;
  description: string;
  img: string;
  link?: string;
}
export interface FooterData {
  headquartes: {
    location: string;
    adress: string;
  };
  contacts: [
    {
      location: string;
      adress: string;
      phone?: string;
    }
  ];
  social: [
    {
      name: string;
      img: string;
      link: string;
    }
  ];
  menu: MenuItem[];
  copiright: string;
}

@Injectable({ providedIn: "root" })
export class DataServiceService {
  constructor(private http: HttpClient) {}

  getmenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>("http://localhost:3000/menuItems");
  }
  getPageText(type: string): Observable<TextItem[]> {
    return this.http
      .get<TextItem[]>(`http://localhost:3000/texts`)
      .pipe(map(res => res.filter(txt => txt.type === type)));
  }
  getTexts(): Observable<TextItem[]> {
    return this.http.get<TextItem[]>("http://localhost:3000/texts");
  }
  getServices(): Observable<ServicesItem[]> {
    return this.http.get<ServicesItem[]>("http://localhost:3000/services");
  }
  getFooter(): Observable<FooterData> {
    return this.http.get<FooterData>("http://localhost:3000/footerData");
  }
}
