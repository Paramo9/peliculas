(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{28:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwCAv5or8ogAAADHSURBVHja7duhDgAgCEBBmp/tT5vF6txsbhjuKuV1IAIAAAAAAAAAAAAAAICftDzNbdrzkSFAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEOBSAwAAAAAAAIAr23MBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgOd3AAAAAAAAAMrZngsQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECPL8DAAAAAAAAAAAAAABUWM18bKnDf7a7AAAAAElFTkSuQmCC"},32:function(e,t,a){},36:function(e,t,a){e.exports=a(59)},51:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(33),i=a.n(l),s=a(21),o=a(17),c=a(11),u=a(12),m=a(4),d=a(13),h=a(14),b=a(6),g=a.n(b),p={apiKey:"AIzaSyCb3BqsxK9vTX0CVhh6h8uxJd6ha15nHUQ",authDomain:"peliculas-1b60a.firebaseapp.com",databaseURL:"https://peliculas-1b60a.firebaseio.com",projectId:"peliculas-1b60a",storageBucket:"peliculas-1b60a.appspot.com",messagingSenderId:"127749849117",appId:"1:127749849117:web:943698b0b34888753646f4",measurementId:"G-VXZJT5LCEL"},E=(a(51),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={email:"",password:"",r2:!1,r3:!1,mensajeError:""},r.handleChangeEmail=r.handleChangeEmail.bind(Object(m.a)(r)),r.handleChangePassword=r.handleChangePassword.bind(Object(m.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(m.a)(r)),r.handleClickRegistrar=r.handleClickRegistrar.bind(Object(m.a)(r)),r}return Object(u.a)(a,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),g.a.apps.length)a=g.a.app("firestore");else var a=g.a.initializeApp(p,"firestore");a.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){var a=e.get("email"),r=e.get("password"),n=e.get("nombre"),l=e.get("nivel");a==t.state.email&&r==t.state.password&&(localStorage.setItem("nombre",n),localStorage.setItem("password",r),localStorage.setItem("email",a),localStorage.setItem("nivel",l),localStorage.setItem("mi_perfil","0"),localStorage.setItem("peliculas","1"),localStorage.setItem("series","0"),localStorage.setItem("favoritas","0"),localStorage.setItem("paginaPeliculas",1),t.setState({r2:!0}))}));/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.state.email)?(document.getElementById("errorLogin").style.visibility="visible",t.setState({mensajeError:"*Las credenciales no son v\xe1lidas"})):(document.getElementById("errorLogin").style.visibility="visible",t.setState({mensajeError:"*Ingresa un e-mail v\xe1lido."}))}))}},{key:"handleClickRegistrar",value:function(e){e.preventDefault(),this.setState({r3:!0})}},{key:"render",value:function(){return this.state.r2?n.a.createElement(o.a,{to:"/peliculas/inicio"}):this.state.r3?n.a.createElement(o.a,{to:"/peliculas/registro"}):n.a.createElement("div",null,n.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),n.a.createElement("h2",{align:"center"},"La primer regla del Club de la Pel\xedcula es no hablar del Club de la Pel\xedcula"),n.a.createElement("div",{className:"wrapper fadeInDown"},n.a.createElement("div",{id:"formContent"},n.a.createElement("h2",{align:"center"},"Inicia Sesi\xf3n"),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{align:"center"},n.a.createElement("h3",null,n.a.createElement("input",{id:"login",required:!0,className:"fadeIn second",name:"login",placeholder:"E-mail",type:"text",value:this.state.email,onChange:this.handleChangeEmail}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{id:"password",required:!0,className:"fadeIn third",name:"login",placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{id:"errorLogin",style:{visibility:"hidden",color:"red"}},this.state.mensajeError),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{type:"submit",value:"Ingresar",className:"fadeIn fourth"}),n.a.createElement("br",null),n.a.createElement("br",null)))),n.a.createElement("div",{id:"formFooter"},n.a.createElement("h3",{align:"center",className:"astyle underlineHover",onClick:this.handleClickRegistrar},"Reg\xedstrate aqu\xed")))))}}]),a}(n.a.Component)),f=(a(56),a(28)),v=a.n(f),A=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={nombre:"",password:"",errorNombre:"",errorPassword:"",nombreTitulo:localStorage.getItem("nombre")},r.handleChangeNombre=r.handleChangeNombre.bind(Object(m.a)(r)),r.handleChangePassword=r.handleChangePassword.bind(Object(m.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(m.a)(r)),r}return Object(u.a)(a,[{key:"handleChangeNombre",value:function(e){this.setState({nombre:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),g.a.apps.length)a=g.a.app("firestore");else var a=g.a.initializeApp(p,"firestore");this.state.nombre.includes(" ")||this.state.nombre.length>20||this.state.password.length<8||this.state.password.length>12?(this.state.nombre.includes(" ")?(document.getElementById("errorNombreA").style.visibility="visible",this.setState({errorNombre:"*El nombre no puede contener espacios."})):this.state.nombre.length>20?(document.getElementById("errorNombreA").style.visibility="visible",this.setState({errorNombre:"*El nombre no puede tener m\xe1s de 20 caracteres."})):(document.getElementById("errorNombreA").style.visibility="hidden",this.setState({errorNombre:""})),this.state.password.length<8||this.state.password.length>12?(document.getElementById("errorPasswordA").style.visibility="visible",this.setState({errorPassword:"*La contrase\xf1a debe tener entre 8 y 12 caracteres."})):(document.getElementById("errorPasswordA").style.visibility="hidden",this.setState({errorPassword:""}))):this.state.nombre==localStorage.getItem("nombre")||this.state.password==localStorage.getItem("password")?this.state.nombre==localStorage.getItem("nombre")&&this.state.password==localStorage.getItem("password")?(document.getElementById("errorNombreA").style.visibility="hidden",document.getElementById("errorPasswordA").style.visibility="visible",this.setState({errorPassword:"*Ingresa un nombre o contrase\xf1a nueva."})):this.state.nombre==localStorage.getItem("nombre")?(document.getElementById("errorPasswordA").style.visibility="hidden",document.getElementById("errorNombreA").style.visibility="hidden",a.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){e.get("email")==localStorage.getItem("email")&&(e.ref.set({email:localStorage.getItem("email"),nombre:localStorage.getItem("nombre"),nivel:localStorage.getItem("nivel"),password:t.state.password}),localStorage.setItem("password",t.state.password))}))})),alert("\xa1Tu contrase\xf1a se ha actualizado con \xe9xito!"),this.forceUpdate()):(document.getElementById("errorPasswordA").style.visibility="hidden",document.getElementById("errorNombreA").style.visibility="hidden",a.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){e.get("email")==localStorage.getItem("email")&&(e.ref.set({email:localStorage.getItem("email"),nombre:t.state.nombre,nivel:localStorage.getItem("nivel"),password:localStorage.getItem("password")}),localStorage.setItem("nombre",t.state.nombre))}))})),alert("\xa1Tu nombre se ha actualizado con \xe9xito!"),this.setState({nombreTitulo:this.state.nombre}),this.forceUpdate()):(document.getElementById("errorPasswordA").style.visibility="hidden",document.getElementById("errorNombreA").style.visibility="hidden",a.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){e.get("email")==localStorage.getItem("email")&&(e.ref.set({email:localStorage.getItem("email"),nombre:t.state.nombre,nivel:localStorage.getItem("nivel"),password:t.state.password}),localStorage.setItem("nombre",t.state.nombre),localStorage.setItem("password",t.state.password))}))})),alert("\xa1Tu nombre y tu contrase\xf1a se han actualizado con \xe9xito!"),this.setState({nombreTitulo:this.state.nombre}),this.forceUpdate())}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{align:"center"},this.state.nombreTitulo),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",{align:"center"},"Nivel: ",localStorage.getItem("nivel")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h2",{align:"center"},"Actualizar Datos"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{id:"formContent"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{align:"center"},n.a.createElement("h3",null,n.a.createElement("input",{required:!0,placeholder:"Nombre",type:"text",value:this.state.nombre,onChange:this.handleChangeNombre}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{id:"errorNombreA",style:{visibility:"hidden",color:"red",marginBottom:"20px"}},this.state.errorNombre),n.a.createElement("br",null),n.a.createElement("input",{required:!0,placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{id:"errorPasswordA",style:{visibility:"hidden",color:"red",marginBottom:"20px"}},this.state.errorPassword),n.a.createElement("br",null),n.a.createElement("input",{type:"submit",value:"Actualizar"}),n.a.createElement("br",null),n.a.createElement("br",null)))))))}}]),a}(n.a.Component),y=a(3),S=a.n(y),w=a(10),C=(a(32),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"pelicula",align:"center"},n.a.createElement("div",{className:"poster",align:"center"},n.a.createElement("img",{src:this.props.url}),n.a.createElement("h2",null,this.props.nombre," - ",this.props.fecha)))}}]),a}(n.a.Component)),I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={pagina:localStorage.getItem("paginaPeliculas"),peliculas:[],maxPaginas:2},r.anterior=r.anterior.bind(Object(m.a)(r)),r}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(S.a.mark((function e(){var t,a=this;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.a.app("firestore"),e.next=3,t.firestore().collection("peliculas").get().then(function(){var e=Object(w.a)(S.a.mark((function e(r){var l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=r.size-20*(a.state.pagina-1);case 1:if(!(l>r.size-20*(a.state.pagina-1)-20)){e.next=8;break}if(!(l>0)){e.next=5;break}return e.next=5,t.firestore().collection("peliculas").doc(l.toString()).get().then(function(){var e=Object(w.a)(S.a.mark((function e(r){var l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.get("nombre");case 2:return e.t0=e.sent,e.t1=e.t0+" - ",e.t2=r.get("fecha"),e.t3=e.t1+e.t2,l=e.t3+".jpg",e.next=9,t.storage().ref("Portadas").child(l.toString()).getDownloadURL().then(function(){var e=Object(w.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({peliculas:a.state.peliculas.concat([n.a.createElement(C,{url:t,nombre:r.get("nombre"),fecha:r.get("fecha")})])});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:l--,e.next=1;break;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"anterior",value:function(){var e=Object(w.a)(S.a.mark((function e(t){var a,r=this;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),1==this.state.pagina){e.next=7;break}return e.next=4,this.setState({peliculas:[],pagina:+this.state.pagina-1});case 4:return a=g.a.app("firestore"),e.next=7,a.firestore().collection("peliculas").get().then(function(){var e=Object(w.a)(S.a.mark((function e(t){var l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=t.size-20*(r.state.pagina-1);case 1:if(!(l>t.size-20*(r.state.pagina-1)-20)){e.next=8;break}if(!(l>0)){e.next=5;break}return e.next=5,a.firestore().collection("peliculas").doc(l.toString()).get().then(function(){var e=Object(w.a)(S.a.mark((function e(t){var l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("nombre");case 2:return e.t0=e.sent,e.t1=e.t0+" - ",e.t2=t.get("fecha"),e.t3=e.t1+e.t2,l=e.t3+".jpg",e.next=9,a.storage().ref("Portadas").child(l.toString()).getDownloadURL().then(function(){var e=Object(w.a)(S.a.mark((function e(a){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setState({peliculas:r.state.peliculas.concat([n.a.createElement(C,{url:a,nombre:t.get("nombre"),fecha:t.get("fecha")})])});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:l--,e.next=1;break;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"anterior",value:function(){var e=Object(w.a)(S.a.mark((function e(t){var a,r=this;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.state.pagina==this.state.maxPaginas){e.next=7;break}return e.next=4,this.setState({peliculas:[],pagina:+this.state.pagina+1});case 4:return a=g.a.app("firestore"),e.next=7,a.firestore().collection("peliculas").get().then(function(){var e=Object(w.a)(S.a.mark((function e(t){var l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=t.size-20*(r.state.pagina-1);case 1:if(!(l>t.size-20*(r.state.pagina-1)-20)){e.next=8;break}if(!(l>0)){e.next=5;break}return e.next=5,a.firestore().collection("peliculas").doc(l.toString()).get().then(function(){var e=Object(w.a)(S.a.mark((function e(t){var l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("nombre");case 2:return e.t0=e.sent,e.t1=e.t0+" - ",e.t2=t.get("fecha"),e.t3=e.t1+e.t2,l=e.t3+".jpg",e.next=9,a.storage().ref("Portadas").child(l.toString()).getDownloadURL().then(function(){var e=Object(w.a)(S.a.mark((function e(a){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setState({peliculas:r.state.peliculas.concat([n.a.createElement(C,{url:a,nombre:t.get("nombre"),fecha:t.get("fecha")})])});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:l--,e.next=1;break;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{align:"center"},"Pel\xedculas"),n.a.createElement("div",{id:"contenido"},this.state.peliculas,n.a.createElement("div",{className:"clear"}),n.a.createElement("br",null),n.a.createElement("div",{className:"botones"},n.a.createElement("span",{className:"izquierdo",onClick:this.anterior},"Anterior"),n.a.createElement("span",{className:"derecho"},"Siguiente"))))}}]),a}(n.a.Component),k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={r1:!1,r2:!1},r.handleCerrarSesion=r.handleCerrarSesion.bind(Object(m.a)(r)),r.handleMiPerfil=r.handleMiPerfil.bind(Object(m.a)(r)),r.handlePeliculas=r.handlePeliculas.bind(Object(m.a)(r)),r}return Object(u.a)(a,[{key:"handleCerrarSesion",value:function(e){e.preventDefault(),localStorage.clear(),this.setState({r1:!0})}},{key:"handleMiPerfil",value:function(e){e.preventDefault(),localStorage.setItem("mi_perfil","1"),localStorage.setItem("peliculas","0"),localStorage.setItem("series","0"),localStorage.setItem("favoritas","0"),this.forceUpdate()}},{key:"handlePeliculas",value:function(e){e.preventDefault(),localStorage.setItem("mi_perfil","0"),localStorage.setItem("peliculas","1"),localStorage.setItem("series","0"),localStorage.setItem("favoritas","0"),this.forceUpdate()}},{key:"render",value:function(){return this.state.r1?n.a.createElement(o.a,{to:"/peliculas/login"}):"1"==localStorage.getItem("mi_perfil")?n.a.createElement("div",null,n.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),n.a.createElement("h2",{align:"center"},"La primer regla del Club de la Pel\xedcula es no hablar del Club de la Pel\xedcula"),n.a.createElement("header",null,n.a.createElement("input",{type:"checkbox",id:"btn-menu"}),n.a.createElement("label",{htmlFor:"btn-menu"},n.a.createElement("img",{src:v.a,width:"30px",height:"30px",alt:""})),n.a.createElement("nav",{className:"menu"},n.a.createElement("ul",null,n.a.createElement("li",{onClick:this.handlePeliculas},"Pel\xedculas"),n.a.createElement("li",null,"Series"),n.a.createElement("li",null,"Favoritas"),n.a.createElement("li",{onClick:this.handleMiPerfil},"Mi Perfil"),n.a.createElement("li",{onClick:this.handleCerrarSesion},"Cerrar Sesi\xf3n")))),n.a.createElement(A,null)):"1"==localStorage.getItem("peliculas")?n.a.createElement("div",null,n.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),n.a.createElement("h2",{align:"center"},"La primer regla del Club de la Pel\xedcula es no hablar del Club de la Pel\xedcula"),n.a.createElement("header",null,n.a.createElement("input",{type:"checkbox",id:"btn-menu"}),n.a.createElement("label",{htmlFor:"btn-menu"},n.a.createElement("img",{src:v.a,width:"30px",height:"30px",alt:""})),n.a.createElement("nav",{className:"menu"},n.a.createElement("ul",null,n.a.createElement("li",{onClick:this.handlePeliculas},"Pel\xedculas"),n.a.createElement("li",null,"Series"),n.a.createElement("li",null,"Favoritas"),n.a.createElement("li",{onClick:this.handleMiPerfil},"Mi Perfil"),n.a.createElement("li",{onClick:this.handleCerrarSesion},"Cerrar Sesi\xf3n")))),n.a.createElement(I,null)):void 0}}]),a}(n.a.Component),x=(a(58),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={email:"",password:"",name:"",r1:!1,errorEmailR:"",errorNombreR:"",errorPasswordR:""},r.handleChangeEmail=r.handleChangeEmail.bind(Object(m.a)(r)),r.handleChangePassword=r.handleChangePassword.bind(Object(m.a)(r)),r.handleChangeName=r.handleChangeName.bind(Object(m.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(m.a)(r)),r.handleClickRegresar=r.handleClickRegresar.bind(Object(m.a)(r)),r}return Object(u.a)(a,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),g.a.apps.length)a=g.a.app("firestore");else var a=g.a.initializeApp(p,"firestore");a.firestore().collection("usuarios").get().then((function(e){var r=0;if(e.forEach((function(e){e.get("email")==t.state.email&&(r=1)})),1==r)document.getElementById("ErrorEmail").style.visibility="visible",t.setState({errorEmailR:"*Este e-mail ya est\xe1 registrado."});else{var n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;!n.test(t.state.email)||t.state.password.length<8||t.state.password.length>12||t.state.name.includes(" ")||t.state.name.length>20?(n.test(t.state.email)?(document.getElementById("ErrorEmail").style.visibility="hidden",t.setState({errorEmailR:""})):(document.getElementById("ErrorEmail").style.visibility="visible",t.setState({errorEmailR:"*Ingresa un e-mail v\xe1lido"})),t.state.name.includes(" ")?(document.getElementById("ErrorName").style.visibility="visible",t.setState({errorNombreR:"*El nombre no puede contener espacios."})):t.state.name.length>21?(document.getElementById("ErrorName").style.visibility="visible",t.setState({errorNombreR:"*El nombre no puede tener m\xe1s de 20 caracteres."})):(document.getElementById("ErrorName").style.visibility="hidden",t.setState({errorNombreR:""})),t.state.password.length<8||t.state.password.length>12?(document.getElementById("ErrorPassword").style.visibility="visible",t.setState({errorPasswordR:"*La contrase\xf1a debe tener entre 8 y 12 caracteres."})):(document.getElementById("ErrorPassword").style.visibility="hidden",t.setState({errorPasswordR:""}))):(a.firestore().collection("usuarios").add({email:t.state.email,nombre:t.state.name,nivel:"usuario",password:t.state.password}),alert("\xa1Te has registrado con \xe9xito!"))}}))}},{key:"handleClickRegresar",value:function(e){e.preventDefault(),this.setState({r1:!0})}},{key:"render",value:function(){return this.state.r1?n.a.createElement(o.a,{to:"/peliculas/login"}):n.a.createElement("div",null,n.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),n.a.createElement("h2",{align:"center"},"La primer regla del Club de la Pel\xedcula es no hablar del Club de la Pel\xedcula"),n.a.createElement("div",{className:"wrapper fadeInDown"},n.a.createElement("div",{id:"formContent"},n.a.createElement("h2",{align:"center"},"Registro"),n.a.createElement("br",null),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{align:"center"},n.a.createElement("h3",null,n.a.createElement("input",{className:"fadeIn second",required:!0,placeholder:"E-mail",type:"text",value:this.state.email,onChange:this.handleChangeEmail}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{id:"ErrorEmail",style:{visibility:"hidden",color:"red",marginBottom:"20px"}},this.state.errorEmailR),n.a.createElement("br",null),n.a.createElement("input",{className:"fadeIn third",required:!0,placeholder:"Nombre",type:"text",value:this.state.name,onChange:this.handleChangeName}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{id:"ErrorName",style:{visibility:"hidden",color:"red",marginBottom:"20px"}},this.state.errorNombreR),n.a.createElement("br",null),n.a.createElement("input",{className:"fadeIn fourth",required:!0,placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{id:"ErrorPassword",style:{visibility:"hidden",color:"red"}},this.state.errorPasswordR),n.a.createElement("br",null),n.a.createElement("input",{type:"submit",value:"Registrar",className:"fadeIn fifth"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("input",{type:"button",value:"Regresar",onClick:this.handleClickRegresar,className:"fadeIn sixth"}),n.a.createElement("br",null),n.a.createElement("br",null)))))))}}]),a}(n.a.Component));var P=function(){return n.a.createElement(s.a,null,n.a.createElement(o.b,{exact:!0,path:"/peliculas",component:E}),n.a.createElement(o.b,{exact:!0,path:"/peliculas/login",component:E}),n.a.createElement(o.b,{exact:!0,path:"/peliculas/inicio",component:k}),n.a.createElement(o.b,{exact:!0,path:"/peliculas/registro",component:x}))},j=document.getElementById("root");i.a.render(n.a.createElement(P,null),j)}},[[36,1,2]]]);
//# sourceMappingURL=main.0364bac4.chunk.js.map