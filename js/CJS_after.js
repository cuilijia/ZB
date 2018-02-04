//JS for html ready

//IFlogin in session
$(document).ready(function(){
    username=""
    if (username!=null&&username!="")
    {
        $("#LOGIN_part").before(
            "<div class='nav-right'>"+
            " <ul id='test2' class='sign-in'>"+
            "    <li><i class='fa fa-user'></i></li>"+
            "    <li class='dropdown'>" +
            "       <a href='#' class='dropdown-toggle' data-toggle='dropdown'>"+username+"<span class='caret'></span></a>"+
            "       <ul class='dropdown-menu '> "+
            "           <li><a href=#>我的点评</a></li> "+
            "           <li><a href=#>我的收藏</a></li> " +
            "           <li class='divider'></li>"+
            "           <li><a href=#>注销</a></li> " +
            "       </ul>" +
            "    </li>"+
            " <li><a  href='post.html' class='btn'>我要点评</a></li>"+
            " </ul><!-- sign-in -->"+
            "</div>"
        )
        $("#LOGIN_part").hide()
    }
});

$(document).ready(function(){
    var CompanyNum=3
    var text = '{ "CompannyList" : [' +
                '{ "CompanyName":"Runoob" , "url":"www.runoob.com" },' +
                '{ "CompanyName":"Google" , "url":"www.google.com" },' +
                '{ "CompanyName":"Taobao" , "url":"www.taobao.com" } ]}';
    obj = JSON.parse(text);

    for(var i=0;i<CompanyNum;i++){
        $("#SEARCH_companylist").append(   "<li><a href='#'>"+obj.CompannyList[i].CompanyName+"</a></li>");
    }
});
