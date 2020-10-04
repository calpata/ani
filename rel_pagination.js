(function(X,m){X.MVPRelPagination=function(x){function Q(){var a=p.width(),c=p.height(),e,f=I.length;for(e=0;e<f;e++){var g=I[e];if(a>g.width){n=g.column;h=g.gutter;var k=g}}a=Math.round(c/(a/n/Y));a>k.row&&(a=k.row);r=a;1>r&&(r=1)}function R(){y=n*r;var a,c,e=0;C=Math.ceil(D/y);for(a=0;a<C;a++){var f=m('<div class="mvp-rel-cont"></div>');var g=y;e+g>D&&(g=D-e);e+=g;for(c=0;c<g;c++){var k=t.shift();0<h?k.css({marginRight:h+"px",marginBottom:h+"px",width:"calc("+100/n+"% - "+(h+h/n)+"px)"}):k.css({marginRight:h+
"px",marginBottom:h+"px",width:100/n+"%"});f.append(k)}b.append(f)}J=C;0!=D%y&&--C;E.css({paddingTop:h+"px",paddingLeft:h+"px"});b.css("display","block");var T=S.width();a=0;b.find(".mvp-rel-cont").each(function(){a++;m(this).width(T)});b.width(T*a);u=b.children(".mvp-rel-cont").eq(0).width();c=b.children(".mvp-rel-cont").eq(0).height();E.css("height",c+h);z&&(f=b.find(".mvp-rel-box[data-id="+z+"]").parent(),f.find(".mvp-rel-box").length==y?d=f.index():(d=f.index()-1,0>d&&(d=0)),b.css({transform:""+
F+"("+-(d*u)+"px)"}),z=null);0==d?A.hide():A.show();d+1==J?B.hide():B.show();b.css("opacity",1);G=!0;q=!1}function U(a){t=[];var c;b.css("display","none").find(".mvp-rel-box").each(function(){c=m(this);a&&c.find(".mvp-rel-thumbimg").removeClass("mvp-visible");t.push(c.detach())});b.find(".mvp-rel-cont").remove();A.hide();B.hide();a&&(z=null,d=0,b.css({transform:""+F+"(0px)"}))}function V(){b.one("transitionend",function(){q=!1}).css({transform:""+F+"("+K+"px)"});var a=b.children(".mvp-rel-cont").eq(d).height();
E.css("height",a+h);0==d?A.hide():A.show();d+1==J?B.hide():B.show()}var L=x.parent,v=MVPUtils.isMobile(),G,C,J,u,d=0,K,M,N,n,r,h,q=!0,y,t=[],z,O,w=[],I=[{width:0,column:1,row:1,gutter:0},{width:450,column:2,row:2,gutter:10},{width:780,column:2,row:2,gutter:20},{width:1100,column:3,row:2,gutter:20}],Y=16/9,p=x.wrapper,S=p.find(".mvp-rel-playlist-holder"),E=p.find(".mvp-rel-playlist-inner"),b=p.find(".mvp-rel-playlist-content");MVPUtils.keysrt(I,"width");var F="translateX",P=[];m(x.settings.playlistList).find(".mvp-rel-playlist").each(function(){for(var a=
m(this),c=a.attr("data-rel-num"),e=a.find(".mvp-playlist-item").length,f=a.attr("data-playlist-id"),g=[];g.length<c;){var k=Math.floor(Math.random()*e);-1===g.indexOf(k)&&(g.push(k),P.push(a.find(".mvp-playlist-item").eq(k).attr("data-playlist-id",f)))}});t=[];x=P.length;var Z=v?" mvp-rel-box-mobile":"";for(v=0;v<x;v++){var l=P[v];var aa=l.attr("data-thumb")||l.attr("data-poster");var H=l.attr("data-title");var W=l.attr("data-duration");l='<div class="mvp-rel-box'+Z+'" data-id="'+v+'" data-playlist-id="'+
l.attr("data-playlist-id")+'" data-media-id="'+l.attr("data-media-id")+'"';H&&(l+=' title="'+H+'"');l+='><div class="mvp-rel-thumb"><img class="mvp-rel-thumbimg" src="'+aa+'" alt="image" /></div>';H&&(l+='<div class="mvp-rel-title">'+H+"</div>");W&&(l+='<div class="mvp-rel-duration">'+MVPUtils.formatTime(W)+"</div>");l+="</div>";t.push(m(l))}var D=t.length;var A=p.find(".mvp-rel-prev").on("click",function(){if(q)return!1;q=!0;d--;K=-(d*u);V()}),B=p.find(".mvp-rel-next").on("click",function(){if(q)return!1;
q=!0;d++;K=-(d*u);V()});p.find(".mvp-rel-close").on("click",function(){if(q)return!1;q=!0;L.toggleRel()});this.build=function(){O&&U(!0);MVPUtils.shuffleArray(t);Q();M=n;N=r;R(!0);w=[];if(O)b.find(".mvp-rel-box").each(function(){w.push(m(this).find(".mvp-rel-thumbimg"))}),c=0,e=w.length;else{O=!0;var a;b.find(".mvp-rel-box").each(function(){a=m(this).on("click",function(){var g=m(this).attr("data-playlist-id"),k=m(this).attr("data-media-id");L.loadPlaylist(".mvp-playlist-"+g,k)||L.loadMedia("id",
k)});w.push(a.find(".mvp-rel-thumbimg"))});var c=0,e=w.length,f}for(f=0;f<e;f++)setTimeout(function(){clearTimeout(this);w[c].addClass("mvp-visible");c++},50+50*f)};this.resizePagination=function(){if(G)if(G=!1,Q(),n!=M||r!=N)M=n,N=r,z=b.children(".mvp-rel-cont").eq(d).find(".mvp-rel-box").eq(0).attr("data-id"),U(),R();else{var a=S.width(),c=0;b.find(".mvp-rel-cont").each(function(){c++;m(this).width(a)});b.width(a*c);u=b.children(".mvp-rel-cont").eq(0).width();var e=b.children().eq(d).height();E.css("height",
e+h);b.css({transform:""+F+"("+-(d*u)+"px)"});G=!0}};return this}})(window,jQuery);