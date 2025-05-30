//使い方
//<ul class="tab-menu">の<li>に対して
//class="tab"を付ける<li class="tab">
//tab.jsが動きます。
//,tabの数と.tab-contentsの数を合わせる
//1番目の.tabと1番目の.tab-contentsがリンクしてタブが開きます。
//.tab-contentsは<ul class="tab-menu"></ul>の後に書いてください。
//
//スマホ版はクリック処理となります。
//<ul class="tab-menu">を2項目ずつ分割しているので
//PCとは別のSP用のソースになってます。
//タブが開く位置の調整が難しかったためです。


//////////////////////////////////////////////////
//処理の説明
//タブli.tabにマウスが乗ったら
//.tabと.tab-contentsに付いているクラスactiveを削除
//オンマウスされた.tabに.activeを追加
//const index → $(".tab").index(this);オンマウスされた.tabに番号をつける

//index(this)で、クリックしたタブがtabクラスを持つ要素の中で何番目の要素なのか、インデックス番号を取得することができます
//eq()メソッドは、インデックス番号を指定することで、特定の要素だけを取得するメソッドです。
const md = window.matchMedia('(min-width: 1119px)');
function checkWindow(wid) {
    if (wid.matches) {
        // 画面サイズが1119px以上に適用
        // PC処理
        $('.tab,.tab-contents').on({
            //オンマウス処理
            'mouseenter': function () {
                //最初に.activeがあった場合は削除する
                $(".tab, .tab-contents").removeClass("active");
                //.tabに.activeを追加
                $(this).addClass("active");
                //オンマウスされた.tabに番号をつける
                const index = $(".tab").index(this);
                //const indexと同じ番号の.tab-contentsに.activeを付ける
                $(".tab-contents").eq(index).addClass("active");
            },
            //マウスが離れた時の処理
            'mouseleave': function () {
                //.tabと.tab-contentsに付いているクラスactiveを削除
                $(".tab, .tab-contents").removeClass("active");
            }
        });
        //endif 
    } else {
        // 画面サイズが1119px以下に適用
        //スマホ処理
        //クリックに処理を変更
        $(".tab").on("click", function () {
            //.tabをクリックした際のclass名を取得
            var _class = $(this).attr("class");
            //.tabだった場合
            if (_class == "tab") {
                //最初に.activeがあった場合は削除する
                $(".tab, .tab-contents").removeClass("active");
                //.tabに.activeを追加
                $(this).addClass("active");
                //クリックされた.tabに番号をつける
                const index = $(".tab").index(this);
                //const indexと同じ番号の.tab-contentsに.activeを付ける
                $(".tab-contents").eq(index).addClass("active");
            } else {
                //.tab以外だった場合（この場合は.activeがついている場合）
                $(".tab, .tab-contents").removeClass("active");
            }
        });
        //end else
    }
    //end checkWindow
}

//load時にも処理を走らせる。
checkWindow(md);
md.addListener(checkWindow);
//設定したブレイクポイントでページをリロード
//ブラウザを小さくした時に処理を再度実行する
const breakpoint = window.matchMedia("(min-width: 1119px)");
breakpoint.addEventListener("change", () => {
    window.location.reload();
});
