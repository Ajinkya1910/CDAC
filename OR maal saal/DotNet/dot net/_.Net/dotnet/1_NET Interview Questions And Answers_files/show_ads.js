(function(){
var J={google_ad_channel:"channel",google_ad_host:"host",google_ad_region:"region",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",google_color_url:"color_url",google_contents:"contents",google_country:"gl",
google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_gl:"gl",google_hints:"hints",google_kw:"kw",google_kw_type:"kw_type",google_language:"hl",
google_referrer_url:"ref",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_targeting:"targeting",google_ui_features:"ui"},E={google_ad_format:"format",google_ad_output:"output",google_ad_override:"google_ad_override",google_ad_slot:"slotname",google_analytics_webpropids:"ga_wpids",google_correlator:"correlator",google_cpa_choice:"cpa_choice",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",google_max_radlink_len:"max_radlink_len",
google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_page_location:"loc",google_page_url:"url",google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"};function C(b){return J[b]||E[b]||null}var R=document;function U(){var b=R.cookie,a=Math.round((new Date).getTime()/1000),d=b.indexOf("__utma=")>-1,f=b.indexOf("__utmb=")>-1,c=b.indexOf("__utmc=")>
-1,e,g={};if(d){e=b.split("__utma=")[1].split(";")[0].split(".");g.sid=(!f||!c?a:e[4])+"";g.vid=e[1]+"."+e[2];g.from_cookie=true}else{g.sid=window&&window.gaGlobal&&window.gaGlobal.sid?window.gaGlobal.sid:a+"";g.vid=window&&window.gaGlobal&&window.gaGlobal.vid?window.gaGlobal.vid:Math.round(Math.random()*2147483647)+"."+a;g.from_cookie=false}g.hid=window&&window.gaGlobal&&window.gaGlobal.hid?window.gaGlobal.hid:Math.round(Math.random()*2147483647);window.gaGlobal=g;return g}(function(){function b(){}
b.prototype.l=function(f){var c=f.indexOf("#")+1;return c?f.substr(c):""};b.prototype.n=function(f){return/[&<>\"]/.test(f)?f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;"):f};b.prototype.b=function(f){var c="<iframe";for(var e in f){c+=" "+e+'="'+this.n(f[e])+'"'}return c+"></iframe>"};b.prototype.m=function(f,c){try{return f.frames[c]}catch(e){return null}};b.prototype.e=function(f){var c=document.createElement("iframe");for(var e in f){c.setAttribute(e,
f[e])}return c};b.prototype.i=function(f,c){var e=this;setTimeout(function(){document.body.appendChild(e.e({id:f,name:f,src:c,width:0,height:0,frameBorder:0}))},0)};b.prototype.r=function(f,c){var e=this;document.write(e.b({id:f,name:f,src:c,width:0,height:0,frameBorder:0}))};b.prototype.g=function(f,c){var e=[],g=f.length,l=0;while(l<g){var j=f.substr(l,c),k=j.length;if(l+k<g){for(var i=1;i<3;++i){if(j.charAt(k-i)=="%"){j=j.substr(0,k-=i)}}}e.push(j);l+=k}return e};b.prototype.a=function(f,c,e){if(!window[f]){var g=
window[f]=new c;for(var l=0;l<e.length;++l){g[e[l][0]]=e[l][1]}}};var a=b.prototype,d=[["getHash",a.l],["htmlEscape",a.n],["makeIframeTag",a.b],["getIframe",a.m],["makeIframeNode",a.e],["appendHiddenIframe",a.i],["writeHiddenIframe",a.r],["splitURIComponent",a.g],["exportSingleton",a.a],["MAX_URL_LENGTH",4095],["IDI_DEFAULT_POLLING_INTERVAL",1000]];b.prototype.a("IDICommon",b,d)})();(function(){function b(c,e){for(var g in e){c[g]=e[g]}}function a(){var c=this;c.s=window.location.href.replace(/([^:\/])\/.*$/,
"$1/robots.txt");c.t="";c.k={};c.c={};c.f={};c.u={};c.o={}}a.prototype.w=function(c,e){var g=this,l=g.c[c];if(isNaN(l)){throw new Error("Invalid module id");}else{var j=g.d(g.u[c]),k=encodeURIComponent(e)+"$",i=IDICommon.MAX_URL_LENGTH-1-j.length,p=IDICommon.g(k,i),n=p.length;for(var q=0;q<n;++q){IDICommon.i(c+"_"+(l+q),j+"#"+p[q])}g.c[c]+=n}};a.prototype.p=function(c,e,g){var l=this;l.h(c);l.o[c]=window.setInterval(function(){l.v(c,e)},typeof g=="object"&&g.pollingInterval||IDICommon.IDI_DEFAULT_POLLING_INTERVAL)};
a.prototype.h=function(c){var e=this;window.clearInterval(e.o[c]);e.o[c]=0};a.prototype.x=function(c){this.s=c};a.prototype.q=function(c){this.t=c};a.prototype.d=function(c){return this.t||c.replace(/([^:\/]\/).*$/,"$1ig/idi_relay")};a.prototype.v=function(c,e){var g=this,l=window.frames[c];if(l){var j;while(j=IDICommon.m(l,c+"_"+g.k[c])){try{if(j.location.href=="about:blank"){break}}catch(k){break}g.f[c]+=IDICommon.l(j.location.href);++g.k[c]}var i=g.f[c].split("$"),p=i.length-1;if(p>0){g.f[c]=i[p];
for(var n=0;n<p;++n){e(decodeURIComponent(i[n]),c)}}}};a.prototype.j=function(c,e,g,l,j){var k=this,i={frameBorder:0,scrolling:"no"},p,n,q,z,s;if(typeof j=="object"){p=j.iframeAttrs;n=j.callback;q=j.userPrefs;z=j.pollingInterval;s=j.parentDivId}if(typeof p=="object"){b(i,p)}b(i,{id:e,name:e,src:c,width:g,height:l});k.k[e]=0;k.c[e]=0;k.f[e]="";k.u[e]=c;var t=[];if(typeof q=="object"){for(var r in q){t.push(encodeURIComponent(r)+"="+encodeURIComponent(q[r]))}}if(typeof n=="function"){t.push("idi_hr="+
encodeURIComponent(k.s));k.p(e,n,j)}if(t.length){var u=t.join("&");if(i.src.length+1+u.length>IDICommon.MAX_URL_LENGTH){u+="$";var F=k.d(c),O=IDICommon.MAX_URL_LENGTH-1-F.length,G=IDICommon.g(u,O),H=G.length;for(var r=0;r<H;++r){var B=e+"_"+r,I=F+"#"+G[r];if(s){var y=document.getElementById(s);y.innerHTML=y.innerHTML+k.e({id:B,name:B,src:I,width:0,height:0,frameBorder:0})}else{IDICommon.r(B,I)}}k.c[e]+=H;u=""}i.src+="#"+u}if(s){var y=document.getElementById(s);y.innerHTML=y.innerHTML+IDICommon.b(i)}else{document.write(IDICommon.b(i))}};
var d=a.prototype,f=[["setHostRelayUrl",d.x],["setModuleRelayUrl",d.q],["getModuleRelayUrl",d.d],["createModule",d.j],["postMessageToModule",d.w],["registerListener",d.p],["unregisterListener",d.h]];IDICommon.a("IDIHost",a,f)})();function w(b){return b!=null?'"'+b+'"':'""'}function S(b){if(typeof encodeURIComponent=="function"){return encodeURIComponent(b)}else{return escape(b)}}function m(b,a){if(b&&a){window.google_ad_url+="&"+b+"="+a}}function h(b){var a=window,d=C(b),f=a[b];m(d,f)}function v(b,
a){if(a){m(b,S(a))}}function o(b){var a=window,d=C(b),f=a[b];v(d,f)}function x(b,a){var d=window,f=C(b),c=d[b];if(f&&c&&typeof c=="object"){c=c[a%c.length]}m(f,c)}function V(b,a){var d=b.screen,f=navigator.javaEnabled(),c=-a.getTimezoneOffset();if(d){m("u_h",d.height);m("u_w",d.width);m("u_ah",d.availHeight);m("u_aw",d.availWidth);m("u_cd",d.colorDepth)}m("u_tz",c);m("u_his",history.length);m("u_java",f);if(navigator.plugins){m("u_nplug",navigator.plugins.length)}if(navigator.mimeTypes){m("u_nmime",
navigator.mimeTypes.length)}}function D(b){if(b){b=b.toLowerCase();if(b.substring(0,3)!="ca-"){b="ca-"+b}}return b}function ba(b,a){var d=document.getElementById(b);d.style.height=a+"px"}function W(b,a,d){window.clearTimeout(d);var f=/^google_resize_flash_ad_idi\((\d+)\)/,c=b.match(f);if(c){ba(a,c[1])}}function ca(b,a,d,f){d=d.substring(0,2000);d=d.replace(/%\w?$/,"");if(b.google_ad_output=="js"&&(b.google_ad_request_done||b.google_radlink_request_done)){a.write('<script language="JavaScript1.1" src='+
w(d)+"><\/script>")}else if(b.google_ad_output=="html"){if(b.name!="google_ads_frame"){if(f!=null){a.write('<div id="'+f+'">')}if(X(b.google_ad_output,b.google_ad_client)){IDIHost.q("http://pagead2.googlesyndication.com/pagead/idi_relay.html");var c="google_inline_div"+b.google_num_ad_slots,e="<div id="+w(c)+' style="position:relative;"></div><div style="position:relative;width:'+b.google_ad_width+"px;height:"+b.google_ad_height+'px;z-index:-1"></div>';a.write(e);var g="google_frame"+b.google_num_ad_slots,
l=b.setTimeout(function(){IDIHost.h(g)},5000);IDIHost.j(d,g,b.google_ad_width,b.google_ad_height,{callback:function(j,k){W(j,k,l)},pollingInterval:500,iframeAttrs:{style:"position: absolute;left:0px",marginWidth:"0",marginHeight:"0",vspace:"0",hspace:"0",allowTransparency:"true"},parentDivId:c})}else{a.write('<iframe name="google_ads_frame" width='+w(b.google_ad_width)+" height="+w(b.google_ad_height)+" frameborder="+w(b.google_ad_frameborder)+" src="+w(d)+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">');
a.write("</iframe>")}if(f!=null){a.write("</div>")}}}else if(b.google_ad_output=="textlink"){a.write('<script language="JavaScript1.1" src='+w(d)+"><\/script>")}}function aa(b){for(var a in J){b[a]=null}for(var a in E){b[a]=null}}function P(){var b=null,a=window,d=document,f=new Date,c=f.getTime(),e=a.google_ad_format;if(a.google_cpa_choice!=b){a.google_ad_url="http://pagead2.googlesyndication.com/cpa/ads?";a.google_ad_url+="client="+escape(D(a.google_ad_client));a.google_ad_region="_google_cpa_region_";
h("google_cpa_choice");if(typeof d.characterSet!="undefined"){v("oe",d.characterSet)}else if(typeof d.charset!="undefined"){v("oe",d.charset)}}else{a.google_ad_url="http://pagead2.googlesyndication.com/pagead/ads?";a.google_ad_url+="client="+escape(D(a.google_ad_client))}h("google_ad_host");var g=a.google_num_slots_by_client,l=a.google_num_slots_by_channel,j=a.google_prev_ad_formats_by_region,k=a.google_prev_ad_slotnames_by_region;if(a.google_ad_region==b&&a.google_ad_section!=b){a.google_ad_region=
a.google_ad_section}var i=a.google_ad_region==b?"":a.google_ad_region,p=false;if(e){p=e.indexOf("_0ads")>0}else if(a.google_ad_output!="html"&&a.google_num_radlinks>0){p=true}if(p){if(a.google_num_0ad_slots){a.google_num_0ad_slots=a.google_num_0ad_slots+1}else{a.google_num_0ad_slots=1}if(a.google_num_0ad_slots>3){return false}}else if(a.google_cpa_choice==b){if(a.google_num_ad_slots){a.google_num_ad_slots=a.google_num_ad_slots+1}else{a.google_num_ad_slots=1}if(a.google_num_slots_to_rotate){j[i]=b;
k[i]=b;if(a.google_num_slot_to_show==b){a.google_num_slot_to_show=c%a.google_num_slots_to_rotate+1}if(a.google_num_slot_to_show!=a.google_num_ad_slots){return false}}else if(a.google_num_ad_slots>6&&i==""){return false}}m("dt",f.getTime());h("google_language");if(a.google_country){h("google_country")}else{h("google_gl")}h("google_region");o("google_city");o("google_hints");h("google_safe");h("google_encoding");h("google_last_modified_time");o("google_alternate_ad_url");h("google_alternate_color");
h("google_skip");h("google_targeting");var n=a.google_ad_client;if(!g[n]){g[n]=1;g.length+=1}else{g[n]+=1}if(j[i]){v("prev_fmts",j[i].toLowerCase());if(g.length>1){m("slot",g[n])}}if(k[i]){v("prev_slotnames",k[i].toLowerCase())}if(e&&!a.google_ad_slot){v("format",e.toLowerCase());if(j[i]){j[i]=j[i]+","+e}else{j[i]=e}}if(a.google_ad_slot){if(k[i]){k[i]=k[i]+","+a.google_ad_slot}else{k[i]=a.google_ad_slot}}h("google_max_num_ads");m("output",a.google_ad_output);h("google_adtest");h("google_ad_slot");
o("google_correlator");if(a.google_ad_channel){o("google_ad_channel");var q="",z=a.google_ad_channel.split("+");for(var s=0;s<z.length;s++){var t=z[s];if(!l[t]){l[t]=1}else{q+=t+"+"}}v("pv_ch",q)}o("google_page_url");x("google_color_bg",c);x("google_color_text",c);x("google_color_link",c);x("google_color_url",c);x("google_color_border",c);x("google_color_line",c);if(a.google_reuse_colors)m("reuse_colors",1);else m("reuse_colors",0);h("google_kw_type");o("google_kw");o("google_contents");h("google_num_radlinks");
h("google_max_radlink_len");h("google_rl_filtering");h("google_rl_mode");h("google_rt");o("google_rl_dest_url");h("google_num_radlinks_per_unit");h("google_ad_type");h("google_image_size");h("google_ad_region");h("google_feedback");o("google_referrer_url");o("google_page_location");h("google_bid");h("google_cust_age");h("google_cust_gender");h("google_cust_interests");h("google_cust_id");h("google_cust_job");h("google_cust_u_url");h("google_cust_l");h("google_cust_lh");h("google_cust_ch");h("google_ed");
o("google_ui_features");o("google_only_ads_with_video");o("google_disable_video_autoplay");if(L(a,d)&&d.body){var r=d.body.scrollHeight,u=d.body.clientHeight;if(u&&r){v("cc",Math.round(u*100/r))}}U();m("ga_vid",a.gaGlobal.vid);m("ga_sid",a.gaGlobal.sid);m("ga_hid",a.gaGlobal.hid);m("ga_fc",a.gaGlobal.from_cookie);o("google_analytics_webpropids");h("google_ad_override");h("google_flash_version");V(a,f);return true}function M(){var b=window,a=document;if(!P()){return}ca(b,a,b.google_ad_url,null);aa(b)}
function T(b,a,d){M();return true}function L(b,a){return b.top.location==a.location}function K(b,a){var d=a.documentElement;if(L(b,a))return false;if(b.google_ad_width&&b.google_ad_height){var f=1,c=1;if(b.innerHeight){f=b.innerWidth;c=b.innerHeight}else if(d&&d.clientHeight){f=d.clientWidth;c=d.clientHeight}else if(a.body){f=a.body.clientWidth;c=a.body.clientHeight}if(c>2*b.google_ad_height||f>2*b.google_ad_width){return false}}return true}function Y(b){var a=window,d=document,f=d.location,c=d.referrer,
e=null,g=a.onerror;a.onerror=b;if(a.google_ad_frameborder==e){a.google_ad_frameborder=0}if(a.google_ad_output==e){a.google_ad_output="html"}if(a.google_ad_format==e&&a.google_ad_output=="html"){a.google_ad_format=a.google_ad_width+"x"+a.google_ad_height}if(a.google_page_url==e){a.google_page_url=c;if(!K(a,d)){a.google_page_url=f;a.google_last_modified_time=Date.parse(d.lastModified)/1000;a.google_referrer_url=c}}else{a.google_page_location=c;if(!K(a,d)){a.google_page_location=f}}if(a.google_num_slots_by_channel==
e){a.google_num_slots_by_channel=[]}if(a.google_num_slots_by_client==e){a.google_num_slots_by_client=[]}if(a.google_prev_ad_formats_by_region==e){a.google_prev_ad_formats_by_region=[]}if(a.google_prev_ad_slotnames_by_region==e){a.google_prev_ad_slotnames_by_region=[]}if(a.google_correlator==e){a.google_correlator=(new Date).getTime()}if(a.google_adslot_loaded==e){a.google_adslot_loaded={}}if(a.google_adContentsBySlot==e){a.google_adContentsBySlot={}}if(a.google_flash_version==e){a.google_flash_version=
Q().toString()}a.onerror=g}function N(b){if(b in A){return A[b]}return A[b]=navigator.userAgent.toLowerCase().indexOf(b)!=-1}var A={};function X(b,a){if(b!="html"){return false}var d={};d["ca-pub-7027491298716603"]=true;d["ca-pub-8344185808443527"]=true;return d[D(a)]!=null}function $(b){var a={},d=b.split("?"),f=d[d.length-1].split("&");for(var c=0;c<f.length;c++){var e=f[c].split("=");if(e[0]){try{a[e[0].toLowerCase()]=e.length>1?(window.decodeURIComponent?decodeURIComponent(e[1].replace(/\+/g,
" ")):unescape(e[1])):""}catch(g){}}}return a}function Z(){var b=window,a=$(document.URL);if(a.google_ad_override){b.google_ad_override=a.google_ad_override}}function Q(){var b=0;if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description){b=a.description.replace(/([a-zA-Z]|\s)+/,"").split(".")[0]}}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){b=3;var d=1;while(d){try{d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+
(b+1));b++}catch(f){d=null}}}else if(N("msie")&&!window.opera){try{var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(f){try{var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");b=6;d.AllowScriptAccess="always"}catch(f){if(b==6){return b}}try{d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){}}if(d!=null){b=d.GetVariable("$version").split(" ")[1].split(",")[0]}}return b}Z();Y(T);M();
})()