"use strict";(self.webpackChunkguardlink=self.webpackChunkguardlink||[]).push([[638],{8638:(N,i,a)=>{a.r(i),a.d(i,{ContactModule:()=>y});var l=a(6895),c=a(6773),n=a(433),e=a(8256),s=a(8503),u=a(2619),m=a(9836),p=a(3054),v=a(1740);const g=[{path:"",component:(()=>{class t{constructor(o){this.localService=o,this.addNewFeedBack=new n.cw({userName:new n.NI("",n.kI.required),userContact:new n.NI("",n.kI.required),userEmail:new n.NI(""),userMessage:new n.NI("",n.kI.required)})}onSubmit(){var o=new FormData;o.append("addDate",(0,l.p6)(Date(),"yyyy-MM-dd","en-US")),o.append("userName",this.addNewFeedBack.value.userEmail),o.append("userContact",this.addNewFeedBack.value.userContact),o.append("userEmail",this.addNewFeedBack.value.userEmail),o.append("userMessage",this.addNewFeedBack.value.userMessage),this.localService.postFunction(o,"/addfeedback.php","Feedback Submitted").then(d=>{this.addNewFeedBack.reset()})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.V))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-contact"]],decls:50,vars:2,consts:[[1,"footer-gap"],[1,"jobs-listing"],[1,"container-fluid","page-img"],[1,"text-center","text-white"],[1,"container-fluid"],[1,"container"],[1,"row"],[1,"col-12"],[1,"contact-title"],[1,"col-lg-8"],[3,"formGroup","ngSubmit"],[1,"col-sm-6"],[1,"form-group"],["pInputText","","name","name","id","name","type","text","onfocus","this.placeholder = ''","onblur","this.placeholder = 'Enter your name'","placeholder","Enter your name","formControlName","userName","required","",1,"form-control","valid"],["pInputText","","name","contact","id","contact","type","text","onfocus","this.placeholder = ''","onblur","this.placeholder = 'Enter contact address'","placeholder","Phone Number","formControlName","userContact","required","",1,"form-control","valid"],["pInputText","","name","email","id","email","type","email","onfocus","this.placeholder = ''","onblur","this.placeholder = 'Enter email address'","placeholder","Email","formControlName","userEmail","required","",1,"form-control","valid"],["pInputTextarea","","name","message","id","message","cols","30","rows","10","onfocus","this.placeholder = ''","onblur","this.placeholder = 'Enter Message'","placeholder"," Enter Message","formControlName","userMessage","required","",1,"form-control","w-100"],[1,"form-group","mt-2"],["type","submit",1,"btn","btn-info","btn-lg",3,"disabled"],[1,"col-lg-3","offset-lg-1"],[1,"media","contact-info"],[1,"media-body"],[1,"contact-info__icon"],[1,"ti-tablet"],[1,"ti-email"]],template:function(o,d){1&o&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0)(2,"section",1)(3,"div",2)(4,"h1",3),e._uU(5,"Contact Us"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"h2",8),e._uU(11,"Get in Touch"),e.qZA()(),e.TgZ(12,"div",9)(13,"form",10),e.NdJ("ngSubmit",function(){return d.onSubmit()}),e.TgZ(14,"div",6)(15,"div",11)(16,"div",12),e._UZ(17,"input",13),e.qZA()(),e.TgZ(18,"div",11)(19,"div",12),e._UZ(20,"input",14),e.qZA()(),e.TgZ(21,"div",7)(22,"div",12),e._UZ(23,"input",15),e.qZA()(),e.TgZ(24,"div",7)(25,"div",12),e._UZ(26,"textarea",16),e.qZA()()(),e.TgZ(27,"div",17)(28,"button",18),e._uU(29," Send "),e.qZA()()()(),e.TgZ(30,"div",19)(31,"div",20)(32,"div",21)(33,"h3"),e._uU(34,"Accra, Ghana."),e.qZA()()(),e.TgZ(35,"div",20)(36,"span",22),e._UZ(37,"i",23),e.qZA(),e.TgZ(38,"div",21)(39,"h3"),e._uU(40,"(+233)55 409 6818"),e.qZA(),e.TgZ(41,"h3"),e._uU(42,"(+233)53 070 4269"),e.qZA()()(),e.TgZ(43,"div",20)(44,"span",22),e._UZ(45,"i",24),e.qZA(),e.TgZ(46,"div",21)(47,"p"),e._uU(48,"Send us your query anytime!"),e.qZA()()()()()()()(),e._UZ(49,"app-footer")),2&o&&(e.xp6(13),e.Q6J("formGroup",d.addNewFeedBack),e.xp6(15),e.Q6J("disabled",!d.addNewFeedBack.valid))},dependencies:[u.S,m.c,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.sg,n.u,p.g,v.o],styles:[".form-group[_ngcontent-%COMP%]{padding-bottom:7px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(g),c.Bz]}),t})();var h=a(1985),Z=a(9959),C=a(6801);let y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,f,h.W,Z._,C.I]}),t})()}}]);