(this.webpackJsonpepic=this.webpackJsonpepic||[]).push([[2],{102:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var r,i,o,c,a,s,u,l=n(0),p=n(24),b=n.n(p),j=(n(102),n(28)),f=n.p+"static/media/beauty.f7a105fa.jpg",O=n(29),h=n(38),y=n(110),g=n(77),d=n(10),m=n(80),v=n(3),w=O.a.header(r||(r=Object(j.a)(["\ndisplay:flex;\nalign-items:center;\nbackground-color:#02101f;\nfont-size:20px;\n"]))),x=O.a.h1(i||(i=Object(j.a)(["\ndisplay:inline-block;\ncolor:white;\nmargin-left:30px;\nmargin-right:90px;\n"]))),U=O.a.img(o||(o=Object(j.a)(["\nwidth: 100px;\nheight: auto;\ndisplay:inline-block;\n"]))),P=Object(O.a)(h.b)(c||(c=Object(j.a)(["\ncolor:#fff;\nmargin-left:60px;\n&.active{\n    border-bottom:1px solid white;\n}\n"]))),k=Object(O.a)(y.a)(a||(a=Object(j.a)(["\nmargin-left:40px;\n"]))),F=O.a.h3(s||(s=Object(j.a)(["\ncolor:#fff;\nmargin-top:12px;\nmargin-left:40px;\n"]))),z=Object(m.a)((function(){var e=Object(g.a)(),t=e.AuthStore,n=e.UserStore,r=Object(d.f)();return Object(v.jsxs)(w,{children:[Object(v.jsx)(x,{children:"Epic\u56fe\u5e8a"}),Object(v.jsx)(U,{src:f,alt:"beauty"}),Object(v.jsxs)("nav",{children:[Object(v.jsx)(P,{to:"/",exact:!0,style:{textDecoration:"none"},activeClassName:"active",children:" \u9996\u9875"}),Object(v.jsx)(P,{to:"/history",style:{textDecoration:"none"},activeClassName:"active",children:"\u4e0a\u4f20\u5386\u53f2"}),Object(v.jsx)(P,{to:"/about",style:{textDecoration:"none"},activeClassName:"active",children:"\u5173\u4e8e\u6211"})]}),Object(v.jsx)(v.Fragment,{children:n.currentUser?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(F,{children:t.values.username}),Object(v.jsx)(k,{type:"primary",onClick:function(){n.resetUser(),t.logOut(),console.log("\u6ce8\u9500\uff0c\u6e05\u9664\u5f53\u524d\u7528\u6237\u4fe1\u606f")},children:" \u6ce8\u9500 "})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(k,{type:"primary",onClick:function(){r.push("/login"),console.log("\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762")},children:" \u767b\u5f55"}),Object(v.jsx)(k,{type:"primary",onClick:function(){r.push("/register"),console.log("\u8df3\u8f6c\u5230\u6ce8\u518c\u9875\u9762")},children:" \u6ce8\u518c  "})]})})]})})),D=O.a.footer(u||(u=Object(j.a)(["\npadding:10px 100px;\ntext-align:center;\nfont-size:12px;\ncolor:#aaa;\n"])));var C=function(){return Object(v.jsx)(D,{children:Object(v.jsx)("h1",{children:"Footer"})})};var L=function(){return Object(v.jsx)("div",{children:" Loading... "})},S=(n(108),Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(9)]).then(n.bind(null,254))}))),N=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(8)]).then(n.bind(null,255))})),I=Object(l.lazy)((function(){return n.e(7).then(n.bind(null,246))})),A=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,247))})),M=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,248))}));var E=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(z,{}),Object(v.jsx)("main",{children:Object(v.jsx)(l.Suspense,{fallback:Object(v.jsx)(L,{}),children:Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/",exact:!0,component:S}),Object(v.jsx)(d.a,{path:"/history",component:N}),Object(v.jsx)(d.a,{path:"/about",component:I}),Object(v.jsx)(d.a,{path:"/login",component:A}),Object(v.jsx)(d.a,{path:"/register",component:M})]})})}),Object(v.jsx)(C,{})]})},G=function(e){e&&e instanceof Function&&n.e(12).then(n.bind(null,249)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),o(e),c(e)}))};n(25);b.a.render(Object(v.jsx)(h.a,{children:Object(v.jsx)(E,{})}),document.getElementById("root")),G()},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(26),i=n.n(r);i.a.init({appId:"34eLG26lSun8CGKdE28ayYJY-gzGzoHsz",appKey:"5y1j3cbdC3DUo6joCdq6iKkU",serverURL:"https://34elg26l.lc-cn-n1-shared.com"});var o={register:function(e,t){var n=new i.a.User;return n.setUsername(e),n.setPassword(t),new Promise((function(e,t){n.signUp().then((function(t){return e(t)}),(function(e){return t(e)}))}))},login:function(e,t){return new Promise((function(n,i){r.User.logIn(e,t).then((function(e){return n(e)}),(function(e){return i(e)}))}))},logOut:function(){r.User.logOut()},getCurrentUser:function(){return r.User.current()}},c={add:function(e,t){var n=new i.a.Object("image"),r=new i.a.File(e,t);return n.set("title",e),n.set("owner",i.a.User.current()),n.set("url",r),new Promise((function(e,t){n.save().then((function(t){return e(t)}),(function(e){return t(e)}))}))},find:function(e){var t=e.page,n=void 0===t?0:t,r=e.limit,o=void 0===r?10:r,c=new i.a.Query("Image");return c.include("owner"),c.limit(o),c.skip(n*o),c.descending("createdAt"),c.equalTo("owner",i.a.User.current()),new Promise((function(e,t){c.find().then((function(t){return e(t)})).catch((function(e){return t(e)}))}))}};window.Uploader=c},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r,i,o,c,a,s,u,l,p,b,j,f,O,h,y=n(0),g=n(19),d=n(33),m=n(34),v=n(7),w=(n(59),n(97)),x=n(2),U=n(25),P=new(r=function(){function e(){Object(d.a)(this,e),Object(g.a)(this,"list",i,this),Object(g.a)(this,"isLoading",o,this),Object(g.a)(this,"hasMore",c,this),Object(g.a)(this,"page",a,this),this.limit=10}return Object(m.a)(e,[{key:"append",value:function(e){this.list=this.list.concat(e)}},{key:"find",value:function(){var e=this;this.isLoading=!0,U.b.find({page:this.page,limit:this.limit}).then((function(t){e.append(t),e.page++,t.length<e.limit&&(e.hasMore=!1)})).catch((function(e){w.b.error("\u52a0\u8f7d\u6570\u636e\u5931\u8d25")})).finally((function(){e.isLoading=!1}))}},{key:"reset",value:function(){this.list=[],this.isLoading=!1,this.hasMore=!0,this.page=0}}]),e}(),i=Object(v.a)(r.prototype,"list",[x.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),o=Object(v.a)(r.prototype,"isLoading",[x.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),c=Object(v.a)(r.prototype,"hasMore",[x.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),a=Object(v.a)(r.prototype,"page",[x.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(v.a)(r.prototype,"append",[x.f],Object.getOwnPropertyDescriptor(r.prototype,"append"),r.prototype),Object(v.a)(r.prototype,"find",[x.f],Object.getOwnPropertyDescriptor(r.prototype,"find"),r.prototype),Object(v.a)(r.prototype,"reset",[x.f],Object.getOwnPropertyDescriptor(r.prototype,"reset"),r.prototype),r),k=new(s=function(){function e(){Object(d.a)(this,e),Object(g.a)(this,"currentUser",u,this),Object(x.m)(this)}return Object(m.a)(e,[{key:"pullUser",value:function(){this.currentUser=U.a.getCurrentUser()}},{key:"resetUser",value:function(){this.currentUser=null}}]),e}(),u=Object(v.a)(s.prototype,"currentUser",[x.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(v.a)(s.prototype,"pullUser",[x.f],Object.getOwnPropertyDescriptor(s.prototype,"pullUser"),s.prototype),Object(v.a)(s.prototype,"resetUser",[x.f],Object.getOwnPropertyDescriptor(s.prototype,"resetUser"),s.prototype),s),F=new(l=function(){function e(){Object(d.a)(this,e),Object(g.a)(this,"fileName",p,this),Object(g.a)(this,"file",b,this),Object(g.a)(this,"isUploading",j,this),Object(g.a)(this,"serverFile",f,this),Object(x.m)(this)}return Object(m.a)(e,[{key:"setFileName",value:function(e){this.fileName=e}},{key:"setFile",value:function(e){this.file=e}},{key:"upLoad",value:function(){var e=this;return this.isUploading=!0,this.serverFile=null,new Promise((function(t,n){U.b.add(e.fileName,e.file).then((function(n){e.serverFile=n,console.log("\u4e0a\u4f20\u6210\u529f"),t(n)})).catch((function(e){console.log("\u4e0a\u4f20\u5931\u8d25"),n(e)}))}))}},{key:"reset",value:function(){this.isUploading=!1,this.serverFile=null}}]),e}(),p=Object(v.a)(l.prototype,"fileName",[x.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),b=Object(v.a)(l.prototype,"file",[x.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=Object(v.a)(l.prototype,"isUploading",[x.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),f=Object(v.a)(l.prototype,"serverFile",[x.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(v.a)(l.prototype,"setFileName",[x.f],Object.getOwnPropertyDescriptor(l.prototype,"setFileName"),l.prototype),Object(v.a)(l.prototype,"setFile",[x.f],Object.getOwnPropertyDescriptor(l.prototype,"setFile"),l.prototype),Object(v.a)(l.prototype,"upLoad",[x.f],Object.getOwnPropertyDescriptor(l.prototype,"upLoad"),l.prototype),Object(v.a)(l.prototype,"reset",[x.f],Object.getOwnPropertyDescriptor(l.prototype,"reset"),l.prototype),l),z=new(O=function(){function e(){Object(d.a)(this,e),Object(g.a)(this,"values",h,this),Object(x.m)(this)}return Object(m.a)(e,[{key:"setUsername",value:function(e){this.values.username=e}},{key:"setPassword",value:function(e){this.values.password=e}},{key:"login",value:function(){var e=this;return new Promise((function(t,n){U.a.login(e.values.username,e.values.password).then((function(e){k.pullUser(),t(e)})).catch((function(e){k.resetUser(),n(e)}))}))}},{key:"register",value:function(){var e=this;return new Promise((function(t,n){U.a.register(e.values.username,e.values.password).then((function(e){w.b.success("\u6ce8\u518c\u6210\u529f\uff0c\u6b63\u51c6\u5907\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762"),k.pullUser(),t(e)})).catch((function(e){w.b.success("\u6ce8\u518c\u5931\u8d25\uff0c\u8bf7\u60a8\u7a0d\u540e\u518d\u8bd5"),k.resetUser(),n(e)}))}))}},{key:"logOut",value:function(){console.log("\u6ce8\u9500"),P.reset(),k.resetUser(),F.reset(),this.values.password="",this.values.username="",U.a.logOut()}}]),e}(),h=Object(v.a)(O.prototype,"values",[x.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{username:"",password:""}}}),Object(v.a)(O.prototype,"setUsername",[x.f],Object.getOwnPropertyDescriptor(O.prototype,"setUsername"),O.prototype),Object(v.a)(O.prototype,"setPassword",[x.f],Object.getOwnPropertyDescriptor(O.prototype,"setPassword"),O.prototype),Object(v.a)(O.prototype,"login",[x.f],Object.getOwnPropertyDescriptor(O.prototype,"login"),O.prototype),Object(v.a)(O.prototype,"register",[x.f],Object.getOwnPropertyDescriptor(O.prototype,"register"),O.prototype),Object(v.a)(O.prototype,"logOut",[x.f],Object.getOwnPropertyDescriptor(O.prototype,"logOut"),O.prototype),O),D=Object(y.createContext)({HistoryStore:P,AuthStore:z,UserStore:k,ImageStore:F});window.stores={AuthStore:z,UserStore:k,ImageStore:F,HistoryStore:P};var C=function(){return Object(y.useContext)(D)}}},[[109,3,4]]]);
//# sourceMappingURL=main.b1ee02da.chunk.js.map