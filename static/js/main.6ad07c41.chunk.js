(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{32:function(e,a,t){e.exports=t(51)},51:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(29),i=t.n(r),c=t(18),s=t(14),o=t(10),m=t(11),u=t(7),h=t(12),d=t(13),p=t(22),b=t.n(p),g={apiKey:"AIzaSyCb3BqsxK9vTX0CVhh6h8uxJd6ha15nHUQ",authDomain:"peliculas-1b60a.firebaseapp.com",databaseURL:"https://peliculas-1b60a.firebaseio.com",projectId:"peliculas-1b60a",storageBucket:"peliculas-1b60a.appspot.com",messagingSenderId:"127749849117",appId:"1:127749849117:web:943698b0b34888753646f4",measurementId:"G-VXZJT5LCEL"},E=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={email:"",password:"",r1:!1,r2:!1,r3:!1},n.handleChangeEmail=n.handleChangeEmail.bind(Object(u.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleClickRegistrar=n.handleClickRegistrar.bind(Object(u.a)(n)),n.app=b.a.initializeApp(g),n}return Object(m.a)(t,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),this.app.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){var t=e.get("email"),n=e.get("password"),l=e.get("nombre"),r=e.get("nivel");t==a.state.email&&n==a.state.password&&(localStorage.setItem("nombre",l),localStorage.setItem("password",n),localStorage.setItem("email",t),localStorage.setItem("nivel",r),a.setState({r2:!0}))})),a.setState({r1:!0})}))}},{key:"handleClickRegistrar",value:function(e){e.preventDefault(),this.setState({r3:!0})}},{key:"render",value:function(){return this.state.r1?l.a.createElement(s.a,{to:"/peliculas/login_incorrecto"}):this.state.r2?l.a.createElement(s.a,{to:"/peliculas/inicio"}):this.state.r3?l.a.createElement(s.a,{to:"/peliculas/registrar"}):l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),l.a.createElement("div",{className:"wrapper fadeInDown"},l.a.createElement("div",{id:"formContent"},l.a.createElement("h2",{align:"center"},"Inicia Sesi\xf3n"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{align:"center"},l.a.createElement("h3",null,l.a.createElement("input",{id:"login",className:"fadeIn second",name:"login",placeholder:"E-mail",type:"text",value:this.state.email,onChange:this.handleChangeEmail}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{id:"password",className:"fadeIn third",name:"login",placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Ingresar",className:"fadeIn fourth"}),l.a.createElement("br",null),l.a.createElement("br",null)))),l.a.createElement("div",{id:"formFooter"},l.a.createElement("h3",{align:"center",className:"astyle underlineHover",onClick:this.handleClickRegistrar},"Reg\xedstrate aqu\xed")))))}}]),t}(l.a.Component),v=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Inicio")}}]),t}(l.a.Component),f=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},"El usuario ingresado es incorrecto"),l.a.createElement("br",null),l.a.createElement("h2",{align:"center"},"Intente nuevamente"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{align:"center"},l.a.createElement(c.b,{to:"/peliculas/login"},l.a.createElement("input",{type:"submit",value:"Regresar"}))),l.a.createElement("br",null),l.a.createElement("h2",{align:"center"},"\xbfA\xfan no te has Registrado?"),l.a.createElement("h3",{align:"center"},l.a.createElement(c.b,{to:"/peliculas/registrar"},"Reg\xedstrate aqu\xed"))))}}]),t}(l.a.Component),C=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={email:"",password:"",name:""},n.handleChangeEmail=n.handleChangeEmail.bind(Object(u.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(u.a)(n)),n.handleChangeName=n.handleChangePassword.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.app=b.a.initializeApp(g),n}return Object(m.a)(t,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),l.a.createElement("div",{className:"wrapper fadeInDown"},l.a.createElement("div",{id:"formContent"},l.a.createElement("h2",{align:"center"},"Registro"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{align:"center"},l.a.createElement("h3",null,l.a.createElement("input",{id:"login",className:"fadeIn second",name:"login",placeholder:"E-mail",type:"text",value:this.state.email,onChange:this.handleChangeEmail}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{id:"login",className:"fadeIn third",name:"login",placeholder:"Nombre",type:"text",value:this.state.name,onChange:this.handleChangeName}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{id:"password",className:"fadeIn fourth",name:"login",placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Ingresar",className:"fadeIn fifth"}),l.a.createElement("br",null),l.a.createElement("br",null)))),l.a.createElement("div",{id:"formFooter"},l.a.createElement("h3",{align:"center",className:"astyle underlineHover"},"Reg\xedstrate aqu\xed")))))}}]),t}(l.a.Component);var w=function(){return l.a.createElement(c.a,null,l.a.createElement(s.b,{exact:!0,path:"/peliculas",component:E}),l.a.createElement(s.b,{exact:!0,path:"/peliculas/login",component:E}),l.a.createElement(s.b,{exact:!0,path:"/peliculas/inicio",component:v}),l.a.createElement(s.b,{exact:!0,path:"/peliculas/login_incorrecto",component:f}),l.a.createElement(s.b,{exact:!0,path:"/peliculas/registrar",component:C}))},y=document.getElementById("root");i.a.render(l.a.createElement(w,null),y)}},[[32,1,2]]]);
//# sourceMappingURL=main.6ad07c41.chunk.js.map