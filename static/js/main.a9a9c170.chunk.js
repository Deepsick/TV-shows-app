(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"c",function(){return a}),t.d(n,"a",function(){return c}),t.d(n,"d",function(){return o}),t.d(n,"j",function(){return u}),t.d(n,"i",function(){return i}),t.d(n,"l",function(){return s}),t.d(n,"k",function(){return l}),t.d(n,"g",function(){return h}),t.d(n,"f",function(){return d}),t.d(n,"h",function(){return f}),t.d(n,"e",function(){return g});var r="FETCH_SHOWS_START",a="FETCH_SHOWS_SUCCESS",c="FETCH_SHOWS_FAILED",o="GET_AMOUNT_OF_PAGES",u="SET_CURRENT_PAGE",i="SET_CURRENT_LIMIT",s="SET_SORTING_FILTERS",l="SET_SEARCH_QUERY",h="SEARCH_SHOWS_START",d="SEARCH_SHOWS_FAILED",f="SEARCH_SHOWS_SUCCESS",g="GET_ERRORS"},32:function(e,n,t){e.exports=t(47)},41:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(28),o=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=t(13),i=t(14),s=t(16),l=t(15),h=t(17),d=t(24),f=t(10),g=t(25),O=t(9),p=t(30),E=t(3),m=t(2),S={errors:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.e:return Object(E.a)({},e,{errors:n.errors});default:return e}},b={page:1,itemsPerPage:10,amountOfPages:null,amountOfPaginationLinks:5},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.d:return Object(E.a)({},e,{amountOfPages:n.pagesAmount});case m.j:return Object(E.a)({},e,{page:n.page});case m.i:return Object(E.a)({},e,{itemsPerPage:n.limit});default:return e}},w={shows:null,loading:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.b:return Object(E.a)({},e,{loading:!0});case m.c:return Object(E.a)({},e,{loading:!1,shows:n.shows});case m.a:return Object(E.a)({},e,{loading:!1});default:return e}},T=t(20),y={category:"trending",ratings:"75-100",status:"returning series",years:2019},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.l:return Object(E.a)({},e,Object(T.a)({},n.name,n.value));default:return e}},R={query:"",searchShows:null,searching:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.k:return Object(E.a)({},e,{query:n.query});case m.g:return Object(E.a)({},e,{searching:!0});case m.h:return Object(E.a)({},e,{searching:!1,searchShows:n.result});case m.f:return Object(E.a)({},e,{searching:!1});default:return e}},H=Object(O.c)({errors:v,pagination:j,shows:_,sorting:C,search:A}),k=[p.a],P=Object(O.e)(H,{},Object(O.d)(O.a.apply(void 0,k),null)),W=function(e){return function(n){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={component:null},n}return Object(h.a)(t,n),Object(i.a)(t,[{key:"componentDidMount",value:function(){var n=this;e().then(function(e){n.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),t}(r.Component)},F=function(){return a.a.createElement("h1",null,"TV shows")},I=function(e){return a.a.createElement("div",{className:"Container"},e.children)},N=(t(41),W(function(){return t.e(4).then(t.bind(null,59))})),U=W(function(){return t.e(3).then(t.bind(null,60))}),G=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(g.a,{store:P},a.a.createElement(d.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(I,null,a.a.createElement(F,null),a.a.createElement(f.a,{path:"/",exact:!0,component:N}),a.a.createElement(f.a,{path:"/search",component:U})))))}}]),n}(r.Component);o.a.render(a.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.a9a9c170.chunk.js.map