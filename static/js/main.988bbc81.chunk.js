(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),s=a(2),i=a(3),u=a(5),c=a(4),o=a(1),l=a.n(o),m=(a(12),a(13),a(0)),f=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={valueOfTransform:0},e.transforming=function(t,a){e.setState((function(e){var n=-100*t+e.valueOfTransform;return a>=n?{valueOfTransform:a}:{valueOfTransform:n}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.maxValue>this.state.valueOfTransform&&e.maxValue!==this.props.maxValue&&this.transforming(this.props.step,this.props.maxValue)}},{key:"render",value:function(){var e=this,t=this.props.images,a=this.props,n=a.itemWidth,r=a.frameSize,s=a.step,i=a.delay,u=a.maxValue,c=this.state.valueOfTransform,o={width:"".concat(n,"px"),height:"".concat(n,"px"),transition:"".concat(i,"ms"),transform:"translate(".concat(c,"%)")},l={width:"".concat(n*r,"px"),height:"".concat(n,"px")};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"Carousel",children:Object(m.jsx)("ul",{className:"Carousel__list",style:l,children:t.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)("img",{src:e,alt:String(t+1),style:o})},e)}))})}),Object(m.jsx)("button",{type:"button",disabled:c>=0,onClick:function(){return e.setState((function(e){var t=100*s+e.valueOfTransform;return t>0?{valueOfTransform:0}:{valueOfTransform:t}}))},children:"<--"}),"  ",Object(m.jsx)("button",{type:"button",disabled:u>=this.state.valueOfTransform,onClick:function(){return e.transforming(s,u)},children:"--\x3e"})]})}}]),a}(l.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:160,step:3,frameSize:3,delay:1e3},e.maxValueOfTrans=function(){var t=e.state,a=t.images,n=t.frameSize;return 100*-(a.length-n)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.itemWidth,r=t.frameSize,s=t.step,i=t.delay;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{children:["Carousel with ",a.length," images"]}),"W/H:","  ",Object(m.jsx)("input",{type:"number",defaultValue:130,onChange:function(t){var a=t.target;return e.setState({itemWidth:+a.value})}}),Object(m.jsx)("br",{}),"Framesize:","  ",Object(m.jsx)("input",{type:"number",defaultValue:3,onChange:function(t){var a=t.target;return e.setState({frameSize:+a.value})}}),Object(m.jsx)("br",{}),"Step:","  ",Object(m.jsx)("input",{type:"number",defaultValue:3,onChange:function(t){var a=t.target;return e.setState({step:+a.value})}}),Object(m.jsx)("br",{}),"Delay:","  ",Object(m.jsx)("input",{type:"number",defaultValue:1e3,onChange:function(t){var a=t.target;return e.setState({delay:+a.value})}}),Object(m.jsx)(f,{itemWidth:n,frameSize:r,step:s,images:a,delay:i,maxValue:this.maxValueOfTrans()})]})}}]),a}(l.a.Component),h=p;r.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.988bbc81.chunk.js.map