//JS for html ready

//IFlogin in session
function logout() {
    $.ajax({
        url: "http://193.112.18.21:8080/logout",
        type: 'post',
        data: {},
        dataType: 'json',
        xhrFields: {withCredentials: true},
        success: function (data, textStatus, request) {
            console.log("response:" + data['code']);
            window.location.replace("signin.html");
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.info("error.");
            if (xhr.status == 200) {
                alert(ajaxOptions);
            }
            else {
                alert(xhr.status);
                alert(thrownError);
            }
        }
    });
}
function Printuserlogo(username) {
    $("#LOGIN_name").append(
        "    <li class='dropdown'>" +
        "       <a href='#' class='dropdown-toggle' data-toggle='dropdown'>"+username+"<span class='caret'></span></a>"+
        "       <ul class='dropdown-menu '> "+
        "           <li><a href=#>我的点评</a></li> "+
        "           <li><a href=#>我的收藏</a></li> " +
        "           <li class='divider'></li>"+
        "           <li><a onclick='logout()' href=#>注销</a></li> " +
        "       </ul>" +
        "    </li>"
    )
   // $("#LOGIN_part").hide()
}
function Printloginlogo() {
    $("#LOGIN_name").append(
    "    <li><a id='login' href='signin.html'>登录 </a></li>"+
    "    <li id='LandR'>|</li>"+
    "    <li><a id='register' href='signup.html'>注册</a></li>"
    )
     // $("#LOGIN_name").hide()
}
$(document).ready(function(){
    $.ajax({
        url: "http://193.112.18.21:8080/checkme",
        type: 'post',
        data: {},
        dataType: 'json',
        crossDomain: true,
        xhrFields: {withCredentials: true},
        success: function (data, textStatus, request) {
            //alert(data.Code+"!!!"+data.Res.Username);
            if(data.Code==1) {
                username = data.Res.Username;
                //alert(username);
                if (username!=null&&username!="")
                {
                    Printuserlogo(username);
                }
            }else {Printloginlogo();}
            console.log("response:" + data['code']);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            Printloginlogo();
            console.info("error.");
            if (xhr.status == 200) {
                alert(ajaxOptions);
            }
            else {
                alert(xhr.status);
                alert(thrownError);
            }
        }
    });
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


(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

$(document).ready(function(){
    var one = $.getUrlParam('productone');
    var two = $.getUrlParam('producttwo');
    if(one!=null)
        alert(one);
    if(two!=null)
        alert(two);
});