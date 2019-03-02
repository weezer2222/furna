



//サイドメニューのアニメーション
// var body = document.getElementsByTagName('body')[0];
//
// function fadeOut() {
//     body.classList.add('bodyfadeout');
// }
//
// function linkUrl() {
//     location.href = './about.html'
// }
// var sidemenulanim = document.getElementById('sidemenulanim');
//
// var cover = document.getElementById('cover');
//
// var cover2 = document.getElementById('cover2');
//
// sidemenulanim.addEventListener('click', function() {
//     cover.classList.add('anime1');
// });
//
// sidemenulanim.addEventListener('click', function() {
//     cover2.classList.add('anime2');
//     // setTimeout(fadeOut, 1000);
//     setTimeout(linkUrl, 1300);
//
// });


// sidemenulanim.addEventListener('click', function() {
//     cover.classList.add('anime5');
//     setTimeout(fadeOut, 1000);
//     setTimeout(linkUrl, 1000);
// });

$(function(){

    var cover1 = $('.cover1');
    var cover2 = $('.cover2');

    $('.sidemenul').find('a').on('click',function(evt){
            //リンクしないようにイベントを停止する
            // evt.preventDefault();

            $(cover1).addClass('left-in');
            $(cover2).addClass('left-in');
            setTimeout(linkUrl, 1400);
    });
    $('.sidemenur').find('a').on('click',function(evt){
            //リンクしないようにイベントを停止する
            // evt.preventDefault();

            $(cover1).addClass('right-in');
            $(cover2).addClass('right-in');
            console.log('next');
            setTimeout(linkUrl2, 1400);

    });
    $('.brandlogo').find('a').on('click',function(evt){

            $(cover1).addClass('left-in');
            $(cover2).addClass('left-in');
            console.log('next');
            setTimeout(linkUrl3, 1400);

    });
    $('.contacttext').find('a').on('click',function(evt){

            $(cover1).addClass('right-in');
            $(cover2).addClass('right-in');
            console.log('next');
            setTimeout(linkUrl4, 1400);

    });

});

function linkUrl() {
    location.href = './about.html'
}

function linkUrl2() {
    location.href = './product.html'
}

function linkUrl3() {
    location.href = './index.html'
}

function linkUrl4() {
    location.href = './contact.html'
}

//トップページ用
$(function(){

    var cover1 = $('.cover1');
    var cover2 = $('.cover2');

    $('.sidemenul_top').find('a').on('click',function(evt){
            //リンクしないようにイベントを停止する
            // evt.preventDefault();

            $(cover1).addClass('left-in');
            $(cover2).addClass('left-in');
            setTimeout(linkUrl, 1400);
    });
    $('.sidemenur_top').find('a').on('click',function(evt){
            //リンクしないようにイベントを停止する
            // evt.preventDefault();

            $(cover1).addClass('right-in');
            $(cover2).addClass('right-in');
            console.log('next');
            setTimeout(linkUrl2, 1400);

    });
    $('.brandlogo_top').find('a').on('click',function(evt){

            $(cover1).addClass('left-in');
            $(cover2).addClass('left-in');
            console.log('next');
            setTimeout(linkUrl3, 1400);

    });
    $('.contacttext_top').find('a').on('click',function(evt){

            $(cover1).addClass('right-in');
            $(cover2).addClass('right-in');
            console.log('next');
            setTimeout(linkUrl4, 1400);

    });

});


// $(function(){
// 	$('.sidemenultext_top').hover(function(){
// 		$(this).stop().animate({'left':'100px'},1200);
// 	},function(){
// 		$(this).stop().animate({'left':'200px'},1200);
// 	});
// });

// $(function(){
// 	$('.sidemenultext_top').hover(function(){
// 		$(this).animate({'left':'500px'},1200);
// 	},function(){
// 		$(this).animate({'left':'1000px'},1200);
// 	})
// })
