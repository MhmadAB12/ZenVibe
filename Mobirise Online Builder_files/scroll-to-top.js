!function(o,l){l.regExtension({name:"scrollToTop",global:{scrollToTop:function(){l.$template.find("body").append('<div class="scrollToTop_wraper"><div id="scrollToTop" class="scrollToTop mbr-arrow-up"><a style="text-align: center;"><i'+("mobirise3"===l.theme.name?' class="mbr-arrow-up-icon"':"")+"></i></a></div></div>");var e=l.$template.find("#scrollToTop"),r=l.$template.find("body,html");l.$template.scroll((function(){o(this).scrollTop()>0?e.fadeIn():e.fadeOut()})),e.click((function(){return r.animate({scrollTop:0},400),!1}))}()},events:{load:function(){this.addFilter("publishHTML",(function(o){return l.getThemeSettings("isScrollToTopButton")?o.replace("</body>",' <div id="scrollToTop" class="scrollToTop mbr-arrow-up"><a style="text-align: center;"><i'+("mobirise3"===l.theme.name?' class="mbr-arrow-up-icon"':"")+"></i></a></div>\n  </body>"):o}))}}})}(jQuery,mbrApp);