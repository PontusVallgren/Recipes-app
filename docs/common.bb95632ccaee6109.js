"use strict";(self.webpackChunkApp_planer=self.webpackChunkApp_planer||[]).push([[592],{3870:(f,u,n)=>{n.d(u,{a:()=>g});var o=n(2986),a=n(4850),c=n(6738),h=n(5599),t=n(3510);let g=(()=>{class s{constructor(l,_){this.authService=l,this.router=_}canActivate(l,_){return this.authService.user.pipe((0,o.q)(1),(0,a.U)(v=>!!v||this.router.createUrlTree(["/auth"])))}}return s.\u0275fac=function(l){return new(l||s)(c.LFG(h.e),c.LFG(t.F0))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},6238:(f,u,n)=>{n.d(u,{p:()=>o});class o{constructor(c,h){this.name=c,this.amount=h}}},3320:(f,u,n)=>{n.r(u),n.d(u,{ShoppingListModule:()=>I});var o=n(4719),a=n(3510),c=n(3870),h=n(4466),t=n(6738),g=n(2457),s=n(6895),m=n(6238);const l=["f"];function _(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.onDelete())}),t._uU(1," Delete "),t.qZA()}}let v=(()=>{class i{constructor(e){this.shoppingListService=e,this.editMode=!1}ngOnInit(){this.subscription=this.shoppingListService.startedEditing.subscribe(e=>{this.editedItemIndex=e,this.editMode=!0,this.editedItem=this.shoppingListService.getIngredient(e),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(e){const r=e.value,p=new m.p(r.name,r.amount);this.editMode?this.shoppingListService.updateIngredient(this.editedItemIndex,p):this.shoppingListService.addIngredient(p),this.slForm.reset(),this.editMode=!1}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.shoppingListService.deleteIngredient(this.editedItemIndex),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g._))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-shopping-edit"]],viewQuery:function(e,r){if(1&e&&t.Gf(l,5),2&e){let p;t.iGM(p=t.CRH())&&(r.slForm=p.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,r){if(1&e){const p=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(p);const S=t.MAs(3);return t.KtG(r.onSubmit(S))}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA()(),t.TgZ(13,"div",0)(14,"div",1)(15,"button",10),t._uU(16),t.qZA(),t.YNc(17,_,2,0,"button",11),t.TgZ(18,"button",12),t.NdJ("click",function(){return r.onClear()}),t._uU(19," Clear "),t.qZA()()()()()()}if(2&e){const p=t.MAs(3);t.xp6(15),t.Q6J("disabled",!p.valid),t.xp6(1),t.hij(" ",r.editMode?"Edit":"Add"," "),t.xp6(1),t.Q6J("ngIf",r.editMode)}},dependencies:[o._Y,o.Fj,o.wV,o.JJ,o.JL,o.Q7,o.c5,o.On,o.F,s.O5]}),i})();function E(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const L=t.CHM(e).index,S=t.oxw();return t.KtG(S.onEditItem(L))}),t._uU(1),t.qZA()}if(2&i){const e=d.$implicit;t.xp6(1),t.AsE("",e.name," (",e.amount,")")}}let C=(()=>{class i{constructor(e){this.shoppingListService=e,this.ingredients=[]}ngOnInit(){this.ingredients=this.shoppingListService.getShoppingList(),this.subscription=this.shoppingListService.ingredientsUpdate.subscribe(e=>{this.ingredients=e})}ngOnDestroy(){this.subscription.unsubscribe()}onEditItem(e){this.shoppingListService.startedEditing.next(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g._))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-edit")(3,"hr"),t.TgZ(4,"ul",2),t.YNc(5,E,2,2,"a",3),t.qZA()()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",r.ingredients))},dependencies:[s.sg,v]}),i})(),I=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[o.u5,a.Bz.forChild([{path:"",component:C,canActivate:[c.a]}]),h.m]}),i})()},2457:(f,u,n)=>{n.d(u,{_:()=>h});var o=n(5529),a=n(6238),c=n(6738);let h=(()=>{class t{constructor(){this.ingredientsUpdate=new o.xQ,this.startedEditing=new o.xQ,this.shoppingList=[new a.p("tomat",5),new a.p("Gurka",15)]}getShoppingList(){return this.shoppingList.slice()}getIngredient(s){return this.shoppingList[s]}addIngredient(s){this.shoppingList.push(s),this.ingredientsUpdate.next(this.shoppingList.slice())}addIngredients(s){console.log(...s),this.shoppingList.push(...s),this.ingredientsUpdate.next(this.shoppingList.slice())}updateIngredient(s,m){this.shoppingList[s]=m,this.ingredientsUpdate.next(this.shoppingList.slice())}deleteIngredient(s){this.shoppingList.splice(s,1),this.ingredientsUpdate.next(this.shoppingList.slice())}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);