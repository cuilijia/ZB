
//这是用在html加载出来之前调用的
function ProfessorRadarlarge(size,ProduceId,Name,a,b,c,d,e){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(ProduceId));
    // 指定图表的配置项和数据
    option = {
        title: { text: '专家角度'  },
        tooltip: {  trigger: 'axis',  },
        legend: {
            x: 'right',
            data:[]
        },
        radar: [ {  indicator: [
            {text: '投保规则', max: 10.0, color: 'black'},
            {text: '危疾保障', max: 10.0, color: 'black'},
            {text: '寿险保障', max: 10.0, color: 'black'},
            {text: '保费豁免', max: 10.0, color: 'black'},
            {text: '费率', max: 10.0, color: 'black'} ],
            center: ['50%','55%'],
            radius: size
        }],
        series: [  {
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [  {  value: [a,b,c,d,e],
                name: Name  }  ]
        }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function UserRadarlarge(size,ProduceId,Name,a,b,c,d){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(ProduceId));
    // 指定图表的配置项和数据
    option = {
        title: { text: '用户角度'  },
        tooltip: {  trigger: 'axis',  },
        legend: {
            x: 'right',
            data:[]
        },
        radar: [ {  indicator: [
            {text: '公司信誉', max: 10.0, color: 'black'},
            {text: '理赔速度', max: 10.0, color: 'black'},
            {text: '代理人综合服务', max: 10.0, color: 'black'},
            {text: '收益回报', max: 10.0, color: 'black'} ],
            center: ['50%','55%'],
            radius: size
        }],
        series: [  {
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [  {  value: [a,b,c,d],
                name: Name  }  ]
        }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function ProfessorRadarSmall(size,ProduceId,Name,a,b,c,d,e){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(ProduceId));
    // 指定图表的配置项和数据
    option = {
        title: { text: ''  },
        tooltip: {  trigger: 'axis', position:['75%', '20%'] },
        legend: {
            x: 'right',
            data:[]
        },
        radar: [ {  indicator: [
            {text: '投保规则', max: 10.0, color: 'black'},
            {text: '危疾保障', max: 10.0, color: 'black'},
            {text: '寿险保障', max: 10.0, color: 'black'},
            {text: '保费豁免', max: 10.0, color: 'black'},
            {text: '费率', max: 10.0, color: 'black'} ],
            center: ['61%','48%'],
            radius: size
        }],
        series: [  {
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [  {  value: [a,b,c,d,e],
                name: Name  }  ]
        }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function UserRadarSmall(size,ProduceId,Name,a,b,c,d){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(ProduceId));
    // 指定图表的配置项和数据
    option = {
        title: { text: ''  },
        tooltip: {  trigger: 'axis', position:['75%', '20%'] },
        legend: {
            x: 'right',
            data:[]
        },
        radar: [ {  indicator: [
            {text: '公司信誉', max: 10.0, color: 'black'},
            {text: '理赔速度', max: 10.0, color: 'black'},
            {text: '代理人综合服务', max: 10.0, color: 'black'},
            {text: '收益回报', max: 10.0, color: 'black'} ],
            center: ['61%','48%'],
            radius: size
        }],
        series: [  {
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [  {  value: [a,b,c,d],
                name: Name  }  ]
        }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


function isHidden(oDiv){
    var vDiv = document.getElementById(oDiv);
    vDiv.style.display = (vDiv.style.display == 'none')?'block':'none';
}


function PrintProductsListFromProfessional(URL,ProductName,Variety,ApplicationalAge,ValueNum,CompanyName,CompanyImgUrl,Score,R1,R2,R3,R4,R5)
{
    $("#Product_ListFromProfessional").after(
        "<div class='job-ad-item '>"+
        "   <div class='item-info'>"+
        "       <div class='col-sm-2 col-md-2  '>"+
        "           <div class='item-image-box'>"+
        "               <div class='item-image'>"+
        "                   <a href='"+URL+"'><img src='"+CompanyImgUrl+"' alt='Image' class='img-responsive'></a>"+
        "               </div><!-- item-image -->"+
        "           </div>"+
        "       </div>"+
        "       <div class='col-sm-4 col-md-4'  >"+
        "           <div class='ad-info' >"+
        "               <span><a href='"+URL+"' class='title'>"+ProductName+"</a> ( <a href='#'>"+CompanyName+"</a> )</span>"+
        "               <div class='content' >"+
        "                   <ul class='show_number clearfix' >"+
        "                       <li>"+
        "                           <div  class='atar_Show' >"+
        "                               <p tip='"+Score+"' ></p>"+
        "                           </div>"+
        "                           <span style='font-size: 15px' ></span>"+
        "                       </li>"+
        "                   </ul>"+
        "               </div>"+
        "               <div class='ad-meta'>"+
        "                   <ul>"+
        "                       <li><a href='#'><i class='fa fa-key' aria-hidden='true'></i>"+Variety+" </a></li>"+
        "                       <li><a href='#'><i class='fa fa-clock-o' aria-hidden='true'></i>投保年龄："+ApplicationalAge+"</a></li>"+
        "                    <li><i class='fa fa-money' aria-hidden='true'></i>￥25,000 - ￥35,000</li>"+
        "                   </ul>"+
        "               </div><!-- ad-meta -->"+
        "               <div class='ad-meta'>"+
        "                   <ul>"+
        "                       <li><a href='#'><i class='fa fa-comment ' aria-hidden='true'></i>"+ValueNum+" 条点评 </a></li>"+
        "                   </ul>"+
        "               </div><!-- ad-meta -->"+
        "           </div><!-- ad-info -->"+
        "   </div>"+
        "   <div class='col-sm-2 col-md-2 '>"+
        "       <div id='product1' style='width: 300px;height:200px;'></div>"+
        "           <script>"+
        "               ProfessorRadarSmall(50,'product1','"+ProductName+"',"+R1+","+R2+","+R3+","+R4+","+R5+")"+
        "           </script>"+
        "      </div>"+
        "   </div><!-- item-info -->"+
        "</div>"
    )
}

function PrintProductsListFromUser(URL,ProductName,Variety,ApplicationalAge,ValueNum,CompanyName,CompanyImgUrl,Score,R1,R2,R3,R4)
{
    $("#Product_ListFromUser").after(
        "<div class='job-ad-item '>"+
        "   <div class='item-info'>"+
        "       <div class='col-sm-2 col-md-2  '>"+
        "           <div class='item-image-box'>"+
        "               <div class='item-image'>"+
        "                   <a href='"+URL+"'><img src='"+CompanyImgUrl+"' alt='Image' class='img-responsive'></a>"+
        "               </div><!-- item-image -->"+
        "           </div>"+
        "       </div>"+
        "       <div class='col-sm-4 col-md-4'  >"+
        "           <div class='ad-info' >"+
        "               <span><a href='"+URL+"' class='title'>"+ProductName+"</a> @ <a href='#'>"+CompanyName+"</a></span>"+
        "               <div class='content' >"+
        "                   <ul class='show_number clearfix' >"+
        "                       <li>"+
        "                           <div  class='atar_Show' >"+
        "                               <p tip='"+Score+"' ></p>"+
        "                           </div>"+
        "                           <span style='font-size: 15px' ></span>"+
        "                       </li>"+
        "                   </ul>"+
        "               </div>"+
        "               <div class='ad-meta'>"+
        "                   <ul>"+
        "                       <li><a href='#'><i class='fa fa-key' aria-hidden='true'></i>"+Variety+" </a></li>"+
        "                       <li><a href='#'><i class='fa fa-clock-o' aria-hidden='true'></i>投保年龄："+ApplicationalAge+"</a></li>"+
        "                       <li><i class='fa fa-money' aria-hidden='true'></i>￥25,000 - ￥35,000</li>"+
        "                   </ul>"+
        "               </div><!-- ad-meta -->"+
        "               <div class='ad-meta'>"+
        "                   <ul>"+
        "                       <li><a href='#'><i class='fa fa-comment ' aria-hidden='true'></i>"+ValueNum+" 条点评 </a></li>"+
        "                   </ul>"+
        "               </div><!-- ad-meta -->"+
        "           </div><!-- ad-info -->"+
        "   </div>"+
        "   <div class='col-sm-2 col-md-2 '>"+
        "       <div id='product1' style='width: 300px;height:200px;'></div>"+
        "           <script>"+
        "               UserRadarSmall(50,'product1','"+ProductName+"',"+R1+","+R2+","+R3+","+R4+")"+
        "           </script>"+
        "      </div>"+
        "   </div><!-- item-info -->"+
        "</div>"
    )
}

$(document).ready(function(){
    var ProductsNum=4
    $("#ProductsListNum").append("<span>"+ProductsNum+"</span>")
});
$(document).ready(function(){
    var ProductsNum=12
    $("#UserValueNum").append("<span>"+ProductsNum+"</span>")
});

function loaddetailpage(textx,detailNO,NO) {
    obj = JSON.parse(textx);
    $("#"+detailNO+"_ProductName").append(obj.ProductsList[NO].ProductName)
    $("#"+detailNO+"_CompanyName").append(" ("+obj.ProductsList[NO].CompanyName+")")
    $("#"+detailNO+"_StardisplayforProfessional").append("<p tip='"+obj.ProductsList[NO].PScore+"' ></p>")
    $("#"+detailNO+"_StardisplayforUser").append("<p tip='"+obj.ProductsList[NO].UScore+"' ></p>")
    $("#"+detailNO+"_ProductContent").append( " <li><a href='#'><i class='fa fa-key' aria-hidden='true'></i>储蓄型人寿 </a></li>"+
        " <li><a href='#'><i class='fa fa-clock-o' aria-hidden='true'></i>投保年龄："+obj.ProductsList[NO].ApplicationalAge+"</a></li>"+
        " <li><i class='fa fa-money' aria-hidden='true'></i>￥25,000 - ￥35,000</li>")

    $("#"+detailNO+"_IMG").append(" <img src='images/companys/"+obj.ProductsList[NO].CompanyName+".jpg' alt='Image' class='img-responsive'>")

    $("#"+detailNO+"_PS1").append(obj.ProductsList[NO].PS1+" / 10.0")
    $("#"+detailNO+"_PeoductWay").append(obj.ProductsList[NO].ProductWay)
    $("#"+detailNO+"_ApplicationalAge").append(obj.ProductsList[NO].ApplicationalAge)
    $("#"+detailNO+"_WaitingTimeSeriousFirst").append(obj.ProductsList[NO].WaitingTimeSeriousFirst)
    $("#"+detailNO+"_WaitingTimeSeriousSeveral").append(obj.ProductsList[NO].WaitingTimeSeriousSeveral)
    $("#"+detailNO+"_PS2").append(obj.ProductsList[NO].PS2+" / 10.0")
    $("#"+detailNO+"_PS2_1").append("8.9 / 10.0")
    $("#"+detailNO+"_PS2_2").append("6.8 / 10.0")
    $("#"+detailNO+"_PS2_3").append("9.4 / 10.0")
    $("#"+detailNO+"_PS2_4").append("8.1 / 10.0")
    $("#"+detailNO+"_SeriousVariety").append(obj.ProductsList[NO].SeriousVariety)
    $("#"+detailNO+"_SeriousProtect").append(obj.ProductsList[NO].SeriousProtect)
    $("#"+detailNO+"_SeriousNum").append(obj.ProductsList[NO].SeriousNum)
    $("#"+detailNO+"_SeriousGroup").append(obj.ProductsList[NO].SeriousGroup)
    $("#"+detailNO+"_PeoductWay").append(obj.ProductsList[NO].PeoductWay)
    $("#"+detailNO+"_PS3").append(obj.ProductsList[NO].PS3+" / 10.0")
    $("#"+detailNO+"_PS4").append(obj.ProductsList[NO].PS4+" / 10.0")
    $("#"+detailNO+"_PS5").append(obj.ProductsList[NO].PS5+" / 10.0")
    $("#"+detailNO+"_PS3_1").append("9.4 / 10.0")
    $("#"+detailNO+"_PS3_2").append("8.3 / 10.0")
    $("#"+detailNO+"_PS3_3").append("9.6 / 10.0")
    $("#"+detailNO+"_ProductRadar").append( " <div id='ProductRadar' class='RadarSize'></div>"+
        " <script type='text/javascript'>"+
        " ProfessorRadarlarge(83,'ProductRadar','"+obj.ProductsList[NO].ProductName+"',"+obj.ProductsList[NO].PS1+","+obj.ProductsList[NO].PS2+","+obj.ProductsList[NO].PS3+","+obj.ProductsList[NO].PS4+","+obj.ProductsList[NO].PS5+") </script>")
    $("#"+detailNO+"_CompanyName2").append(obj.ProductsList[NO].CompanyName)
    $("#"+detailNO+"_CompanyName3").append(obj.ProductsList[NO].CompanyName)
    $("#"+detailNO+"_UserValueNum").append(obj.ProductsList[NO].ValueNum)
    $("#"+detailNO+"_ProductRadarUser").append( " <div id='ProductRadarUserTAG' class='RadarSize'></div>"+
        " <script type='text/javascript'>"+
        " UserRadarlarge(83,'ProductRadarUserTAG','"+obj.ProductsList[NO].ProductName+"',"+obj.ProductsList[NO].U1+","+obj.ProductsList[NO].U2+","+obj.ProductsList[NO].U3+","+obj.ProductsList[NO].U4+","+") </script>")
}


function UserRadarlargeForCampare(size,ProduceId,NameA,aA,bA,cA,dA,NameB,aB,bB,cB,dB){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(ProduceId));
    // 指定图表的配置项和数据
    option = {
        title: { text: '用户角度'  },
        tooltip: {  trigger: 'axis',  },
        legend: {
            x: 'right',
            data:[NameA,NameB,'C','D','E']
        },
        radar: [ {  indicator: [
            {text: '公司信誉', max: 10.0, color: 'black'},
            {text: '理赔速度', max: 10.0, color: 'black'},
            {text: '代理人综合服务', max: 10.0, color: 'black'},
            {text: '收益回报', max: 10.0, color: 'black'} ],
            center: ['50%','55%'],
            radius: size
        }],
        series: [{
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {  value: [aA,bA,cA,dA],
                    name: NameA } ,
                {
                    value: [aB, bB, cB, dB],
                    name: NameB
                }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function ProfessorRadarlargeForCampare(size,ProduceId,NameA,aA,bA,cA,dA,eA,NameB,aB,bB,cB,dB,eB){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(ProduceId));
    // 指定图表的配置项和数据
    option = {
        title: { text: '专家角度'  },
        tooltip: {  trigger: 'axis',  },
        legend: {
            x: 'right',
            data:[NameA,NameB,'C','D','E']
        },
        radar: [ {  indicator: [
            {text: '投保规则', max: 10.0, color: 'black'},
            {text: '危疾保障', max: 10.0, color: 'black'},
            {text: '寿险保障', max: 10.0, color: 'black'},
            {text: '保费豁免', max: 10.0, color: 'black'},
            {text: '费率', max: 10.0, color: 'black'} ],
            center: ['50%','55%'],
            radius: size
        }],
        series: [{
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [aA,bA,cA,dA,eA],
                    name: NameA
                },
                {
                    value: [aB, bB, cB, dB,eB],
                    name: NameB
                }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function LoadComparePage(textx,detailNOA,NOA,detailNOB,NOB) {
    obj = JSON.parse(textx);
    $("#"+detailNOA+"_ProductName").append(obj.ProductsList[NOA].ProductName)
    $("#"+detailNOA+"_CompanyName").append(obj.ProductsList[NOA].CompanyName)
    $("#"+detailNOA+"_ProductName2").append(obj.ProductsList[NOA].ProductName)

    $("#"+detailNOA+"_ProductContent").append( " <li><a href='#'><i class='fa fa-key' aria-hidden='true'></i>储蓄型人寿 </a></li>"+
        " <li><a href='#'><i class='fa fa-clock-o' aria-hidden='true'></i>投保年龄："+obj.ProductsList[NOA].ApplicationalAge+"</a></li>"+
        " <li><i class='fa fa-money' aria-hidden='true'></i>￥25,000 - ￥35,000</li>")

    $("#"+detailNOA+"_IMG").append(" <img src='images/companys/"+obj.ProductsList[NOA].CompanyName+".jpg' alt='Image' class='img-responsive'>")

    $("#"+detailNOA+"_PS1").append(obj.ProductsList[NOA].PS1+" / 10.0")
    $("#"+detailNOA+"_ProductWay").append(obj.ProductsList[NOA].ProductWay)
    $("#"+detailNOA+"_ApplicationalAge").append(obj.ProductsList[NOA].ApplicationalAge)
    $("#"+detailNOA+"_WaitingTimeSeriousFirst").append(obj.ProductsList[NOA].WaitingTimeSeriousFirst)
    $("#"+detailNOA+"_WaitingTimeSeriousSeveral").append(obj.ProductsList[NOA].WaitingTimeSeriousSeveral)
    $("#"+detailNOA+"_PS2").append(obj.ProductsList[NOA].PS2+" / 10.0")
    $("#"+detailNOA+"_PS2_1").append("8.9 / 10.0")
    $("#"+detailNOA+"_PS2_2").append("6.8 / 10.0")
    $("#"+detailNOA+"_PS2_3").append("9.4 / 10.0")
    $("#"+detailNOA+"_PS2_4").append("8.1 / 10.0")
    $("#"+detailNOA+"_SeriousVariety").append(obj.ProductsList[NOA].SeriousVariety)
    $("#"+detailNOA+"_SeriousProtect").append(obj.ProductsList[NOA].SeriousProtect)
    $("#"+detailNOA+"_SeriousNum").append(obj.ProductsList[NOA].SeriousNum)
    $("#"+detailNOA+"_SeriousGroup").append(obj.ProductsList[NOA].SeriousGroup)
    // $("#"+detailNOA+"_PeoductWay").append(obj.ProductsList[NOA].PeoductWay)
    $("#"+detailNOA+"_PS3").append(obj.ProductsList[NOA].PS3+" / 10.0")
    $("#"+detailNOA+"_PS4").append(obj.ProductsList[NOA].PS4+" / 10.0")
    $("#"+detailNOA+"_PS5").append(obj.ProductsList[NOA].PS5+" / 10.0")
    $("#"+detailNOA+"_PS3_1").append("9.4 / 10.0")
    $("#"+detailNOA+"_PS3_2").append("8.3 / 10.0")
    $("#"+detailNOA+"_PS3_3").append("9.6 / 10.0")
     $("#"+detailNOA+"_CompanyName2").append(obj.ProductsList[NOA].CompanyName)
    $("#"+detailNOA+"_CompanyName3").append(obj.ProductsList[NOA].CompanyName)
    $("#"+detailNOA+"_UserValueNum").append(obj.ProductsList[NOA].ValueNum)
    // 第一个产品
    // 第二个产品
    $("#"+detailNOB+"_ProductName").append(obj.ProductsList[NOB].ProductName)
    $("#"+detailNOB+"_CompanyName").append(obj.ProductsList[NOB].CompanyName)
    $("#"+detailNOB+"_ProductName2").append(obj.ProductsList[NOB].ProductName)

    $("#"+detailNOB+"_ProductContent").append( " <li><a href='#'><i class='fa fa-key' aria-hidden='true'></i>储蓄型人寿 </a></li>"+
        " <li><a href='#'><i class='fa fa-clock-o' aria-hidden='true'></i>投保年龄："+obj.ProductsList[NOB].ApplicationalAge+"</a></li>"+
        " <li><i class='fa fa-money' aria-hidden='true'></i>￥25,000 - ￥35,000</li>")

    $("#"+detailNOB+"_IMG").append(" <img src='images/companys/"+obj.ProductsList[NOB].CompanyName+".jpg' alt='Image' class='img-responsive'>")

    $("#"+detailNOB+"_PS1").append(obj.ProductsList[NOB].PS1+" / 10.0")
    $("#"+detailNOB+"_ProductWay").append(obj.ProductsList[NOB].ProductWay)
    $("#"+detailNOB+"_ApplicationalAge").append(obj.ProductsList[NOB].ApplicationalAge)
    $("#"+detailNOB+"_WaitingTimeSeriousFirst").append(obj.ProductsList[NOB].WaitingTimeSeriousFirst)
    $("#"+detailNOB+"_WaitingTimeSeriousSeveral").append(obj.ProductsList[NOB].WaitingTimeSeriousSeveral)
    $("#"+detailNOB+"_PS2").append(obj.ProductsList[NOB].PS2+" / 10.0")
    $("#"+detailNOB+"_PS2_1").append("8.9 / 10.0")
    $("#"+detailNOB+"_PS2_2").append("6.8 / 10.0")
    $("#"+detailNOB+"_PS2_3").append("9.4 / 10.0")
    $("#"+detailNOB+"_PS2_4").append("8.1 / 10.0")
    $("#"+detailNOB+"_SeriousVariety").append(obj.ProductsList[NOB].SeriousVariety)
    $("#"+detailNOB+"_SeriousProtect").append(obj.ProductsList[NOB].SeriousProtect)
    $("#"+detailNOB+"_SeriousNum").append(obj.ProductsList[NOB].SeriousNum)
    $("#"+detailNOB+"_SeriousGroup").append(obj.ProductsList[NOB].SeriousGroup)
    // $("#"+detailNOB+"_PeoductWay").append(obj.ProductsList[NOB].PeoductWay)
    $("#"+detailNOB+"_PS3").append(obj.ProductsList[NOB].PS3+" / 10.0")
    $("#"+detailNOB+"_PS4").append(obj.ProductsList[NOB].PS4+" / 10.0")
    $("#"+detailNOB+"_PS5").append(obj.ProductsList[NOB].PS5+" / 10.0")
    $("#"+detailNOB+"_PS3_1").append("9.4 / 10.0")
    $("#"+detailNOB+"_PS3_2").append("8.3 / 10.0")
    $("#"+detailNOB+"_PS3_3").append("9.6 / 10.0")
    
     $("#"+detailNOB+"_CompanyName2").append(obj.ProductsList[NOB].CompanyName)
    $("#"+detailNOB+"_CompanyName3").append(obj.ProductsList[NOB].CompanyName)
    $("#"+detailNOB+"_UserValueNum").append(obj.ProductsList[NOB].ValueNum)
    // 第二个产品
    $("#"+detailNOA+"_ProductRadarUser").append( " <div id='"+detailNOA+"_ProductRadarUserTAG' class='RadarSizeForCompare'></div>"+
        " <script type='text/javascript'>"+
        // " UserRadarlargeForCampare(83,'ProductRadarUserTAG','"+obj.ProductsList[NOA].ProductName+"',"+obj.ProductsList[NOA].U1+","+obj.ProductsList[NOA].U2+","+obj.ProductsList[NOA].U3+","+obj.ProductsList[NOA].U4+") </script>")
        " UserRadarlargeForCampare(86,'"+detailNOA+"_ProductRadarUserTAG','"+obj.ProductsList[NOA].ProductName+"',"+obj.ProductsList[NOA].U1+","+obj.ProductsList[NOA].U2+","+obj.ProductsList[NOA].U3+","+obj.ProductsList[NOA].U4+",'"+obj.ProductsList[NOB].ProductName+"',"+obj.ProductsList[NOB].U1+","+obj.ProductsList[NOB].U2+","+obj.ProductsList[NOB].U3+","+obj.ProductsList[NOB].U4+") </script>")

    $("#"+detailNOA+"_ProductRadar").append( " <div id='"+detailNOA+"_ProductRadarProfessorTAG' class='RadarSizeForCompare'></div>"+
        " <script type='text/javascript'>"+
        " ProfessorRadarlargeForCampare(86,'"+detailNOA+"_ProductRadarProfessorTAG','"+obj.ProductsList[NOA].ProductName+"',"+obj.ProductsList[NOA].PS1+","+obj.ProductsList[NOA].PS2+","+obj.ProductsList[NOA].PS3+","+obj.ProductsList[NOA].PS4+","+obj.ProductsList[NOA].PS5+",'"+obj.ProductsList[NOB].ProductName+"',"+obj.ProductsList[NOB].PS1+","+obj.ProductsList[NOB].PS2+","+obj.ProductsList[NOB].PS3+","+obj.ProductsList[NOB].PS4+","+obj.ProductsList[NOB].PS5+") </script>")

}

$(document).ready(function(){
    var textx = '{"ProductsList":[{"ProductName":"健康人生","CompanyName":"上海人寿","ProductWay":"","ApplicationalAge":"60天-60岁","WaitingTimeSeriousFirst":"180天","WaitingTimeSeriousSeveral":"","SeriousVariety":"80","SeriousProtect":"保额","SeriousNum":"1次","SeriousGroup":"不分组","MidiumVariety":"","MidiumProtect":"","MidiumNum":"","MidiumGroup":"","LightVariety":"35","LightProtect":"20%保额","LightNum":"5次","LightGroup":"不分组","DeadBefore18":"1.5倍保费","DeadAfter18":"保额","Disability":"同身故","MoneyFreeSerious":"","MoneyFreeMedium":"","MoneyFreeLight":"轻症","MoneyFreeCost":"","ADDSpeccialDisease":"","ADDLIFE":"","ADDDISEASE":"","ADDLIFEMONEY":"","BonusWay":"","BonusProtect":"","BonusLeast":"","ValueNum":12,"PScore":4,"PS1":9.9,"PS2":8.3,"PS3":9.1,"PS4":7.7,"PS5":7.4,"UScore":3.5,"U1":6.4,"U2":9.5,"U3":7.3,"U4":5.6},{"ProductName":"福禄倍佑","CompanyName":"太平人寿","ProductWay":"","ApplicationalAge":"28天-65岁","WaitingTimeSeriousFirst":"90天","WaitingTimeSeriousSeveral":"1年","SeriousVariety":"80","SeriousProtect":"保额+累计红利保额","SeriousNum":"3次","SeriousGroup":"分组","MidiumVariety":"","MidiumProtect":"","MidiumNum":"","MidiumGroup":"","LightVariety":"20","LightProtect":"20%保额+累计红利保额","LightNum":"1次","LightGroup":"不分组","DeadBefore18":"保费","DeadAfter18":"max（保额+累计红利保额，保费，现价）","Disability":"","MoneyFreeSerious":"重疾病","MoneyFreeMedium":"","MoneyFreeLight":"","MoneyFreeCost":"","ADDSpeccialDisease":"","ADDLIFE":"","ADDDISEASE":"","ADDLIFEMONEY":"满期金","BonusWay":"增额红利","BonusProtect":"非保证红利","BonusLeast":"","ValueNum":8,"PScore":2.5,"PS1":5.5,"PS2":4.2,"PS3":7.9,"PS4":2.7,"PS5":3.6,"UScore":1.5,"U1":3.3,"U2":4.2,"U3":2.9,"U4":2.7},{"ProductName":"危疾加倍保","CompanyName":"Prudential","ProductWay":"","ApplicationalAge":"","WaitingTimeSeriousFirst":"","WaitingTimeSeriousSeveral":"","SeriousVariety":"54","SeriousProtect":"保额+红利","SeriousNum":"不限次数限额度","SeriousGroup":"分组","MidiumVariety":"","MidiumProtect":"","MidiumNum":"","MidiumGroup":"","LightVariety":"59","LightProtect":"25%保额","LightNum":"不限次数限额度","LightGroup":"分组","DeadBefore18":"保额+红利","DeadAfter18":"保额+红利","Disability":"","MoneyFreeSerious":"重疾病","MoneyFreeMedium":"","MoneyFreeLight":"","MoneyFreeCost":"","ADDSpeccialDisease":"特定重疾（6种）：额外20%保额","ADDLIFE":"","ADDDISEASE":"","ADDLIFEMONEY":"","BonusWay":"增额红利","BonusProtect":"非保证红利","BonusLeast":"","ValueNum":6,"PScore":4.5,"PS1":9.9,"PS2":8.5,"PS3":9.2,"PS4":8.5,"PS5":9.5,"UScore":4,"U1":8.9,"U2":9.4,"U3":9.1,"U4":6.4},{"ProductName":"危疾全护保","CompanyName":"Prudential","ProductWay":"","ApplicationalAge":"","WaitingTimeSeriousFirst":"","WaitingTimeSeriousSeveral":"","SeriousVariety":"57","SeriousProtect":"保额+红利","SeriousNum":"不限次数限额度","SeriousGroup":"分组","MidiumVariety":"","MidiumProtect":"","MidiumNum":"","MidiumGroup":"","LightVariety":"18","LightProtect":"25%保额","LightNum":"3次","LightGroup":"分组","DeadBefore18":"保额+红利","DeadAfter18":"保额+红利","Disability":"","MoneyFreeSerious":"","MoneyFreeMedium":"","MoneyFreeLight":"","MoneyFreeCost":"","ADDSpeccialDisease":"特定重疾（6种）：额外20%保额","ADDLIFE":"","ADDDISEASE":"","ADDLIFEMONEY":"","BonusWay":"增额红利","BonusProtect":"非保证红利","BonusLeast":"","ValueNum":12,"PScore":4,"PS1":7.6,"PS2":8.4,"PS3":9.1,"PS4":6.7,"PS5":9.7,"UScore":4,"U1":7.7,"U2":8.4,"U3":9.5,"U4":6.9}]}';

    var ProductsNum=4
    obj = JSON.parse(textx);
    for(var i=0;i<ProductsNum;i++){
        //用户榜的产品列表
        PrintProductsListFromUser("detail"+(i+1)+".html",obj.ProductsList[i].ProductName,"储蓄型人寿",obj.ProductsList[i].ApplicationalAge,obj.ProductsList[i].ValueNum,obj.ProductsList[i].CompanyName,"images/companys/"+obj.ProductsList[i].CompanyName+".jpg",obj.ProductsList[i].UScore,obj.ProductsList[i].U1,obj.ProductsList[i].U2,obj.ProductsList[i].U3,obj.ProductsList[i].U4);
    }
    for( i=0;i<ProductsNum;i++){
        //专家榜的产品列表
        PrintProductsListFromProfessional("detail"+(i+1)+".html",obj.ProductsList[i].ProductName,"储蓄型人寿",obj.ProductsList[i].ApplicationalAge,obj.ProductsList[i].ValueNum,obj.ProductsList[i].CompanyName,"images/companys/"+obj.ProductsList[i].CompanyName+".jpg",obj.ProductsList[i].PScore,obj.ProductsList[i].PS1,obj.ProductsList[i].PS2,obj.ProductsList[i].PS3,obj.ProductsList[i].PS4,obj.ProductsList[i].PS5);
    }
    //加载产品详细页的信息
    loaddetailpage(textx,"detail1",0)
    loaddetailpage(textx,"detail2",1)
    loaddetailpage(textx,"detail3",2)
    loaddetailpage(textx,"detail4",3)

    LoadComparePage(textx,"Compare1",0,"Compare2",1)
});

