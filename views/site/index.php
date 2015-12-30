<div id="discuss" class="content-section-b">
<div class="container">
 <div class="row">

        <div class="col-md-8">

 
            <div class="new-post pad-bottom" data-bind="visible: signedIn">
                <div method="post" action="/index.php?r=site/add_comment">
                    <div class="form-group">
                        <label for="message">留言板</label>
                        <textarea class="form-control" name="message" id="message" placeholder="说点什么"></textarea>
                    </div>
                    <input type="submit" class="btn btn-danger" id="submitmsg">
                </div>
            </div>
 
            <ul class="posts list-unstyled" id="board">
                <?php foreach ($discuss as $m) {?>
                <li>
                    <p>
                        <span data-bind="text: username" class="username"></span><?php echo $m->ip ?><br />
                    </p>
                    <p>
                        <span data-bind="text: message"><?php echo $m->message?></span>
                    </p>
 
                    <p class="no-pad-bottom date-posted">Posted <span data-bind="text: moment(date).calendar()" /><?php echo $m->createTime?></p>
 
                </li>
                <?php }?>
            </ul>
        </div>
    </div>
 
</div>
</div>

<script type="text/javascript">
    $("#submitmsg").click(function(){
    
        var clientmsg = $("#message").val();
        if(clientmsg == "")
        {
           alert("内容为空");
           return ;
        }
        $.ajax({
                    type: "post",
                    url: "/index.php?r=site/add_comment",
                    data:{'msg':clientmsg},
                    success: function(html) {
                       // window.alert(html);
                        $("#board").prepend(html);
                    }
                });
    });
</script>