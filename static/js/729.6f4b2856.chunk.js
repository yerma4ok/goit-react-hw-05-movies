"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[729],{22:function(n,e,t){t.d(e,{G5:function(){return p},QV:function(){return f},fz:function(){return l},mE:function(){return c},nK:function(){return u}});var r=t(861),a=t(687),s=t.n(a),i=t(912),o="2f9097e7af7134119fcdce7363f2f155",c=function(){var n=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",t={signal:e,params:{api_key:o}},n.next=4,i.Z.get("https://api.themoviedb.org/3/trending/movie/day",t);case 4:return r=n.sent,n.next=7,r.data;case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(s().mark((function n(e,t){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/search/movie",r={signal:t,params:{api_key:o,query:e}},n.next=4,i.Z.get("https://api.themoviedb.org/3/search/movie",r);case 4:return a=n.sent,n.next=7,a.data;case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(s().mark((function n(e,t){var r,a,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e),a={signal:t.signal,params:{api_key:o}},n.next=4,i.Z.get(r,a);case 4:return c=n.sent,n.next=7,c.data;case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(s().mark((function n(e,t){var r,a,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/credits?"),a={signal:t.signal,params:{api_key:o}},n.next=4,i.Z.get(r,a);case 4:return c=n.sent,n.next=7,c.data;case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(s().mark((function n(e,t){var r,a,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),a={signal:t.signal,params:{api_key:o}},n.next=4,i.Z.get(r,a);case 4:return c=n.sent,n.next=7,c.data;case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},729:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,a,s,i,o,c,u,p,f=t(861),l=t(439),h=t(687),d=t.n(h),v=t(22),x=t(791),m=t(689),g=t(168),Z=t(934),b=t(87),w=Z.Z.div(r||(r=(0,g.Z)(["\n  display: flex;\n  margin-top: 40px;\n"]))),j=Z.Z.div(a||(a=(0,g.Z)(["\n  padding: 20px;\n"]))),k=Z.Z.h2(s||(s=(0,g.Z)(["\n  text-transform: uppercase;\n  font-family: Roboto;\n  font-weight: 700;\n  font-size: 30px;\n"]))),y=Z.Z.p(i||(i=(0,g.Z)(["\n  font-family: Roboto;\n  font-weight: 700;\n  font-size: 20px;\n"]))),_=Z.Z.span(o||(o=(0,g.Z)(["\n  font-weight: 300;\n"]))),z=Z.Z.ul(c||(c=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n"]))),C=(0,Z.Z)(b.rU)(u||(u=(0,g.Z)(["\n  font-weight: 700;\n  font-size: 24px;\n  color: black;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    color: #2196f3;\n  }\n"]))),G=(0,Z.Z)(b.rU)(p||(p=(0,g.Z)(["\n  font-weight: 700;\n  font-size: 20px;\n  color: black;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    color: #2196f3;\n  }\n"]))),E=t(184),R=function(){var n=(0,x.useState)(null),e=(0,l.Z)(n,2),t=e[0],r=e[1],a=(0,x.useState)(""),s=(0,l.Z)(a,2),i=s[0],o=s[1],c=(0,m.TH)(),u=(0,m.UO)().movieId;return(0,x.useEffect)((function(){var n,e;""===i&&o(null!==(n=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/Home")}),[i,c]),(0,x.useEffect)((function(){var n=new AbortController,e=function(){var e=(0,f.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.G5)(u,n);case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){n.abort()}}),[u]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(G,{to:i,children:"Go Back"}),t&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(w,{children:[(0,E.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(t.poster_path),alt:t.title}),(0,E.jsxs)(j,{children:[(0,E.jsx)(k,{children:t.title}),(0,E.jsxs)(y,{children:["release: ",(0,E.jsx)(_,{children:t.release_date})]}),(0,E.jsxs)(y,{children:["avarage vote:"," ",(0,E.jsx)(_,{children:Math.round(10*t.vote_average)/10})]}),(0,E.jsx)(_,{children:t.overview}),(0,E.jsxs)(y,{children:["Ganres:"," ",(0,E.jsxs)(_,{children:[t.genres.map((function(n){return n.name})).join(", "),"Title"]})]})]})]}),(0,E.jsxs)(z,{children:[(0,E.jsx)("li",{children:(0,E.jsx)(C,{to:"cast",state:{id:u},children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(C,{to:"reviews",state:{id:u},children:"Reviews"})})]}),(0,E.jsx)(x.Suspense,{fallback:(0,E.jsx)("div",{children:"Loading..."}),children:(0,E.jsx)(m.j3,{})})]})]})}}}]);
//# sourceMappingURL=729.6f4b2856.chunk.js.map