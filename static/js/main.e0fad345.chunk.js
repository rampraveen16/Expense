(this["webpackJsonpexpense-app"]=this["webpackJsonpexpense-app"]||[]).push([[0],{10:function(t,e,n){t.exports=n.p+"static/media/delete.46a3fbea.svg"},17:function(t,e,n){t.exports=n(27)},22:function(t,e,n){},23:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(7),s=n.n(o),i=(n(22),n(15)),u=n(8),l=n(9),c=n(16),m=n(14),d=(n(23),function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}),p=function(t,e){var n=t.data.amount.filter((function(t){if(t.status===e)return t})).map((function(t){return t.amount})),a=0;return 0!==n.length&&(a=n.reduce((function(t,e){return parseInt(t)+parseInt(e)}))),a},f=function(t){var e=p(t,"INCOME"),n=p(t,"SPEND"),a=isNaN(e-n)?null:e-n;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Balance"),r.a.createElement("h2",null,d(a)," CKZ"),r.a.createElement("span",{style:{color:"#21d21f",marginRight:"20px"}},"Income: ",d(e)," KC"),r.a.createElement("span",{style:{color:"red"}},"Spend: ",d(n)," KC"))},v=n(1),w=n(10),E=n.n(w),h=n(2);function b(){var t=Object(v.a)(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 2px solid #000;\n    padding-bottom: 10px;\n    & p {\n      margin: 5px;\n    }\n    & img {\n      transition:0.35s all;\n      &:hover {\n        transform:scale(1.3)\n      }\n    }\n    "]);return b=function(){return t},t}var A=function(t){var e=h.a.div(b()),n="INCOME"===t.data.status?"green":"red";return 0===Object.keys(t.data).length?"":r.a.createElement("div",null,r.a.createElement("p",{style:{fontSize:"10px",margin:"5px 0 0 5px",color:"#6f6969"}},t.data.date),r.a.createElement(e,null,r.a.createElement("p",{style:{fontSize:"15px"},className:n},d(t.data.amount)),r.a.createElement("p",{style:{fontSize:"14px"}},t.data.description),r.a.createElement("img",{style:{width:"30px",cursor:"pointer"},onClick:function(){t.remove(t.data.id)},src:E.a,alt:"delete"})))},g=(n(26),function(t){var e=0===t.data.length?"Please Add Income/Spend Amount":"",n=!0===t.error?"error":"";return!1===t.visible?r.a.createElement("h4",null,e):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input--wrap"},r.a.createElement("form",{onSubmit:t.submit},r.a.createElement("input",{type:"date",name:"date",onChange:t.date,required:!0}),r.a.createElement("input",{type:"text",className:n,onChange:t.amount,required:!0,placeholder:"Enter Amount"}),r.a.createElement("textarea",{onChange:t.description,placeholder:"Description",required:!0}),r.a.createElement("input",{type:"submit",value:"ADD"}))))});function x(){var t=Object(v.a)(["\n    text-align: center;\n    margin: 10px 20px;\n    cursor: pointer;\n    display:inline-block;\n    padding: 5px;\n    border: 1px solid #000;\n    box-shadow: 1px 4px 5px 5px #000;\n    transition: 0.35s all;\n    &:hover {   \n    box-shadow: 1px 4px 5px 2px #667070;\n    }\n\n"]);return x=function(){return t},t}var y=function(t){var e=h.a.button(x());return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(e,{style:{background:"#0ce10c"},onClick:function(){t.status("INCOME")}},"Add Income"),r.a.createElement(e,{style:{background:"red"},onClick:function(){t.status("SPEND")}},"Add Spending")))},S=function(t){Object(c.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={newAmount:{id:0,date:null,amount:null,description:"",status:""},amount:[],status:"",error:!1,visible:!1},t.validate=function(){return!Number(t.state.newAmount.amount)||t.state.newAmount.amount<0||null==t.state.newAmount.date||""===t.state.newAmount.description?(alert("Please Enter Valied Number"),t.setState({error:!0}),!1):(t.setState({error:!1}),!0)},t.submit=function(e){e.preventDefault(),t.validate()&&(t.setState({amount:[].concat(Object(i.a)(t.state.amount),[t.state.newAmount])}),e.target.reset(),t.setState({visible:!t.state.visible}))},t.amountHandeler=function(e){t.setState({newAmount:{id:t.state.newAmount.id+1,date:t.state.newAmount.date,amount:e.target.value,description:t.state.newAmount.description,status:t.state.newAmount.status}})},t.dateHandler=function(e){t.setState({newAmount:{id:t.state.newAmount.id+1,date:t.state.newAmount.date,amount:t.state.newAmount.amount,description:t.state.newAmount.description,status:t.state.newAmount.status}})},t.descriptionHandeler=function(e){t.setState({newAmount:{id:t.state.newAmount.id+1,date:t.state.newAmount.date,amount:t.state.newAmount.amount,description:e.target.value,status:t.state.newAmount.status}})},t.statusHandler=function(e){t.setState({newAmount:{id:t.state.newAmount.id+1,date:t.state.newAmount.date,amount:t.state.newAmount.amount,description:t.state.newAmount.description,status:e}}),t.setState({visible:!t.state.visible})},t.dateHandler=function(e){t.setState({newAmount:{id:t.state.newAmount.id+1,date:e.target.value,amount:t.state.newAmount.amount,description:t.state.newAmount.description,status:t.state.newAmount.status}})},t.deleteHandler=function(e){var n=t.state.amount.filter((function(t){if(t.id!==e)return e}));t.setState({amount:n})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"board--block"},r.a.createElement(f,{data:this.state})),r.a.createElement("section",null,this.state.amount.map((function(e,n){return r.a.createElement(A,{key:n,data:e,status:t.state.status,remove:t.deleteHandler})}))),r.a.createElement("section",null,r.a.createElement(g,{data:this.state.amount,error:this.state.error,date:this.dateHandler,submit:this.submit,amount:this.amountHandeler,description:this.descriptionHandeler,visible:this.state.visible})),r.a.createElement("section",null,r.a.createElement(y,{status:this.statusHandler})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e0fad345.chunk.js.map