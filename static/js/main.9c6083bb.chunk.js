(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,a,t){e.exports=t(67)},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),o=t.n(s),c=(t(48),t(29)),m=t(91),i=t(89),l=t(88),u=(t(49),t(90)),p=t(85),f=t(86),d=(t(50),Object(n.forwardRef)(function(e,a){var t=e.message,n=e.username===t.username;return r.a.createElement("div",{ref:a,className:"message ".concat(n&&"message__user")},r.a.createElement(u.a,{className:n?"message__userCard":"message__guestCard"},r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"white",variant:"h5",component:"h2"},!n&&"".concat(t.username||"Unkown User",":")," ",t.message))))})),g=t(28),b=t.n(g),h=b.a.initializeApp({apiKey:"AIzaSyBGeJYi5ze2tSvmuyjyhY7l0-fZbfk-78Y",authDomain:"facebook-messenger-4524f.firebaseapp.com",databaseURL:"https://facebook-messenger-4524f.firebaseio.com",projectId:"facebook-messenger-4524f",storageBucket:"facebook-messenger-4524f.appspot.com",messagingSenderId:"802923543827",appId:"1:802923543827:web:0d8d95e2dfcd0275516ee6",measurementId:"G-0DJDKYVLFP"}).firestore(),E=t(40),v=t(39),w=t.n(v),k=t(87);var _=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],s=a[1],o=Object(n.useState)([]),u=Object(c.a)(o,2),p=u[0],f=u[1],g=Object(n.useState)(""),v=Object(c.a)(g,2),_=v[0],j=v[1];return Object(n.useEffect)(function(){h.collection("messages").orderBy("timestamp","desc").onSnapshot(function(e){f(e.docs.map(function(e){return{id:e.id,message:e.data()}}))})},[]),Object(n.useEffect)(function(){j(prompt("please enter your name"))},[]),r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:"https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"}),r.a.createElement("h1",null,"ChitChat!!!!!!!!"),r.a.createElement("h2",null,"Welcome ",_),r.a.createElement("form",{className:"app__form"},r.a.createElement(m.a,{className:"app__formcontrol"},r.a.createElement(i.a,null,"Enter a Message...."),r.a.createElement(l.a,{className:"app__input",value:t,onChange:function(e){return s(e.target.value)}}),r.a.createElement(k.a,{className:"app__iconButton",disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),h.collection("messages").add({message:t,username:_,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),s("")}},r.a.createElement(w.a,null)))),r.a.createElement(E.a,null,p.map(function(e){var a=e.id,t=e.message;return r.a.createElement(d,{key:a,username:_,message:t})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[43,1,2]]]);
//# sourceMappingURL=main.9c6083bb.chunk.js.map