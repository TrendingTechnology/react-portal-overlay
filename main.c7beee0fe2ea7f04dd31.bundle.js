(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Overlay}));var _emotion_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react_portal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1277),react_transition_group__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1276);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function lockScroll(state){"undefined"!=typeof document&&(document.documentElement.style.overflow=state?"hidden":"")}function Overlay(_ref){var open=_ref.open,portal=_ref.portal,closeOnClick=_ref.closeOnClick,_ref$closeOnEsc=_ref.closeOnEsc,closeOnEsc=void 0===_ref$closeOnEsc||_ref$closeOnEsc,_ref$defaultPortalSty=_ref.defaultPortalStyles,defaultPortalStyles=void 0===_ref$defaultPortalSty?{position:"relative",zIndex:999}:_ref$defaultPortalSty,_ref$onClose=_ref.onClose,onClose=void 0===_ref$onClose?function(){return null}:_ref$onClose,_ref$animation=_ref.animation,animation=void 0===_ref$animation?{duration:300,easing:"ease"}:_ref$animation,children=_ref.children,attrs=_objectWithoutProperties(_ref,["open","portal","closeOnClick","closeOnEsc","defaultPortalStyles","onClose","animation","children"]),defaultPortal=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return!portal&&defaultPortal&&defaultPortal.current&&defaultPortalStyles&&Object.keys(defaultPortalStyles).forEach((function(prop){defaultPortal.current.defaultNode.style[prop]=defaultPortalStyles[prop]})),lockScroll(!!open),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){function onEsc(e){"Escape"===e.key&&closeOnEsc&&onClose()}return document.addEventListener("keydown",onEsc),document.removeEventListener("keydown",onEsc)}),[closeOnEsc]),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_portal__WEBPACK_IMPORTED_MODULE_2__.a,_extends({ref:defaultPortal},portal?{node:portal}:{}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_3__.a,{in:open,classNames:"overlay",unmountOnExit:!0,timeout:animation.duration},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",_extends({css:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.css)("position:fixed;top:0;left:0;width:100%;height:100%;overflow:scroll;transition:opacity ",animation.duration,"ms ",animation.easing,";-webkit-overflow-scrolling:touch;&.overlay-enter-done{opacity:1;}&.overlay-exit,&.overlay-enter{opacity:0;}"),onClick:function onClick(e){closeOnClick&&(e.preventDefault(),e.target===e.currentTarget&&onClose())}},attrs),children)))}Overlay.__docgenInfo={description:"A lightweight and performant fullscreen overlay component using React portals to render anywhere you need them to",methods:[],displayName:"Overlay",props:{closeOnEsc:{defaultValue:{value:"true",computed:!1},required:!1,tsType:{name:"boolean"},description:"Whether to close the overlay when the escape key is pressed"},defaultPortalStyles:{defaultValue:{value:"{ position: 'relative', zIndex: 999 }",computed:!1},required:!1,tsType:{name:"union",raw:"CSSProperties | any",elements:[{name:"CSSProperties"},{name:"any"}]},description:"Styles to apply to the default document-root portal"},onClose:{defaultValue:{value:"() => null",computed:!1},required:!1},animation:{defaultValue:{value:"{\n  duration: 300,\n  easing: 'ease'\n}",computed:!1},required:!1,tsType:{name:"signature",type:"object",raw:"{ duration: number; easing: string }",signature:{properties:[{key:"duration",value:{name:"number",required:!0}},{key:"easing",value:{name:"string",required:!0}}]}},description:"Animation configuration"},open:{required:!0,tsType:{name:"boolean"},description:"Whether the overlay is open"},portal:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"Custom element to render the overlay into"},closeOnClick:{required:!1,tsType:{name:"boolean"},description:"Whether to close the overlay when clicked"},children:{required:!1,tsType:{name:"ReactNode"},description:"Content of the overlay"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx"]={name:"Overlay",docgenInfo:Overlay.__docgenInfo,path:"src/index.tsx"})},1239:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(102),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(190),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6);_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_0__.Stories.defaultProps={title:"Examples"},Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{theme:Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.create)({base:"light",brandTitle:"Overlay"})}})},1262:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(190);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1264),__webpack_require__(1267)],module)}.call(this,__webpack_require__(1263)(module))},1264:function(module,exports,__webpack_require__){var map={"./docs.stories.mdx":1265};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1264},1265:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(102),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(440),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(116);__webpack_require__(9);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,{title:"Overview",component:___WEBPACK_IMPORTED_MODULE_4__.a,mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1",{id:"react-portal-overlay"},"React Portal Overlay"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",_extends({parentName:"p"},{href:"https://www.npmjs.com/package/react-portal-overlay",target:"_blank",rel:"nofollow noopener noreferrer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img",_extends({parentName:"a"},{src:"https://img.shields.io/npm/v/react-portal-overlay",alt:"NPM"})))," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",_extends({parentName:"p"},{href:"https://github.com/seaneking/react-portal-overlay/blob/master/LICENSE.md",target:"_blank",rel:"nofollow noopener noreferrer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img",_extends({parentName:"a"},{src:"https://img.shields.io/npm/l/react-portal-overlay",alt:"License"})))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"A lightweight and performant fullscreen overlay component using React portals to render anywhere you need them to"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",{id:"installation"},"Installation"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code",_extends({parentName:"pre"},{className:"language-sh"}),"npm i react-portal-overlay\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",{id:"usage"},"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"See the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",{onClick:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__.linkTo)("API & Demo")},"API Docs")," for a full overview of props and options."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code",_extends({parentName:"pre"},{className:"language-js"}),"import React, { useState } from 'react';\nimport { Overlay } from 'react-portal-overlay';\n\nexport default () => {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <Overlay open={open} onClose={() => setOpen(false)}>\n      <h1>My overlay</h1>\n    </Overlay>\n  );\n};\n")))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.story={parameters:{docsOnly:!0}};var componentMeta={title:"Overview",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=_objectSpread(_objectSpread({},componentMeta.parameters.docs||{}),{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1267:function(module,exports,__webpack_require__){var map={"./component.stories.tsx":1268};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1267},1268:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Modal",(function(){return Modal}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(116),_emotion_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__(426).withSource;var addSourceDecorator=__webpack_require__(426).addSource,__STORY__="import React, { useState } from 'react';\nimport { Overlay } from '.';\nimport { css } from '@emotion/core';\n\nexport default {\n  title: 'API & Demo',\n  component: Overlay\n};\n\nexport const Default = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>Open Overlay</button>\n      <Overlay\n        css={css`\n          background: white;\n          padding: 3rem;\n          width: 100%;\n        `}\n        open={isOpen}\n      >\n        <h1\n          css={css`\n            margin-bottom: 2rem;\n          `}\n        >\n          Overlay\n        </h1>\n        <p>\n          Nisi vitae commodo curae in amet nec tortor sodales varius iaculis nam\n          duis cursus ullamcorper orci consequat maecenas a sagittis ultrices\n          bibendum facilisis aliquet ad arcu laoreet natoque eget per mus aptent\n          nisl posuere nibh dictum porta torquent molestie donec cras risus quis\n          dui massa etiam turpis pharetra ultricies aliquam\n        </p>\n        <button onClick={() => setIsOpen(false)}>Close Overlay</button>\n      </Overlay>\n    </>\n  );\n};\n\nexport const Modal = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>Open Modal</button>\n      <Overlay\n        open={isOpen}\n        onClose={() => setIsOpen(false)}\n        closeOnClick\n        css={css`\n          background: rgba(0, 0, 0, 0.3);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        `}\n      >\n        <div\n          css={css`\n            width: 80%;\n            background: white;\n            padding: 3rem;\n            border-radius: 5px;\n          `}\n        >\n          <h1>Modal</h1>\n          <p>\n            Nisi vitae commodo curae in amet nec tortor sodales varius iaculis\n            nam duis cursus ullamcorper orci consequat maecenas a sagittis\n            ultrices bibendum facilisis aliquet ad arcu laoreet natoque eget per\n            mus aptent nisl posuere nibh dictum porta torquent molestie donec\n            cras risus quis dui massa etiam turpis pharetra ultricies aliquam\n          </p>\n        </div>\n      </Overlay>\n    </>\n  );\n};\n",__ADDS_MAP__={"api-demo--default":{startLoc:{col:23,line:10},endLoc:{col:1,line:42},startBody:{col:23,line:10},endBody:{col:1,line:42}},"api-demo--modal":{startLoc:{col:21,line:44},endLoc:{col:1,line:81},startBody:{col:21,line:44},endBody:{col:1,line:81}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={parameters:{storySource:{source:"import React, { useState } from 'react';\nimport { Overlay } from '.';\nimport { css } from '@emotion/core';\n\nexport default {\n  title: 'API & Demo',\n  component: Overlay\n};\n\nexport const Default = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>Open Overlay</button>\n      <Overlay\n        css={css`\n          background: white;\n          padding: 3rem;\n          width: 100%;\n        `}\n        open={isOpen}\n      >\n        <h1\n          css={css`\n            margin-bottom: 2rem;\n          `}\n        >\n          Overlay\n        </h1>\n        <p>\n          Nisi vitae commodo curae in amet nec tortor sodales varius iaculis nam\n          duis cursus ullamcorper orci consequat maecenas a sagittis ultrices\n          bibendum facilisis aliquet ad arcu laoreet natoque eget per mus aptent\n          nisl posuere nibh dictum porta torquent molestie donec cras risus quis\n          dui massa etiam turpis pharetra ultricies aliquam\n        </p>\n        <button onClick={() => setIsOpen(false)}>Close Overlay</button>\n      </Overlay>\n    </>\n  );\n};\n\nexport const Modal = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>Open Modal</button>\n      <Overlay\n        open={isOpen}\n        onClose={() => setIsOpen(false)}\n        closeOnClick\n        css={css`\n          background: rgba(0, 0, 0, 0.3);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        `}\n      >\n        <div\n          css={css`\n            width: 80%;\n            background: white;\n            padding: 3rem;\n            border-radius: 5px;\n          `}\n        >\n          <h1>Modal</h1>\n          <p>\n            Nisi vitae commodo curae in amet nec tortor sodales varius iaculis\n            nam duis cursus ullamcorper orci consequat maecenas a sagittis\n            ultrices bibendum facilisis aliquet ad arcu laoreet natoque eget per\n            mus aptent nisl posuere nibh dictum porta torquent molestie donec\n            cras risus quis dui massa etiam turpis pharetra ultricies aliquam\n          </p>\n        </div>\n      </Overlay>\n    </>\n  );\n};\n",locationsMap:{"api-demo--default":{startLoc:{col:23,line:10},endLoc:{col:1,line:42},startBody:{col:23,line:10},endBody:{col:1,line:42}},"api-demo--modal":{startLoc:{col:21,line:44},endLoc:{col:1,line:81},startBody:{col:21,line:44},endBody:{col:1,line:81}}}}},title:"API & Demo",component:___WEBPACK_IMPORTED_MODULE_1__.a};var _ref={name:"1jzqnon",styles:"background:white;padding:3rem;width:100%;"},_ref2={name:"8fkoyy",styles:"margin-bottom:2rem;"},Default=addSourceDecorator((function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isOpen=_useState2[0],setIsOpen=_useState2[1];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function onClick(){return setIsOpen(!0)}},"Open Overlay"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{css:_ref,open:isOpen},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{css:_ref2},"Overlay"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",null,"Nisi vitae commodo curae in amet nec tortor sodales varius iaculis nam duis cursus ullamcorper orci consequat maecenas a sagittis ultrices bibendum facilisis aliquet ad arcu laoreet natoque eget per mus aptent nisl posuere nibh dictum porta torquent molestie donec cras risus quis dui massa etiam turpis pharetra ultricies aliquam"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function onClick(){return setIsOpen(!1)}},"Close Overlay")))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/component.stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"/Users/sean/Projects/React/react-portal-overlay/src",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),_ref3={name:"14bltpn",styles:"background:rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"},_ref4={name:"udgp6z",styles:"width:80%;background:white;padding:3rem;border-radius:5px;"},Modal=addSourceDecorator((function(){var _useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isOpen=_useState4[0],setIsOpen=_useState4[1];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function onClick(){return setIsOpen(!0)}},"Open Modal"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{open:isOpen,onClose:function onClose(){return setIsOpen(!1)},closeOnClick:!0,css:_ref3},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{css:_ref4},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",null,"Modal"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",null,"Nisi vitae commodo curae in amet nec tortor sodales varius iaculis nam duis cursus ullamcorper orci consequat maecenas a sagittis ultrices bibendum facilisis aliquet ad arcu laoreet natoque eget per mus aptent nisl posuere nibh dictum porta torquent molestie donec cras risus quis dui massa etiam turpis pharetra ultricies aliquam"))))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/component.stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"/Users/sean/Projects/React/react-portal-overlay/src",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},442:function(module,exports,__webpack_require__){__webpack_require__(443),__webpack_require__(586),__webpack_require__(587),__webpack_require__(1238),__webpack_require__(1239),module.exports=__webpack_require__(1262)},505:function(module,exports){}},[[442,1,2]]]);
//# sourceMappingURL=main.c7beee0fe2ea7f04dd31.bundle.js.map