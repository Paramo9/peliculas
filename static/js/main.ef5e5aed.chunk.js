(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{32:function(e,t,a){e.exports=a(52)},47:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(28),c=a.n(r),i=a(22),o=a(9),s=a(13),u=a(14),m=a(17),h=a(15),p=a(16),b=a(29),d=a.n(b),E={apiKey:"AIzaSyCb3BqsxK9vTX0CVhh6h8uxJd6ha15nHUQ",authDomain:"peliculas-1b60a.firebaseapp.com",databaseURL:"https://peliculas-1b60a.firebaseio.com",projectId:"peliculas-1b60a",storageBucket:"peliculas-1b60a.appspot.com",messagingSenderId:"127749849117",appId:"1:127749849117:web:943698b0b34888753646f4",measurementId:"G-VXZJT5LCEL"},g=(a(47),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",r1:!1,r2:!1},n.handleChangeEmail=n.handleChangeEmail.bind(Object(m.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.app=d.a.initializeApp(E),n}return Object(u.a)(a,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.app.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){var a=e.get("email"),n=e.get("password"),l=e.get("nombre"),r=e.get("nivel");(a=t.state.email&&n==t.state.password)&&(localStorage.setItem("nombre",l),localStorage.setItem("password",n),localStorage.setItem("email",a),localStorage.setItem("nivel",r),t.setState({r2:!0}))})),t.setState({r1:!0})}))}},{key:"render",value:function(){return this.state.r1?l.a.createElement(o.a,{to:"/login_incorrecto"}):this.state.r2?l.a.createElement(o.a,{to:"/inicio"}):l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},"Pel\xedculas P\xe1ramo"),l.a.createElement("br",null),l.a.createElement("h2",{align:"center"},"Inicia Sesi\xf3n"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{align:"center"},l.a.createElement("h3",null,"Correo electr\xf3nico:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleChangeEmail}),l.a.createElement("br",null),l.a.createElement("br",null),"Contrase\xf1a:",l.a.createElement("br",null),l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChangePassword}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Ingresar"}),l.a.createElement("br",null),l.a.createElement("br",null)))),l.a.createElement("h3",{align:"center",className:"link"},"Reg\xedstrate aqu\xed"))}}]),a}(l.a.Component)),v=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Inicio")}}]),a}(l.a.Component),f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Login incorrecto")}}]),a}(l.a.Component);var C=function(){return l.a.createElement(i.a,null,l.a.createElement(o.b,{exact:!0,path:"/peliculas",component:g}),l.a.createElement(o.b,{exact:!0,path:"/login",component:g}),l.a.createElement(o.b,{exact:!0,path:"/inicio",component:v}),l.a.createElement(o.b,{exact:!0,path:"/login_incorrecto",component:f}))},j=document.getElementById("root");c.a.render(l.a.createElement(C,null),j)}},[[32,1,2]]]);
//# sourceMappingURL=main.ef5e5aed.chunk.js.map