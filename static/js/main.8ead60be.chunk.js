(window.webpackJsonpexercise1=window.webpackJsonpexercise1||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"key":"1","location":"forest","cityState":"Boston, MA","latitude":"40.7128","longitude":"-74.0060","image":{"url":"https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg","alt":"A placeholder image"},"blurb":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,stuff","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"key":"2","location":"zxcv","cityState":"Boston, MA","latitude":"41.7128","longitude":"-74.0060","image":{"url":"https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg","alt":"A placeholder image"},"blurb":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,stuff","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"key":"3","location":"qwer","cityState":"Boston, MA","latitude":"39.7128","longitude":"-74.0060","image":{"url":"https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg","alt":"A placeholder image"},"blurb":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,stuff","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"key":"4","location":"asdf","cityState":"Boston, MA","latitude":"39.7128","longitude":"-75.0060","image":{"url":"https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg","alt":"A placeholder image"},"blurb":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,stuff","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]')},24:function(e,t,a){e.exports=a(34)},34:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),n=a(10),l=a.n(n),c=a(3),r=a(15);var u=function(e){return console.log(e),o.a.createElement("div",{className:"locationCard"},o.a.createElement("div",{className:"image"},o.a.createElement("img",{className:"imageCard",src:e.image.url,alt:e.image.alt})),o.a.createElement("div",{className:"descriptionBox",key:e.location},o.a.createElement("h2",null," ",e.location," "),o.a.createElement("h4",null," ",e.cityState," "),o.a.createElement("p",null," ",e.blurb," "),o.a.createElement("a",{href:"/",onClick:function(t){t.preventDefault(),e.updatePage("locationPage"),e.updateLocation(e.location)}},"read more")))};var s=function(e){return console.log(e),o.a.createElement("div",null,o.a.createElement("h2",{class:"pageTitle"},"Explore"),o.a.createElement(r.a,null,e.data.map((function(t){return o.a.createElement("div",{className:"cardHolder",key:t.location},o.a.createElement(u,{location:t.location,cityState:t.cityState,blurb:t.blurb,image:t.image,updatePage:e.updatePage,updateLocation:e.updateLocation}))}))))},m=a(21),d=a(35),p=a(38),g=a(36),f=a(37),b=a(14),x={titleImage:{marginLeft:"10%",marginRight:"10%",textAlign:"center",backgroundSize:"cover"},titleText:{},hide:{visibility:"hidden",width:"100%",height:"50%"},bodyText:{marginLeft:"15%",marginRight:"15%"},map:{height:"200px"}};var E=function(e){console.log("props"),console.log(e);var t=b.filter((function(t){return t.location===e.locationTracker}))[0];return console.log(t),o.a.createElement("div",null,o.a.createElement("img",{src:t.image.url,alt:"cute shibe"}),o.a.createElement("h1",{style:x.titleText}," ",t.location),o.a.createElement("div",{style:x.bodyText},t.cityState,o.a.createElement("button",{onClick:function(a){a.preventDefault(),e.updateList((function(e){return[].concat(Object(m.a)(e),[t.location])})),console.log("CLICKED IT"),console.log(e)}},"ADD"),o.a.createElement("h2",null," ",t.blurb," "),t.description),o.a.createElement(d.a,{style:x.map,center:[40.712,-74.006],zoom:10,scrollWheelZoom:!1,tap:!1},o.a.createElement(p.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.a.createElement(g.a,{position:[t.latitude,t.longitude]},o.a.createElement(f.a,null,t.location))))},h=a(14);var v=function(e){var t=h.filter((function(t){return e.locationList.indexOf(t.location)>=0}));return console.log("PRINTING ARTICLE"),console.log(t),o.a.createElement("div",null,t.map((function(t){return o.a.createElement("div",{key:t.location},o.a.createElement(u,{key:t.location.concat(t.cityState),location:t.location,cityState:t.cityState,blurb:t.blurb,image:t.image,updatePage:e.updatePage,updateLocation:e.updateLocation}))})),o.a.createElement(d.a,{className:"mapContainer",center:[40,-74],zoom:7,scrollWheelZoom:!1,tap:!1},o.a.createElement(p.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.a.createElement(g.a,{position:[42,-70]},o.a.createElement(f.a,null,t[0].location)),t.map((function(e){return o.a.createElement(g.a,{key:e.location.concat(e.cityState),position:[e.latitude,e.longitude]},o.a.createElement(f.a,{key:e.location.concat(e.cityState)},e.location))}))))};function y(e){return o.a.createElement("header",null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{className:"navLink",href:"/",onClick:function(t){t.preventDefault(),e.updatePage("explore")}},"Explore")),o.a.createElement("li",null,o.a.createElement("a",{className:"navLink",href:"/",onClick:function(t){t.preventDefault(),e.updatePage("schedule")}},"Schedule")),o.a.createElement("li",{className:"title"},o.a.createElement("h1",{className:"title"},"Vacation Planning")),o.a.createElement("li",null,o.a.createElement("a",{className:"navLink",href:"/"},"My Page")),o.a.createElement("li",null,o.a.createElement("a",{className:"navLink",style:{textDecoration:"none",color:"blue"},href:"/"},"Login")))))}var L={container:{textAlign:"center"}};var k=function(e){var t=e.data,a=Object(i.useState)(["forest","asdf"]),n=Object(c.a)(a,2),l=n[0],r=n[1],u=Object(i.useState)("explore"),m=Object(c.a)(u,2),d=m[0],p=m[1],g=Object(i.useState)("forest"),f=Object(c.a)(g,2),b=f[0],x=f[1];return o.a.createElement("div",{className:"App",style:L.container},o.a.createElement(y,{updatePage:p}),function(){switch(d){case"locationPage":return o.a.createElement(E,{locationList:l,updateList:r,locationTracker:b});case"schedule":return o.a.createElement(v,{key:"schedule",locationList:l,updateList:r,updatePage:p,updateLocation:x});default:return o.a.createElement(s,{data:t,locationList:l,updatePage:p,updateLocation:x})}}())},q=a(14);l.a.render(o.a.createElement(k,{data:q,globalLocationList:[]}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8ead60be.chunk.js.map