// DOM Content Loaded
$(function(){
    // スライドショー
    $('.slider').slick({
        arrows: true, //スライド右と左の矢印。矢印表示自体はcssで
        pauseOnFocus:false,
        autoplay: false,//自動再生
        adaptiveHeight: true,//高さの自動調整
        dots: true, //スライドしたの小さい丸。スライダ。丸の位置はslick-theme.cssの.slick-dotsを変える。色は要素検証でどこ変えればいいかわかる。
        autoplaySpeed:2600,//スピード 5秒=5,000
        fade:true, //スライドをフェードで切り替え
        speed:1500,
        pauseOnHover: false,//ホバーしたときにスライドショー止まるか
        // centerMode: true,
        prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>'
    });
});


// アコーディオン

$(function(){
	$(".accordion li a").on("click", function() {
		$(this).next().slideToggle();
		// activeが存在する場合
		if ($(this).children(".accordion_icon").hasClass('active')) {
			// activeを削除
			$(this).children(".accordion_icon").removeClass('active');
		}
		else {
			// activeを追加
			$(this).children(".accordion_icon").addClass('active');
		}
	});

});
