(this.webpackJsonpimagesearchengine=this.webpackJsonpimagesearchengine||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(18),s=c.n(n),r=(c(24),c(9)),o=c(3),i=(c(25),c(19)),l=c.n(i),j=c(0);var b=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),i=Object(o.a)(s,2),b=i[0],u=i[1],m=Object(a.useState)(),h=Object(o.a)(m,2),O=h[0],d=h[1],f=Object(a.useState)("InMKdgnfPMc5vcYOioHVSM5K5x3sXCfOv3bw-yQa6Y4"),g=Object(o.a)(f,2),p=g[0],x=(g[1],Object(a.useState)([])),N=Object(o.a)(x,2),v=N[0],S=N[1],y=Object(a.useState)(1),k=Object(o.a)(y,2),C=k[0],M=k[1],w=function(e,t){var c="https://api.unsplash.com/search/photos?page=".concat(e,"&query=").concat(t,"&per_page=4&client_id=").concat(p,";");l.a.get(c).then((function(e){S([].concat(Object(r.a)(v),Object(r.a)(e.data.results))),d(e.data.total)}))};return Object(a.useEffect)((function(){w(C,c)}),[C]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container ",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-center ",children:[Object(j.jsx)("input",{onChange:function(e){n(e.target.value)},name:"photo",className:"form-control search-bar form-control-sm mr-3 ",type:"text",placeholder:"Search for photos","aria-label":"Search"}),Object(j.jsx)("button",{onClick:function(e){u(c),w(C,c)},className:"search-btn",children:Object(j.jsx)("i",{class:"fas fa-search "})})]}),Object(j.jsxs)("header",{className:"heading mt-4",children:[Object(j.jsx)("h1",{className:"topic-name",children:b}),"   ",O?Object(j.jsx)("h4",{className:"total-image",children:"".concat(O," Images has been found")}):null,"      "]}),Object(j.jsx)("hr",{className:"mt-2 mb-5"}),Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"images",children:v.map((function(e){return Object(j.jsx)("img",{src:e.urls.small,className:"img-fluid mr-5 mb-4 ",alt:"images"})}))})}),Object(j.jsx)("center",{children:b?Object(j.jsx)("button",{onClick:function(){return M((function(e){return e+1}))},className:"btn-load-more",children:"Load More"}):null})]})})};s.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.b4224747.chunk.js.map