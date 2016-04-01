 var browser = {
     versions: function() {
         var u = navigator.userAgent,
             app = navigator.appVersion;
         return { //移动终端浏览器版本信息                                    
             trident: u.indexOf('Trident') > -1, //<a href="https://www.baidu.com/s?wd=IE%E5%86%85%E6%A0%B8&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YLPH9huHN9PH61P1u9PH-B0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3Erj03nWczPjTzrHmvrHnsrjRz" target="_blank" class="baidu-highlight">IE内核</a>                                    
             presto: u.indexOf('Presto') > -1, //opera内核                                    
             webKit: u.indexOf('AppleWebKit') > -1, //苹果、<a href="https://www.baidu.com/s?wd=%E8%B0%B7%E6%AD%8C&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YLPH9huHN9PH61P1u9PH-B0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3Erj03nWczPjTzrHmvrHnsrjRz" target="_blank" class="baidu-highlight">谷歌</a>内核                                    
             gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核                                   
             mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端                                    
             ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端                    
             android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者<a href="https://www.baidu.com/s?wd=uc%E6%B5%8F%E8%A7%88%E5%99%A8&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1YLPH9huHN9PH61P1u9PH-B0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6KdThsqpZwYTjCEQLGCpyw9Uz4Bmy-bIi4WUvYETgN-TLwGUv3Erj03nWczPjTzrHmvrHnsrjRz" target="_blank" class="baidu-highlight">uc浏览器</a>                                    
             iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器                       
             iPad: u.indexOf('iPad') > -1, //是否iPad          
             webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部    
             google: u.indexOf('Chrome') > -1
         };
     }(),
     language: (navigator.browserLanguage || navigator.language).toLowerCase()
 }
 //document.writeln("语言版本: " + browser.language);
 //document.writeln(" 是否为移动终端: " + browser.versions.mobile);
