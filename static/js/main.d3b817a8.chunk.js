(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{32:function(e,t,a){e.exports=a(51)},51:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(28),i=a.n(r),c=a(22),s=a(9),o=a(13),u=a(14),h=a(17),m=a(15),p=a(16),b=a(29),d=a.n(b),E={apiKey:"AIzaSyCb3BqsxK9vTX0CVhh6h8uxJd6ha15nHUQ",authDomain:"peliculas-1b60a.firebaseapp.com",databaseURL:"https://peliculas-1b60a.firebaseio.com",projectId:"peliculas-1b60a",storageBucket:"peliculas-1b60a.appspot.com",messagingSenderId:"127749849117",appId:"1:127749849117:web:943698b0b34888753646f4",measurementId:"G-VXZJT5LCEL"},g=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",r1:!1,r2:!1},n.handleChangeEmail=n.handleChangeEmail.bind(Object(h.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.app=d.a.initializeApp(E),n}return Object(u.a)(a,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=[],a=[],n=[],l=[];this.app.firestore().collection("usuarios").get().then((function(e){e.forEach((function(e){t.push(e.get("email")),a.push(e.get("password")),n.push(e.get("nombre")),l.push(e.get("nivel"))}))})),alert(this.state.email+", "+this.state.password);for(var r=0,i=0;i<t.length;i++)t[i]==this.state.email&&a[i]==this.state.password&&(r=1);1==r?this.setState({r2:!0}):this.setState({r1:!0})}},{key:"render",value:function(){return this.state.r1?l.a.createElement(s.a,{to:"/login_incorrecto"}):this.state.r2?l.a.createElement(s.a,{to:"/inicio"}):l.a.createElement("div",null,l.a.createElement("h1",{align:"center"},"Pel\xedculas P\xe1ramo"),l.a.createElement("br",null),l.a.createElement("h2",{align:"center"},"Inicia Sesi\xf3n"),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{align:"center"},l.a.createElement("h3",null,"Correo electr\xf3nico:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleChangeEmail}),l.a.createElement("br",null),l.a.createElement("br",null),"Contrase\xf1a:",l.a.createElement("br",null),l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChangePassword}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Ingresar"}),l.a.createElement("br",null),l.a.createElement("br",null)))))}}]),a}(l.a.Component),v=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Inicio")}}]),a}(l.a.Component),f=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Login incorrecto")}}]),a}(l.a.Component);var C=function(){return l.a.createElement(c.a,null,l.a.createElement(s.b,{exact:!0,path:"/peliculas",component:g}),l.a.createElement(s.b,{exact:!0,path:"/login",component:g}),l.a.createElement(s.b,{exact:!0,path:"/inicio",component:v}),l.a.createElement(s.b,{exact:!0,path:"/login_incorrecto",component:f}))},j=document.getElementById("root");i.a.render(l.a.createElement(C,null),j)}},[[32,1,2]]]);
//# sourceMappingURL=main.d3b817a8.chunk.js.map