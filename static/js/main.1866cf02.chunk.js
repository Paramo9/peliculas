(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{32:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwCAv5or8ogAAADHSURBVHja7duhDgAgCEBBmp/tT5vF6txsbhjuKuV1IAIAAAAAAAAAAAAAAICftDzNbdrzkSFAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEOBSAwAAAAAAAIAr23MBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgOd3AAAAAAAAAMrZngsQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECPL8DAAAAAAAAAAAAAABUWM18bKnDf7a7AAAAAElFTkSuQmCC"},33:function(e,a,t){e.exports=t(55)},48:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(29),i=t.n(r),s=t(18),c=t(14),o=t(9),m=t(10),u=t(4),d=t(11),h=t(12),E=t(15),b=t.n(E),g={apiKey:"AIzaSyCb3BqsxK9vTX0CVhh6h8uxJd6ha15nHUQ",authDomain:"peliculas-1b60a.firebaseapp.com",databaseURL:"https://peliculas-1b60a.firebaseio.com",projectId:"peliculas-1b60a",storageBucket:"peliculas-1b60a.appspot.com",messagingSenderId:"127749849117",appId:"1:127749849117:web:943698b0b34888753646f4",measurementId:"G-VXZJT5LCEL"},A=(t(48),function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var l;return Object(o.a)(this,t),(l=a.call(this,e)).state={email:"",password:"",r2:!1,r3:!1,mensajeError:""},l.handleChangeEmail=l.handleChangeEmail.bind(Object(u.a)(l)),l.handleChangePassword=l.handleChangePassword.bind(Object(u.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(u.a)(l)),l.handleClickRegistrar=l.handleClickRegistrar.bind(Object(u.a)(l)),l}return Object(m.a)(t,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;if(e.preventDefault(),b.a.apps.length)t=b.a.app("firestore");else var t=b.a.initializeApp(g,"firestore");t.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){var t=e.get("email"),l=e.get("password"),n=e.get("nombre"),r=e.get("nivel");t==a.state.email&&l==a.state.password&&(localStorage.setItem("nombre",n),localStorage.setItem("password",l),localStorage.setItem("email",t),localStorage.setItem("nivel",r),a.setState({r2:!0}))}));/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.state.email)?(document.getElementById("errorLogin").style.visibility="visible",a.setState({mensajeError:"*Las credenciales no son v\xe1lidas"})):(document.getElementById("errorLogin").style.visibility="visible",a.setState({mensajeError:"*Ingresa un e-mail v\xe1lido."}))}))}},{key:"handleClickRegistrar",value:function(e){e.preventDefault(),this.setState({r3:!0})}},{key:"render",value:function(){return this.state.r2?n.a.createElement(c.a,{to:"/peliculas/inicio"}):this.state.r3?n.a.createElement(c.a,{to:"/peliculas/registro"}):n.a.createElement("div",null,n.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),n.a.createElement("h2",{align:"center"},"La primera regla del Club de la Pel\xedcula es no hablar del Club de la Pel\xedcula"),n.a.createElement("div",{className:"wrapper fadeInDown"},n.a.createElement("div",{id:"formContent"},n.a.createElement("h2",{align:"center"},"Inicia Sesi\xf3n"),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{align:"center"},n.a.createElement("h3",null,n.a.createElement("input",{id:"login",required:!0,className:"fadeIn second",name:"login",placeholder:"E-mail",type:"text",value:this.state.email,onChange:this.handleChangeEmail}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{id:"password",required:!0,className:"fadeIn third",name:"login",placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{id:"errorLogin",style:{visibility:"hidden",color:"red"}},this.state.mensajeError),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{type:"submit",value:"Ingresar",className:"fadeIn fourth"}),n.a.createElement("br",null),n.a.createElement("br",null)))),n.a.createElement("div",{id:"formFooter"},n.a.createElement("h3",{align:"center",className:"astyle underlineHover",onClick:this.handleClickRegistrar},"Reg\xedstrate aqu\xed")))))}}]),t}(n.a.Component)),p=(t(53),t(32)),v=t.n(p),y=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var l;return Object(o.a)(this,t),(l=a.call(this,e)).handleCerrarSesion=l.handleCerrarSesion.bind(Object(u.a)(l)),l}return Object(m.a)(t,[{key:"handleCerrarSesion",value:function(e){e.preventDefault(),localStorage.clear(),localStorage.setItem("accion","1")}},{key:"render",value:function(){return n.a.createElement("header",null,n.a.createElement("input",{type:"checkbox",id:"btn-menu"}),n.a.createElement("label",{htmlFor:"btn-menu"},n.a.createElement("img",{src:v.a,width:"30px",height:"30px",alt:""})),n.a.createElement("nav",{className:"menu"},n.a.createElement("ul",null,n.a.createElement("li",null,"Pel\xedculas"),n.a.createElement("li",null,"Series"),n.a.createElement("li",null,"Favoritas"),n.a.createElement("li",null,"Mi Perfil"),n.a.createElement("li",{onClick:this.handleCerrarSesion},"Cerrar Sesi\xf3n"))))}}]),t}(n.a.Component),C=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return"1"==localStorage.getItem("accion")?n.a.createElement(c.a,{to:"/peliculas/login"}):n.a.createElement("div",null,n.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),n.a.createElement("h2",{align:"center"},"La primera regla del Club de la Pel\xedcula es no hablar del Club de la Pel\xedcula"),n.a.createElement(y,null),"Inicio",localStorage.getItem("accion"))}}]),t}(n.a.Component),f=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var l;return Object(o.a)(this,t),(l=a.call(this,e)).state={r1:!1,r2:!1,r3:!1},l.handleSubmit=l.handleSubmit.bind(Object(u.a)(l)),l}return Object(m.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({r1:!0})}},{key:"render",value:function(){return this.state.r1?n.a.createElement(c.a,{to:"/peliculas/login"}):n.a.createElement("div",null,n.a.createElement("h1",{align:"center"},"El usuario ingresado es incorrecto"),n.a.createElement("br",null),n.a.createElement("h2",{align:"center"},"Intente nuevamente"),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{align:"center"},n.a.createElement("input",{type:"submit",value:"Regresar"})),n.a.createElement("br",null),n.a.createElement("h2",{align:"center"},"\xbfA\xfan no te has Registrado?"),n.a.createElement("h3",{align:"center"},n.a.createElement(s.b,{to:"/peliculas/registro"},"Reg\xedstrate aqu\xed"))))}}]),t}(n.a.Component),I=(t(54),function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var l;return Object(o.a)(this,t),(l=a.call(this,e)).state={email:"",password:"",name:"",r1:!1,mensajeError:""},l.handleChangeEmail=l.handleChangeEmail.bind(Object(u.a)(l)),l.handleChangePassword=l.handleChangePassword.bind(Object(u.a)(l)),l.handleChangeName=l.handleChangeName.bind(Object(u.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(u.a)(l)),l.handleClickRegresar=l.handleClickRegresar.bind(Object(u.a)(l)),l}return Object(m.a)(t,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;if(e.preventDefault(),b.a.apps.length)t=b.a.app("firestore");else var t=b.a.initializeApp(g,"firestore");t.firestore().collection("usuarios").get().then((function(e){var l=0;if(e.forEach((function(e){e.get("email")==a.state.email&&(l=1)})),1==l)document.getElementById("ErrorEmail").style.visibility="visible",a.setState({mensajeError:"*Este e-mail ya est\xe1 registrado."});else{/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.state.email)?("visible"==document.getElementById("ErrorEmail").style.visibility&&(document.getElementById("ErrorEmail").style.visibility="hidden"),a.state.password.length<8||a.state.password.length>13?document.getElementById("ErrorPassword").style.visibility="visible":a.state.name.includes(" ")?("visible"==document.getElementById("ErrorPassword").style.visibility&&(document.getElementById("ErrorPassword").style.visibility="hidden"),document.getElementById("ErrorName").style.visibility="visible"):("visible"==document.getElementById("ErrorPassword").style.visibility&&(document.getElementById("ErrorPassword").style.visibility="hidden"),"visible"==document.getElementById("ErrorName").style.visibility&&(document.getElementById("ErrorName").style.visibility="hidden"),t.firestore().collection("usuarios").add({email:a.state.email,nombre:a.state.name,nivel:"usuario",password:a.state.password}),alert("\xa1Te has registrado con \xe9xito!"))):(document.getElementById("ErrorEmail").style.visibility="visible",a.setState({mensajeError:"*Este e-mail no es v\xe1lido."}),a.state.password.length<8&&(document.getElementById("ErrorPassword").style.visibility="visible"))}}))}},{key:"handleClickRegresar",value:function(e){e.preventDefault(),this.setState({r1:!0})}},{key:"render",value:function(){return this.state.r1?n.a.createElement(c.a,{to:"/peliculas/login"}):n.a.createElement("div",null,n.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),n.a.createElement("h2",{align:"center"},"La primera regla del Club de la Pel\xedcula es no hablar del Club de la Pel\xedcula"),n.a.createElement("div",{className:"wrapper fadeInDown"},n.a.createElement("div",{id:"formContent"},n.a.createElement("h2",{align:"center"},"Registro"),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{align:"center"},n.a.createElement("h3",null,n.a.createElement("input",{className:"fadeIn second",required:!0,placeholder:"E-mail",type:"text",value:this.state.email,onChange:this.handleChangeEmail}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{id:"ErrorEmail",style:{visibility:"hidden",color:"red",marginBottom:"20px"}},this.state.mensajeError),n.a.createElement("input",{className:"fadeIn third",required:!0,placeholder:"Nombre",type:"text",value:this.state.name,onChange:this.handleChangeName}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{id:"ErrorName",style:{visibility:"hidden",color:"red",marginBottom:"20px"}},"*El nombre no debe contener espacios"),n.a.createElement("input",{className:"fadeIn fourth",required:!0,placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{id:"ErrorPassword",style:{visibility:"hidden",color:"red"}},"*La contrase\xf1a debe tener entre 8 y 12 caracteres."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{type:"submit",value:"Registrar",className:"fadeIn fifth"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{type:"button",value:"Regresar",onClick:this.handleClickRegresar,className:"fadeIn sixth"}),n.a.createElement("br",null),n.a.createElement("br",null)))))))}}]),t}(n.a.Component));var S=function(){return n.a.createElement(s.a,null,n.a.createElement(c.b,{exact:!0,path:"/peliculas",component:A}),n.a.createElement(c.b,{exact:!0,path:"/peliculas/login",component:A}),n.a.createElement(c.b,{exact:!0,path:"/peliculas/inicio",component:C}),n.a.createElement(c.b,{exact:!0,path:"/peliculas/login_incorrecto",component:f}),n.a.createElement(c.b,{exact:!0,path:"/peliculas/registro",component:I}))},B=document.getElementById("root");i.a.render(n.a.createElement(S,null),B)}},[[33,1,2]]]);
//# sourceMappingURL=main.1866cf02.chunk.js.map