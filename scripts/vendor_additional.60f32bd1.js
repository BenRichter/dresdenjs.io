"use strict";angular.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}function c(a,c){var d=c;void 0===d&&(d=Math.min(b(a),3));var e=Math.pow(10,d),f=(a*e|0)%e;return{v:d,f:f}}var d={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["vorm.","nachm."],DAY:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],ERANAMES:["v. Chr.","n. Chr."],ERAS:["v. Chr.","n. Chr."],FIRSTDAYOFWEEK:0,MONTH:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],SHORTDAY:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],SHORTMONTH:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],STANDALONEMONTH:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"dd.MM.y HH:mm:ss",mediumDate:"dd.MM.y",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"de-de",pluralCat:function(a,b){var e=0|a,f=c(a,b);return 1==e&&0==f.v?d.ONE:d.OTHER}})}]),function(){var a=function(a){return[{type:"html",filter:function(a){return a=a.replace(/<(.+)(\s*class="(.*)")*(.*)>(.*?)(\{:\s([\.\w]+)\})+</gi,function(a,b,c,d,e,f,g,h){var i=(d||"").split(" ");return i=i.concat(h.split(".")),i=i.filter(function(a){return a}),"<"+b+' class="'+i.join(" ")+'"'+e+">"+f+"<"})}}]};"undefined"!=typeof window&&window.Showdown&&window.Showdown.extensions&&(window.Showdown.extensions.classname=a),"undefined"!=typeof module&&(module.exports=a)}(),function(){var a=function(a){return[{type:"html",filter:function(a){return a=a.replace(/\<(\w+)(\s*id=".*")*\>(.*)(\s*\{:\s*\#(\w+)\})+(\<\/.*\>)/gi,function(a,b,c,d,e,f,g){return"<"+b+' id="'+f+'">'+d+g})}}]};"undefined"!=typeof window&&window.Showdown&&window.Showdown.extensions&&(window.Showdown.extensions.id=a),"undefined"!=typeof module&&(module.exports=a)}(),function(){var a=function(a){var b,c={},d="text-align:left;";return c.th=function(a){if(""===a.trim())return"";var b=a.trim().replace(/ /g,"_").toLowerCase();return'<th id="'+b+'" style="'+d+'">'+a+"</th>"},c.td=function(b){return'<td style="'+d+'">'+a.makeHtml(b)+"</td>"},c.ths=function(){var a="",b=0,d=[].slice.apply(arguments);for(b;b<d.length;b+=1)a+=c.th(d[b])+"\n";return a},c.tds=function(){var a="",b=0,d=[].slice.apply(arguments);for(b;b<d.length;b+=1)a+=c.td(d[b])+"\n";return a},c.thead=function(){var a,b=[].slice.apply(arguments);return a="<thead>\n",a+="<tr>\n",a+=c.ths.apply(this,b),a+="</tr>\n",a+="</thead>\n"},c.tr=function(){var a,b=[].slice.apply(arguments);return a="<tr>\n",a+=c.tds.apply(this,b),a+="</tr>\n"},b=function(a){var b,d,e=0,f=a.split("\n"),g=[];for(e;e<f.length;e+=1){if(b=f[e],b.trim().match(/^[|]{1}.*[|]{1}$/)){b=b.trim();var h=[];if(h.push("<table>"),d=b.substring(1,b.length-1).split("|"),h.push(c.thead.apply(this,d)),b=f[++e],b.trim().match(/^[|]{1}[-=| ]+[|]{1}$/)){for(b=f[++e],h.push("<tbody>");b.trim().match(/^[|]{1}.*[|]{1}$/);)b=b.trim(),h.push(c.tr.apply(this,b.substring(1,b.length-1).split("|"))),b=f[++e];h.push("</tbody>"),h.push("</table>"),g.push(h.join("\n"));continue}b=f[--e]}g.push(b)}return g.join("\n")},[{type:"lang",filter:b}]};"undefined"!=typeof window&&window.Showdown&&window.Showdown.extensions&&(window.Showdown.extensions.table=a),"undefined"!=typeof module&&(module.exports=a)}(),function(){var a=function(a){return[{type:"lang",regex:"(~T){2}([^~]+)(~T){2}",replace:function(a,b,c,d){return"<del>"+c+"</del>"}}]};"undefined"!=typeof window&&window.Showdown&&window.Showdown.extensions&&(window.Showdown.extensions.github=a),"undefined"!=typeof module&&(module.exports=a)}();