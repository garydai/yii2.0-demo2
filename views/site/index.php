
<link type="text/css" rel="Stylesheet" href="css/Index/Default.css" />
<script type="text/javascript" src="javascript/Index/Default.js"></script>
<div id="LoopDiv">
<input id="S_Num" type="hidden" value="6" />
<div id="starsIF" class="imageflow">
<img src="UserFile/Star/2012/11/09/211414202_R.png" longdesc="http://yangying.hbstars.com" width="380" height="400" alt="杨颖" />
<img src="UserFile/Star/2013/09/12/234918779_R.jpg" longdesc="http://chenhe.hbstars.com" width="380" height="400" alt="陈赫" />
<img src="UserFile/Star/2010/11/07/195739743_R.jpg" longdesc="http://huosiyan.hbstars.com" width="380" height="400" alt="霍思燕" />
<img src="UserFile/Star/2012/10/12/171852304_R.png" longdesc="http://duchun.hbstars.com" width="380" height="400" alt="杜淳" />
<img src="UserFile/Star/2010/11/07/195359252_R.jpg" longdesc="http://fengshaofeng.hbstars.com" width="380" height="400" alt="冯绍峰" />
<img src="UserFile/Star/2010/11/07/195001998_R.jpg" longdesc="http://liaofan.hbstars.com" width="380" height="400" alt="廖凡" />
<img src="UserFile/Star/2013/09/12/111051755_R.jpg" longdesc="http://baojianfeng.hbstars.com" width="380" height="400" alt="保剑锋" />
<img src="UserFile/Star/2010/11/19/151817631_R.jpg" longdesc="http://yaochen.hbstars.com" width="380" height="400" alt="姚晨" />
<img src="UserFile/Star/2010/11/19/172141456_R.jpg" longdesc="http://jingboran.hbstars.com" width="380" height="400" alt="井柏然" />
<img src="UserFile/Star/2010/12/08/092950120_R.jpg" longdesc="http://lichen.hbstars.com" width="380" height="400" alt="李晨" />
<img src="UserFile/Star/2010/11/07/202510490_R.jpg" longdesc="http://suyoupeng.hbstars.com" width="380" height="400" alt="苏有朋" />
<img src="UserFile/Star/2010/11/07/211605770_R.jpg" longdesc="http://zhanghanyu.hbstars.com" width="380" height="400" alt="张涵予" />
</div>
</div>


              <div>                     
           <div id="VideoDiv">
               <img src="images/Index/3.png" alt="" />
               <div class="tab">
                         <span id="CHBtn" class="lanActive">CH</span>
                         <span id="ENBtn" class="lanNormal">EN</span>
               </div>
               <div id="CHText">
                         <p><em>华谊兄弟艺人经纪</em>公司简介</p>

               </div>
               <div id="ENText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Huayi Brothers Arist Agency</em>,intro</div>
           </div>
           <div id="NewsDiv">
               <img src="images/Index/2.png" alt="" />
               <div class="index_l">
<ul>

 <?php foreach ($news as $new) {?>
    <li>
    <strong class="newsTg" onclick=""><?php echo "[$new->tag]" ?></strong>
    <a href="<?php echo '/index.php?r=news/article&id='."{$new->id}" ?>" target="_blank"><?php echo $new->title ?>
    </a><br />
    <span> <?php echo mb_substr(strip_tags($new->content), 0, 100, "utf-8");?></span>
    </li>

<?php } ?>

</ul></div>
               <a href="News/Default.shtml" class="more">更多新闻...</a>
           </div>
           <div id="StarDiv">
               <img src="images/Index/11.png" alt="" />
               <div class="star_l">
<div class="starDiv">
<a href="http://zhongchuxi.hbstars.com" target="_blank">
<img class="starImg" src="http://www.hbstars.com/UserFile/Star/2015/12/03/104529249.jpg" alt="钟楚曦" title="钟楚曦" />
</a>
</div>
<div class="starDiv">
<a href="http://jili.hbstars.com" target="_blank">
<img class="starImg" src="http://www.hbstars.com/UserFile/Star/2015/10/09/102612564.jpg" alt="吉丽" title="吉丽" />
</a>
</div>
<div class="starDiv">
<a href="http://suyan.hbstars.com" target="_blank">
<img class="starImg" src="http://www.hbstars.com/UserFile/Star/2014/10/16/161346628.jpg" alt="苏岩" title="苏岩" />
</a>
</div>
<div class="starDiv">
<a href="http://hanxiuyi.hbstars.com" target="_blank">
<img class="starImg" src="http://www.hbstars.com/UserFile/Star/2014/09/25/165111148.jpg" alt="韩秀一" title="韩秀一" />
</a>
</div>
<div class="starDiv">
<a href="http://pengguobin.hbstars.com" target="_blank">
<img class="starImg" src="http://www.hbstars.com/UserFile/Star/2014/09/25/165845687.jpg" alt="彭国斌" title="彭国斌" />
</a>
</div>
<div class="starDiv">
<a href="http://zhaohaitao.hbstars.com" target="_blank">
<img class="starImg" src="http://www.hbstars.com/UserFile/Star/2014/09/25/170451484.jpg" alt="赵海涛" title="赵海涛" />
</a>
</div>
               <br class="clear" />
               </div>
               <a href="Stars/StarArchives.shtml" class="more">更多明星...</a>
           </div> 
       <br class="clear" />
       </div>
       <!--<div class="friend">
<a href="http://ent.sina.com.cn" target="_blank">
<img src="http://www.hbstars.com/UserFile/Partner/2010/10/05/102043629.gif" alt="新浪娱乐" title="新浪娱乐" />
</a>
<a href="http://www.green.com" target="_blank">
<img src="http://www.hbstars.com/UserFile/Partner/2010/10/05/101958380.gif" alt="格林马会" title="格林马会" />
</a>
<a href="http://www.chinaui.com" target="_blank">
<img src="http://www.hbstars.com/UserFile/Partner/2010/10/05/101937476.gif" alt="ChinaUI优艾网" title="ChinaUI优艾网" />
</a></div>-->
       </div>
