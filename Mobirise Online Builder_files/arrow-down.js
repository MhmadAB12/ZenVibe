!function(e,t){t.regExtension({name:"arrow-down",events:{loaded:function(){t.$template.on("click",(function(t){if(e(t.target).closest(".mbr-arrow").length)try{var o=e(t.target).closest(".mbr-arrow").find("a");if(o[0].href&&o[0].href.indexOf("#next")>=0){var n=o.closest(".app-component").next();if(n.length){var r=n.offset();o.closest("body").stop().animate({scrollTop:r.top},800,"linear")}}}catch(t){console.log(t)}}))}}})}(jQuery,mbrApp);