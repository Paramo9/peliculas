(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{32:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwCAv5or8ogAAADHSURBVHja7duhDgAgCEBBmp/tT5vF6txsbhjuKuV1IAIAAAAAAAAAAAAAAICftDzNbdrzkSFAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEOBSAwAAAAAAAIAr23MBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgOd3AAAAAAAAAMrZngsQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECPL8DAAAAAAAAAAAAAABUWM18bKnDf7a7AAAAAElFTkSuQmCC"},33:function(e,a,t){e.exports=t(55)},48:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),i=t.n(r),s=t(19),c=t(14),o=t(9),m=t(10),u=t(5),d=t(11),h=t(12),E=t(15),A=t.n(E),b={apiKey:"AIzaSyCb3BqsxK9vTX0CVhh6h8uxJd6ha15nHUQ",authDomain:"peliculas-1b60a.firebaseapp.com",databaseURL:"https://peliculas-1b60a.firebaseio.com",projectId:"peliculas-1b60a",storageBucket:"peliculas-1b60a.appspot.com",messagingSenderId:"127749849117",appId:"1:127749849117:web:943698b0b34888753646f4",measurementId:"G-VXZJT5LCEL"},g=(t(48),function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={email:"",password:"",r2:!1,r3:!1,mensajeError:""},n.handleChangeEmail=n.handleChangeEmail.bind(Object(u.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleClickRegistrar=n.handleClickRegistrar.bind(Object(u.a)(n)),n}return Object(m.a)(t,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;if(e.preventDefault(),A.a.apps.length)t=A.a.app("firestore");else var t=A.a.initializeApp(b,"firestore");t.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){var t=e.get("email"),n=e.get("password"),l=e.get("nombre"),r=e.get("nivel");t==a.state.email&&n==a.state.password&&(localStorage.setItem("nombre",l),localStorage.setItem("password",n),localStorage.setItem("email",t),localStorage.setItem("nivel",r),a.setState({r2:!0}))}));/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.state.email)?(document.getElementById("errorLogin").style.visibility="visible",a.setState({mensajeError:"*Las credenciales no son v\xe1lidas"})):(document.getElementById("errorLogin").style.visibility="visible",a.setState({mensajeError:"*Ingresa un e-mail v\xe1lido."}))}))}},{key:"handleClickRegistrar",value:function(e){e.preventDefault(),this.setState({r3:!0})}},{key:"render",value:function(){return this.state.r2?l.a.createElement(c.a,{to:"/peliculas/inicio"}):this.state.r3?l.a.createElement(c.a,{to:"/peliculas/registro"}):l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),l.a.createElement("div",{className:"wrapper fadeInDown"},l.a.createElement("div",{id:"formContent"},l.a.createElement("h2",{align:"center"},"Inicia Sesi\xf3n"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{align:"center"},l.a.createElement("h3",null,l.a.createElement("input",{id:"login",required:!0,className:"fadeIn second",name:"login",placeholder:"E-mail",type:"text",value:this.state.email,onChange:this.handleChangeEmail}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{id:"password",required:!0,className:"fadeIn third",name:"login",placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{id:"errorLogin",style:{visibility:"hidden",color:"red"}},this.state.mensajeError),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Ingresar",className:"fadeIn fourth"}),l.a.createElement("br",null),l.a.createElement("br",null)))),l.a.createElement("div",{id:"formFooter"},l.a.createElement("h3",{align:"center",className:"astyle underlineHover",onClick:this.handleClickRegistrar},"Reg\xedstrate aqu\xed")))))}}]),t}(l.a.Component)),p=(t(53),t(32)),v=t.n(p),f=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("input",{type:"checkbox",id:"btn-menu"}),l.a.createElement("label",{htmlFor:"btn-menu"},l.a.createElement("img",{src:v.a,width:"30px",height:"30px",alt:""})),l.a.createElement("nav",{className:"menu"},l.a.createElement("ul",null,l.a.createElement("li",null,"Pel\xedculas"),l.a.createElement("li",null,"Series"),l.a.createElement("li",null,"Favoritas"),l.a.createElement("li",null,"Mi Perfil"),l.a.createElement("li",null,"Cerrar Sesi\xf3n"))))}}]),t}(l.a.Component),C=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null),"Inicio")}}]),t}(l.a.Component),y=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={r1:!1,r2:!1,r3:!1},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({r1:!0})}},{key:"render",value:function(){return this.state.r1?l.a.createElement(c.a,{to:"/peliculas/login"}):l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},"El usuario ingresado es incorrecto"),l.a.createElement("br",null),l.a.createElement("h2",{align:"center"},"Intente nuevamente"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{align:"center"},l.a.createElement("input",{type:"submit",value:"Regresar"})),l.a.createElement("br",null),l.a.createElement("h2",{align:"center"},"\xbfA\xfan no te has Registrado?"),l.a.createElement("h3",{align:"center"},l.a.createElement(s.b,{to:"/peliculas/registro"},"Reg\xedstrate aqu\xed"))))}}]),t}(l.a.Component),I=(t(54),function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={email:"",password:"",name:"",r1:!1},n.handleChangeEmail=n.handleChangeEmail.bind(Object(u.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(u.a)(n)),n.handleChangeName=n.handleChangeName.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleClickRegresar=n.handleClickRegresar.bind(Object(u.a)(n)),n}return Object(m.a)(t,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;if(e.preventDefault(),A.a.apps.length)t=A.a.app("firestore");else var t=A.a.initializeApp(b,"firestore");t.firestore().collection("usuarios").get().then((function(e){var n=0;if(e.forEach((function(e){e.get("email")==a.state.email&&(n=1)})),1==n)alert("Lo setimos, ese e-mail ya est\xe1 registrado.");else{/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.state.email)?("visible"==document.getElementById("ErrorEmail").style.visibility&&(document.getElementById("ErrorEmail").style.visibility="hidden"),a.state.password.length<8?document.getElementById("ErrorPassword").style.visibility="visible":("visible"==document.getElementById("ErrorPassword").style.visibility&&(document.getElementById("ErrorPassword").style.visibility="hidden"),t.firestore().collection("usuarios").add({email:a.state.email,nombre:a.state.name,nivel:"usuario",password:a.state.password}),alert("\xa1Te has registrado con \xe9xito!"))):(document.getElementById("ErrorEmail").style.visibility="visible",a.state.password.length<8&&(document.getElementById("ErrorPassword").style.visibility="visible"))}}))}},{key:"handleClickRegresar",value:function(e){e.preventDefault(),this.setState({r1:!0})}},{key:"render",value:function(){return this.state.r1?l.a.createElement(c.a,{to:"/peliculas/login"}):l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),l.a.createElement("div",{className:"wrapper fadeInDown"},l.a.createElement("div",{id:"formContent"},l.a.createElement("h2",{align:"center"},"Registro"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{align:"center"},l.a.createElement("h3",null,l.a.createElement("input",{className:"fadeIn second",required:!0,placeholder:"E-mail",type:"text",value:this.state.email,onChange:this.handleChangeEmail}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{id:"ErrorEmail",style:{visibility:"hidden",color:"red",marginBottom:"20px"}},"*Este e-mail no es v\xe1lido."),l.a.createElement("input",{className:"fadeIn third",required:!0,placeholder:"Nombre",type:"text",value:this.state.name,onChange:this.handleChangeName}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{className:"fadeIn fourth",required:!0,placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{id:"ErrorPassword",style:{visibility:"hidden",color:"red"}},"*La contrase\xf1a debe tener m\xednimo 8 caracteres."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Registrar",className:"fadeIn fifth"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"Regresar",onClick:this.handleClickRegresar,className:"fadeIn sixth"}),l.a.createElement("br",null),l.a.createElement("br",null)))))))}}]),t}(l.a.Component));var w=function(){return l.a.createElement(s.a,null,l.a.createElement(c.b,{exact:!0,path:"/peliculas",component:g}),l.a.createElement(c.b,{exact:!0,path:"/peliculas/login",component:g}),l.a.createElement(c.b,{exact:!0,path:"/peliculas/inicio",component:C}),l.a.createElement(c.b,{exact:!0,path:"/peliculas/login_incorrecto",component:y}),l.a.createElement(c.b,{exact:!0,path:"/peliculas/registro",component:I}))},B=document.getElementById("root");i.a.render(l.a.createElement(w,null),B)}},[[33,1,2]]]);
//# sourceMappingURL=main.2ad6e218.chunk.js.map