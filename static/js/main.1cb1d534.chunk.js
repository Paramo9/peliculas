(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{32:function(e,a,t){e.exports=t(51)},51:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(28),i=t.n(r),c=t(22),o=t(9),u=t(13),s=t(14),m=t(17),p=t(15),h=t(16),b=t(29),d=t.n(b),E={apiKey:"AIzaSyCb3BqsxK9vTX0CVhh6h8uxJd6ha15nHUQ",authDomain:"peliculas-1b60a.firebaseapp.com",databaseURL:"https://peliculas-1b60a.firebaseio.com",projectId:"peliculas-1b60a",storageBucket:"peliculas-1b60a.appspot.com",messagingSenderId:"127749849117",appId:"1:127749849117:web:943698b0b34888753646f4",measurementId:"G-VXZJT5LCEL"},g=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={email:"",password:"",r1:!1,r2:!1},n.handleChangeEmail=n.handleChangeEmail.bind(Object(m.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.app=d.a.initializeApp(E),n.usuarios=n.app.database().ref().child("usuarios").ref,n}return Object(s.a)(t,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.usuarios.push({nombre:"Paramo",email:"trollol.lapr@gmail.com",password:"Paramo82025840&",nivel:"Administrador"})}},{key:"render",value:function(){return this.state.r1?l.a.createElement(o.a,{to:"/login_incorrecto"}):this.state.r2?l.a.createElement(o.a,{to:"/inicio"}):l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},"Pel\xedculas P\xe1ramo"),l.a.createElement("br",null),l.a.createElement("h2",{align:"center"},"Inicia Sesi\xf3n"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{align:"center"},l.a.createElement("h3",null,"Correo electr\xf3nico:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleChangeEmail}),l.a.createElement("br",null),l.a.createElement("br",null),"Contrase\xf1a:",l.a.createElement("br",null),l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChangePassword}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Ingresar"}),l.a.createElement("br",null),l.a.createElement("br",null)))))}}]),t}(l.a.Component),v=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Inicio")}}]),t}(l.a.Component),f=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Login incorrecto")}}]),t}(l.a.Component);var C=function(){return l.a.createElement(c.a,null,l.a.createElement(o.b,{exact:!0,path:"/peliculas",component:g}),l.a.createElement(o.b,{exact:!0,path:"/login",component:g}),l.a.createElement(o.b,{exact:!0,path:"/inicio",component:v}),l.a.createElement(o.b,{exact:!0,path:"/login_incorrecto",component:f}))},j=document.getElementById("root");i.a.render(l.a.createElement(C,null),j)}},[[32,1,2]]]);
//# sourceMappingURL=main.1cb1d534.chunk.js.map