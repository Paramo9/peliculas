(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{32:function(e,a,t){e.exports=t(52)},47:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(28),i=t.n(r),c=t(22),o=t(9),s=t(13),u=t(14),m=t(17),p=t(15),h=t(16),d=t(29),b=t.n(d),g={apiKey:"AIzaSyCb3BqsxK9vTX0CVhh6h8uxJd6ha15nHUQ",authDomain:"peliculas-1b60a.firebaseapp.com",databaseURL:"https://peliculas-1b60a.firebaseio.com",projectId:"peliculas-1b60a",storageBucket:"peliculas-1b60a.appspot.com",messagingSenderId:"127749849117",appId:"1:127749849117:web:943698b0b34888753646f4",measurementId:"G-VXZJT5LCEL"},E=(t(47),function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={email:"",password:"",r1:!1,r2:!1},n.handleChangeEmail=n.handleChangeEmail.bind(Object(m.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.app=b.a.initializeApp(g),n}return Object(u.a)(t,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),this.app.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){var t=e.get("email"),n=e.get("password"),l=e.get("nombre"),r=e.get("nivel");(t=a.state.email&&n==a.state.password)&&(localStorage.setItem("nombre",l),localStorage.setItem("password",n),localStorage.setItem("email",t),localStorage.setItem("nivel",r),a.setState({r2:!0}))})),a.setState({r1:!0})}))}},{key:"render",value:function(){return this.state.r1?l.a.createElement(o.a,{to:"/login_incorrecto"}):this.state.r2?l.a.createElement(o.a,{to:"/inicio"}):l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},"Pel\xedculas Antonio"),l.a.createElement("div",{className:"wrapper fadeInDown"},l.a.createElement("div",{id:"formContent"},l.a.createElement("h2",{align:"center"},"Inicia Sesi\xf3n"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{align:"center"},l.a.createElement("h3",null,l.a.createElement("input",{id:"login",className:"fadeIn second",name:"login",placeholder:"E-mail",type:"text",value:this.state.email,onChange:this.handleChangeEmail}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{id:"password",className:"fadeIn third",name:"login",placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Ingresar",className:"fadeIn fourth"}),l.a.createElement("br",null),l.a.createElement("br",null)))),l.a.createElement("div",{id:"formFooter"},l.a.createElement("h3",{align:"center",className:"astyle underlineHover"},"Reg\xedstrate aqu\xed")))))}}]),t}(l.a.Component)),f=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Inicio")}}]),t}(l.a.Component),v=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Login incorrecto")}}]),t}(l.a.Component);var C=function(){return l.a.createElement(c.a,null,l.a.createElement(o.b,{exact:!0,path:"/peliculas",component:E}),l.a.createElement(o.b,{exact:!0,path:"/login",component:E}),l.a.createElement(o.b,{exact:!0,path:"/inicio",component:f}),l.a.createElement(o.b,{exact:!0,path:"/login_incorrecto",component:v}))},w=document.getElementById("root");i.a.render(l.a.createElement(C,null),w)}},[[32,1,2]]]);
//# sourceMappingURL=main.b956ea4e.chunk.js.map