"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[432],{8432:function(e,a,t){t.r(a);var s=t(9439),l=t(2791),n=t(3277),r=t(7689),o=t(1087),i=t(5264),u=t(184);a.default=function(){var e=(0,l.useState)(""),a=(0,s.Z)(e,2),t=a[0],m=a[1],c=(0,l.useState)(""),p=(0,s.Z)(c,2),d=p[0],h=p[1],f=(0,l.useState)(""),w=(0,s.Z)(f,2),x=w[0],j=w[1],y=(0,r.s0)(),b=function(e){var a=e.target,t=a.name,s=a.value;"email"===t?m(s):"password"===t?h(s):j(s)};return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d.length<7?i.Notify.failure("Password must be at least 7 characters"):x&&t&&d?((0,n.z2)({name:x,email:t,password:d}).then((function(){i.Notify.success("You are successfully registered"),y("/login")})),m(""),j(""),h("")):i.Notify.failure("Please, fill ampty fields")},children:[" ","CREATE ACCOUNT",(0,u.jsx)("label",{htmlFor:"name"}),(0,u.jsx)("input",{id:"name",type:"text",name:"name",placeholder:"Your Name",onChange:b,value:x}),(0,u.jsx)("label",{htmlFor:"email"}),(0,u.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Your Email",onChange:b,value:t}),(0,u.jsx)("label",{htmlFor:"password"}),(0,u.jsx)("input",{id:"password",type:"password",name:"password",placeholder:"Password",onChange:b,value:d}),(0,u.jsx)("button",{type:"submit",children:"SIGN UP"}),(0,u.jsxs)("p",{children:["Have already an account? ",(0,u.jsx)(o.rU,{to:"/login",children:"Login"})]})]})}}}]);
//# sourceMappingURL=432.ad179207.chunk.js.map