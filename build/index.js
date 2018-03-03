module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={container:{display:"flex",flexFlow:"row nowrap",alignItems:"flex-start"},icon:{marginRight:"0"},text:{paddingTop:"2px",marginLeft:"6px",verticalAlign:"bottom"}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,c,u,i){if(!e){var a;if(void 0===t)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,c,u,i],l=0;(a=new Error(t.replace(/%s/g,function(){return s[l++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r=n(3),o=n(2),c=n(1);e.exports=function(){function e(e,t,n,r,u,i){i!==c&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){e.exports=n(4)()},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(6),c=a(o),u=a(n(5)),i=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={checked:!1},n.handleClick=n.handleClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){var e=this.props.checked;this.setState({checked:e})}},{key:"handleClick",value:function(){var e=this,t=!this.state.checked,n=this.props,r=n.name,o=n.type;this.setState({checked:t},function(){e.props.onChange({target:{name:r,type:o,checked:t}})})}},{key:"renderIcon",value:function(){var e=this.props,t=e.unCheckedIcon,n=e.checkedIcon,r=this.state.checked?n:t;return c.default.createElement("div",{style:i.default.icon,className:"xs-checkbox-icon"},r)}},{key:"renderText",value:function(){var e,t=this.props,n=t.text,r=t.checkedText,o=t.unCheckedText,u=this.state.checked;return e=0===n.length?u?r:o:n,c.default.createElement("div",{style:i.default.text,className:"xs-checkbox-label"},e)}},{key:"render",value:function(){return c.default.createElement("div",{style:i.default.container,onClick:this.handleClick,className:"xs-checkbox"},this.renderIcon(),this.renderText())}}]),t}();s.propTypes={name:u.default.string.isRequired,type:u.default.string,checked:u.default.bool,text:u.default.string,checkedText:u.default.string,unCheckedText:u.default.string,onChange:u.default.func,checkedIcon:u.default.string,unCheckedIcon:u.default.string},s.defaultProps={type:"checkbox",checked:!1,text:"",checkedIcon:"✔",unCheckedIcon:" ",checkedText:u.default.string,unCheckedText:u.default.string,onChange:function(){}},t.default=s}]);