(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{48:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r="292dfb087089a0d1e06fb7645766b94b",o="a158772b33a2b5a08074d228e73c04e1e0967525fea9db31504a8df87902623a"},49:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var r=n(48),o={method:"GET",headers:new Headers({"Content-Type":"application/json","trakt-api-key":r.b,"trakt-api-version":"2"})},a="https://api.trakt.tv/shows/",i="https://api.trakt.tv/search/show?query="},50:function(e,t,n){"use strict";var r=n(2),o={apiKeyTMDB:n(48).a,baseUrl:"https://api.themoviedb.org/3/tv/"},a="https://image.tmdb.org/t/p/",i="original";n.d(t,"a",function(){return c});var c=function(e,t){return function(n){var c=e.map(function(e){var t="".concat(o.baseUrl).concat(e.ids.tmdb||1,"/images?api_key=").concat(o.apiKeyTMDB);return fetch(t).then(function(e){return e.json()})});Promise.all(c).then(function(r){var o=e.map(function(e,t){if(r[t].posters&&0!==r[t].posters.length){var n=r[t].posters[0].file_path,o="".concat(a).concat(i,"/").concat(n);e.poster=o}return e});n(t(o))}).catch(function(e){n({type:r.e,errors:"Can not get posters from TMDB api"})})}}},51:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s});var r=n(2),o=n(50),a=n(49),i=function(e){return{type:r.k,query:e}},c=function(){return{type:r.g}},u=function(e){return{type:r.h,result:e}},s=function(e){return function(t){t(c),fetch("".concat(a.b).concat(e),a.c).then(function(e){return e.json()}).then(function(e){e=e.map(function(e){return e.show}),t(Object(o.a)(e,u))}).catch(function(e){t({type:r.f}),t({type:r.e,errors:"Can not find anything"})})}}},52:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("form",{className:"SearchField",onSubmit:function(e){return e.preventDefault()}},o.a.createElement("input",{autoFocus:!0,className:"SearchField__input",type:"search",id:"search-input",placeholder:"Search show",value:e.value,onChange:e.onChangeHandler}),o.a.createElement("label",{htmlFor:"search-input"},o.a.createElement("span",{className:"visually-hidden"},"Search")))}},53:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(){return o.a.createElement("div",{className:"Spinner"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}},55:function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!g(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,a=r.length,i=String(e).replace(o,function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}}),u=r[n];n<a;u=r[++n])m(u)||!w(u)?i+=" "+u:i+=" "+c(u);return i},t.deprecate=function(n,r){if("undefined"!==typeof e&&!0===e.noDeprecation)return n;if("undefined"===typeof e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var a,i={};function c(e,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),y(n)?r.showHidden=n:n&&t._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),l(r,e,r.depth)}function u(e,t){var n=c.styles[t];return n?"\x1b["+c.colors[n][0]+"m"+e+"\x1b["+c.colors[n][1]+"m":e}function s(e,t){return e}function l(e,n,r){if(e.customInspect&&n&&j(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return g(o)||(o=l(e,o,r)),o}var a=function(e,t){if(b(t))return e.stylize("undefined","undefined");if(g(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(d(t))return e.stylize(""+t,"number");if(y(t))return e.stylize(""+t,"boolean");if(m(t))return e.stylize("null","null")}(e,n);if(a)return a;var i=Object.keys(n),c=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(n)),O(n)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return f(n);if(0===i.length){if(j(n)){var u=n.name?": "+n.name:"";return e.stylize("[Function"+u+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(E(n))return e.stylize(Date.prototype.toString.call(n),"date");if(O(n))return f(n)}var s,w="",T=!1,S=["{","}"];(h(n)&&(T=!0,S=["[","]"]),j(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),E(n)&&(w=" "+Date.prototype.toUTCString.call(n)),O(n)&&(w=" "+f(n)),0!==i.length||T&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),s=T?function(e,t,n,r,o){for(var a=[],i=0,c=t.length;i<c;++i)N(t,String(i))?a.push(p(e,t,n,r,String(i),!0)):a.push("");return o.forEach(function(o){o.match(/^\d+$/)||a.push(p(e,t,n,r,o,!0))}),a}(e,n,r,c,i):i.map(function(t){return p(e,n,r,c,t,T)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(s,w,S)):S[0]+w+S[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,a){var i,c,u;if((u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(c=e.stylize("[Setter]","special")),N(r,o)||(i="["+o+"]"),c||(e.seen.indexOf(u.value)<0?(c=m(n)?l(e,u.value,null):l(e,u.value,n-1)).indexOf("\n")>-1&&(c=a?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n")):c=e.stylize("[Circular]","special")),b(i)){if(a&&o.match(/^\d+$/))return c;(i=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(i=i.substr(1,i.length-2),i=e.stylize(i,"name")):(i=i.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),i=e.stylize(i,"string"))}return i+": "+c}function h(e){return Array.isArray(e)}function y(e){return"boolean"===typeof e}function m(e){return null===e}function d(e){return"number"===typeof e}function g(e){return"string"===typeof e}function b(e){return void 0===e}function v(e){return w(e)&&"[object RegExp]"===T(e)}function w(e){return"object"===typeof e&&null!==e}function E(e){return w(e)&&"[object Date]"===T(e)}function O(e){return w(e)&&("[object Error]"===T(e)||e instanceof Error)}function j(e){return"function"===typeof e}function T(e){return Object.prototype.toString.call(e)}function S(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(b(a)&&(a=Object({NODE_ENV:"production",PUBLIC_URL:"/tv-shows-app"}).NODE_DEBUG||""),n=n.toUpperCase(),!i[n])if(new RegExp("\\b"+n+"\\b","i").test(a)){var r=e.pid;i[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else i[n]=function(){};return i[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=h,t.isBoolean=y,t.isNull=m,t.isNullOrUndefined=function(e){return null==e},t.isNumber=d,t.isString=g,t.isSymbol=function(e){return"symbol"===typeof e},t.isUndefined=b,t.isRegExp=v,t.isObject=w,t.isDate=E,t.isError=O,t.isFunction=j,t.isPrimitive=function(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e},t.isBuffer=n(57);var _=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",function(){var e=new Date,t=[S(e.getHours()),S(e.getMinutes()),S(e.getSeconds())].join(":");return[e.getDate(),_[e.getMonth()],t].join(" ")}(),t.format.apply(t,arguments))},t.inherits=n(58),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var k="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function x(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');if(k&&e[k]){var t;if("function"!==typeof(t=e[k]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,k,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise(function(e,r){t=e,n=r}),o=[],a=0;a<arguments.length;a++)o.push(arguments[a]);o.push(function(e,r){e?n(e):t(r)});try{e.apply(this,o)}catch(i){n(i)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),k&&Object.defineProperty(t,k,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=k,t.callbackify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var a=this,i=function(){return o.apply(a,arguments)};t.apply(this,n).then(function(t){e.nextTick(i,null,t)},function(t){e.nextTick(x,t,i)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n(56))},56:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&h())}function h(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new y(e,t)),1!==s.length||l||c(h)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},57:function(e,t){e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}},58:function(e,t){"function"===typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},60:function(e,t,n){"use strict";n.r(t);var r=n(13),o=n(14),a=n(16),i=n(15),c=n(17),u=n(0),s=n.n(u),l=n(25),f=n(24),p=n(51),h=function(){return s.a.createElement("thead",null,s.a.createElement("tr",{className:"Table__tr"},s.a.createElement("th",{className:"Table__th"},"Number"),s.a.createElement("th",{className:"Table__th"},"Poster"),s.a.createElement("th",{className:"Table__th"},"Title"),s.a.createElement("th",{className:"Table__th"},"Year")))},y=function(e){var t=e.show,n=e.number;return s.a.createElement("tr",{className:"Table__tr"},s.a.createElement("td",{className:"Table__td"},n),s.a.createElement("td",{className:"Table__td"},s.a.createElement("img",{src:t.poster?t.poster:"https://st.kp.yandex.net/images/movies/poster_none.png",alt:t.title,width:"200",height:"200"})),s.a.createElement("td",{className:"Table__td"},t.title),s.a.createElement("td",{className:"Table__td"},t.year))},m=function(e){return s.a.createElement(s.a.Fragment,null,e.shows.map(function(e,t){return s.a.createElement(y,{key:t,number:t+1,show:e})}))},d=n(53),g=n(52),b=n(55),v=function(e){var t=e.search,n=t.searching,r=t.searchShows,o=t.query,a=s.a.createElement(s.a.Fragment,null,s.a.createElement("table",{className:"Table"},s.a.createElement(h,null),s.a.createElement("tbody",null,s.a.createElement(m,{shows:r}))));return(n||null===r)&&(a=s.a.createElement(d.a,null)),""===o&&(a=s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,"Search something..."))),Object(b.isNull)(r)||0!==r.length||(a=s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,"Sorry, no matches were found for your query..."))),s.a.createElement("div",null,s.a.createElement(g.a,{onChangeHandler:e.onSearchInputChangeHandler,value:e.value}),a)},w=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];return(n=Object(a.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).onSearchInputChangeHandler=function(e){e.preventDefault();var t=e.target.value;n.props.setSearchQuery(t),n.props.history.push("/search?query=".concat(t))},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.search.query;if(e)this.props.searchShows(e);else{var t=this.props.location.search.split("=")[1];t&&this.props.setSearchQuery(t)}}},{key:"componentWillReceiveProps",value:function(e){var t=e.search.query;t!==this.props.search.query&&t&&this.props.searchShows(t)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.c,{to:"/",className:"back-button"},"Back"),s.a.createElement(v,{search:this.props.search,onSearchInputChangeHandler:this.onSearchInputChangeHandler,value:this.props.search.query}))}}]),t}(u.Component);t.default=Object(l.b)(function(e){return{search:e.search}},{searchShows:p.a,setSearchQuery:p.b})(w)}}]);
//# sourceMappingURL=3.3c1716cd.chunk.js.map