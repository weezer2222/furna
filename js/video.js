//ビデオのアニメーション
$(function(){
        //videoタグの読み込み
        var video = $('video');
         //ホイールの初期値
        var wheelNum = 0;
        //videoタグのz座標の初期値
        var posZ = -20000;
        //ホールの値を加算する変数
        var scrollValue = 0;
        //ウインドウの幅と高さ
        var w = $(window).width();
        var h = $(window).height();
        //マージンで戻して中央に配置
        var leftMargin = (w / 2) * -1;
        var brandname = $('.brandname');


        //JSでCSSを操作　初期
        $(video).css({
            'width': w + 'px',
            'height': h + 'px',
            'left':'50%',
            'top':0,
            'margin-left': leftMargin + 'px',
            'transform': 'translate3d(0, 0,' + posZ + 'px)'
        });

        //JSでCSSを操作　マウスのスクロール中
        $(window).on('mousewheel',function(evt) {
            // evt.preventDefault(); 
            //画面が動かないようにイベントを停止

            //Z座標が動く範囲
            if(posZ > -21000 && posZ <= -2000){

                //スクロールの値をZ座標に代入
                wheelNum = evt.originalEvent.deltaY;
                scrollValue = Math.floor(wheelNum*100)/10;
                posZ += scrollValue;

                // console.log('posZ' + posZ);

                // CSS Translate3dで奥行きを移動
                $(video).css({
                    'transform': 'translate3d(0, 0,' + posZ + 'px)'
                });
            } else {
                //スクロールが止まったとき
                if(posZ > -2100){
                  $('.brandlogo_top').fadeIn(1200);
                  $('.brandname_top').animate({'top':'60px'},1200);
                  $('.scroll').fadeOut(1200);
                  $('.sidemenultext_top').animate({'left':'67px'},1200);
                  $('.sidemenul_top_hr').animate({'left':'50px'},1200);
                  $('.sidemenurtext_top').animate({'right':'57px'},1200);
                  $('.sidemenur_top_hr').animate({'right':'25px'},1200);
                  $('.contacttext_top').animate({'right':'34px'},1200);
                  $('.contacthr_top').animate({'right':'190px'},1200);

                  // スマホ
                  $('.beforeopen_top').fadeIn(1200);
                }
            }
        });
	});
