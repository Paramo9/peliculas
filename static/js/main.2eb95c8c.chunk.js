(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{32:function(e,t,a){e.exports=a(51)},51:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(28),c=a.n(r),i=a(22),o=a(9),u=a(13),s=a(14),m=a(17),h=a(15),p=a(16),b=a(29),d=a.n(b),E={apiKey:"AIzaSyCb3BqsxK9vTX0CVhh6h8uxJd6ha15nHUQ",authDomain:"peliculas-1b60a.firebaseapp.com",databaseURL:"https://peliculas-1b60a.firebaseio.com",projectId:"peliculas-1b60a",storageBucket:"peliculas-1b60a.appspot.com",messagingSenderId:"127749849117",appId:"1:127749849117:web:943698b0b34888753646f4",measurementId:"G-VXZJT5LCEL"},g=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",r1:!1,r2:!1},n.handleChangeEmail=n.handleChangeEmail.bind(Object(m.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.app=d.a.initializeApp(E),n}return Object(s.a)(a,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=[],a=[],n=[],l=[],r=0;this.app.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){t[r]=e.get("email"),a[r]=e.get("password"),n[r]=e.get("nombre"),l[r]=e.get("nivel"),r+=1}))}));for(var c=0;c<t.length;c++)alert(t[r]);this.setState({r1:!0})}},{key:"render",value:function(){return this.state.r1?l.a.createElement(o.a,{to:"/login_incorrecto"}):this.state.r2?l.a.createElement(o.a,{to:"/inicio"}):l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},"Pel\xedculas P\xe1ramo"),l.a.createElement("br",null),l.a.createElement("h2",{align:"center"},"Inicia Sesi\xf3n"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{align:"center"},l.a.createElement("h3",null,"Correo electr\xf3nico:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleChangeEmail}),l.a.createElement("br",null),l.a.createElement("br",null),"Contrase\xf1a:",l.a.createElement("br",null),l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChangePassword}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Ingresar"}),l.a.createElement("br",null),l.a.createElement("br",null)))))}}]),a}(l.a.Component),v=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Inicio")}}]),a}(l.a.Component),f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Login incorrecto")}}]),a}(l.a.Component);var C=function(){return l.a.createElement(i.a,null,l.a.createElement(o.b,{exact:!0,path:"/peliculas",component:g}),l.a.createElement(o.b,{exact:!0,path:"/login",component:g}),l.a.createElement(o.b,{exact:!0,path:"/inicio",component:v}),l.a.createElement(o.b,{exact:!0,path:"/login_incorrecto",component:f}))},j=document.getElementById("root");c.a.render(l.a.createElement(C,null),j)}},[[32,1,2]]]);
//# sourceMappingURL=main.2eb95c8c.chunk.js.map