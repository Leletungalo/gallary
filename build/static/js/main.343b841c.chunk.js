(this.webpackJsonpgallary=this.webpackJsonpgallary||[]).push([[0],{64:function(e,t,a){e.exports=a(82)},69:function(e,t,a){},70:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(69),a(40)),u=a(11),s=(a(70),a(110)),i=a(114),m=a(115),d=a(116),p=a(117),f=a(32);a(83),a(71),a(75);f.initializeApp({apiKey:"AIzaSyDbFlW9DbajKcZ3lfyPljxtjg79h1wnhgA",authDomain:"gallary-d9e20.firebaseapp.com",databaseURL:"https://gallary-d9e20.firebaseio.com",projectId:"gallary-d9e20",storageBucket:"gallary-d9e20.appspot.com",messagingSenderId:"372327530021",appId:"1:372327530021:web:1fc5979ce0ce215aa109cc"});var b=f.storage(),v=f.firestore(),g=f.auth(),E=f.firestore.FieldValue.serverTimestamp,j=Object(n.createContext)(),O=Object(p.a)({root:{display:"flex",alignItems:"center",justifyContent:"center"},title:{display:"inline-block"},logout:{backgroundColor:"grey",display:"inline-block",marginLeft:"auto",color:"white"}}),y=function(){var e=Object(n.useContext)(j).setUser,t=O();return r.a.createElement(s.a,{position:"sticky",color:"secondary"},r.a.createElement(i.a,{className:t.root},r.a.createElement(m.a,{className:t.title,variant:"h5"},"My Gallary"),r.a.createElement(d.a,{className:t.logout,onClick:function(){g.signOut(),e(null)}},r.a.createElement(m.a,null,"Log out"))))},h=a(10),S=a(31),w=function(e){var t=Object(n.useState)([]),a=Object(h.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=v.collection(e).orderBy("createdAt","desc").limit(6).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(S.a)(Object(S.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},x=a(120),k=a(15),C=a.n(k),N=a(22),U=function(e){var t=Object(n.useState)(null),a=Object(h.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),o=Object(h.a)(l,2),u=o[0],s=o[1],i=Object(n.useState)(null),m=Object(h.a)(i,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){var t=b.ref(e.name),a=v.collection("images"),n=t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){p(e)}),Object(N.a)(C.a.mark((function n(){var r,c;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getDownloadURL();case 2:r=n.sent,c=E(),a.add({name:e.name,url:r,createdAt:c}),s(r);case 6:case"end":return n.stop()}}),n)}))));return function(){return n()}}),[e]),{progress:r,url:u,error:d}};var R=function(e){var t=e.file,a=e.setFile,c=U(t),l=c.progress,o=c.url;return Object(n.useEffect)((function(){o&&a(null)}),[o,a]),r.a.createElement("div",{style:{height:"20px",width:l+"%",backgroundColor:"blue",borderRadius:"10%",transition:"all 1s ease-out"}})},A=Object(p.a)((function(e){return{root:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column"},heading:{textAlign:"center"}}})),I=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(h.a)(l,2),u=o[0],s=o[1],i=A();return r.a.createElement("div",{className:i.root},r.a.createElement("div",null,r.a.createElement(m.a,{className:i.heading,variant:"h5"},"Up load Image"),r.a.createElement("form",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&["image/png","image/jpeg"].includes(t.type)?(c(t),s(null)):(c(null),s("Please upload png or jpeg"))}}))),r.a.createElement("div",null,u&&r.a.createElement("div",null,u),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(R,{file:a,setFile:c})))},D=function(e){var t=e.src,a=e.setOpenModel;return r.a.createElement("div",{name:"backdrop",className:"backgrop",onClick:function(e){"backdrop"===e.target.getAttribute("name")&&a("")}},r.a.createElement("div",{className:"model"},r.a.createElement("img",{alt:"model name",src:t})))},P=function(){var e=w("images").docs,t=Object(n.useState)(""),a=Object(h.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement("div",{className:"gallery"},e&&e.map((function(e){return r.a.createElement(x.a,{variant:"rounded",className:"images",key:e.id},r.a.createElement("img",{style:{width:"100%",height:"100%"},onClick:function(){return t=e.url,void l(r.a.createElement(D,{src:t,setOpenModel:l}));var t},src:e.url,alt:e.name}))}))),c)},T=a(119),_=a(118),B=function(e){var t=e.setRigistered,a=Object(n.useContext)(j).login,c=Object(n.useState)(""),l=Object(h.a)(c,2),o=l[0],u=l[1],s=Object(n.useState)(""),i=Object(h.a)(s,2),m=i[0],d=i[1],p=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),""!==o&&""!==m&&a(o,m);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"rigister"},r.a.createElement("form",null,r.a.createElement(T.a,{className:"inputs",color:"secondary",label:"Email",autoComplete:"true",type:"email",onChange:function(e){return u(e.target.value)},value:o}),r.a.createElement(T.a,{className:"inputs",label:"Password",color:"secondary",type:"password",onChange:function(e){return d(e.target.value)},value:m}),r.a.createElement("div",{className:"buttonwrap"},r.a.createElement(_.a,{variant:"contained",color:"secondary",onClick:p},"Submit"),r.a.createElement(_.a,{variant:"contained",color:"secondary",onClick:function(){return t(!0)}},"Rigister"))))},F=function(){var e=Object(n.useContext)(j).signUp,t=Object(n.useState)(""),a=Object(h.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),u=Object(h.a)(o,2),s=u[0],i=u[1],m=Object(n.useState)(""),d=Object(h.a)(m,2),p=d[0],f=d[1],b=function(){var t=Object(N.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),console.log(c,s,p),""!==s&&""!==p&&e(s,p);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"rigister"},r.a.createElement("form",null,r.a.createElement(T.a,{className:"inputs",color:"secondary",label:"Name",onChange:function(e){return l(e.target.value)},value:c}),r.a.createElement(T.a,{className:"inputs",label:"Email",color:"secondary",onChange:function(e){return i(e.target.value)},value:s}),r.a.createElement(T.a,{className:"inputs",color:"secondary",label:"Password",onChange:function(e){return f(e.target.value)},value:p}),r.a.createElement("div",{className:"buttonwrap"},r.a.createElement(_.a,{variant:"contained",color:"secondary",onClick:b},"Submit"))))},L=function(){var e=Object(n.useContext)(j).user,t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),s=Object(h.a)(o,2),i=s[0],m=s[1];return Object(n.useEffect)((function(){l(null!==e)}),[e]),c?r.a.createElement(u.a,{to:"/images"}):r.a.createElement("div",null,i?r.a.createElement(F,null):r.a.createElement(B,{setRigistered:m}))},M=a(55),W=function(e){var t=e.component,a=Object(M.a)(e,["component"]),c=Object(n.useContext)(j).user;return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return null!==c?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/"})}}))};var z=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:L}),r.a.createElement(u.b,{exact:!0,path:"/login",component:B}),r.a.createElement(W,{exact:!0,path:"/images",component:P}))))},J=function(e,t){var a=t.type,n=t.payload;switch(a){case"SET_USER":return Object(S.a)(Object(S.a)({},e),{},{user:n});default:return e}},K=function(e){var t=Object(n.useReducer)(J,{user:null,errr:""}),a=Object(h.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){var e=g.onAuthStateChanged((function(e){l({type:"SET_USER",payload:e})}));return function(){return e()}}),[]);var o=function(){var e=Object(N.a)(C.a.mark((function e(t,a){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.signInWithEmailAndPassword(t,a);case 3:n=e.sent,l({type:"SET_USER",payload:n}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(N.a)(C.a.mark((function e(t,a){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.createUserWithEmailAndPassword(t,a);case 3:n=e.sent,l({type:"SET_USER",payload:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("my err",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(j.Provider,{value:{user:c.user,login:o,signUp:u,setUser:function(e){return l({type:"SET_USER",payload:e})}}},e.children)};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null,r.a.createElement(z,null))),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.343b841c.chunk.js.map