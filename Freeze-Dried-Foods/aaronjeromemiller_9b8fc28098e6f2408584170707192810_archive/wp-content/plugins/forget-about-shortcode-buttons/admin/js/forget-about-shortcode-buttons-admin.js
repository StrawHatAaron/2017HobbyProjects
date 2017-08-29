function addFascToEditor(t){function a(t){t.stopPropagation()}function e(){var a=tinymce.activeEditor.dom.select(".fasc-button"),e=!1;jQuery(a).each(function(){if(jQuery(this).is("[data-fasc-style]")){var a=jQuery(this).attr("data-fasc-style").replace(/\s+/,""),o="";jQuery(this).is("[style]")&&(o=jQuery(this).attr("style").replace(/\s+/,"")),a!=o&&(jQuery(this).attr("style",jQuery(this).attr("data-fasc-style")),t.nodeChanged(),e=!0)}})}function o(a){t.undoManager.transact(function(){t.dom.remove(a),c(),t.focus()})}function n(a){var e=t.dom;a&&(a!==d&&(t.getBody().focus(),c(),d=a,e.setAttrib(a,"data-mce-selected",1)),t.nodeChanged())}function c(){var e=t.dom;d&&(e.unbind(d,"beforedeactivate focusin focusout click mouseup",a),e.setAttrib(d,"data-mce-selected",null)),d=null}function i(a){var e=l(a),o=e.find(".fasc-button");o.attr("data-fasc-temp",null),o.attr("data-fasc-style",null);var n=1;return l(o).each(function(){var t=l(this);n++;var a=t.attr("data-fasc-href");t.attr("href",a),t.attr("data-fasc-href",null),t.attr("data-fasc-id",null)}),t.dom.getOuterHTML(e)}function s(){for(var a=t.dom.select(".fasc-button"),e=0;e<a.length;e++){var o=a[e],n=t.dom.getAttrib(o,"href"),c=t.dom.getAttrib(o,"data-fasc-href"),i=t.dom.getAttrib(o,"style");""==c&&""!=n&&(t.dom.setAttrib(o,"data-fasc-href",n),t.dom.setAttrib(o,"href",null)),t.dom.setAttrib(o,"data-fasc-style",i)}}function r(t,a,e,o,i){if(void 0===i)var i="";"function"!=typeof o&&(o=function(o,i){var s=t.$(o);e?t.$(a).replaceWith(s):t.selection.setContent(o);t.$("[data-fasc-id='"+i+"']");c(),t.focus(),t.nodeChanged(),n(t.dom.select("a[data-fasc-id='"+i+"']")[0]),t.undoManager.add()}),wp.mce.fascpopup.open(a,"button",o,e,i)}var d,f,p,u,l=t.$,v=(tinymce.Env,tinymce.util.VK,tinymce.dom.TreeWalker,!0),h=function(){return!1};/iPad|iPod|iPhone/.test(navigator.userAgent);if(t.addButton("button_fasc_insert_button",{title:"Insert Button",icon:"fascbutton-ico",onclick:function(){t.execCommand("popup_insert_fasc_button",0,0)}}),t.addCommand("popup_insert_fasc_button",function(a,e){var o=!1;t.dom.hasClass(t.selection.getNode(),"fasc-button")&&(o=!0);var n=t.selection.getContent({format:"text"});r(t,t.selection.getNode(),o,{},n)}),"undefined"==typeof wp||!wp.mce)return{getView:h};t.on("SetContent",function(){s()}),t.on("init",function(){t.on("dblClick",function(a){if(t.dom.hasClass(a.target,"fasc-button"))return a.preventDefault(),r(t,a.target,!0),!1},!0),t.addCommand("popup_insert_fasc_button",function(a,e){var o=!1;t.dom.hasClass(t.selection.getNode(),"fasc-button")&&(o=!0);var n=t.selection.getContent({format:"text"});r(t,t.selection.getNode(),o,{},n)});var a=!1;t.selection,window.MutationObserver||window.WebKitMutationObserver;t.dom.bind(t.getDoc(),"touchmove",function(){a=!0}),t.on("mousedown mouseup click touchend",function(e){v=!1,t.dom.hasClass(e.target,"fasc-button")?"touchend"===e.type&&a?a=!1:n(e.target):"touchend"!==e.type&&"mousedown"!==e.type||c(),"touchend"===e.type&&a&&(a=!1)},!0)}),t.on("PreProcess",function(t){},!0),t.on("hide",function(){c()}),t.on("PostProcess",function(a){a.content&&t.$("<div>"+a.content+"</div>").clone().find(".fasc-button").length>0&&(a.content=i(a.content))}),t.on("keydown",function(a){if(c(),32==a.keyCode&&t.dom.hasClass(t.selection.getNode(),"fasc-button")&&t.selection.getRng().startOffset==l(t.selection.getNode()).text().length){var e=tinymce.DOM.uniqueId(),o=t.dom.create("span",{id:e},"&nbsp;");t.dom.insertAfter(o,t.selection.getNode());var n=t.dom.select("span#"+e);return t.selection.select(n[0]),t.selection.collapse(0),t.dom.setAttrib(e,"id",""),!1}}),t.on("focus",function(){p=!0,v=!1}),t.on("blur",function(){p=!1}),t.on("NodeChange",function(a){t.dom,t.dom.select(".fascview-wrap"),a.element.className;f=!1,clearInterval(void 0)}),t.on("BeforeExecCommand",function(){t.selection.getNode()}),t.on("ExecCommand",function(){}),t.on("ResolveName",function(t){}),t.on("PastePostProcess",function(){e()}),t.addButton("fasc_view_edit",{tooltip:"Edit ",icon:"dashicon dashicons-edit",onclick:function(){d&&r(t,d,!0)}}),t.addButton("fasc_view_remove",{tooltip:"Remove",icon:"dashicon dashicons-no",onclick:function(){d&&o(d)}}),t.once("preinit",function(){t.wp&&t.wp._createToolbar&&(u=t.wp._createToolbar(["fasc_view_edit","fasc_view_remove"]))}),t.on("wptoolbar",function(t){d&&(t.element=d,t.toolbar=u)}),t.wp=t.wp||{}}!function(t){"use strict";function a(t){if(-1==t.search("rgb"))return t;function a(t){return("0"+parseInt(t).toString(16)).slice(-2)}return"#"+a((t=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/))[1])+a(t[2])+a(t[3])}jQuery(document).on("tinymce-editor-setup",function(t,a){jQuery("body").hasClass("widgets-php")&&(a.settings.toolbar1+=",button_fasc_insert_button",a.on("PreInit",function(t){a.dom.loadCSS(Fasc.plugin_url+"css/forget-about-shortcode-buttons-mce.css")}),addFascToEditor(a))}),wp.mce=wp.mce||{};var e={};e.button={content_id:"fasc-popup-edit-button",is_editing:!1,$node:{},init:function(t,a,e,o){this.$popup=a,this.$preview_area=a.find(".preview-button-area .centered-button"),this.is_editing=e,this.$node=jQuery(t),this.setupControls(a),this.setupIcons(t,a),this.setupTabs(a),this.is_editing?this.setSettingsFromNode(t,a,!0):this.initEmptyTemplate(t,a,o),this.updatePreview()},setupIcons:function(a,e){var o=this,n=(t(a),e.find('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"]'));n.find("#fasc-popup-icon-type-select").change(function(a){t(this).val();n.find(".ico-grid .grid-container").removeClass("ico-screen-active").hide(),n.find("#"+t(this).val()).addClass("ico-screen-active").show()}),n.find(".ico-grid div").click(function(a){a.preventDefault();var e=n.find(".fasc-ico-position:checked").val();return n.find(".ico-grid div").removeClass("active"),t(this).addClass("active"),"none"!=e&&""!=e||(e="before"),n.find(".fasc-ico-position").removeAttr("checked"),n.find(".fasc-ico-position").prop("checked",!1),n.find('.fasc-ico-position[value="'+e+'"]').prop("checked",!0),o.updatePreview(),!1}),n.find(".fasc-ico-position").change(function(a){if(n.find(".fasc-ico-position").removeAttr("checked"),n.find(".fasc-ico-position").prop("checked",!1),t(this).prop("checked",!0),"none"==t(this).val())n.find(".ico-grid div div:not(.clear)").removeClass("active");else if(n.find(".ico-grid div.active").length<1){n.find(".ico-grid .grid-container.ico-screen-active").length>0?t(n.find(".ico-grid .grid-container.ico-screen-active div:not(.clear)").get(0)).addClass("active"):t(n.find(".ico-grid .grid-container:first-child div:not(.clear)").get(0)).addClass("active")}o.updatePreview()}),t('.fasc-ajax-content select, .fasc-ajax-content input[type="checkbox"]').change(function(){o.updatePreview()}),t('.fasc-ajax-content input[type="text"]').keyup(function(){o.updatePreview()}),t('.fasc-ajax-content input[type="text"]').keyup(function(){o.updatePreview()}),t.get(Fasc.ajax_url+"?action=fasc_buttons&load=get_buttons",function(t){o.parseTemplateButtons(t)},"json"),t(".fasc-save-btn").click(function(){var a={};return a.button=o.createButtonHtml({isSaving:!0}),t.post(Fasc.ajax_url+"?action=fasc_buttons&load=save_button",a,function(t){o.parseTemplateButtons(t)},"json"),o.$tabs.find("li").removeClass("active"),o.$tabs.find("li[data-fasc-tab='3']").addClass("active"),o.loadTab(3,e),!1}),o.updatePreview()},parseTemplateButtons:function(a){var e=this,o=t(".saved-buttons-tab .container-grid ul");o.empty();var n="",c=0;t.each(a,function(e){n="";var i=t(a[e].html),s=i.css("background-color"),r=i.css("color");n+="<li data-index='"+c+"'>",n+='<div class="wrap">',n+='<div class="full_button">'+a[e].html+"</div>",n+='<div class="name"><span>'+a[e].name+'</span> <a class="dashicons dashicons-edit fasc-button-edit"></a><a class="fa fa-check fasc-button-update" data-action="update"></a><a class="dashicons dashicons-no-alt fasc-button-update" data-action="remove"></a></div>',n+='<div class="col fasc-button-remove dashicons dashicons-no-alt"></div>',n+='<div class="col" style="background-color:'+s+';"></div>',n+='<div class="col" style="background-color:'+r+';"></div>',n+='<div class="clear"></div>',n+="</div>",n+="</li>",o.append(n),c++});var i=function(a){var e=a.text(),o=t("<input>",{val:e,type:"text",width:"170px","data-orig-text":e});a.replaceWith(o),o.select()},s=function(a){var e=t("<span>",{text:a.attr("data-orig-text")});a.replaceWith(e),e.on("click",i)},r=function(a){var e=t("<span>",{text:a.val()});a.replaceWith(e),e.on("click",i)};t(".fasc-button-edit").click(function(){return t(this).hide(),t(this).parent().find(".fasc-button-update").show().css("display","inline-block"),i(t(this).parent().find("span")),!1}),t(".fasc-button-remove").click(function(a){a.preventDefault();var o=t(this).closest("li").attr("data-index");return t.get(Fasc.ajax_url+"?action=fasc_buttons&load=remove_button&index="+o,function(t){e.parseTemplateButtons(t)},"json"),!1}),t(".fasc-button-update").click(function(){var a=t(this);if(t(this).parent().find(".fasc-button-update").hide(),t(this).parent().find(".fasc-button-edit").show(),"remove"==a.attr("data-action"))s(t(this).parent().find("input"));else{var o=t(this).closest("li").attr("data-index"),n=encodeURIComponent(t(this).parent().find("input").val());t.get(Fasc.ajax_url+"?action=fasc_buttons&load=update_button&index="+o+"&name="+n,function(t){e.parseTemplateButtons(t)},"json"),r(t(this).parent().find("input"))}return!1});var d=t(".saved-buttons-tab .container-grid li .wrap");d.on("click",function(){d.removeClass("active"),t(this).addClass("active");var a=t(this).find(".full_button a.fasc-button");e.loadButtonTemplate(a,!0),e.updatePreview()})},loadButtonTemplate:function(e,o){var n=this,c=e.attr("target");jQuery(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!1),void 0!==c&&"_blank"==c&&jQuery(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!0);var i=e.attr("rel");if(jQuery(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!1),void 0!==i&&-1!==i.indexOf("nofollow")&&jQuery(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!0),void 0===o){var s=e.text();jQuery(".fasc-ajax-content input#fasc-popup-button-text").val(s)}var r=a(e.css("color"));jQuery("#fasc-popup-text-color").val(r),n.refreshMiniColors(jQuery("#fasc-popup-text-color"),r,n.$popup);var d=a(e.css("background-color"));jQuery("#fasc-popup-button-color").val(d),n.refreshMiniColors(jQuery("#fasc-popup-button-color"),d,n.$popup);var f=n.$popup.find('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"]');f.find(".ico-grid > div > div").removeClass("active");var p=e.attr("class").split(/\s+/);n.$popup.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active","0"),n.$popup.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active","0"),n.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active","0");for(var u=0;u<p.length;u++)if("fasc-type"==p[u].substring(0,9)){var l=p[u];(e.hasClass("fasc-rounded-medium")||e.hasClass("rounded"))&&(l+=" fasc-rounded-medium"),jQuery("#fasc-popup-button-type option").prop("selected",!1),jQuery('#fasc-popup-button-type option[value="'+l+'"]').prop("selected",!0),t("#fasc-popup-button-type").val(l)}else if("fasc-style"==p[u].substring(0,10))"fasc-style-bold"==p[u]?n.$popup.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active","1"):"fasc-style-italic"==p[u]?n.$popup.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active","1"):"fasc-style-strikethrough"==p[u]&&n.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active","1");else if("fasc-size"==p[u].substring(0,9)){var v=p[u];jQuery("#fasc-popup-button-size option").prop("selected",!1),jQuery('#fasc-popup-button-size option[value="'+v+'"]').prop("selected",!0),t("#button-size").val(v)}else if("dashicons"==p[u].substring(0,9)){f.find(".ico-grid .grid-container").removeClass("ico-screen-active"),f.find("#dashicons-grid").addClass("ico-screen-active"),n.$popup.find("#fasc-popup-icon-type-select").val("dashicons-grid"),n.$popup.find("#fasc-popup-icon-type-select").trigger("change");var h=p[u];n.$popup.find(".ico-grid ."+h).addClass("active")}else if("fa-"==p[u].substring(0,3)){f.find(".ico-grid .grid-container").removeClass("ico-screen-active");var b=f.find(".ico-grid").find("."+p[u]).parent().attr("id");f.find("#"+b).addClass("ico-screen-active"),n.$popup.find("#fasc-popup-icon-type-select").val(b),n.$popup.find("#fasc-popup-icon-type-select").trigger("change"),n.$popup.find(".ico-grid ."+p[u]).addClass("active")}e.hasClass("fasc-ico-before")||e.hasClass("fasc-ico-after")?e.hasClass("fasc-ico-before")?(f.find(".fasc-ico-position").prop("checked",!1),f.find('.fasc-ico-position[value="before"]').prop("checked",!0)):e.hasClass("fasc-ico-after")&&(f.find(".fasc-ico-position").prop("checked",!1),f.find('.fasc-ico-position[value="after"]').prop("checked",!0)):(f.find(".fasc-ico-position").prop("checked",!1),f.find('.fasc-ico-position[value="none"]').prop("checked",!0))},setupControls:function(a){var e=this;a.find('.fasc-ajax-content select, .fasc-ajax-content input[type="checkbox"]').change(function(){e.updatePreview()}),a.find('.fasc-ajax-content input[type="text"]').keyup(function(){e.updatePreview()}),a.find('.fasc-ajax-content input[type="text"]').keyup(function(){e.updatePreview()});var o=a.find("[data-fasc-action='popup-colorpicker']");o.click(function(e){var n=t(this),c=n.attr("data-fasc-button-active");o.attr("data-fasc-button-active","");var i=1-c;n.attr("data-fasc-button-active",i);var s=n.data("fasc-action-target"),r=a.find('[data-fasc-colorpicker-name="'+s+'"]'),d=a.find("[data-fasc-colorpicker-name]").not('[data-fasc-colorpicker-name="'+s+'"]'),f=n.position();d.stop(!0,!0).hide(),r.stop(!0,!0).fadeToggle(100),r.css("left",Math.round(f.left)+"px"),r.css("top",Math.round(f.top+n.parent().outerHeight())+"px")}),a.on("click",function(e){0==t(e.target).closest("[data-fasc-action='popup-colorpicker'], .fasc-popup-colorpicker-container").length&&(a.find("[data-fasc-colorpicker-name]").hide(),o.attr("data-fasc-button-active",""))}),a.find(".fasc-mce-button-toggle").on("click",function(){var a=t(this),o=1-a.attr("data-fasc-button-active");a.attr("data-fasc-button-active",o),e.updatePreview()}),e.updatePreview()},updatePreview:function(){this.$preview_area.html(this.createButtonHtml()),this.$preview_area.find(".fasc-button").off(),this.$preview_area.find(".fasc-button").click(function(t){t.preventDefault(),t.stopPropagation()})},createButtonHtml:function(a){var e={content:"",isSaving:!1,hasID:!1};t.extend(e,a);var o=jQuery(".fasc-ajax-content input#fasc-popup-button-url").val(),n=jQuery(".fasc-ajax-content input#fasc-popup-button-text").val(),c=jQuery(".fasc-ajax-content select#fasc-popup-button-size").val(),i=jQuery(".fasc-ajax-content input#fasc-popup-button-color").val(),s=jQuery(".fasc-ajax-content input#fasc-popup-text-color").val(),r=jQuery(".fasc-ajax-content select#fasc-popup-button-type").val(),d=(jQuery(".fasc-ajax-content select#fasc-popup-button-align").val(),jQuery(".fasc-ajax-content input#fasc-popup-new-window").prop("checked")),f=jQuery(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked"),p="",u="",l="",v="";1==d&&(l=' target="_blank"'),1==f&&(v=' rel="nofollow"'),r&&""!=r&&(p=" "+r),c&&""!=c&&(u=" "+c);var h=t(t('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"] .ico-grid div.active').get(0)),b=t('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"] .fasc-ico-position:checked').val(),g="";if(1==h.length){var m=h.attr("class").split(" "),y=0,k="dashicons";for(y=0;y<m.length;y++)"active"!=m[y]&&"fa"!=m[y]&&"dashicons"!=m[y]&&(g+=" "+m[y]),"fa"==m[y]&&(k="fontawesome");y>0&&("before"!=b&&"after"!=b||(g="fontawesome"==k?" ico-fa fasc-ico-"+b+g:" fasc-ico-"+b+g))}var x="";1==this.$popup.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active")&&(x+=" fasc-style-bold"),1==this.$popup.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active")&&(x+=" fasc-style-italic");var w=this.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active");1==w&&(x+=" fasc-style-strikethrough");this.$popup.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active");1==w&&(x+=" fasc-style-strikethrough");var j="";e.hasID&&(j=' data-fasc-id="fasc-button-tid-'+(new Date).getTime()+'"');return e.isSaving?'<a class="fasc-button'+u+p+g+x+'"'+l+v+' style="background-color:'+i+";color:"+s+';" data-fasc-style="background-color:'+i+";color:"+s+';"'+j+"></a>":'<a data-fasc-href="'+o+'" class="fasc-button'+u+p+g+x+'"'+l+v+' style="background-color:'+i+";color:"+s+';" data-fasc-style="background-color:'+i+";color:"+s+';"'+j+">"+n+"</a>"},setupTabs:function(a){var e=this;this.$tabs=a.find(".tab-header");var o=this.$tabs.find("li");this.$tabs.find("li a");o.click(function(){var n=t(this),c=n.attr("data-fasc-tab");return o.removeClass("active"),n.addClass("active"),e.loadTab(c,a),!1})},loadTab:function(a,e){e.find(".fasc-ajax-content .fasc-tab-content").hide(),e.find(".fasc-ajax-content .fasc-tab-content[data-fasc-tab="+a+"]").show(),this.loadTabContent(a),t(".ico-grid .grid-container div.active").length>0&&t(".ico-grid").scrollTop(t(".ico-grid .grid-container div.active").position().top-5)},loadTabContent:function(t,a){},refreshMiniColors:function(a,e,o){var n=this;jQuery(".preview-button-area .centered-button");a.is_text_input=!1,a.minicolors({inline:!0,opacity:!1,showSpeed:0,hideSpeed:0,textfield:!0,change:function(e,c){var i=a.val(),s=a.parent().parent().find(".fasc-popup-color-input");1==a.is_text_input?a.is_text_input=!1:s.val(i),s.off("input"),s.on("input",function(){var e=t(this).val();a.is_text_input=!0,a.minicolors("value",e)});var r=t("#fasc-popup-button-color").val(),d=t("#fasc-popup-text-color").val();o.find(".fasc-ico-fg .fg-panel").css("background-color",d),o.find(".fasc-ico-bg .bg-panel").css("background-color",r),n.updatePreview()}}),void 0!==e&&a.minicolors("value",e)},initEmptyTemplate:function(t,e,o){jQuery("#fasc-popup-button-text").val(o);var n=e.find(".preview-button-area .centered-button .fasc-button");this.refreshMiniColors(e.find("#fasc-popup-text-color"),a(n.css("color")),e),this.refreshMiniColors(e.find("#fasc-popup-button-color"),a(n.css("background-color")),e)},setSettingsFromNode:function(e,o,n){var c=t(e),i=c.attr("data-fasc-href");o.find(".fasc-ajax-content input#fasc-popup-button-url").val(i);var s=c.attr("target");o.find(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!1),void 0!==s&&"_blank"==s&&o.find(".fasc-ajax-content input#fasc-popup-new-window").prop("checked",!0);var r=c.attr("rel");o.find(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!1),void 0!==r&&-1!==r.indexOf("nofollow")&&o.find(".fasc-ajax-content input#fasc-popup-nofollow").prop("checked",!0);var d=c.text();o.find(".fasc-ajax-content input#fasc-popup-button-text").val(d);var f=a(c.css("color"));o.find("#fasc-popup-text-color").val(f),o.find(".fasc-ico-fg .fg-panel").css("background-color",f),this.refreshMiniColors(o.find("#fasc-popup-text-color"),f,o);var p=a(c.css("background-color"));o.find("#fasc-popup-button-color").val(p),o.find(".fasc-ico-bg .bg-panel").css("background-color",p),this.refreshMiniColors(o.find("#fasc-popup-button-color"),p,o);var u=o.find('.fasc-ajax-content .fasc-tab-content[data-fasc-tab="2"]'),l=c.attr("class").split(/\s+/);u.find(".ico-grid > div > div").removeClass("active");for(var v=0;v<l.length;v++)if("fasc-type"==l[v].substring(0,9)){var h=l[v];(c.hasClass("fasc-rounded-medium")||c.hasClass("rounded"))&&(h+=" fasc-rounded-medium"),o.find("#fasc-popup-button-type option").prop("selected",!1),o.find('#fasc-popup-button-type option[value="'+h+'"]').prop("selected",!0),o.find("#fasc-popup-button-type").val(h)}else if("fasc-style"==l[v].substring(0,10))"fasc-style-bold"==l[v]?o.find(".fasc-mce-button[data-fasc-action='bold']").attr("data-fasc-button-active","1"):"fasc-style-italic"==l[v]?o.find(".fasc-mce-button[data-fasc-action='italic']").attr("data-fasc-button-active","1"):"fasc-style-strikethrough"==l[v]&&o.find(".fasc-mce-button[data-fasc-action='strikethrough']").attr("data-fasc-button-active","1");else if("fasc-size"==l[v].substring(0,9)){var b=l[v];o.find("#fasc-popup-button-size option").prop("selected",!1),o.find('#fasc-popup-button-size option[value="'+b+'"]').prop("selected",!0),o.find("#fasc-popup-button-size").val(b)}else if("dashicons"==l[v].substring(0,9)){u.find(".ico-grid .grid-container").removeClass("ico-screen-active"),u.find("#dashicons-grid").addClass("ico-screen-active"),o.find("#fasc-popup-icon-type-select").val("dashicons-grid"),o.find("#fasc-popup-icon-type-select").trigger("change");var g=l[v];o.find(".ico-grid ."+g).addClass("active")}else if("fa-"==l[v].substring(0,3)){u.find(".ico-grid .grid-container").removeClass("ico-screen-active");var m=u.find(".ico-grid").find("."+l[v]).parent().attr("id");u.find("#"+m).addClass("ico-screen-active"),o.find("#fasc-popup-icon-type-select").val(m),o.find("#fasc-popup-icon-type-select").trigger("change"),o.find(".ico-grid ."+l[v]).addClass("active")}c.hasClass("fasc-ico-before")||c.hasClass("fasc-ico-after")?c.hasClass("fasc-ico-before")?(u.find(".fasc-ico-position").prop("checked",!1),u.find('.fasc-ico-position[value="before"]').prop("checked",!0)):c.hasClass("fasc-ico-after")&&(u.find(".fasc-ico-position").prop("checked",!1),u.find('.fasc-ico-position[value="after"]').prop("checked",!0)):(u.find(".fasc-ico-position").prop("checked",!1),u.find('.fasc-ico-position[value="none"]').prop("checked",!0))}},wp.mce.fascpopup={open:function(a,o,n,c,i){this.type=o,this.templateID=o,this.is_editing=c;var s=e[o].content_id,r=jQuery("<div/>",{class:"fasc-thickbox-overlay"}).appendTo("body"),d=t("#fasc-popup-template").clone();d.removeAttr("id"),d.addClass(s);var f=t("#"+s),p=f.clone();f.remove();var u=d.find(".fasc-thickbox-content"),l=d.find(".fasc-thickbox-title-inner"),v=d.find(".fasc-thickbox-action-right");this.initTemplate(d,p,u,l,v),d.insertAfter(r),e[o].init(a,d,this.is_editing,i),d.show(),this.initEvents(a,d,v,u,p,n)},initTemplate:function(t,a,e,o,n){e.html(a.html());var c=a.attr("data-fasc-title"),i=a.attr("data-fasc-submit-label"),s=a.attr("data-fasc-width"),r=a.attr("data-fasc-height");o.text(c),n.text(i),t.css("max-width",s),t.css("max-height",r)},initEvents:function(a,o,n,c,i,s){var r=this;o.find("label").click(function(){}),o.find(".fasc-close-ajax-window").click(function(){r.removePopup(o,i)}),t(".fasc-thickbox-overlay").on("click",function(t){r.removePopup(o,i)}),n.click(function(t){t.preventDefault(),t.stopImmediatePropagation();var a=e[r.type].createButtonHtml({isSaving:!1,hasID:!0}),n=jQuery(a).attr("data-fasc-id");return s(a,n),r.removePopup(o,i),!1});var d=i.attr("data-fasc-width"),f=i.attr("data-fasc-height");t(window).resize(_.debounce(function(){r.centerPopup(o)},100)),r.centerPopup(o,d,f)},removePopup:function(a,o){var n=this;t(".fasc-thickbox-overlay").remove(),a.remove(),t("body").append(o),o.attr("id",e[n.type].content_id)},centerPopup:function(a,e,o){var n=a.find(".fasc-thickbox-header"),c=a.find(".fasc-thickbox-footer"),i=a.find(".fasc-thickbox-content"),s=(t(window),-a.height()/2),r=-a.width()/2;a.css("position","fixed").css({"margin-left":r+"px","margin-top":s+"px",left:"50%",top:"50%"}),i.hide();var d=a.outerHeight();d-=n.outerHeight(),d-=c.outerHeight(),i.height(d),i.show()}}}(jQuery);