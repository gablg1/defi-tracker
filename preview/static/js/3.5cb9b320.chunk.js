(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[3],{1191:function(e,t,n){"use strict";var a=n(3),r=n(4),i=n(12),o=n.n(i),s=n(0),c=n.n(s),l=n(30),u=n(14),d=n(23),p=c.a.createContext(null);var f,m=c.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"button":n,o=e.children,l=e.eventKey,u=e.onClick,f=Object(r.a)(e,["as","children","eventKey","onClick"]),m=function(e,t){var n=Object(s.useContext)(p),a=Object(s.useContext)(d.a);return function(r){a(e===n?null:e,r),t&&t(r)}}(l,u);return c.a.createElement(i,Object(a.a)({ref:t,onClick:m},f),o)})),h=n(15),E=n(124),b=n(139),v=n(142),x=n(62),g=n(140),O={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var j=((f={})[v.c]="collapse",f[v.d]="collapsing",f[v.b]="collapsing",f[v.a]="collapse show",f),y={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],a=O[e];return n+parseInt(Object(E.a)(t,a[0]),10)+parseInt(Object(E.a)(t,a[1]),10)}},C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",Object(g.a)(e)},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(h.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,i=t.onEntering,s=t.onEntered,l=t.onExit,u=t.onExiting,d=t.className,p=t.children,f=Object(r.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete f.dimension,delete f.getDimensionValue;var m=Object(x.a)(this.handleEnter,n),h=Object(x.a)(this.handleEntering,i),E=Object(x.a)(this.handleEntered,s),g=Object(x.a)(this.handleExit,l),O=Object(x.a)(this.handleExiting,u);return c.a.createElement(v.e,Object(a.a)({addEndListener:b.a},f,{"aria-expanded":f.role?f.in:null,onEnter:m,onEntering:h,onEntered:E,onExit:g,onExiting:O}),(function(t,n){return c.a.cloneElement(p,Object(a.a)({},n,{className:o()(d,p.props.className,j[t],"width"===e.getDimension()&&"width")}))}))},t}(c.a.Component);C.defaultProps=y;var N=C,S=c.a.forwardRef((function(e,t){var n=e.children,i=e.eventKey,o=Object(r.a)(e,["children","eventKey"]),l=Object(s.useContext)(p);return c.a.createElement(N,Object(a.a)({ref:t,in:l===i},o),c.a.createElement("div",null,c.a.Children.only(n)))}));S.displayName="AccordionCollapse";var k=S,w=c.a.forwardRef((function(e,t){var n=Object(l.a)(e,{activeKey:"onSelect"}),i=n.as,s=void 0===i?"div":i,f=n.activeKey,m=n.bsPrefix,h=n.children,E=n.className,b=n.onSelect,v=Object(r.a)(n,["as","activeKey","bsPrefix","children","className","onSelect"]);return m=Object(u.b)(m,"accordion"),c.a.createElement(p.Provider,{value:f},c.a.createElement(d.a.Provider,{value:b},c.a.createElement(s,Object(a.a)({ref:t},v,{className:o()(E,m)}),h)))}));w.Toggle=m,w.Collapse=k;t.a=w},1198:function(e,t,n){"use strict";var a=n(3),r=n(4),i=n(12),o=n.n(i),s=n(0),c=n.n(s),l=n(14),u=n(33),d=n(173),p=n(247),f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,p=Object(r.a)(e,["bsPrefix","className","variant","as"]),f=Object(l.b)(n,"card-img");return c.a.createElement(d,Object(a.a)({ref:t,className:o()(s?f+"-"+s:f,i)},p))}));f.displayName="CardImg",f.defaultProps={variant:null};var m=f,h=Object(d.a)("h5"),E=Object(d.a)("h6"),b=Object(u.a)("card-body"),v=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,u=e.bg,d=e.text,f=e.border,m=e.body,h=e.children,E=e.as,v=void 0===E?"div":E,x=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(l.b)(n,"card"),O=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return c.a.createElement(p.a.Provider,{value:O},c.a.createElement(v,Object(a.a)({ref:t},x,{className:o()(i,g,u&&"bg-"+u,d&&"text-"+d,f&&"border-"+f)}),m?c.a.createElement(b,null,h):h))}));v.displayName="Card",v.defaultProps={body:!1},v.Img=m,v.Title=Object(u.a)("card-title",{Component:h}),v.Subtitle=Object(u.a)("card-subtitle",{Component:E}),v.Body=b,v.Link=Object(u.a)("card-link",{Component:"a"}),v.Text=Object(u.a)("card-text",{Component:"p"}),v.Header=Object(u.a)("card-header"),v.Footer=Object(u.a)("card-footer"),v.ImgOverlay=Object(u.a)("card-img-overlay");t.a=v},124:function(e,t,n){"use strict";var a=n(43);function r(e,t){return function(e){var t=Object(a.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var o=/^ms-/;function s(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",a="";if("string"===typeof t)return e.style.getPropertyValue(s(t))||r(e).getPropertyValue(s(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!c.test(e))}(r)?n+=s(r)+": "+i+";":a+=r+"("+i+") ":e.style.removeProperty(s(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},139:function(e,t,n){"use strict";var a=n(46),r=n(124),i=n(26),o=a.a&&"ontransitionend"in window;function s(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(i.a)(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),o()}}t.a=function(e,t,n){return o?(null==n&&(n=function(e){var t=Object(r.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0),s(e,n),Object(i.a)(e,"transitionend",t)):s(e,0,0)}},140:function(e,t,n){"use strict";function a(e){e.offsetHeight}n.d(t,"a",(function(){return a}))},142:function(e,t,n){"use strict";var a=n(4),r=n(15),i=(n(5),n(0)),o=n.n(i),s=n(29),c=n.n(s),l=!1,u=o.a.createContext(null);n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return m}));var d="exited",p="entering",f="entered",m="exiting",h=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r=d,a.appearStatus=p):r=f:r=t.unmountOnExit||t.mountOnEnter?"unmounted":d,a.state={status:r},a.nextCallback=null,a}Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:d}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==f&&(t=p):n!==p&&n!==f||(t=m)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=c.a.findDOMNode(this);t===p?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===d&&this.setState({status:"unmounted"})},n.performEnter=function(e,t){var n=this,a=this.props.enter,r=this.context?this.context.isMounting:t,i=this.getTimeouts(),o=r?i.appear:i.enter;!t&&!a||l?this.safeSetState({status:f},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,r),this.safeSetState({status:p},(function(){n.props.onEntering(e,r),n.onTransitionEnd(e,o,(function(){n.safeSetState({status:f},(function(){n.props.onEntered(e,r)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n&&!l?(this.props.onExit(e),this.safeSetState({status:m},(function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,(function(){t.safeSetState({status:d},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:d},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=Object(a.a)(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"===typeof n)return o.a.createElement(u.Provider,{value:null},n(e,r));var i=o.a.Children.only(n);return o.a.createElement(u.Provider,{value:null},o.a.cloneElement(i,r))},t}(o.a.Component);function E(){}h.contextType=u,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E},h.UNMOUNTED=0,h.EXITED=1,h.ENTERING=2,h.ENTERED=3,h.EXITING=4;t.e=h},173:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r),o=n(12),s=n.n(o);t.a=function(e){return i.a.forwardRef((function(t,n){return i.a.createElement("div",Object(a.a)({},t,{ref:n,className:s()(t.className,e)}))}))}},247:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=r.a.createContext(null)}}]);
//# sourceMappingURL=3.5cb9b320.chunk.js.map