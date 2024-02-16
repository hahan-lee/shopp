(function ($) {
  const shop = {
    init() {
      this.header();
      this.section1();
      this.section2();
      this.footer();
    },
    header() {
      //네비게이션
      //1. 메인메뉴에 마우스 올리면 서브메뉴 보이기
      // $('.main-btn').on({
      //     mouseenter(e){
      //         // $('.sub').stop().slideDown(300);
      //         $('.sub').stop().show(0);
      //     }
      // });

      $(".main-btn").on({
        mouseenter(e) {
          $(".sub").stop().show(0);
        },
        // 탭키 선택 포커스인(focus === focusin) <-> 반대 (blur === focusout)
        focus() {
          $(".sub").stop().show(0);
        },
      });

      //2.서브메뉴에 마우스 아웃 시 서브메뉴 올리기
      //2. 수정보완  : nav(네비게이션)에 마우스 아웃 시 => 서브메뉴 숨긴다.

      $("#nav").on({
        mouseleave(e) {
          // $('.sub').stop().slideUp(300);
          $(".sub").stop().hide(0);
        },
      });
    },
    section1() {
      //1.변수
      //2.메인슬라이드
      //3.다음카운트
      //4.자동타이머함수

      let cnt = 0;

      //메인슬라이드함수 3개 우측에서 좌측으로 이동 0 1 2
      function mainSlide() {
        $(".slide-wrap")
          .stop()
          .animate({ top: `${-300 * cnt}px` }, 600, function () {
            if (cnt > 2) cnt = 0;
            $(".slide-wrap")
              .stop()
              .animate({ top: `${-300 * cnt}px` }, 0);
          });
      }

      function nextCount() {
        cnt++;
        mainSlide();
      }

      function autoTimer() {
        setInterval(nextCount, 3000);
      }

      autoTimer();
    },
    section2() {
      //갤러리버튼
      //hasClass() removeClass() addClass()
      $(".gallery-btn").on({
        click() {
          $(".gallery-btn").addClass("on");
          $(".notice-btn").addClass("on");
          $(".gallery-box").show(0);
          $(".notice-box").hide(0);
        },
      });

      //공지사항버튼
      $(".notice-btn").on({
        click() {
          $(".gallery-btn").removeClass("on");
          $(".notice-btn").removeClass("on");
          $(".gallery-box").hide(0);
          $(".notice-box").show(0);
        },
      });

      //팝업버툰
      $(".popup-btn").on({
        click() {
          //display:block 을 flex로 교체
          $(".popup").show().css({ display: "flex" });
        },
      });

      //   팝업닫기버튼
      $(".close-btn").on({
        click() {
          // hide => none과 같다.
          //   $(".popup").hide();
          $(".popup").css({ display: "none" });
        },
      });

      //   //팝업버튼
      //   $(".popup-btn").on({
      //     click() {
      //       //display:block 을 flex로 교체
      //       $(".popup").addClass("on");
      //     },
      //   });

      //   //   팝업닫기버튼
      //   $(".close-btn").on({
      //     click() {
      //       $(".popup").removeClass("on");
      //     },
      //   });
    },
    footer() {},
  };

  shop.init();
})(jQuery);
