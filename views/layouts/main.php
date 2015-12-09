<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>烛龙文化经纪有限公司-首页</title>

    <link type="text/css" rel="Stylesheet" href="Css/Base/PageBase.css" />
    <link type="text/css" rel="Stylesheet" href="Css/Base/imageflow.css" />

    <script type="text/javascript" src="Javascript/Base/jquery.js"></script>
    <script type="text/javascript" src="Javascript/Base/highslide.js"></script>
    <script type="text/javascript" src="Javascript/Base/imageflow.js"></script>

</head>
<body>
<?php $this->beginBody() ?>

<div class="center"> 
  ﻿<div class="logo"><a href="http://www.hbstars.com"><img src="http://www.hbstars.com/Images/web/logo.gif" alt="烛龙文化经纪有限公司" title="烛龙文化经纪有限公司" /></a></div>
<div class="nav">
    <ul>
         <li>
             <a id="A1" href="/index.php" title="首页">
                 <span>首页</span>
                 <p>Home page</p>
             </a>
          </li>
　　　<li>
              <a id="A2" href="/index.php?r=news/index" title="华谊新闻">
                  <span>烛龙新闻</span>
                  <p>Huayi News</p>
              </a>
          </li>
　　　<li>
              <a id="A3" href="/index.php?r=star/archives" title="明星档案">
                  <span>烛龙档案</span>
                  <p>Star File</p>
              </a>
          </li>
　　　<li>
              <a id="A4" href="http://www.hbstars.com/Video/Media.shtml" title="明星视频">
                  <span>烛龙视频</span>
                  <p>Star Video</p>
              </a>
          </li>
          <li>
              <a id="A5" href="/index.php?r=star/albums" title="明星相册">
                  <span>烛龙相册</span>
                  <p>Star Album</p>
              </a>
          </li>
    </ul>
</div>


        <?= $content ?>


<footer class="foot">
    <div class="copyright"><h1>烛龙文化经纪有限公司</h1>
    Copyright &copy; 2010 HBstars.com Incorporated. All rights reserved. 　<a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备12006599号</a>　<a href="http://www.zzwljc.com/" target="_blank">郑公备：41010029000138</a><br />
   地址：北京市朝阳区朝阳门外大街18号丰联广场B座917室  邮编：100020　电话：8610-65805888  传真：65805901　Email:stars@huayimedia.com<br /> Designed by <a href="http://www.chinauidesign.com" target="_blank">CHINAUIDesign</a><div  style="display:none">
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-20112423-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</div>
</div>

</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
