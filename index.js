new WOW().init();

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
  $('html,body').animate({ scrollTop: aTag.offset().top }, 500);
}
$("#btn_Top").click(function () {
  scrollToAnchor('Top');
});

$("#btn_ABout").click(function () {
  scrollToAnchor('ABOUT');
});

$("#btn_AWARDS").click(function () {
  scrollToAnchor('AWARDS');
});

$("#btn_PORTFOLIO").click(function () {
  scrollToAnchor('PORTFOLIO');
});

$("#btn_SCHOOL").click(function () {
  scrollToAnchor('SCHOOL');
});

$("#btn_CONTACT").click(function () {
  scrollToAnchor('CONTACT');
});
// ------------------------------------
const showDetail = $("dialog.SongDetail");
const SongPic = $("div.songpic")
SongPic.on("click", function () {
  showDetail.css({ display: "flex"});

  const src_S = $(this).find("img").prop("src");
  const src_T = src_S.replace(".png", "") + "_T.png";
  $(showDetail.children().children()[0]).prop("src", src_S);
  $(showDetail.children().children()[1]).prop("src", src_T);
})

/* 任意點擊關閉浮窗 */
showDetail.on("click", function (a) {
  if ($(a.target).is("img") || $(a.target).is("div") || $(a.target).is("section") || $(a.target).is("price") || $(a.target).is("h6") || $(a.target).is("p")) {
    return;
  } else {
    showDetail.css({ display: "none", });
    isPaused = false;
  }
})

/* 阻止當前事件冒泡 */
function stopBubble(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();  //w3c
  } else {
    window.event.cancelBubble = true; //IE
  }
}

// --------------------------------------------
const showotherDetail = $("dialog.otherDetail");
const OtherPic = $("div.otherpic")
OtherPic.on("click", function () {
  showotherDetail.css({ display: "flex"});

  const src_S = $(this).find("img").prop("src");
  $(showotherDetail.children().children()[0]).prop("src", src_S);
})

/* 任意點擊關閉浮窗 */
showotherDetail.on("click", function (a) {
  if ($(a.target).is("img") || $(a.target).is("div") || $(a.target).is("section") || $(a.target).is("price") || $(a.target).is("h6") || $(a.target).is("p")) {
    return;
  } else {
    showotherDetail.css({ display: "none", });
    isPaused = false;
  }
})

/* 阻止當前事件冒泡 */
function stopBubble(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();  //w3c
  } else {
    window.event.cancelBubble = true; //IE
  }
}