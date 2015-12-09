﻿
function setAlbum(id)
{
    if (id != starID && $("#PhotoTbList").is(":animated") == false)
    {
        $("#PhotoArea").hide();
        $("#PhotoLoad").show();
        starID = id;
        var n = Number($("#PhotoList").attr("n"));
        var s = 0;
        var firstID = null;
        $("#PhotoInnerList > div").each(function ()
        {
            if (id == "0" || $(this).attr("s") == id)
            {
                firstID = firstID == null ? $(this).attr("i") : firstID;
                $(this).css("display", "block");
                s++;
            }
            else
            {
                $(this).css("display", "none");
            }
        });

        $("#PhotoList").attr("c", "1");
        $("#PhotoList").attr("a", s);

        $("#PhotoTbList").animate({ scrollLeft: 0 }, 1000, "linear", function ()
        {
            changePhoto(firstID);

            $("#PhotoPre").removeClass("preActive").addClass("preNormal");
            if (s > n)
            {
                $("#PhotoNext").removeClass("nextNormal").addClass("nextActive");
            }
            else
            {
                $("#PhotoNext").removeClass("nextActive").addClass("nextNormal");
            }
        });
    }
}

function changePhoto(aid)
{
    var oldID = $("#CurStarName").attr("val");
    var sid = $("#T" + aid).attr("s");
    var url = $("#T" + aid).attr("u");
  
    var w = Number($("#T" + aid).attr("w"));
    var h = Number($("#T" + aid).attr("h"));
    var title = $("#T" + aid).attr("t");

    if (oldID != aid)
    {
        $("#PhotoArea").hide();
        $("#PhotoLoad").show();
        
        $("#CurStarImg").attr("src", $("#WebDomain").val() + url);

        var tw = 0
        var th = 0;

        if (w > sw || h > sh)
        {
            if (w > sw && h <= sh)
            {
                tw = sw;
                th = sw * h / w;
            }
            else if (w <= sw && h > sh)
            {
                th = sh;
                tw = sh * w / h;
            }
            else
            {
                if (parseFloat(w) / parseFloat(h) >= parseFloat(sw) / parseFloat(sh))
                {
                    tw = sw;
                    th = sw * h / w;
                }
                else
                {
                    th = sh;
                    tw = sh * w / h;
                }
            }
        }
        else
        {
            tw = w;
            th = h;
        }

        $("#CurStarName").text($("#S" + sid).text());
        $("#CurStarName").attr("val", aid);

        $("#CurStarImg").css("width", tw).css("height", th).css("margin-left", (sw - tw) / 2).css("margin-top", (sh - th) / 2);
        $("#CurStarImg").attr("title", title);

        $("#C" + oldID).removeClass("photoActive").addClass("photoNormal");
        $("#C" + aid).removeClass("photoNormal").addClass("photoActive");
    }
}
function setPrePhoto()
{
    var cur = Number($("#PhotoList").attr("c"));
    var all = Number($("#PhotoList").attr("a"));
    var w = Number($("#PhotoList").attr("w"));
    var n = Number($("#PhotoList").attr("n"));
    var a = parseInt(all / n);
    if (all % n > 0)
    {
        a++;
    }
    if (cur > 1 && $("#PhotoTbList").is(":animated") == false)
    {
        $("#PhotoTbList").animate({ scrollLeft: w * n * (cur - 2) }, 1000, "linear", function ()
        {
            var s = 0;
            $("#PhotoInnerList > div").each(function ()
            {
                if ($(this).css("display") != "none")
                {
                    s++;
                    if (s == ((cur - 2) * n + 1))
                    {
                        changePhoto($(this).attr("i"));
                        return;
                    }
                }
            })

            $("#PhotoList").attr("c", cur - 1);
            if (cur == a)
            {
                $("#PhotoNext").removeClass("nextNormal").addClass("nextActive");
            }
            if (cur - 1 == 1)
            {
                $("#PhotoPre").removeClass("preActive").addClass("preNormal");
            }
        });
    }
}
function setNextPhoto()
{
    var cur = Number($("#PhotoList").attr("c"));
    var all = Number($("#PhotoList").attr("a"));
    var w = Number($("#PhotoList").attr("w"));
    var n = Number($("#PhotoList").attr("n"));
    var a = parseInt(all / n);
    if (all % n > 0)
    {
        a++;
    }
    if (cur < a && $("#PhotoTbList").is(":animated") == false)
    {
        $("#PhotoTbList").animate({ scrollLeft: w * n * cur }, 1000, "linear", function ()
        {
            var s = 0;
            $("#PhotoInnerList > div").each(function ()
            {
                if ($(this).css("display") != "none")
                {
                    s++;
                    if (s == (cur * n + 1))
                    {
                        changePhoto($(this).attr("i"));
                        return;
                    }
                }
            })

            $("#PhotoList").attr("c", cur + 1);
            if (cur + 1 == a)
            {
                $("#PhotoNext").removeClass("nextActive").addClass("nextNormal");
            }
            if (cur == 1)
            {
                $("#PhotoPre").removeClass("preNormal").addClass("preActive");
            }
        });
    }
}
function setDisplayPhoto()
{
    $("#PhotoLoad").hide();
    $("#PhotoArea").show();
}
function initPG()
{

    jQuery.browser = {};
    (function () {
        jQuery.browser.msie = false;
        jQuery.browser.version = 0;
        if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
            jQuery.browser.msie = true;
            jQuery.browser.version = RegExp.$1;
        }
    })();

    $.fn.mousewheel = function(Func){
        return this.each(function(){
            var _self = this;
            _self.D = 0;//滚动方向
            if($.browser.msie||$.browser.safari){
               _self.onmousewheel=function(){_self.D = event.wheelDelta;event.returnValue = false;Func && Func.call(_self);};
            }else{
               _self.addEventListener("DOMMouseScroll",function(e){
                    _self.D = e.detail>0?-1:1;
                    e.preventDefault();
                    Func && Func.call(_self);
               },false); 
            }
        });
    }

    $.fn.jscroll = function(j){
        return this.each(function(){
            j = j || {}
            j.Bar = j.Bar||{};//2级对象
            j.Btn = j.Btn||{};//2级对象
            j.Bar.Bg = j.Bar.Bg||{};//3级对象
            j.Bar.Bd = j.Bar.Bd||{};//3级对象
            j.Btn.uBg = j.Btn.uBg||{};//3级对象
            j.Btn.dBg = j.Btn.dBg||{};//3级对象
            var jun = { W:"12px"
                        ,BgUrl:""
                        , Bg: "#4A0404"
                        ,Bar:{  Pos:"up"
                                , Bd: { Out: "#810101", Hover: "#C9480A" }
                                , Bg: { Out: "#810101", Hover: "#C9480A", Focus: "#C9480A" }
                        }
                        ,Btn:{  btn:true
                                ,uBg:{Out:"#ccc",Hover:"#fff",Focus:"#fff"}
                                ,dBg:{Out:"#ccc",Hover:"#fff",Focus:"#333"}}
                        ,Fn:function(){}}
            j.W = j.W||jun.W;
            j.BgUrl = j.BgUrl||jun.BgUrl;
            j.Bg = j.Bg||jun.Bg;
                j.Bar.Pos = j.Bar.Pos||jun.Bar.Pos;
                    j.Bar.Bd.Out = j.Bar.Bd.Out||jun.Bar.Bd.Out;
                    j.Bar.Bd.Hover = j.Bar.Bd.Hover||jun.Bar.Bd.Hover;
                    j.Bar.Bg.Out = j.Bar.Bg.Out||jun.Bar.Bg.Out;
                    j.Bar.Bg.Hover = j.Bar.Bg.Hover||jun.Bar.Bg.Hover;
                    j.Bar.Bg.Focus = j.Bar.Bg.Focus||jun.Bar.Bg.Focus;
                j.Btn.btn = j.Btn.btn!=undefined?j.Btn.btn:jun.Btn.btn;
                    j.Btn.uBg.Out = j.Btn.uBg.Out||jun.Btn.uBg.Out;
                    j.Btn.uBg.Hover = j.Btn.uBg.Hover||jun.Btn.uBg.Hover;
                    j.Btn.uBg.Focus = j.Btn.uBg.Focus||jun.Btn.uBg.Focus;
                    j.Btn.dBg.Out = j.Btn.dBg.Out||jun.Btn.dBg.Out;
                    j.Btn.dBg.Hover = j.Btn.dBg.Hover||jun.Btn.dBg.Hover;
                    j.Btn.dBg.Focus = j.Btn.dBg.Focus||jun.Btn.dBg.Focus;
            j.Fn = j.Fn||jun.Fn;
            var _self = this;
            var Stime,Sp=0,Isup=0;
            $(_self).css({overflow:"hidden",position:"relative",padding:"0px"});
            var dw = $(_self).width(), dh = $(_self).height()-1;
            var sw = j.W ? parseInt(j.W) : 21;
            var sl = dw - sw
            var bw = j.Btn.btn==true ? sw : 0;
            if($(_self).children(".jscroll-c").height()==null){//存在性检测
        $(_self).wrapInner("<div class='jscroll-c' style='top:0px;z-index:99;zoom:1;position:relative'></div>");
            $(_self).children(".jscroll-c").prepend("<div style='height:0px;overflow:hidden'></div>");
            $(_self).append("<div class='jscroll-e' unselectable='on' style=' height:100%;top:0px;right:0;-moz-user-select:none;position:absolute;overflow:hidden;z-index:100;'><div class='jscroll-u' style='position:absolute;top:0px;width:100%;left:0;background:blue;overflow:hidden'></div><div class='jscroll-h'  unselectable='on' style='background:green;position:absolute;left:0;-moz-user-select:none;border:1px solid'></div><div class='jscroll-d' style='position:absolute;bottom:0px;width:100%;left:0;background:blue;overflow:hidden'></div></div>");
            }
            var jscrollc = $(_self).children(".jscroll-c");
            var jscrolle = $(_self).children(".jscroll-e");
            var jscrollh = jscrolle.children(".jscroll-h");
            var jscrollu = jscrolle.children(".jscroll-u");
            var jscrolld = jscrolle.children(".jscroll-d");
            if($.browser.msie){document.execCommand("BackgroundImageCache", false, true);}
            jscrollc.css({"padding-right":sw});
            jscrolle.css({width:sw,background:j.Bg,"background-image":j.BgUrl});
            jscrollh.css({top:bw,background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out,width:sw-2});
            jscrollu.css({height:bw,background:j.Btn.uBg.Out,"background-image":j.BgUrl});
            jscrolld.css({height:bw,background:j.Btn.dBg.Out,"background-image":j.BgUrl});
            jscrollh.hover(function(){if(Isup==0)$(this).css({background:j.Bar.Bg.Hover,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Hover})},function(){if(Isup==0)$(this).css({background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out})})
            jscrollu.hover(function(){if(Isup==0)$(this).css({background:j.Btn.uBg.Hover,"background-image":j.BgUrl})},function(){if(Isup==0)$(this).css({background:j.Btn.uBg.Out,"background-image":j.BgUrl})})
            jscrolld.hover(function(){if(Isup==0)$(this).css({background:j.Btn.dBg.Hover,"background-image":j.BgUrl})},function(){if(Isup==0)$(this).css({background:j.Btn.dBg.Out,"background-image":j.BgUrl})})
            var sch = jscrollc.height();
            //var sh = Math.pow(dh,2) / sch ;//Math.pow(x,y)x的y次方
            var sh = (dh-2*bw)*dh / sch
            if(sh<10){sh=10}
            var wh = sh/6//滚动时候跳动幅度
        //  sh = parseInt(sh);
            var curT = 0,allowS=false;
            jscrollh.height(sh);
            if(sch<=dh){jscrollc.css({padding:0});jscrolle.css({display:"none"})}else{allowS=true;}
            if(j.Bar.Pos!="up"){
            curT=dh-sh-bw;
            setT();
            }
            jscrollh.bind("mousedown",function(e){
                j['Fn'] && j['Fn'].call(_self);
                Isup=1;
                jscrollh.css({background:j.Bar.Bg.Focus,"background-image":j.BgUrl})
                var pageY = e.pageY ,t = parseInt($(this).css("top"));
                $(document).mousemove(function(e2){
                     curT =t+ e2.pageY - pageY;//pageY浏览器可视区域鼠标位置，screenY屏幕可视区域鼠标位置
                        setT();
                });
                $(document).mouseup(function(){
                    Isup=0;
                    jscrollh.css({background:j.Bar.Bg.Out,"background-image":j.BgUrl,"border-color":j.Bar.Bd.Out})
                    $(document).unbind();
                });
                return false;
            });
            jscrollu.bind("mousedown",function(e){
            j['Fn'] && j['Fn'].call(_self);
                Isup=1;
                jscrollu.css({background:j.Btn.uBg.Focus,"background-image":j.BgUrl})
                _self.timeSetT("u");
                $(document).mouseup(function(){
                    Isup=0;
                    jscrollu.css({background:j.Btn.uBg.Out,"background-image":j.BgUrl})
                    $(document).unbind();
                    clearTimeout(Stime);
                    Sp=0;
                });
                return false;
            });
            jscrolld.bind("mousedown",function(e){
            j['Fn'] && j['Fn'].call(_self);
                Isup=1;
                jscrolld.css({background:j.Btn.dBg.Focus,"background-image":j.BgUrl})
                _self.timeSetT("d");
                $(document).mouseup(function(){
                    Isup=0;
                    jscrolld.css({background:j.Btn.dBg.Out,"background-image":j.BgUrl})
                    $(document).unbind();
                    clearTimeout(Stime);
                    Sp=0;
                });
                return false;
            });
            _self.timeSetT = function(d){
                var self=this;
                if(d=="u"){curT-=wh;}else{curT+=wh;}
                setT();
                Sp+=2;
                var t =500 - Sp*50;
                if(t<=0){t=0};
                Stime = setTimeout(function(){self.timeSetT(d);},t);
            }
            jscrolle.bind("mousedown",function(e){
                    j['Fn'] && j['Fn'].call(_self);
                            curT = curT + e.pageY - jscrollh.offset().top - sh/2;
                            asetT();
                            return false;
            });
            function asetT(){               
                        if(curT<bw){curT=bw;}
                        if(curT>dh-sh-bw){curT=dh-sh-bw;}
                        jscrollh.stop().animate({top:curT},100);
                        var scT = -((curT-bw)*sch/(dh-2*bw));
                        jscrollc.stop().animate({top:scT},1000);
            };
            function setT(){                
                        if(curT<bw){curT=bw;}
                        if(curT>dh-sh-bw){curT=dh-sh-bw;}
                        jscrollh.css({top:curT});
                        var scT = -((curT-bw)*sch/(dh-2*bw));
                        jscrollc.css({top:scT});
            };
            $(_self).mousewheel(function(){
                    if(allowS!=true) return;
                    j['Fn'] && j['Fn'].call(_self);
                        if(this.D>0){curT-=wh;}else{curT+=wh;};
                        setT();
            })
        });
    }

    $("#A5").addClass("topAct");
    $("#A1,#A2,#A3,#A4").addClass("topNor").hover(
    function () { $(this).removeClass("topNor").addClass("topAct"); },
    function () { $(this).removeClass("topAct").addClass("topNor"); });
    $("#CurStarImg").bind("load", function () { setDisplayPhoto(); });
    $("#StarsInfoDiv").show().jscroll({ W: "6px", Btn: { btn: false} });
    sw = Number($("#CurStarName").attr("w"));
    sh = Number($("#CurStarName").attr("h"));
    $("#PhotoPre").bind("click", function () { setPrePhoto() });
    $("#PhotoNext").bind("click", function () { setNextPhoto() });
}

var sw = 0;
var sh = 0;
var starID = "0";
$(function () { initPG(); });