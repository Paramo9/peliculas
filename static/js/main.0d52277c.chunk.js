(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{26:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwCAv5or8ogAAADHSURBVHja7duhDgAgCEBBmp/tT5vF6txsbhjuKuV1IAIAAAAAAAAAAAAAAICftDzNbdrzkSFAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEOBSAwAAAAAAAIAr23MBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgOd3AAAAAAAAAMrZngsQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECPL8DAAAAAAAAAAAAAABUWM18bKnDf7a7AAAAAElFTkSuQmCC"},31:function(e,t,a){},36:function(e,t,a){e.exports=a(59)},51:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(32),i=a.n(n),s=a(19),o=a(15),c=a(9),m=a(10),d=a(3),u=a(11),h=a(12),b=a(6),g=a.n(b),E={apiKey:"AIzaSyCb3BqsxK9vTX0CVhh6h8uxJd6ha15nHUQ",authDomain:"peliculas-1b60a.firebaseapp.com",databaseURL:"https://peliculas-1b60a.firebaseio.com",projectId:"peliculas-1b60a",storageBucket:"peliculas-1b60a.appspot.com",messagingSenderId:"127749849117",appId:"1:127749849117:web:943698b0b34888753646f4",measurementId:"G-VXZJT5LCEL"},p=(a(51),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={email:"",password:"",r2:!1,r3:!1,mensajeError:""},l.handleChangeEmail=l.handleChangeEmail.bind(Object(d.a)(l)),l.handleChangePassword=l.handleChangePassword.bind(Object(d.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(d.a)(l)),l.handleClickRegistrar=l.handleClickRegistrar.bind(Object(d.a)(l)),l}return Object(m.a)(a,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),g.a.apps.length)a=g.a.app("firestore");else var a=g.a.initializeApp(E,"firestore");a.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){var a=e.get("email"),l=e.get("password"),r=e.get("nombre"),n=e.get("nivel");a==t.state.email&&l==t.state.password&&(localStorage.setItem("nombre",r),localStorage.setItem("password",l),localStorage.setItem("email",a),localStorage.setItem("nivel",n),localStorage.setItem("mi_perfil","0"),localStorage.setItem("peliculas","1"),localStorage.setItem("series","0"),localStorage.setItem("favoritas","0"),t.setState({r2:!0}))}));/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.state.email)?(document.getElementById("errorLogin").style.visibility="visible",t.setState({mensajeError:"*Las credenciales no son v\xe1lidas"})):(document.getElementById("errorLogin").style.visibility="visible",t.setState({mensajeError:"*Ingresa un e-mail v\xe1lido."}))}))}},{key:"handleClickRegistrar",value:function(e){e.preventDefault(),this.setState({r3:!0})}},{key:"render",value:function(){return this.state.r2?r.a.createElement(o.a,{to:"/peliculas/inicio"}):this.state.r3?r.a.createElement(o.a,{to:"/peliculas/registro"}):r.a.createElement("div",null,r.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),r.a.createElement("h2",{align:"center"},"La primer regla del Club de la Pel\xedcula es no hablar del Club de la Pel\xedcula"),r.a.createElement("div",{className:"wrapper fadeInDown"},r.a.createElement("div",{id:"formContent"},r.a.createElement("h2",{align:"center"},"Inicia Sesi\xf3n"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{align:"center"},r.a.createElement("h3",null,r.a.createElement("input",{id:"login",required:!0,className:"fadeIn second",name:"login",placeholder:"E-mail",type:"text",value:this.state.email,onChange:this.handleChangeEmail}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{id:"password",required:!0,className:"fadeIn third",name:"login",placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{id:"errorLogin",style:{visibility:"hidden",color:"red"}},this.state.mensajeError),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Ingresar",className:"fadeIn fourth"}),r.a.createElement("br",null),r.a.createElement("br",null)))),r.a.createElement("div",{id:"formFooter"},r.a.createElement("h3",{align:"center",className:"astyle underlineHover",onClick:this.handleClickRegistrar},"Reg\xedstrate aqu\xed")))))}}]),a}(r.a.Component)),A=(a(56),a(26)),v=a.n(A),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={nombre:"",password:"",errorNombre:"",errorPassword:"",nombreTitulo:localStorage.getItem("nombre")},l.handleChangeNombre=l.handleChangeNombre.bind(Object(d.a)(l)),l.handleChangePassword=l.handleChangePassword.bind(Object(d.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(d.a)(l)),l}return Object(m.a)(a,[{key:"handleChangeNombre",value:function(e){this.setState({nombre:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),g.a.apps.length)a=g.a.app("firestore");else var a=g.a.initializeApp(E,"firestore");this.state.nombre.includes(" ")||this.state.nombre.length>20||this.state.password.length<8||this.state.password.length>12?(this.state.nombre.includes(" ")?(document.getElementById("errorNombreA").style.visibility="visible",this.setState({errorNombre:"*El nombre no puede contener espacios."})):this.state.nombre.length>20?(document.getElementById("errorNombreA").style.visibility="visible",this.setState({errorNombre:"*El nombre no puede tener m\xe1s de 20 caracteres."})):(document.getElementById("errorNombreA").style.visibility="hidden",this.setState({errorNombre:""})),this.state.password.length<8||this.state.password.length>12?(document.getElementById("errorPasswordA").style.visibility="visible",this.setState({errorPassword:"*La contrase\xf1a debe tener entre 8 y 12 caracteres."})):(document.getElementById("errorPasswordA").style.visibility="hidden",this.setState({errorPassword:""}))):this.state.nombre==localStorage.getItem("nombre")||this.state.password==localStorage.getItem("password")?this.state.nombre==localStorage.getItem("nombre")&&this.state.password==localStorage.getItem("password")?(document.getElementById("errorNombreA").style.visibility="hidden",document.getElementById("errorPasswordA").style.visibility="visible",this.setState({errorPassword:"*Ingresa un nombre o contrase\xf1a nueva."})):this.state.nombre==localStorage.getItem("nombre")?(document.getElementById("errorPasswordA").style.visibility="hidden",document.getElementById("errorNombreA").style.visibility="hidden",a.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){e.get("email")==localStorage.getItem("email")&&(e.ref.set({email:localStorage.getItem("email"),nombre:localStorage.getItem("nombre"),nivel:localStorage.getItem("nivel"),password:t.state.password}),localStorage.setItem("password",t.state.password))}))})),alert("\xa1Tu contrase\xf1a se ha actualizado con \xe9xito!"),this.forceUpdate()):(document.getElementById("errorPasswordA").style.visibility="hidden",document.getElementById("errorNombreA").style.visibility="hidden",a.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){e.get("email")==localStorage.getItem("email")&&(e.ref.set({email:localStorage.getItem("email"),nombre:t.state.nombre,nivel:localStorage.getItem("nivel"),password:localStorage.getItem("password")}),localStorage.setItem("nombre",t.state.nombre))}))})),alert("\xa1Tu nombre se ha actualizado con \xe9xito!"),this.setState({nombreTitulo:this.state.nombre}),this.forceUpdate()):(document.getElementById("errorPasswordA").style.visibility="hidden",document.getElementById("errorNombreA").style.visibility="hidden",a.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){e.get("email")==localStorage.getItem("email")&&(e.ref.set({email:localStorage.getItem("email"),nombre:t.state.nombre,nivel:localStorage.getItem("nivel"),password:t.state.password}),localStorage.setItem("nombre",t.state.nombre),localStorage.setItem("password",t.state.password))}))})),alert("\xa1Tu nombre y tu contrase\xf1a se han actualizado con \xe9xito!"),this.setState({nombreTitulo:this.state.nombre}),this.forceUpdate())}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{align:"center"},this.state.nombreTitulo),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",{align:"center"},"Nivel: ",localStorage.getItem("nivel")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",{align:"center"},"Actualizar Datos"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{id:"formContent"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{align:"center"},r.a.createElement("h3",null,r.a.createElement("input",{required:!0,placeholder:"Nombre",type:"text",value:this.state.nombre,onChange:this.handleChangeNombre}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{id:"errorNombreA",style:{visibility:"hidden",color:"red",marginBottom:"20px"}},this.state.errorNombre),r.a.createElement("br",null),r.a.createElement("input",{required:!0,placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{id:"errorPasswordA",style:{visibility:"hidden",color:"red",marginBottom:"20px"}},this.state.errorPassword),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Actualizar"}),r.a.createElement("br",null),r.a.createElement("br",null)))))))}}]),a}(r.a.Component),y=a(27),C=a.n(y),S=a(35),I=(a(31),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"pelicula"},r.a.createElement("div",{className:"poster"},r.a.createElement("img",{src:this.props.url}),r.a.createElement("h3",null,this.props.nombre," - ",this.props.fecha)))}}]),a}(r.a.Component)),w=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={pagina:1,peliculas:[]},l}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(C.a.mark((function e(){var t,a=this;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=g.a.app("firestore")).firestore().collection("peliculas").get().then((function(e){for(var l=e.size-20*(a.state.pagina-1);l>e.size-20*(a.state.pagina-1)-20;l--)l>0&&t.firestore().collection("peliculas").doc(l.toString()).get().then((function(e){var l=e.get("nombre")+" - "+e.get("fecha")+".jpg";t.storage().ref("Portadas").child(l.toString()).getDownloadURL().then((function(t){var l=t;a.setState({peliculas:a.state.peliculas.concat([r.a.createElement(I,{url:l,nombre:e.get("nombre"),fecha:e.get("fecha")})])})}))}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{align:"center"},"Pel\xedculas"),r.a.createElement("div",{id:"contenido"},this.state.peliculas))}}]),a}(r.a.Component),P=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={r1:!1,r2:!1},l.handleCerrarSesion=l.handleCerrarSesion.bind(Object(d.a)(l)),l.handleMiPerfil=l.handleMiPerfil.bind(Object(d.a)(l)),l.handlePeliculas=l.handlePeliculas.bind(Object(d.a)(l)),l}return Object(m.a)(a,[{key:"handleCerrarSesion",value:function(e){e.preventDefault(),localStorage.clear(),this.setState({r1:!0})}},{key:"handleMiPerfil",value:function(e){e.preventDefault(),localStorage.setItem("mi_perfil","1"),localStorage.setItem("peliculas","0"),localStorage.setItem("series","0"),localStorage.setItem("favoritas","0"),this.forceUpdate()}},{key:"handlePeliculas",value:function(e){e.preventDefault(),localStorage.setItem("mi_perfil","0"),localStorage.setItem("peliculas","1"),localStorage.setItem("series","0"),localStorage.setItem("favoritas","0"),this.forceUpdate()}},{key:"render",value:function(){return this.state.r1?r.a.createElement(o.a,{to:"/peliculas/login"}):"1"==localStorage.getItem("mi_perfil")?r.a.createElement("div",null,r.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),r.a.createElement("h2",{align:"center"},"La primer regla del Club de la Pel\xedcula es no hablar del Club de la Pel\xedcula"),r.a.createElement("header",null,r.a.createElement("input",{type:"checkbox",id:"btn-menu"}),r.a.createElement("label",{htmlFor:"btn-menu"},r.a.createElement("img",{src:v.a,width:"30px",height:"30px",alt:""})),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",null,r.a.createElement("li",{onClick:this.handlePeliculas},"Pel\xedculas"),r.a.createElement("li",null,"Series"),r.a.createElement("li",null,"Favoritas"),r.a.createElement("li",{onClick:this.handleMiPerfil},"Mi Perfil"),r.a.createElement("li",{onClick:this.handleCerrarSesion},"Cerrar Sesi\xf3n")))),r.a.createElement(f,null)):"1"==localStorage.getItem("peliculas")?r.a.createElement("div",null,r.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),r.a.createElement("h2",{align:"center"},"La primer regla del Club de la Pel\xedcula es no hablar del Club de la Pel\xedcula"),r.a.createElement("header",null,r.a.createElement("input",{type:"checkbox",id:"btn-menu"}),r.a.createElement("label",{htmlFor:"btn-menu"},r.a.createElement("img",{src:v.a,width:"30px",height:"30px",alt:""})),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",null,r.a.createElement("li",{onClick:this.handlePeliculas},"Pel\xedculas"),r.a.createElement("li",null,"Series"),r.a.createElement("li",null,"Favoritas"),r.a.createElement("li",{onClick:this.handleMiPerfil},"Mi Perfil"),r.a.createElement("li",{onClick:this.handleCerrarSesion},"Cerrar Sesi\xf3n")))),r.a.createElement(w,null)):void 0}}]),a}(r.a.Component),B=(a(58),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={email:"",password:"",name:"",r1:!1,errorEmailR:"",errorNombreR:"",errorPasswordR:""},l.handleChangeEmail=l.handleChangeEmail.bind(Object(d.a)(l)),l.handleChangePassword=l.handleChangePassword.bind(Object(d.a)(l)),l.handleChangeName=l.handleChangeName.bind(Object(d.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(d.a)(l)),l.handleClickRegresar=l.handleClickRegresar.bind(Object(d.a)(l)),l}return Object(m.a)(a,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),g.a.apps.length)a=g.a.app("firestore");else var a=g.a.initializeApp(E,"firestore");a.firestore().collection("usuarios").get().then((function(e){var l=0;if(e.forEach((function(e){e.get("email")==t.state.email&&(l=1)})),1==l)document.getElementById("ErrorEmail").style.visibility="visible",t.setState({errorEmailR:"*Este e-mail ya est\xe1 registrado."});else{var r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;!r.test(t.state.email)||t.state.password.length<8||t.state.password.length>12||t.state.name.includes(" ")||t.state.name.length>20?(r.test(t.state.email)?(document.getElementById("ErrorEmail").style.visibility="hidden",t.setState({errorEmailR:""})):(document.getElementById("ErrorEmail").style.visibility="visible",t.setState({errorEmailR:"*Ingresa un e-mail v\xe1lido"})),t.state.name.includes(" ")?(document.getElementById("ErrorName").style.visibility="visible",t.setState({errorNombreR:"*El nombre no puede contener espacios."})):t.state.name.length>21?(document.getElementById("ErrorName").style.visibility="visible",t.setState({errorNombreR:"*El nombre no puede tener m\xe1s de 20 caracteres."})):(document.getElementById("ErrorName").style.visibility="hidden",t.setState({errorNombreR:""})),t.state.password.length<8||t.state.password.length>12?(document.getElementById("ErrorPassword").style.visibility="visible",t.setState({errorPasswordR:"*La contrase\xf1a debe tener entre 8 y 12 caracteres."})):(document.getElementById("ErrorPassword").style.visibility="hidden",t.setState({errorPasswordR:""}))):(a.firestore().collection("usuarios").add({email:t.state.email,nombre:t.state.name,nivel:"usuario",password:t.state.password}),alert("\xa1Te has registrado con \xe9xito!"))}}))}},{key:"handleClickRegresar",value:function(e){e.preventDefault(),this.setState({r1:!0})}},{key:"render",value:function(){return this.state.r1?r.a.createElement(o.a,{to:"/peliculas/login"}):r.a.createElement("div",null,r.a.createElement("h1",{align:"center"},"El Club de la Pel\xedcula"),r.a.createElement("h2",{align:"center"},"La primer regla del Club de la Pel\xedcula es no hablar del Club de la Pel\xedcula"),r.a.createElement("div",{className:"wrapper fadeInDown"},r.a.createElement("div",{id:"formContent"},r.a.createElement("h2",{align:"center"},"Registro"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{align:"center"},r.a.createElement("h3",null,r.a.createElement("input",{className:"fadeIn second",required:!0,placeholder:"E-mail",type:"text",value:this.state.email,onChange:this.handleChangeEmail}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{id:"ErrorEmail",style:{visibility:"hidden",color:"red",marginBottom:"20px"}},this.state.errorEmailR),r.a.createElement("br",null),r.a.createElement("input",{className:"fadeIn third",required:!0,placeholder:"Nombre",type:"text",value:this.state.name,onChange:this.handleChangeName}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{id:"ErrorName",style:{visibility:"hidden",color:"red",marginBottom:"20px"}},this.state.errorNombreR),r.a.createElement("br",null),r.a.createElement("input",{className:"fadeIn fourth",required:!0,placeholder:"Contrase\xf1a",type:"password",value:this.state.password,onChange:this.handleChangePassword}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{id:"ErrorPassword",style:{visibility:"hidden",color:"red"}},this.state.errorPasswordR),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Registrar",className:"fadeIn fifth"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:"Regresar",onClick:this.handleClickRegresar,className:"fadeIn sixth"}),r.a.createElement("br",null),r.a.createElement("br",null)))))))}}]),a}(r.a.Component));var N=function(){return r.a.createElement(s.a,null,r.a.createElement(o.b,{exact:!0,path:"/peliculas",component:p}),r.a.createElement(o.b,{exact:!0,path:"/peliculas/login",component:p}),r.a.createElement(o.b,{exact:!0,path:"/peliculas/inicio",component:P}),r.a.createElement(o.b,{exact:!0,path:"/peliculas/registro",component:B}))},j=document.getElementById("root");i.a.render(r.a.createElement(N,null),j)}},[[36,1,2]]]);
//# sourceMappingURL=main.0d52277c.chunk.js.map