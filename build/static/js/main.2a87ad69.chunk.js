(this.webpackJsonptrader=this.webpackJsonptrader||[]).push([[0],{205:function(e,t,n){e.exports=n(477)},210:function(e,t,n){},211:function(e,t,n){},242:function(e,t){},244:function(e,t){},253:function(e,t){},255:function(e,t){},280:function(e,t){},282:function(e,t){},283:function(e,t){},289:function(e,t){},291:function(e,t){},309:function(e,t){},312:function(e,t){},328:function(e,t){},331:function(e,t){},336:function(e,t){},338:function(e,t){},361:function(e,t){},477:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(199),r=n.n(o),l=(n(210),n(200)),c=n(201),s=n(204),u=n(203),m=(n(211),n(38)),d=n(202),f=n(212),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={loading:!0,returns:0,trades:0,cumulative:0},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new f({keyId:"PKV5TEY0P817CP5HO20Z",secretKey:"UMfrjT/Lxj/LiyyP3I735sMEuQ8hIPli3HtrbO1a",paper:!0,usePolygon:!1});t.getAccountActivities({activityTypes:"FILL",date:(new Date).toISOString().split("T")[0]}).then((function(t){e.setState({trades:t.length})})),t.getPortfolioHistory({period:"1D",timeframe:"1D"}).then((function(t){e.setState({returns:(100*t.profit_loss_pct[0]).toFixed(2),cumulative:((t.equity[0]-1e5)/1e5*100).toFixed(2),loading:!1})}))}},{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement(m.a.Body,null,i.a.createElement(m.a.Title,{className:"mb-4",style:{fontSize:"10vmin"}},"Algo Trader"),i.a.createElement(m.a.Subtitle,{className:"mb-3 text-success",style:{fontSize:"4vmin"}},"A Day Trading Bot"),i.a.createElement(m.a.Text,null,i.a.createElement("hr",{style:{borderTop:"solid black"}}),i.a.createElement(d.a,{className:"mt-3",style:{display:this.state.loading?"":"none"},animation:"border",variant:"primary"}),i.a.createElement("div",{id:"text",style:{display:this.state.loading?"none":""}},i.a.createElement("ul",null,i.a.createElement("li",null,"Trades Today : ",i.a.createElement("span",{style:{color:"blue"}},this.state.trades)," "),i.a.createElement("li",null,"Today's Returns : ",i.a.createElement("span",{style:{color:this.state.returns>=0?"lime":"red"}},this.state.returns,"%")," "),i.a.createElement("li",null,"Cumulative Returns : ",i.a.createElement("span",{style:{color:this.state.cumulative>=0?"lime":"red"}},this.state.cumulative,"%")," ")))),i.a.createElement(m.a.Link,{href:"https://sreekved.github.io"},i.a.createElement("h1",{id:"text"},"\ud83d\udd17Sreekar Vedula"))))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(476);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[205,1,2]]]);
//# sourceMappingURL=main.2a87ad69.chunk.js.map