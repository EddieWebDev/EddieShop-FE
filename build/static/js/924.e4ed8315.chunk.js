"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[924],{924:function(n,r,t){t.r(r),t.d(r,{default:function(){return v}});var e,c,a,u=t(7689),i=t(2523),s=t(168),o=t(4238),d=o.Z.div(e||(e=(0,s.Z)(["\n    flex\n    flex-col\n    p-2\n    my-4\n    border-4\n    border-primary-darkgreen\n    bg-primary-darkbeige\n    items-center\n"]))),p=o.Z.img(c||(c=(0,s.Z)(["\n    w-96\n    h-56\n    my-4\n    object-contain\n"]))),f=o.Z.div(a||(a=(0,s.Z)(["\n   flex\n   flex-col\n   items-left\n   justify-center\n   gap-4\n   max-w-sm\n"]))),l=t(2791),h=t(5333),x=t(3035),m=t(184);var v=function(){var n=(0,u.UO)().id,r=(0,l.useContext)(h.A),t=(0,i.e)(n),e=t.data,c=(t.isLoading,t.isError),a=t.error;return c&&a.message,(0,m.jsx)("section",{children:e&&(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:e.productname}),(0,m.jsxs)(d,{children:[(0,m.jsxs)("div",{className:"flex flex-wrap max-w-full p-4 gap-4",children:[(0,m.jsx)(p,{src:"".concat(e.product_img_url),alt:"".concat(e.productname)}),(0,m.jsxs)(f,{children:[(0,m.jsxs)("h5",{children:[(0,m.jsx)("b",{children:"Product id: "}),e.id]}),(0,m.jsxs)("h5",{children:[(0,m.jsx)("b",{children:"Price: "}),"$",e.price]}),(0,m.jsxs)("h5",{children:[(0,m.jsx)("b",{children:"Stock: "}),e.stock]}),(0,m.jsxs)("h5",{children:[(0,m.jsx)("b",{children:"Category: "}),e.category]}),(0,m.jsxs)("h5",{children:[(0,m.jsx)("b",{children:"Description: "}),(0,m.jsx)("p",{className:"text-sm",children:e.description})]})]})]}),e.stock<1?(0,m.jsx)(x.a4,{className:"bg-primary-green",disabled:!0,children:"Out of stock"}):(0,m.jsx)(x.a4,{onClick:function(){return r.addOneToCart(e.id,e.productname,e.price,e.stock)},children:"Add to cart"})]})]})})}},8435:function(n,r,t){t.d(r,{Ir:function(){return d},V8:function(){return i},dC:function(){return p},gk:function(){return u},nM:function(){return o},ry:function(){return s}});var e=t(4165),c=t(5861),a=t(3263).Z.create({baseURL:"http://localhost:3000"}),u=function(){var n=(0,c.Z)((0,e.Z)().mark((function n(r){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/api/products/".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),i=function(){var n=(0,c.Z)((0,e.Z)().mark((function n(r){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/api/products/category/".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,c.Z)((0,e.Z)().mark((function n(r){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.post("/api/products",r);case 2:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),o=function(){var n=(0,c.Z)((0,e.Z)().mark((function n(r){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.id,n.next=3,a.put("/api/products/".concat(t),r);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,c.Z)((0,e.Z)().mark((function n(r){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.delete("/api/products/".concat(r));case 2:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,c.Z)((0,e.Z)().mark((function n(r){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/api/products/search/".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},2523:function(n,r,t){t.d(r,{e:function(){return a}});var e=t(2917),c=t(8435),a=function(n){return(0,e.a)({queryKey:["product-by-id",n],queryFn:function(){return(0,c.gk)(n)},enabled:!!n})}}}]);
//# sourceMappingURL=924.e4ed8315.chunk.js.map