var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   var swiper2 = new Swiper(".mySwiper2", {
//     slidesPerView: 3,
//     grid: {
//       rows: 2,
//     },
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

//宣告預設表單內容為空
var initSubject = '', initBody = '';

//按下傳送按鈕後執行
function submitHandler() {
    var to = "m25563017@gmail.com";//寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
    var name = nameText.value;//讀取ID為 nameTextuser 物件中的值
    var email = emailText.value;
    var subject = subText.value;
    //把user填的資料都塞到 mail body 中
    var body = "" + bodyText.value + '%0A%0A%0A';//%0A是換行 換了三行
    body += "From：" + nameText.value + '%0A';
    body += "Email：" + emailText.value + '%0A';
    //傳送的主要程式碼
    mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    mailTo.click();
}
//在body onload
function init() {
    subText.value = initSubject;
    toText.value = initTo;
    bodyText.value = initBody;
}

// 主要用於在網頁中跳轉到指定的錨點位置
function scrollToAnchor(aid) {
    // 使用 $("a[name='" + aid + "']") 語句查找錨點標籤
    var aTag = $("a[name='" + aid + "']");
    // aTag.offset().top 屬性來獲取標籤的實際位置，並將它作為 scrollTop 的值。
    $('html,body').animate({ scrollTop: aTag.offset().top }, 300);
  }
  $("li:contains('ABOUT')").click(function () {
    scrollToAnchor('top');
  });
  
  $("#gosuccess").click(function () {
    window.scrollTo(0, 0);
  });