"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[62],{9274:function(e,n,t){t.d(n,{yh:function(){return l}});var r,i,o,a,u,s=t(168),c=t(6487),l=c.ZP.form(r||(r=(0,s.Z)(["\n  width: 400px;\n  margin-top: 30px;\n"])));c.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 15px;\n"]))),c.ZP.input(o||(o=(0,s.Z)(["\n  width: 350px;\n  height: 40px;\n  border-radius: 4px;\n  border: 1px solid #5b5b5b;\n  padding-left: 10px;\n"]))),c.ZP.label(a||(a=(0,s.Z)(["\n  font-size: 18px;\n"]))),c.ZP.button(u||(u=(0,s.Z)(["\n  border: none;\n  width: 140px;\n  height: 40px;\n  background-color: teal;\n  color: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color ease 250ms;\n\n  &:hover,\n  :focus {\n    background-color: #fff;\n    border: 2px solid teal;\n    color: teal;\n  }\n"])))},6062:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var r=t(9434),i=t(2791),o=t(824),a=t(2715),u=t(2577),s="NOT_FOUND";var c=function(e,n){return e===n};function l(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,i=void 0===r?c:r,o=t.maxSize,a=void 0===o?1:o,u=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(i),f=1===a?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:s},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return s}return{get:r,put:function(n,i){r(n)===s&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,l);function d(){var n=f.get(arguments);if(n===s){if(n=e.apply(null,arguments),u){var t=f.getEntries(),r=t.find((function(e){return u(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return d.clearCache=function(){return f.clear()},d}function f(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function d(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o,a=0,u={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(u=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var c=u,l=c.memoizeOptions,d=void 0===l?t:l,p=Array.isArray(d)?d:[d],m=f(r),v=e.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(p)),x=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return o=v.apply(null,e)}));return Object.assign(x,{resultFunc:s,memoizedResultFunc:v,dependencies:m,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x};return i}var p=d(l),m=function(e){return e.contacts.items},v=function(e){return e.filter},x=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},y=p(m,v,(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),C=t(4808),g=t(6336),b=t(184),j=function(){var e=(0,r.I0)(),n=(0,r.v9)(v);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.x,{mt:"20px",children:"Find contacts by name"}),(0,b.jsx)(g.I,{size:"md",type:"text",value:n,onChange:function(n){var t=n.target.value.trim();console.log(t),e((0,C.Tv)(t))}})]})},Z=t(1413),w=t(4942),k=t(4925),z=t(9439),S=t(9640),L=t(9886);var N=t(5597),_=t(6516),I=t(2996),P=t(5113),A=["children","styleType","stylePosition","spacing"],G=["as"],E=["as"],F=(0,L.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),T=(0,z.Z)(F,2),q=T[0],B=T[1],O=(0,N.G)((function(e,n){var t=(0,_.jC)("List",e),r=(0,I.Lr)(e),o=r.children,a=r.styleType,u=void 0===a?"none":a,s=r.stylePosition,c=r.spacing,l=(0,k.Z)(r,A),f=function(e){return i.Children.toArray(e).filter((function(e){return(0,i.isValidElement)(e)}))}(o),d=c?(0,w.Z)({},"& > *:not(style) ~ *:not(style)",{mt:c}):{};return(0,b.jsx)(q,{value:t,children:(0,b.jsx)(P.m.ul,(0,Z.Z)((0,Z.Z)({ref:n,listStyleType:u,listStylePosition:s,role:"list",__css:(0,Z.Z)((0,Z.Z)({},t.container),d)},l),{},{children:f}))})}));O.displayName="List",(0,N.G)((function(e,n){e.as;var t=(0,k.Z)(e,G);return(0,b.jsx)(O,(0,Z.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,N.G)((function(e,n){e.as;var t=(0,k.Z)(e,E);return(0,b.jsx)(O,(0,Z.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var R=(0,N.G)((function(e,n){var t=B();return(0,b.jsx)(P.m.li,(0,Z.Z)((0,Z.Z)({ref:n},e),{},{__css:t.item}))}));R.displayName="ListItem";var D=(0,N.G)((function(e,n){var t=B();return(0,b.jsx)(S.J,(0,Z.Z)((0,Z.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))}));D.displayName="ListIcon";var J=function(e){var n=e.viewBox,t=void 0===n?"0 0 24 24":n,r=e.d,o=e.displayName,a=e.defaultProps,u=void 0===a?{}:a,s=i.Children.toArray(e.path),c=(0,N.G)((function(e,n){return(0,b.jsx)(S.J,(0,Z.Z)((0,Z.Z)((0,Z.Z)({ref:n,viewBox:t},u),e),{},{children:s.length?s:(0,b.jsx)("path",{fill:"currentColor",d:r})}))}));return c.displayName=o,c}({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),M=t(9055),K=function(e){var n=e.name,t=e.number,r=e.click;return(0,b.jsxs)(R,{children:[(0,b.jsx)(D,{as:J,color:"teal"}),n,":",t,(0,b.jsx)(M.z,{ml:"10px",bgColor:"teal",color:"white",size:"xs",onClick:r,children:"Delete"})]})},U=t(3634),Y=function(){var e=(0,r.I0)(),n=(0,r.v9)(y);return console.log(n),(0,b.jsx)(O,{mt:"30px",children:n.map((function(n){var t=n.id,r=n.name,i=n.number;return(0,b.jsx)(K,{name:r,number:i,click:function(){return e((0,U.GK)(t))}},t)}))})},V=t(9274),$=t(930),H=function(){var e=(0,r.v9)(m),n=(0,r.I0)(),t=(0,i.useState)(""),o=(0,z.Z)(t,2),a=o[0],u=o[1],s=(0,i.useState)(""),c=(0,z.Z)(s,2),l=c[0],f=c[1],d=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":u(r);break;case"number":f(r);break;default:return}};return(0,b.jsxs)(V.yh,{onSubmit:function(t){t.preventDefault(),e.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}))||(n((0,U.uK)({name:a,number:l})),u(""),f(""))},children:[(0,b.jsx)($.l,{children:"Name"}),(0,b.jsx)(g.I,{onChange:d,value:a,type:"text",required:!0,name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore"}),(0,b.jsx)($.l,{mt:"10px",children:"Number"}),(0,b.jsx)(g.I,{onChange:d,value:l,type:"tel",required:!0,name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,b.jsx)(M.z,{color:"white",bgColor:"teal",mt:"20px",type:"submit",children:"Add contact"})]})},Q=function(){var e=(0,r.v9)(m),n=(0,r.I0)(),t=(0,r.v9)(x),s=(0,r.v9)(h);(0,i.useEffect)((function(){n((0,U.yF)())}),[n]);var c=e.length;return(0,b.jsxs)(o.xu,{children:[(0,b.jsx)(a.x,{fontSize:32,children:"Your PhoneBook"}),(0,b.jsx)(H,{}),(0,b.jsx)(a.x,{fontSize:24,mt:"30px",children:"Your Contacts"}),c>0?(0,b.jsx)(j,{}):(0,b.jsx)(a.x,{mt:"10px",children:"Contact list is empty! Add your first contact."}),t&&!s&&(0,b.jsx)(u.$,{color:"teal",size:"xl"}),c>0&&(0,b.jsx)(Y,{})]})}},824:function(e,n,t){t.d(n,{xu:function(){return l}});var r=t(1413),i=t(4925),o=t(5113),a=t(5597),u=t(184),s=["size","centerContent"],c=["size"],l=(0,o.m)("div");l.displayName="Box";var f=(0,a.G)((function(e,n){var t=e.size,o=e.centerContent,a=void 0===o||o,c=(0,i.Z)(e,s),f=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,u.jsx)(l,(0,r.Z)({ref:n,boxSize:t,__css:(0,r.Z)((0,r.Z)({},f),{},{flexShrink:0,flexGrow:0})},c))}));f.displayName="Square",(0,a.G)((function(e,n){var t=e.size,o=(0,i.Z)(e,c);return(0,u.jsx)(f,(0,r.Z)({size:t,ref:n,borderRadius:"9999px"},o))})).displayName="Circle"}}]);
//# sourceMappingURL=62.a500b2be.chunk.js.map