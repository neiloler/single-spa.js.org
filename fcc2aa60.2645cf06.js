(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{298:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),o=(a(0),a(311)),l={id:"parcels-api",title:"Parcels API",sidebar_label:"Parcels API"},c=[{value:"mounting",id:"mounting",children:[{value:"Parcel Props",id:"parcel-props",children:[]},{value:"mountParcel",id:"mountparcel",children:[]},{value:"mountRootParcel",id:"mountrootparcel",children:[]}]},{value:"Parcel Object",id:"parcel-object",children:[{value:"unmount",id:"unmount",children:[]},{value:"mount",id:"mount",children:[]},{value:"update",id:"update",children:[]},{value:"getStatus",id:"getstatus",children:[]},{value:"loadPromise",id:"loadpromise",children:[]},{value:"bootstrapPromise",id:"bootstrappromise",children:[]},{value:"mountPromise",id:"mountpromise",children:[]},{value:"unmountPromise",id:"unmountpromise",children:[]}]}],p={rightToc:c},i="wrapper";function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(i,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Most parcel methods will be called on the parcel itself, with the exception being around mounting."),Object(o.b)("h2",{id:"mounting"},"mounting"),Object(o.b)("p",null,"Both mount methods take a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/parcels-overview#parcel-configuration"}),"parcelConfig")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/parcels-api#parcel-props"}),"additional props"),".\nThey both return a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/parcels-api#parcel-object"}),"parcel object"),". The parcel object contains all additional exposed methods."),Object(o.b)("h3",{id:"parcel-props"},"Parcel Props"),Object(o.b)("p",null,"When mounting a parcel the second argument is props, a JavaScript object of properties to be passed to the parcel. This object must have a domElement prop, which is the dom node that the parcel will mount into."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const parcelProps = {\n  customerId: 7,\n  numberOfTasks: 42,\n  domElement: document.createElement('div')\n}\n")),Object(o.b)("h3",{id:"mountparcel"},"mountParcel"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"applicationProps.mountParcel(parcelConfig, parcelProps)"),". Each application is provided a mountParcel function.\nThe main advantage to using an applications ",Object(o.b)("inlineCode",{parentName:"p"},"mountParcel")," function is that parcels mounted via an\napplications ",Object(o.b)("inlineCode",{parentName:"p"},"mountParcel")," will be automatically unmounted when the application is unmounted."),Object(o.b)("p",null,"The first argument may be either an object or a function that returns a promise that resolves with the object (a loading function)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Synchronous mounting\nconst parcel1 = applicationProps.mountParcel(parcelConfig, parcelProps);\n\n// Asynchronous mounting. Feel free to use webpack code splits or SystemJS dynamic loading\nconst parcel2 = applicationProps.mountParcel(() => import('./some-parcel'), parcelProps);\n")),Object(o.b)("h3",{id:"mountrootparcel"},"mountRootParcel"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#mountrootparcel"}),"mountRootParcel")," method will mount the parcel but ",Object(o.b)("inlineCode",{parentName:"p"},"unmount")," must be called manually."),Object(o.b)("h2",{id:"parcel-object"},"Parcel Object"),Object(o.b)("p",null,"The parcel object contains the following functions and methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/parcels-api#mount"}),"mount")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/parcels-api#unmount"}),"unmount")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/parcels-api#update"}),"update")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/parcels-api#getstatus"}),"getStatus")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/parcels-api#loadpromise"}),"loadPromise")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/parcels-api#bootstrappromise"}),"bootstrapPromise")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/parcels-api#mountpromise"}),"mountPromise")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/parcels-api#unmountpromise"}),"unmountPromise"))),Object(o.b)("h3",{id:"unmount"},"unmount"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"parcel.unmount()")," returns a promise that resolves once the parcel is successfully unmounted. The promise may throw an error which needs to be handled."),Object(o.b)("h3",{id:"mount"},"mount"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"parcel.mount()")," returns a promise that resolves once the parcel is successfully mounted. The promise can throw an error which needs to be handled."),Object(o.b)("h3",{id:"update"},"update"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"parcel.update(props)")," allows you to change the props passed into a parcel. Note that not all parcels support being updated. The ",Object(o.b)("inlineCode",{parentName:"p"},"update")," function returns a promise that resolves when the parcel is finished updating. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"parcels-overview.html#update-optional"}),"other documentation")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://single-spa.js.org/docs/parcels-overview.html#quick-example"}),"example")," for more information."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const parcel = singleSpa.mountRootParcel(parcelConfig, parcelProps);\nparcel.update(newParcelProps);\n")),Object(o.b)("h3",{id:"getstatus"},"getStatus"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"parcel.getStatus()")," retuns a string of that parcels status. The string status is one of the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NOT_BOOTSTRAPPED"),": The parcel has not been bootstrapped"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BOOTSTRAPPING"),": The parcel is bootstrapping but has not finished"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NOT_MOUNTED"),": The parcel has bootstrapped, but is not mounted"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MOUNTED"),": The parcel is currently active and mounted to the DOM"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"UNMOUNTING"),": The parcel is unmounting, but has not finished"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"UPDATING"),": The parcel is currently being updated, but has not finished"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SKIP_BECAUSE_BROKEN"),": The parcel threw an error during bootstrap, mount, unmount, or update. Other parcels may continue normally, but this one will be skipped.")),Object(o.b)("h3",{id:"loadpromise"},"loadPromise"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"parcel.loadPromise()")," returns a promise that will resolve once the parcel has been loaded."),Object(o.b)("h3",{id:"bootstrappromise"},"bootstrapPromise"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"parcel.bootstrapPromise()")," returns a promise that will resolve once the parcel has been bootstrapped."),Object(o.b)("h3",{id:"mountpromise"},"mountPromise"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"parcel.mountPromise()")," returns a promise that will resolve once the parcel has been mounted. This is helpful for knowing exactly when a parcel has been appended to the DOM"),Object(o.b)("h3",{id:"unmountpromise"},"unmountPromise"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"parcel.unmountPromise()")," returns a promise that will resolve once the parcel has been unmounted."))}s.isMDXComponent=!0},311:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n),o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var p="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),s=l(a),u=n,b=s[c+"."+u]||s[u]||i[u]||o;return a?r.a.createElement(b,Object.assign({},{ref:t},p,{components:a})):r.a.createElement(b,Object.assign({},{ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var u=2;u<o;u++)l[u]=a[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);