(this.webpackJsonpepic=this.webpackJsonpepic||[]).push([[10],{247:function(e,s,n){"use strict";n.r(s);var a,t,r=n(28),o=n(252),c=n(253),i=n(110),l=(n(0),n(29)),p=n(77),m=n(10),u=n(3),b=l.a.div(a||(a=Object(r.a)(["\nmax-width:600px;\nmargin:30px auto;\nbox-shadow:2px 2px 2px 3px rgba(0,0,0,0.3);\nborder-radius:6px;\npadding:20px;\n"]))),d=l.a.h1(t||(t=Object(r.a)(["\ntext-align:center;\nmargin-bottom:25px;\n"])));s.default=function(){var e=Object(p.a)(),s=e.AuthStore,n=e.UserStore,a=Object(m.f)();return Object(u.jsxs)(b,{children:[Object(u.jsx)(d,{children:"\u767b\u5f55"}),Object(u.jsxs)(o.a,{name:"basic",labelCol:{span:4},wrapperCol:{span:20},initialValues:{remember:!0},onFinish:function(e){console.log("Success2:",e),s.setUsername(e.username),s.setPassword(e.password),s.login().then((function(){console.log("\u767b\u5f55\u6210\u529f,\u8df3\u8f6c\u5230\u9996\u9875"),console.log(n.currentUser),a.push("/")})).catch((function(e){console.log(e),console.log("\u767b\u5f55\u5931\u8d25")}))},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[Object(u.jsx)(o.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"},{validator:function(e,s){return/\W/.test(s)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):s.lenth<4||s.lenth>10?Promise.reject("\u5b57\u7b26\u957f\u5ea6\u53ea\u80fd\u662f4-10\u4f4d"):Promise.resolve()}}],children:Object(u.jsx)(c.a,{})}),Object(u.jsx)(o.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"},{min:4,message:"\u6700\u5c0f4\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u592710\u4e2a\u5b57\u7b26"}],children:Object(u.jsx)(c.a.Password,{})}),Object(u.jsx)(o.a.Item,{wrapperCol:{offset:10,span:30},children:Object(u.jsx)(i.a,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})})]})]})}}}]);
//# sourceMappingURL=10.9d31b598.chunk.js.map