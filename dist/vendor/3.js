(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{120:function(e,t,n){(e.exports=n(51)(!1)).push([e.i,".white-space {\r\n    margin-top: 8px;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}",""])},121:function(e,t,n){var r=n(120);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(50)(r,o);r.locals&&(e.exports=r.locals)},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this;this.get=function(t){if(name="store."+e.name+"."+t,null!==localStorage.getItem(name))try{return JSON.parse(localStorage.getItem(name))}catch(e){return null}},this.set=function(t,n){if(void 0===n)e.remove(t);else{if("function"==typeof n)n=null;else try{n=JSON.stringify(n)}catch(e){n=null}localStorage.setItem("store."+e.name+"."+t,n)}return e},this.remove=function(t){return localStorage.removeItem("store."+e.name+"."+t),e},this.removeAll=function(){for(var t="store."+e.name+".",n=localStorage.length-1;n>=0;n--)localStorage.key(n).substring(0,t.length)===t&&localStorage.removeItem(localStorage.key(n));return e},this.toObject=function(){for(var t={},n=void 0,r=void 0,o="store."+e.name+".",a=localStorage.length-1;a>=0;a--)localStorage.key(a).substring(0,o.length)===o&&(n=localStorage.key(a).substring(o.length),void 0!==(r=e.get(n))&&(t[n]=r));return t},this.fromObject=function(t,n){for(var r in!0!==n&&e.removeAll(),t)t.hasOwnProperty(r)&&e.set(r,t[r]);return e}};t.default=function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.call(this),this.name=t,void 0!==n)for(var o in n)n.hasOwnProperty(o)&&void 0===this.get(o)&&this.set(o,n[o])}},201:function(e,t,n){(e.exports=n(51)(!1)).push([e.i,".Option{}",""])},202:function(e,t,n){var r=n(201);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(50)(r,o);r.locals&&(e.exports=r.locals)},209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(208)),o=u(n(62));n(205),n(67);var a=n(1),l=u(a),i=(u(n(56)),u(n(13)));function u(e){return e&&e.__esModule?e:{default:e}}(chrome.extension?chrome.extension.getBackgroundPage():{store:new i.default}).store;var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n.load_questions()},n.load_questions=function(){fetch("/assets/questions.json").then(function(e){return e.json()}).then(function(e){n.setState({questions:e})})},n.handle_modal_visible=function(e){var t=n.state.modal_visible;n.setState({modal_visible:!t})},n.render=function(){var e=n.state,t=e.modal_visible,a=e.questions;return l.default.createElement("div",{className:"GachaOptions"},l.default.createElement(o.default,{type:"danger",onClick:n.handle_modal_visible},"成为真正的骑空士"),l.default.createElement(r.default,{visible:t,onCancel:n.handle_modal_visible,mask:!0},a.map(function(e,t){var n=e.question;return l.default.createElement("div",{key:"quest_"+t},n)})))},n.state={questions:[],modal_visible:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}();t.default=c},210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(89)),o=c(n(75));n(84),n(74);var a=n(1),l=c(a),i=c(n(56)),u=c(n(13));function c(e){return e&&e.__esModule?e:{default:e}}var s=(chrome.extension?chrome.extension.getBackgroundPage():{store:new u.default}).store,f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_switch_onchange=function(e,t){s.set(e,t),"is_multil"==e&&chrome.browserAction.setPopup({popup:t?"":"index.html"}),n.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))},n.render=function(){var e=n.state,t=e.is_multil,a=e.is_listen_board;e.is_listen_bp,e.is_rape;return l.default.createElement("div",{className:"MultiBattle",style:{marginLeft:"1%"}},l.default.createElement(o.default,{title:"开启该选项时，点击icon将不会点开面板，而会照着下方几个选项决定行为，默认为读取剪切板中内容请求battle信息，不报错则进房"},l.default.createElement("span",{style:{float:"left",color:"#666"}},"是否开启舔婊模式")),l.default.createElement(r.default,{onChange:function(e){return n.handle_switch_onchange("is_multil",e)},checked:t,style:{float:"right",marginRight:"85%"}}),l.default.createElement(i.default,{clear:!0}),l.default.createElement(o.default,{title:"（因为没法监听系统剪切板，卒）开启该选项时，当你的剪切板内容发生变化且内容像battle id时，会直接进房，而不用点icon"},l.default.createElement("span",{style:{float:"left",color:"#666"}},"是否监视剪切板")),l.default.createElement(r.default,{onChange:function(e){return n.handle_switch_onchange("is_listen_board",e)},checked:a,disabled:!0,style:{float:"right",marginRight:"85%"}}),l.default.createElement(i.default,{clear:!0}))},n.state={is_multil:s.get("is_multil"),is_listen_board:s.get("is_listen_board"),is_listen_bp:s.get("is_listen_bp"),is_rape:s.get("is_rape")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}();t.default=f},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(89)),o=c(n(75));n(84),n(74);var a=n(1),l=c(a),i=c(n(56)),u=c(n(13));function c(e){return e&&e.__esModule?e:{default:e}}var s=(chrome.extension?chrome.extension.getBackgroundPage():{store:new u.default}).store,f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_switch_onchange=function(e){s.set("is_scroll_style_show",e),chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(t){chrome.tabs.connect(t[0].id,{name:"popup_to_content"}).postMessage({message:"scroll_style_status",status:e})})},n.render=function(){var e=n.state.checked;return l.default.createElement("div",{className:"ScrollOptions"},l.default.createElement("div",{style:{marginLeft:"1%"}},l.default.createElement(o.default,{title:"开启该选项时，你鼠标移到滚动条附近，滚动条会变粗三秒"},l.default.createElement("span",{style:{float:"left",color:"#666"}},"滚动条样式变化")),l.default.createElement(r.default,{onChange:n.handle_switch_onchange,defaultChecked:e,style:{float:"right",marginRight:"85%"}}),l.default.createElement(i.default,{clear:!0})),l.default.createElement(i.default,{clear:!0}))},n.state={checked:s.get("is_scroll_style_show")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}();t.default=f},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(89));n(84);var o=n(1),a=u(o),l=u(n(56)),i=u(n(13));function u(e){return e&&e.__esModule?e:{default:e}}var c=(chrome.extension?chrome.extension.getBackgroundPage():{store:new i.default}).store,s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_coopraid_switch=function(e,t){c.set(t,e),chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(n){chrome.tabs.connect(n[0].id,{name:"popup_to_content"}).postMessage({message:"sider_status",type:t,status:e})})},n.render=function(){var e=n.state,t=e.left_checked,o=e.right_checked;return a.default.createElement("div",{className:"SiderOptions"},a.default.createElement("div",{style:{marginLeft:"1%"}},a.default.createElement("span",{style:{float:"left",color:"#666"}},"左侧面板"),a.default.createElement(r.default,{onChange:function(e){return n.handle_coopraid_switch(e,"is_left_sider_show")},defaultChecked:t,style:{float:"right",marginRight:"85%"}}),a.default.createElement("div",{style:{clear:"both"}})),a.default.createElement(l.default,null),a.default.createElement("div",{style:{marginLeft:"1%"}},a.default.createElement("span",{style:{float:"left",color:"#666"}},"右侧面板"),a.default.createElement(r.default,{onChange:function(e){return n.handle_coopraid_switch(e,"is_right_sider_show")},defaultChecked:o,style:{float:"right",marginRight:"85%"}}),a.default.createElement("div",{style:{clear:"both"}})),a.default.createElement(l.default,null))},n.state={left_checked:c.get("is_left_sider_show"),right_checked:c.get("is_right_sider_show")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=s},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(62)),o=d(n(177)),a=d(n(118)),l=d(n(109));n(67),n(98),n(103),n(144);var i=n(1),u=d(i),c=d(n(56)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5)),f=d(n(13));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var h=l.default.Option,_=(chrome.extension?chrome.extension.getBackgroundPage():{store:new f.default}).store,m="http://game.granbluefantasy.jp/item/article_list_by_filter_mode",y="http://game.granbluefantasy.jp/item/recovery_and_evolution_list_by_filter_mode",g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_address=function(e){return n.setState({address:e.target.value})},n.handle_head_address=function(e){return n.setState({head_address:e})},n.handle_upload=function(){var e=n.state,t=e.head_address,r=e.address;_.set("address",r),_.set("head_address",t),n.setState({btn_loading:!0});var o=_.get("userId");if(!o)return a.default.open({message:"非法操作",description:"没获得到userId",duration:3}),void n.setState({btn_loading:!1});s.get_by_cookie(m,{},function(e){s.get_by_cookie(y,{},function(l){l=n.steam_roller(l),e=[].concat(p(e),p(l));var i="user_id="+o+"&data="+JSON.stringify(e);s.upload_to_server(""+t+r+"/Memo/gbf/i_item.do",{body:i},function(e){"success"==e&&a.default.open({message:"上传成功",description:"",duration:3}),n.setState({btn_loading:!1})})})})},n.steam_roller=function(e){var t=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var u=l.value;Array.isArray(u)?t.push.apply(t,n.steam_roller(u)):t.push(u)}}catch(e){o=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return t},n.render=function(){var e=n.state,t=e.address,a=e.head_address,i=e.btn_loading,s=u.default.createElement(l.default,{defaultValue:a,style:{width:90},onChange:n.handle_head_address},u.default.createElement(h,{value:"http://"},"http://"),u.default.createElement(h,{value:"https://"},"https://"),u.default.createElement(h,{value:"ftp://"},"ftp://"));return u.default.createElement("div",{className:"UploadItems"},u.default.createElement("span",null,"上传地址："),u.default.createElement(o.default,{addonBefore:s,style:{width:"20%"},onChange:n.handle_address,value:t}),u.default.createElement(r.default,{type:"primary",loading:i,onClick:n.handle_upload,style:{marginLeft:"2%",width:"15%"}},"上传素材"),u.default.createElement(c.default,null))},n.state={address:_.get("address"),head_address:_.get("head_address"),btn_loading:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}();t.default=g},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(n(60)),o=p(n(228)),a=p(n(146)),l=p(n(226));n(223),n(222),n(219),n(216);var i=n(1),u=p(i),c=p(n(213)),s=p(n(212)),f=p(n(211)),d=p(n(210));p(n(209));function p(e){return e&&e.__esModule?e:{default:e}}n(202);var h=l.default.Content,_=l.default.Footer,m=l.default.Sider,y=(a.default.SubMenu,function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_menu_item=function(e){e.item;var t=e.key;e.keyPath;n.setState({key:t})},n.render=function(){var e=n.state,t=(e.collapsed,e.key),i=u.default.createElement(h,{style:{margin:"0 16px"}},u.default.createElement(o.default,{style:{margin:"16px 0"}},u.default.createElement(o.default.Item,null,"通用设置")),u.default.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},u.default.createElement(s.default,null),u.default.createElement(f.default,null))),p=u.default.createElement(h,{style:{margin:"0 16px"}},u.default.createElement(o.default,{style:{margin:"16px 0"}},u.default.createElement(o.default.Item,null,"舔婊相关")),u.default.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},u.default.createElement(d.default,null))),y=u.default.createElement(h,{style:{margin:"0 16px"}},u.default.createElement(o.default,{style:{margin:"16px 0"}},u.default.createElement(o.default.Item,null,"记录上传")),u.default.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},u.default.createElement(c.default,null)));return u.default.createElement(l.default,{style:{minHeight:"100vh"}},u.default.createElement(m,{collapsible:!0},u.default.createElement("div",{className:"logo"}),u.default.createElement(a.default,{theme:"dark",defaultSelectedKeys:[t],mode:"inline"},g.map(function(e){var t=e.key,o=e.type,l=e.text;return u.default.createElement(a.default.Item,{key:t,onClick:n.handle_menu_item},u.default.createElement(r.default,{type:o}),u.default.createElement("span",null,l))}))),u.default.createElement(l.default,null,0==t&&i,1==t&&p,2==t&&y,u.default.createElement(_,{style:{textAlign:"center"}},u.default.createElement("div",null,"贫穷使我们相遇，但后来，你却发出了母猪的声音。而我，只想为你豹跳一曲，如花净土..."),u.default.createElement("div",null,"Poverty makes us meet, but later, only you come out of the closet. But for me, I just want to marry to you..."))))},n.state={key:"0"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}());t.default=y;var g=[{key:0,type:"desktop",text:"通用设置"},{key:1,type:"team",text:"舔婊相关"},{key:2,type:"upload",text:"记录上传"}]},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.upload_to_server=function(e,t,n){if(e){var r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.text()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.get_by_cookie=function(e,t,n){if(e){var r={credentials:"include"};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.json()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.post_by_cookie=function(e,t,n){if(e){var r={method:"POST",credentials:"include",headers:{"Content-Type":"application/json; charset=UTF-8"}};r=Object.assign(r,t),fetch(e,r).then(function(e){return console.log(e),e.text()}).then(function(e){console.log(e),n(JSON.parse(e))}).catch(function(e){console.log(e)})}},t.dispatch_inject_to_content_script=function(e){return document.getElementById("init_window").dispatchEvent(new CustomEvent("inject_to_content_script",{detail:e}))},t.dispatch_content_script_to_inject=function(e){return document.getElementById("init_window").dispatchEvent(new CustomEvent("content_script_to_inject",{detail:e}))}},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);n(121);var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.render=function(){var e=n.props.clear;return o.default.createElement("div",{className:"white-space",style:{clear:e?"both":"none"}})},n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=a}}]);