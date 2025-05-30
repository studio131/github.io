$(function(){

//年齢確認cookie確認
//*********************************************************************************	

var ua = navigator.userAgent;

if(ua.indexOf('bot') > 0 || ua.indexOf('Bot') > 0){
  /* botはそのまま表示 */
}else{
 if($.cookie("ageCheckNum") == undefined) {//cookieがなかったら
    //ページ遷移
    location.href =  '/products/tsparkofficial/age_check/?back='+ location.pathname + location.search + location.hash;
  }
}
    


}
       )