(this.webpackJsonpnorthwestlabs=this.webpackJsonpnorthwestlabs||[]).push([[0],{103:function(e,t,a){e.exports=a(151)},150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(28),c=a.n(l),i=(a(107),a(108),a(69),a(25)),m=a.n(i),o=a(41),u=a(67),s=a(84),d=a(85),p=a(101),E=a(102),b=a(32),f=a.n(b),h=r.a.createContext(),g=a(6),v=a(33),y=a(157),A=a(158),C=a(94),x=a(162),N=a(163),O=a(155),j=a(86),w=a.n(j);var k=function(e){var t=r.a.useContext(h);return r.a.createElement(x.a,{bg:"primary",expand:"lg"},r.a.createElement(x.a.Brand,{href:"/home"},r.a.createElement("img",{alt:"Site Icon",src:w.a}),"    ","Covid 19 Campaigns"),r.a.createElement(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(x.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(N.a,{className:"mr-auto"}),r.a.createElement(N.a,null,r.a.createElement(N.a.Link,{href:"/cart"},r.a.createElement("i",{className:"fas fa-shopping-cart"}),"\xa0\xa0",t.cartCount,"\xa0\xa0"),r.a.createElement(O.a,{title:"Welcome, Matt",alignRight:!0,id:"basic-nav-dropdown"},r.a.createElement(O.a.Item,null,"My Account"),r.a.createElement(O.a.Divider,null),r.a.createElement(O.a.Item,{href:"#action/3.4"},"Logout")))))},S=a(7),T=a(21),z=a(22),B=a(92),H=a(156),M=a(93);var G=function(e){var t,a=r.a.useContext(h),n=r.a.useState(0),l=Object(T.a)(n,2),c=l[0],i=l[1],m=r.a.useState(0),o=Object(T.a)(m,2),u=o[0],s=o[1],d={},p={},E=0,b=Object(S.a)(a.campaigns);try{for(b.s();!(t=b.n()).done;){var f=t.value;f.category in d?(d[f.category]=d[f.category]+1,E+=1):(d[f.category]=1,E+=1)}}catch(C){b.e(C)}finally{b.f()}var v,y=Object(S.a)(a.campaigns);try{for(y.s();!(v=y.n()).done;){var A=v.value;A.currencycode in p?p[A.currencycode]=p[A.currencycode]+1:p[A.currencycode]=1}}catch(C){y.e(C)}finally{y.f()}return r.a.createElement(N.a,{className:"flex-column"},r.a.createElement(z.a,{as:M.a},r.a.createElement(B.a,{variant:"primary"},r.a.createElement(g.b,{to:"/covid-home/"},"All Categories (",E,")")),r.a.createElement(z.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic"}),r.a.createElement(z.a.Menu,null,Object.keys(d).map((function(e,t){return r.a.createElement(z.a.Item,{key:t,className:"nav-link"},r.a.createElement(g.b,{to:"/campaign-category/"+e,className:"nav-link"},r.a.createElement("i",null,e," (",d[e],")")))})))),r.a.createElement("p",null,"Min"),r.a.createElement("input",{onChange:function(e){return i(e.target.value)}}),r.a.createElement("p",null,"Max"),r.a.createElement("input",{onChange:function(e){return s(e.target.value)}}),r.a.createElement(g.b,{to:"/campaign-goal/minGoal/"+c+"/maxGoal/"+u,className:"nav-link"},"Goal"),r.a.createElement(H.a,{id:"dropdown-basic-button",title:"Currency"},Object.keys(p).map((function(e,t){return r.a.createElement(z.a.Item,{key:t,className:"nav-link"},r.a.createElement(g.b,{to:"/campaign-currency/"+e,className:"nav-link"},r.a.createElement("i",null,e," (",p[e],")")))}))),r.a.createElement(g.b,{to:"/campaign-charity/1",className:"nav-link"},"See only valid charities"),r.a.createElement(g.b,{to:"/campaign-charity/0",className:"nav-link"},"See only non-valid charities"))};var P=function(e){return r.a.createElement("div",null,r.a.createElement(g.b,{href:"/index/"},r.a.createElement("h3",null,"Predict your campaign today!")),r.a.createElement("ul",null))};var F=function(e){return r.a.createElement("footer",null,r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("p",null,"\xa9 2020 Northwest Labs ")))},I=a(164);var J=function(e){return r.a.createElement(I.a,{size:"lg",color:"secondary"},r.a.createElement(I.a.Img,{variant:"top",src:"".concat("/static/build","/products/").concat(e.product.filename,"-1.png")}),r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,null,e.product.name),r.a.createElement(I.a.Text,null,"$",e.product.price),r.a.createElement(g.b,{to:"/product/"+e.product.id,className:"btn btn-primary position-absolute",style:{top:"5px",right:"10px"}},"Details")))};var Q=function(e){var t=r.a.useContext(h),a=[],n=Object(v.h)("/category/:name");if(null!=n){var l,c=Object(S.a)(t.products);try{for(c.s();!(l=c.n()).done;){var i=l.value;i.category.title===n.params.name&&a.push(i)}}catch(s){c.e(s)}finally{c.f()}}else{var m,o=Object(S.a)(t.products);try{for(o.s();!(m=o.n()).done;){var u=m.value;a.push(u)}}catch(s){o.e(s)}finally{o.f()}}return r.a.createElement(y.a,{fluid:!0,className:"p-4"},r.a.createElement(A.a,null,a.map((function(e,t){return r.a.createElement(C.a,{key:t,className:"col-3 my-2"},r.a.createElement(J,{product:e}))}))))};var R=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{fluid:!0,className:"p-4"},r.a.createElement(A.a,{noGutters:!0},r.a.createElement(C.a,null,r.a.createElement("h1",null,"About"))),r.a.createElement(A.a,{noGutters:!0},r.a.createElement(C.a,null,"This site is about the Northwest Labs Assay Tests. Dang, more Northwest Labs!!"))))};var K=function(e){return r.a.createElement(y.a,{fluid:!0,className:"p-4"},r.a.createElement(A.a,{noGutters:!0},r.a.createElement(C.a,null,r.a.createElement("h1",null,"Help"))),r.a.createElement(A.a,{noGutters:!0},r.a.createElement(C.a,null,"If you need help, please contact the real Northwest Labs, not me lol")))};var Z=function(e){var t=r.a.useContext(h),a=[],n=Object(v.f)(),l=0;return Object.keys(t.cart).forEach((function(e){var n,r=null,c=Object(S.a)(t.products);try{for(c.s();!(n=c.n()).done;){var i=n.value;""+i.id===e&&(r=i)}}catch(o){c.e(o)}finally{c.f()}var m=t.cart[e]*r.price;r&&a.push({id:r.id,filename:r.filename,name:r.name,quantity:t.cart[e],price:r.price,extended:m}),l+=m})),r.a.createElement("div",{className:"m-4 table-responsive text-nowrap"},r.a.createElement("p",null,"Shopping Cart"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Product"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Extended"),r.a.createElement("th",null))),r.a.createElement("tbody",null,a.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("img",{alt:e.name,src:"".concat("/static/build","/products/").concat(e.filename,"-1.png"),className:"border rounded mt-1 mx-1",style:{height:"100px",width:"100px"}})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement(B.a,{variant:"secondary",onClick:function(a){t.subQuantity(e.id)}},"-"),"\xa0 \xa0",e.quantity,"\xa0 \xa0",r.a.createElement(B.a,{variant:"secondary",onClick:function(a){t.addQuantity(e.id)}},"+")),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.extended),r.a.createElement("td",null,r.a.createElement(B.a,{variant:"secondary",onClick:function(a){t.removeFromCart(e.id)}},"Remove")))})))),r.a.createElement("p",null,"Total: ",l),r.a.createElement(B.a,{variant:"secondary",onClick:function(e){n.push("/checkout"),t.updateCartTotal(l)}},"Checkout"))};var Y=function(e){var t,a=r.a.useContext(h),n=Object(v.h)("/product/:id"),l=r.a.useState("1"),c=Object(T.a)(l,2),i=c[0],m=c[1],o=null,u=Object(v.f)(),s=Object(S.a)(a.products);try{for(s.s();!(t=s.n()).done;){var d=t.value;""+d.id===n.params.id&&(o=d)}}catch(p){s.e(p)}finally{s.f()}return o?r.a.createElement("div",{className:"m-4"},r.a.createElement("div",{className:"float-right border rounded m-0 p-0",style:{width:"300px",height:"300px"}},r.a.createElement("img",{alt:o.name,src:"".concat("/static/build","/products/").concat(o.filename,"-").concat(i,".png"),style:{width:"300px",height:"300px"},className:"w-100"}),r.a.createElement("div",null,["1","2","3","4"].map((function(e){return r.a.createElement("img",{key:o.id+e,alt:o.name,src:"".concat("/static/build","/products/").concat(o.filename,"-").concat(e,".png"),className:"border rounded mt-3 mx-1",style:{height:"30px",width:"30px"},onMouseEnter:function(t){m(e)}})})))),r.a.createElement("h1",null,o.name),r.a.createElement("h2",null,"$",o.price),r.a.createElement("p",null," ",o.description),r.a.createElement(B.a,{variant:"warning",onClick:function(e){a.addToCart(o.id),u.push("/cart")}},"Add To Cart")):r.a.createElement("h2",null,"Product Not Found")},q=a(159),L=a(161),X=a(35),D=a(19),U=a(57),V=Object(U.a)("pk_test_S21YezIw2QBn8SXH89kB0uQ200rYoIY56T");var _=function(e){return r.a.createElement(D.Elements,{stripe:V},r.a.createElement(W,null))},W=function(e){var t=r.a.useContext(h),a=Object(D.useStripe)(),n=Object(D.useElements)(),l=t.getCartTotal(),c=Object(v.f)(),i=r.a.useState(null),u=Object(T.a)(i,2),s=u[0],d=u[1];return r.a.createElement(X.c,{initialValues:{name:"Matthew Tannnyhill",address1:"1234",address2:"5678",city:"Provo",state:"UT",zipcode:"84604"},validateOnChange:!1,validateOnBlur:!1,validate:function(e){var t={};return e.name||(t.name="Required"),e.address1||(t.address1="Required"),e.city||(t.city="Required"),e.state||(t.state="Required"),e.zipcode||(t.zipcode="Required"),t},onSubmit:function(){var e=Object(o.a)(m.a.mark((function e(r,i){var o,u,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],Object.keys(t.cart).forEach((function(e){var a,n=null,r=Object(S.a)(t.products);try{for(r.s();!(a=r.n()).done;){var l=a.value;""+l.id===e&&(n=l)}}catch(c){r.e(c)}finally{r.f()}n&&o.push({pid:n.id,qty:t.cart[e],price:parseFloat(n.price)})})),e.next=4,f.a.post("/api/sale/",{name:r.name,address1:r.address1,address2:r.address2,city:r.city,state:r.state,zipcode:r.zipcode,total:l.total,items:o});case 4:return u=e.sent,e.next=7,a.confirmCardPayment(u.data.client_secret,{payment_method:{card:n.getElement(D.CardElement),billing_details:{name:r.name}}});case 7:if(!(s=e.sent).error){e.next=13;break}return d(s.error.message),e.abrupt("return");case 13:t.clearCart(),c.push("/receipt");case 15:return e.next=17,new Promise((function(e){setTimeout((function(){e()}),3e3)}));case 17:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){return r.a.createElement("div",null,s&&r.a.createElement("p",{className:"danger"},s),r.a.createElement($,{form:e,total:l}))}))},$=function(e){return r.a.createElement("div",null,r.a.createElement(y.a,null,"\xa0",r.a.createElement("h2",null,"Checkout"),"\xa0",r.a.createElement(X.b,null,r.a.createElement(A.a,null,r.a.createElement(C.a,null,r.a.createElement("div",{className:"p-3 mb-0 bg-info rounded-top border border-bottom-0 border-dark"},r.a.createElement("h5",null,"Shipping")),r.a.createElement("div",{className:"p-3 mb-0 bg-white rounded-bottom border border-dark"},r.a.createElement(ee,{title:"Name:",name:"name",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(ee,{title:"Address 1:",name:"address1",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(ee,{title:"Address 2:",name:"address2",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(ee,{title:"City:",name:"city",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(ee,{title:"State:",name:"state",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(ee,{title:"Zip Code:",name:"zipcode",type:"text",disabled:e.form.isSubmitting}))),r.a.createElement(C.a,null,r.a.createElement("div",{className:"p-3 mb-0 bg-info rounded-top border border-bottom-0 border-dark"},r.a.createElement("h5",null,"Payment")),r.a.createElement("div",{className:"p-3 mb-0 bg-white rounded-bottom border border-dark"},r.a.createElement(D.CardElement,null)),"\xa0",r.a.createElement("div",null,"Your card will be charged ",e.total.total),"\xa0",r.a.createElement("div",null,r.a.createElement(B.a,{variant:"secondary",type:"submit",disabled:e.form.isSubmitting},e.form.isSubmitting&&r.a.createElement(q.a,{animation:"border",variant:"dark",size:"sm"})," "," "," ",e.form.isSubmitting&&r.a.createElement("span",null,"Loading"),!e.form.isSubmitting&&r.a.createElement("span",null,"Purchase"))))))))},ee=function(e){return r.a.createElement(X.a,{name:e.name},(function(t){return r.a.createElement(L.a.Group,null,e.title&&r.a.createElement(L.a.Label,null,e.title),r.a.createElement(L.a.Control,Object.assign({type:e.type,placeholder:e.placeholder,disabled:e.disabled},t.field)),t.meta.touched&&t.meta.error&&r.a.createElement("div",{className:"text-danger"},t.meta.error))}))};var te=function(e){return r.a.createElement("div",{className:"m-4"},r.a.createElement("h1",null,"Thank you for your purchase!"))};var ae=function(e){var t,a=r.a.useContext(h),n=Object(v.h)("/campaign/:id"),l=null,c=Object(S.a)(a.campaigns);try{for(c.s();!(t=c.n()).done;){var i=t.value;""+i.id===n.params.id&&(l=i)}}catch(m){c.e(m)}finally{c.f()}return l?r.a.createElement("div",{className:"m-4"},r.a.createElement("div",{className:"float-right border rounded m-0 p-0",style:{width:"300px",height:"300px"}},r.a.createElement("img",{alt:l.name,src:l.campaign_image_url,style:{width:"300px",height:"300px"},className:"w-100"})),r.a.createElement("h1",null,l.title),r.a.createElement("h2",null,"$",l.url),r.a.createElement("p",null," ",l.description)):r.a.createElement("h2",null,"Campaign Not Found")},ne=Object(U.a)("pk_test_S21YezIw2QBn8SXH89kB0uQ200rYoIY56T");var re=function(e){return r.a.createElement(D.Elements,{stripe:ne},r.a.createElement(le,null))},le=function(e){var t=r.a.useContext(h),a=Object(D.useStripe)(),n=Object(D.useElements)(),l=t.getCartTotal(),c=Object(v.f)(),i=r.a.useState(null),u=Object(T.a)(i,2),s=u[0],d=u[1];return r.a.createElement(X.c,{initialValues:{name:"Matthew Tannnyhill",address1:"1234",address2:"5678",city:"Provo",state:"UT",zipcode:"84604"},validateOnChange:!1,validateOnBlur:!1,validate:function(e){var t={};return e.name||(t.name="Required"),e.address1||(t.address1="Required"),e.city||(t.city="Required"),e.state||(t.state="Required"),e.zipcode||(t.zipcode="Required"),t},onSubmit:function(){var e=Object(o.a)(m.a.mark((function e(r,i){var o,u,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],Object.keys(t.cart).forEach((function(e){var a,n=null,r=Object(S.a)(t.products);try{for(r.s();!(a=r.n()).done;){var l=a.value;""+l.id===e&&(n=l)}}catch(c){r.e(c)}finally{r.f()}n&&o.push({pid:n.id,qty:t.cart[e],price:parseFloat(n.price)})})),e.next=4,f.a.post("/api/sale/",{name:r.name,address1:r.address1,address2:r.address2,city:r.city,state:r.state,zipcode:r.zipcode,total:l.total,items:o});case 4:return u=e.sent,e.next=7,a.confirmCardPayment(u.data.client_secret,{payment_method:{card:n.getElement(D.CardElement),billing_details:{name:r.name}}});case 7:if(!(s=e.sent).error){e.next=13;break}return d(s.error.message),e.abrupt("return");case 13:t.clearCart(),c.push("/receipt");case 15:return e.next=17,new Promise((function(e){setTimeout((function(){e()}),3e3)}));case 17:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){return r.a.createElement("div",null,s&&r.a.createElement("p",{className:"danger"},s),r.a.createElement(ce,{form:e,total:l}))}))},ce=function(e){return r.a.createElement("div",null,r.a.createElement(y.a,null,"\xa0",r.a.createElement("h2",null,"Checkout"),"\xa0",r.a.createElement(X.b,null,r.a.createElement(A.a,null,r.a.createElement(C.a,null,r.a.createElement("div",{className:"p-3 mb-0 bg-info rounded-top border border-bottom-0 border-dark"},r.a.createElement("h5",null,"Shipping")),r.a.createElement("div",{className:"p-3 mb-0 bg-white rounded-bottom border border-dark"},r.a.createElement(ie,{title:"Name:",name:"name",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(ie,{title:"Address 1:",name:"address1",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(ie,{title:"Address 2:",name:"address2",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(ie,{title:"City:",name:"city",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(ie,{title:"State:",name:"state",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(ie,{title:"Zip Code:",name:"zipcode",type:"text",disabled:e.form.isSubmitting}))),r.a.createElement(C.a,null,r.a.createElement("div",{className:"p-3 mb-0 bg-info rounded-top border border-bottom-0 border-dark"},r.a.createElement("h5",null,"Payment")),r.a.createElement("div",{className:"p-3 mb-0 bg-white rounded-bottom border border-dark"},r.a.createElement(D.CardElement,null)),"\xa0",r.a.createElement("div",null,"Your card will be charged ",e.total.total),"\xa0",r.a.createElement("div",null,r.a.createElement(B.a,{variant:"secondary",type:"submit",disabled:e.form.isSubmitting},e.form.isSubmitting&&r.a.createElement(q.a,{animation:"border",variant:"dark",size:"sm"})," "," "," ",e.form.isSubmitting&&r.a.createElement("span",null,"Loading"),!e.form.isSubmitting&&r.a.createElement("span",null,"Purchase"))))))))},ie=function(e){return r.a.createElement(X.a,{name:e.name},(function(t){return r.a.createElement(L.a.Group,null,e.title&&r.a.createElement(L.a.Label,null,e.title),r.a.createElement(L.a.Control,Object.assign({type:e.type,placeholder:e.placeholder,disabled:e.disabled},t.field)),t.meta.touched&&t.meta.error&&r.a.createElement("div",{className:"text-danger"},t.meta.error))}))},me=a(165),oe=a(160);var ue=function(e){return r.a.createElement(I.a,{size:"lg",color:"secondary",style:{width:"100%"}},r.a.createElement(I.a.Img,{variant:"top",src:e.campaign.campaign_image_url}),r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,null,e.campaign.title),r.a.createElement(I.a.Text,null,r.a.createElement(I.a.Subtitle,null,"Goal:$",e.campaign.goal),r.a.createElement("br",null),r.a.createElement(I.a.Subtitle,null,"Num Hearts:$",e.campaign.campaign_hearts),r.a.createElement("br",null),r.a.createElement(I.a.Subtitle,null,"Charity:$",e.campaign.charity_name),r.a.createElement("br",null),r.a.createElement(I.a.Subtitle,null,"Metrics:$",e.campaign.goal)),r.a.createElement(g.b,{to:"/campaign/"+e.campaign.id,className:"btn btn-primary position-absolute",style:{top:"5px",right:"10px"}},"Details")))},se=a(66);var de=function(e){var t=r.a.useContext(h),a=r.a.useState(0),n=Object(T.a)(a,2),l=n[0],c=n[1],i=0,m=[],o=[],u=Object(v.h)("/campaign-category/:name"),s=Object(v.g)("/campaign-goal/minGoal/:min/maxGoal/:max"),d=Object(v.h)("/campaign-currency/:name"),p=Object(v.h)("/campaign-charity/:name");if(null!=u){var E,b=Object(S.a)(t.campaigns);try{for(b.s();!(E=b.n()).done;){var f=E.value;f.category===u.params.name&&(m.push(f),i++)}}catch(I){b.e(I)}finally{b.f()}}else if(null!=s.min&&null!=s.max){var g,A=s.min,C=s.max,x=Object(S.a)(t.campaigns);try{for(x.s();!(g=x.n()).done;){var N=g.value;N.goal>=A&&N.goal<=C&&(m.push(N),i++)}}catch(I){x.e(I)}finally{x.f()}}else if(null!=p){var O,j=Object(S.a)(t.campaigns);try{for(j.s();!(O=j.n()).done;){var w=O.value;w.charity_valid==p.params.name&&(m.push(w),i++)}}catch(I){j.e(I)}finally{j.f()}}else if(null!=d){var k,z=Object(S.a)(t.campaigns);try{for(z.s();!(k=z.n()).done;){var B=k.value;B.currencycode===d.params.name&&(m.push(B),i++)}}catch(I){z.e(I)}finally{z.f()}}else{var H,M=Object(S.a)(t.campaigns);try{for(M.s();!(H=M.n()).done;){var G=H.value;m.push(G),i++}}catch(I){M.e(I)}finally{M.f()}}if(m.length<=18)for(var P=0;P<m.length;P++)o.push(m[P]);else{l<0&&c(0),l>m.length-18&&c(l-18);for(var F=l;F<l+18;F++)o.push(m[F])}return r.a.createElement("div",null,r.a.createElement("div",null,"Search returned ",i," results."),r.a.createElement("div",null,r.a.createElement(me.a,{className:"float-right"},r.a.createElement(me.a.Prev,{onClick:function(e){c(l-18)}},"Previous Page"),r.a.createElement(me.a.Next,{onClick:function(e){c(l+18)}},"Next Page"))),r.a.createElement("div",null,r.a.createElement(se.c,{md:"12"},r.a.createElement("form",{className:"form-inline mt-4 mb-4"},r.a.createElement(se.d,{icon:"search"}),r.a.createElement("input",{className:"form-control form-control-sm ml-3 w-75",type:"text",placeholder:"Search","aria-label":"Search"})))),r.a.createElement(y.a,null,r.a.createElement(oe.a,null,o.map((function(e,t){return r.a.createElement(ue,{key:ImageBitmapRenderingContext,campaign:e})})))))};a(150);var pe=function(e){return r.a.createElement(g.a,null,r.a.createElement(y.a,{fluid:!0,className:"p-0 min-vh-100 d-flex flex-column"},r.a.createElement(A.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},r.a.createElement(C.a,{className:"px-0 py-0 bg-primary"},r.a.createElement(k,null))),r.a.createElement(A.a,{noGutters:!0,className:"flex-grow-1"},r.a.createElement(C.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},r.a.createElement(G,null)),r.a.createElement(C.a,{md:"8",className:"bg-white"},r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/covid-details"},r.a.createElement(ae,null)),r.a.createElement(v.a,{path:"/covid-prediction"},r.a.createElement(re,null)),r.a.createElement(v.a,{path:"/covid-home"},r.a.createElement(de,null)),r.a.createElement(v.a,{path:"/campaign/:id"},r.a.createElement(ae,null)),r.a.createElement(v.a,{path:"/campaign-category/:name"},r.a.createElement(de,null)),r.a.createElement(v.a,{path:"/campaign-goal/minGoal/:min/maxGoal/:max"},r.a.createElement(de,null)),r.a.createElement(v.a,{path:"/campaign-currency/:name"},r.a.createElement(de,null)),r.a.createElement(v.a,{path:"/campaign-charity/:name"},r.a.createElement(de,null)),r.a.createElement(v.a,{path:"/about"},r.a.createElement(R,null)),r.a.createElement(v.a,{path:"/cart"},r.a.createElement(Z,null)),r.a.createElement(v.a,{path:"/checkout"},r.a.createElement(_,null)),r.a.createElement(v.a,{path:"/help"},r.a.createElement(K,null)),r.a.createElement(v.a,{path:"/receipt"},r.a.createElement(te,null)),r.a.createElement(v.a,{path:"/product/:id"},r.a.createElement(Y,null)),r.a.createElement(v.a,{path:"/category/:name"},r.a.createElement(Q,null)),r.a.createElement(v.a,{path:"/"},r.a.createElement(Q,null)))),r.a.createElement(C.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},r.a.createElement(P,null))),r.a.createElement(A.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},r.a.createElement(C.a,{className:"px-0 py-0 bg-primary"},r.a.createElement(F,null)))))},Ee=a(40),be=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).addToCart=function(e){n.setState((function(t){return Object(Ee.a)(t,(function(t){if(t.cart[e]){var a=t.cart[e];t.cart[e]=a+1,t.cartCount=t.cartCount+1}else t.cart[e]=1,t.cartCount=t.cartCount+1}))}))},n.removeFromCart=function(e){n.setState((function(t){return Object(Ee.a)(t,(function(t){t.cart[e]&&(t.cartCount=t.cartCount-t.cart[e],delete t.cart[e])}))}))},n.addQuantity=function(e){n.setState((function(t){return Object(Ee.a)(t,(function(t){if(t.cart[e]){var a=t.cart[e];t.cart[e]=a+1,t.cartCount=t.cartCount+1}}))}))},n.subQuantity=function(e){n.setState((function(t){return Object(Ee.a)(t,(function(t){if(t.cart[e])if(t.cart[e]<=1)delete t.cart[e],t.cartCount=t.cartCount-1;else{var a=t.cart[e];t.cart[e]=a-1,t.cartCount=t.cartCount-1}}))}))},n.updateCartTotal=function(e){n.setState((function(t){return Object(Ee.a)(t,(function(t){t.cartTotal=e}))}))},n.getCartTotal=function(){return{total:n.state.cartTotal}},n.clearCart=function(){n.setState((function(e){return Object(Ee.a)(e,(function(e){e.cartTotal=0,e.cartCount=0,e.cart={}}))}))},n.actions={addToCart:n.addToCart,removeFromCart:n.removeFromCart,addQuantity:n.addQuantity,subQuantity:n.subQuantity,updateCartTotal:n.updateCartTotal,getCartTotal:n.getCartTotal,clearCart:n.clearCart},n.state={categories:null,products:null,campaigns:null,cart:{},cartCount:0,cartTotal:0},n}return Object(d.a)(a,[{key:"render",value:function(){return this.state.categories&&this.state.products&&this.state.cart&&this.state.campaigns?r.a.createElement(h.Provider,{value:Object(u.a)({},this.state,{},this.actions)},r.a.createElement(pe,null)):r.a.createElement("div",null,r.a.createElement(q.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},{key:"componentDidMount",value:function(){var e=Object(o.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://localhost:8000/api/category");case 2:return t=e.sent,e.next=5,f.a.get("http://localhost:8000/api/product");case 5:return a=e.sent,e.next=8,f.a.get("http://localhost:8000/api/campaign");case 8:n=e.sent,this.setState(Object(u.a)({},this.state,{categories:t.data,products:a.data,campaigns:n.data}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},69:function(e,t,a){},86:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABfVBMVEUAAADr6+vt7e3t7e3b2t3f3+Hu7u7t7e3i4ubs7Oze3uDt7e3f3+Hz8/Pt7e3b2t3h4eHt7e3T09Xc293i4uKhoKfd3N6/v8Pt7e3Pz9KurbPd3N63t7rh4eH////o6Ojh4eHt7e3e3d/v7+/i4uKPj4+SkZnOztHMzMyKiJHW1tiJiZLHx8mJiZOKiJHo6Oi/v8T///+JiJDZ2Nr///+KiJHJx8yJiZCKiJHBvsGKiZLS0dSKiJHp6emAgJ+KiJHIyMiKiJHi4uOJiZHKysyZmZmKiJHY2NrMzMyAgICJh5CKiZGKiJHf3uDKyc2/v7/t7e3Y19rZ2NvMy87d3d6KiJGNi5Tr6+u5uLzJyczHx8qPjZXe3d+dnKOwr7WMipOYl57s7Ozm5ufT0tbOzdDR0NPPz9LPztGtrLHY2Nrn5+fq6urd3N6lo6rFxMjLys24t7yRj5jo5+jg4OGYlp6urbPl5ebEw8eUk5uTkpqjoajb29zc296UkpoAAADxtdvrAAAAUHRSTlMATtb9+IYs+lB7vHOyFeX8Khzc9zXl58yuwNzoUV8H1BGOzz59EN/+LaXkUpYa7f44AbbtAm2uJ/VKqN/0/gj+Dt/7eboFu+wKBHPT+feyCAhrXWsAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AEcFSMFsoDQ1gAAAUBJREFUOMul0VVXw0AQBeBAi7u7u7u7O2wIQ4oUaIFSCC7F/ztJdtNM0zl54b7k4X7ZczeRpGgSEj2MMVmPN0kikpzCmADybioB0pgN5HQCZGCQSYCsbBvk5FIj8vIVZc8EBYUSmSKAfdUAxXQvlfh8B8wNlFobXE44dAX6hiPXDWWKcvy/DeV+/4kJKui+8hTgLGD+qyqqr64JBoMB/qm9tQSowz+rPr5v8AhwfnEZupIbnX1Tc/ja6G9CmvG4bWl1gDYAuLt/eHxiIu2xfQdYsQDrxH1Xdzzo6bX7vn7A4Fk1xcBgFAwBBqr8ws8YtvqRUd69vvETIhoH2pgA4+Lld/aBNuiZEAsmBfj8AghHEJjiYHoGTfj+wUfMcjGHwK+K+nmxYQFibmFnUYClZRqsrFr3XFvf2HQCbWt7x+j+ACItpRQ9ZVUCAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTI4VDIxOjM1OjA1KzAwOjAwbVp26AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0yOFQyMTozNTowNSswMDowMBwHzlQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"}},[[103,1,2]]]);
//# sourceMappingURL=main.aba4f9c8.chunk.js.map