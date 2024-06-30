!function(e,n){n.regExtension({name:"gallery-video",global:{downloadVideoPreview:function(t){var a=!1,o="";var r,i,s,c=(r={},function(n){var t=e.Deferred();return n in r?r[n]?t.resolve(r[n]):t.reject("Preview image not found."):e("<img>").on("load",(function(){if(120===(this.naturalWidth||this.width)){var e=this.src.split("/").pop();switch(e){case"maxresdefault.jpg":this.src=this.src.replace(e,"sddefault.jpg");break;case"sddefault.jpg":this.src=this.src.replace(e,"hqdefault.jpg");break;case"hqdefault.jpg":this.src=this.src.replace(e,"default.jpg");break;default:r[n]=null,t.reject("Preview image not found.")}}else t.resolve(r[n]=this.src)})).attr("src",function(e,n){return"https://img.youtube.com/vi/"+e+"/"+(n||"")+"default.jpg"}(n,"maxres")),t});o=!!(s=/(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(i=t)||/^([-a-z0-9_]+)$/i.exec(i))&&s[1],-1!=t.indexOf("vimeo.com")&&(o=function(n){var t=!1;return e.ajax({url:"https://vimeo.com/api/oembed.json?url="+n,type:"GET",async:!1,success:function(e){e.video_id&&(t=e.video_id)}}),t}(t),a=!0);var d=e.Deferred();return o?function(t,a,o){a?n.addImageFromUrlToAssets(function(n){var t=!1;return e.ajax({type:"GET",url:"https://vimeo.com/api/v2/video/"+n+".json",dataType:"json",async:!1,success:function(e){t=e[0].thumbnail_large}}),t}(t)).then(o):c(t).done((function(e){n.addImageFromUrlToAssets(e).then(o)}))}(o,a,(function(e){d.resolve(e)})):d.resolve(!1),d}},events:{load:function(){var e=this;e.Core.addFilter("changeComponentParams",(function(t,a,o,r){var i=e.$template.find("[data-app-component-id="+r+"] > .app-component-content section [mbr-gallery]").attr("mbr-gallery");if(a===i){var s=Object.keys(t);if(1==s.length){var c=t[s[0]];if("playVideo"in c||"videoUrl"in c){var d=e.$body.find("#edit-component-params").find(".image-tabs li.active"),p=o[i][d.index()];if("playVideo"in c){if(c.playVideo)var m=n.core2path(p.videoPreview);else m=n.core2path(p.image);d.css("background-image",'url("'+m+'")')}"videoUrl"in c&&e.downloadVideoPreview(c.videoUrl).then((function(e){var t=function(e,t,a){var o=n.$componentsParams.attr("data-component-id"),r=n.Core.getComponentParams(o).default,i=n.$template.find("[data-app-component-id="+o+"] > .app-component-content section [mbr-gallery]").attr("mbr-gallery"),s=n.Core.replaceSystemVariables(r[i].defaultImg,n.Core.getComponent(o));return a||s||n.Core.replaceSystemVariables("@ADDON_DIR@_images/gallery/logo.jpg",n.Core.getComponent(o))}(0,0,e);p.videoPreview=t,d.css("background-image",'url("'+n.core2path(t)+'")')}))}}}return t}))},preparedComponentParams:function(){var t=n.$componentsParams,a=n.$componentsParams.attr("data-component-id");0==n.Core.getComponent(a)._name.indexOf("gallery")&&e('<button class="btn btn-raised btn-primary">Set</button>').on("click",(function(e){e.preventDefault(),e.stopPropagation()})).insertAfter(t.find('[data-name="videoUrl"]'))},showedComponentParams:function(){var e=n.$componentsParams;e.find('[data-name="videoUrl"]').on("focus",(function(n){e.find(".image-tabs .images").css({"pointer-events":"none",opacity:"0.4"})})).on("blur",(function(){e.find(".image-tabs .images").css({"pointer-events":"inherit",opacity:"1"})}));var t=n.$componentsParams.attr("data-component-id"),a=n.$template.find("[data-app-component-id="+t+"] > .app-component-content section [mbr-gallery]").attr("mbr-gallery"),o=n.Core.getComponent(t)._params;0==n.Core.getComponent(t)._name.indexOf("gallery")&&e.find("input").on("input",(function(e){e.stopPropagation()}));var r=o[a],i=e.find(".images li");r&&r.length>0&&r.map((function(e,t){if(e.playVideo){var a=n.core2path(e.videoPreview);i.eq(t).css("background-image","url("+a+")")}}))}}})}(jQuery,mbrApp);