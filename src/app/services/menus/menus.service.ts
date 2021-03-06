import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


export interface Menu {
  title: "",
  url: ""
}

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private afs: AngularFirestore) { }

  getMenus() {
    return this.afs.collection("menus").valueChanges();
  }

  addMenu(menu:Menu) {
    this.afs.collection("menus").add(menu);
  }

  deleteMenu(menuId) {
    this.afs.doc('menus/'+menuId).delete();
  }

  updateMenu(menuId, menu:Menu) {
    this.afs.doc('menus/'+menuId).update(menu);
  }
}
