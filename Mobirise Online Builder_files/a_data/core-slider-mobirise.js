!function(e,t){"use strict";var i,a=(i={},function(t){var a=e.Deferred();return t in i?i[t]?a.resolve(i[t]):a.reject("Preview image not found."):e("<img>").on("load",(function(){if(120===(this.naturalWidth||this.width)){var e=this.src.split("/").pop();switch(e){case"maxresdefault.jpg":this.src=this.src.replace(e,"sddefault.jpg");break;case"sddefault.jpg":this.src=this.src.replace(e,"hqdefault.jpg");break;case"hqdefault.jpg":this.src=this.src.replace(e,"default.jpg");break;default:i[t]=null,a.reject("Preview image not found.")}}else a.resolve(i[t]=this.src)})).attr("src","https://img.youtube.com/vi/"+t+"/maxresdefault.jpg"),a});t.regExtension({name:"core-slider-mobirise",global:{setSliders:function(i){var o=e("[data-app-component-id="+i._id+"] > .app-component-content section[mbr-slider]");if(t.isSecondaryComponent(i._id))var n=(o=e("[data-app-component-id="+i._id+"] > .app-component-content section [mbr-carousel]")).attr("mbr-carousel");o.length&&(e(i._params[n]).each((function(e){if(this.playVideo){var t=o.find(".carousel-item").eq(e);t.find(".image_wrapper img").css("opacity","0"),t.find(".image_wrapper .mbr-overlay").css("display","none"),t.find(".mbr-background-video-preview").remove()}})),o.find(".carousel-item[data-bg-video-slide]").each((function(o,n){var r=e(n).attr("data-bg-video-slide"),s=function(e){if("false"===e)return!1;var t=e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);return!!t&&t[6]}(r);if(s){var c,d,p,l=function(e){if("false"===e)return!1;var t=e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);return t&&/youtube/g.test(t[3])?"youtube":!(!t||!/vimeo/g.test(t[3]))&&"vimeo"}(r),u=e('<div class="mbr-background-video-preview"></div>').css({display:"none",backgroundSize:"cover",backgroundPosition:"center"});t.isSecondaryComponent(i._id)?e(".container-slide",n).before(u):e(".mbr-overlay, .container-slide",n).before(u),"youtube"===l?a(s).done((function(t){e(n).find(".mbr-background-video-preview").css("background-image","url("+t+")").show()})):(c=s,d=function(t){e(n).find(".mbr-background-video-preview").css("background-image","url("+t+")").show()},(p=new XMLHttpRequest).open("GET","https://vimeo.com/api/v2/video/"+c+".json",!0),p.onreadystatechange=function(){if(4===this.readyState&&this.status>=200&&this.status<400){var e=JSON.parse(this.responseText);d(e[0].thumbnail_large)}},p.send(),p=null)}})))},publishSliders:function(i,a){if(t.isSecondaryComponent(i._id)){var o=e(a).find("[data-app-component-id="+i._id+"] > .app-component-content section [mbr-carousel]"),n=o.attr("mbr-carousel");e(i._params[n]).each((function(e){this.playVideo&&(o.find(".carousel-item").eq(e).find(".image_wrapper img").css("opacity","0"),o.find(".carousel-item").eq(e).find(".image_wrapper .mbr-overlay").remove())}))}var r,s;e("[data-app-component-id="+i._id+"] > .app-component-content [mbr-slider]").length&&(i._plugins=(r=["YTPlayer","VimeoPlayer","SliderVideo"],s=!!e(a).find('[data-bg-video-slide^="http"]').length,i._plugins.split(",").filter((function(e){return r.indexOf(e)<0})).concat(s?r:[]).join(",")),e(a).find("[data-app-component-id="+i._id+"] > .app-component-content section[mbr-slider][data-interval]").attr("data-interval",i._params.autoplay?1e3*i._params.timeout:"false"),[".carousel-indicators > li",".carousel-inner > div"].forEach((function(e){a.find("[data-app-component-id="+i._id+"] > .app-component-content section[mbr-slider]").find(e).removeClass("active").eq(0).addClass("active")})))}},events:{loadedComponent:function(e,t,i,a){var o=mbrAppCore.$template.find(".carousel");o.length&&o.carousel("pause"),a?this.publishSliders(e,i):this.setSliders(e)}}})}(jQuery,mbrAppCore);