!function(t,e){"use strict";e.regExtension({name:"change-testimonials",events:{load:function(){this.Core.addFilter("changeComponentParams",(function(n,i,o,a){if("testimonialsCount"===i){for(var m=e.$template.find("[data-app-component-id="+a+"] > .app-component-content .mbr-testimonials-list"),s=e.Core.getComponent(a),c=s.items,r=s.defaultItem,l=[],d=0;d<n;d++)l[d]=s.testimonial[d]||t.extend(!0,{},r,c[d]||{});s.testimonial=l,m.find(".mbr-testimonial [mbr-media]:not([click-attached])").on("click",(function(n){n.stopPropagation(),n.preventDefault();var i=t(this).closest(".mbr-testimonial").index(),o=s.testimonial[i],a=t.extend(!0,{},o.media);e.showMediaImageDialog(a,(function(t){o.media=t,e.Core.updateGlobalComponents(s._id)}))})).each((function(e,n){t(n).attr("click-attached","true")}))}return n}))}}})}(jQuery,mbrApp);