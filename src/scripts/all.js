window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

// toggle page
const banner = document.querySelector(".banner");

banner.addEventListener("click", (e) => {
  const targetBtn = e.target.closest(".banner-btn");

  if (targetBtn) {
    // clear btn style
    document.querySelectorAll(".banner-btn").forEach((item) => {
      item.style = "opacity : 0.5";
      item.querySelector(".banner-btn-content").style = "box-shadow:  0";
      item.querySelector(".btn-highlight").style = "display: none";
    });

    // set target style
    toggleBtn(targetBtn.classList[1], targetBtn);
  }
});

function toggleBtn(btnName, element) {
  element.style = "opacity : 1";

  // change box shadow color
  element.querySelector(
    ".banner-btn-content"
  ).style = `box-shadow:  8px 8px 0px 0px ${
    btnName === "banner-rocket" ? "#bfc9f0" : "#eee5ff"
  } `;

  element.querySelector(".btn-highlight").style = "display: inline";

  if (btnName === "banner-rocket") {
    document.querySelector(".page-rocket").style = "display: block";
    document.querySelector(".page-space").style = "display: none";
    setTimeout(() => {
      checkIsMoblie();
    }, 1000);
  }
  if (btnName === "banner-space") {
    document.querySelector(".page-rocket").style = "display: none";
    document.querySelector(".page-space").style = "display: block";

    setTimeout(() => {
      spaceCarousel();
    }, 1000);
  }
  ScrollTrigger.refresh();
}

// toggle coach
const coachList = document.querySelector(".bootcamp-coach-list");

coachList.addEventListener("click", (e) => {
  // clear items style
  const items = document.querySelectorAll(".bootcamp-coach-list li");
  items.forEach((item) => {
    item.querySelector("div").style = "background: white";
  });

  // set target style
  const li = e.target.closest("li");
  li.querySelector("div").style = "background: #e5ebff";
  toggleContent(li.classList[0]);
});

function toggleContent(name) {
  const content = document.querySelector(".coach-exp");
  if (name === "weijie") {
    content.innerHTML = expContent[0];
  }
  if (name === "yinmin") {
    content.innerHTML = expContent[1];
  }
  if (name === "justin") {
    content.innerHTML = expContent[2];
  }
  if (name === "casper") {
    content.innerHTML = expContent[3];
  }
}
const expContent = [
  `
  <div class="exp-content">
    <span class="font-lg bold" > 前端教練 | 廖洧杰</span >
    <ul>
      <li>
        2016-2022 過往經歷：<a href="https://www.hexschool.com/"></a
        >、<a
          href="https://www.facebook.com/%E7%81%AB%E7%AE%AD%E9%9A%8A%E5%9F%B9%E8%A8%93%E7%87%9F-113926539963626"
        >六角學院校長</a
        >
        <a href="https://www.facebook.com/%E7%81%AB%E7%AE%AD%E9%9A%8A%E5%9F%B9%E8%A8%93%E7%87%9F-113926539963626
        ">高雄火箭隊</a>前端教練
      </li>
      <li>
        2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位
      </li>
      <li>2013-2019 授課人數：線上+線下授課學員超過 25,000 位</li>
      <li>2014-2019 線下授課：<a href="https://www.im.nuk.edu.tw/?page_id=95"
      >高雄大學前端領域兼任講師</a
    ></li>
      <li>
        2007-2019 實務經驗：經手超過 100
        個實際專案，其領域不乏中小企業、政府專案、銀行系統
      </li>
    </ul></div>
 `,
  `
  <div class="exp-content">
    <span class="font-lg bold" > 前端教練 | 穎旻</span >
    <ul>
      <li>六角學院前端工程師</li>
      <li>六角學院前端講師</li>
      <li>金龍國小教育訓練講師</li>
      <li>國泰產險教育訓練講師</li>
    </ul>
  </div>`,
  `
  <div class="exp-content">
    <span class="font-lg bold" > 後端教練 | 賈斯汀</span >
    <ul>
      <li>高雄市警察局縣市合併內外部整合</li>
      <li>嘉義縣警察局全球資訊網與內部知識網</li>
      <li>總統府全球資訊網系統維護及開發</li>
      <li>總統府 APP 新聞即時通系統開發</li>
      <li>金管會 EIP SSO 整合</li>
      <li>經濟部工業局電子書包加值應用計畫系統規劃、設計開發</li>
      <li>國立海生館活動與報名系統規劃開發</li>
      <li>國立海生館海洋教育網規劃開發</li>
      <li>台灣淨水器材百科商務平台規劃開發</li>
      <li>高雄市小學電子書包試行計畫</li>
      <li>屏東國立海生館活動與報名系統</li>
      <li>屏東國立海生館海洋教育網</li>
      <li>威錦水器材百科補助計畫</li>
      <li>supermediastore（美國購物網站）</li>
      <li>高雄捷運網站</li>
      <li>高雄世運志工服務系統</li>
      <li>高雄市 85 大樓招商網</li>
      <li>高雄市國稅局稅務宣導活動網站</li>
      <li>高雄市民政局業務資訊化委外作業</li>
      <li>高雄市國稅局全球資訊網</li>
      <li>
        高雄市府衛生局中英全球資訊網 高雄市新聞處圖文影像管理系統
      </li>
      <li>
        高雄市政府文化局中英文網站 屏東縣政府旅遊網 屏東縣政府招商網
      </li>
      <li>行政院南區服務中心網站 經濟部水利署南區水資源局 105</li>
      <li>年度業務及全球資訊網站維護及功能擴充計畫</li>
    </ul>
  </div>
`,
  `
  <div class="exp-content">
    <span class="font-lg bold" > UI 教練 | 卡斯伯</span >
    <ul>
      <li>
        2016-2022 過往經歷：<a href="https://www.hexschool.com/"
        >六角學院</a
        >共同創辦人
      </li>
      <li>
        2016-2022 近期授課經驗：<a
          href="https://www.hexschool.com/courses/vue-training.html"
        >Vue 3 直播班講師</a
        >、
        <a
          href="https://www.youtube.com/watch?v=qRZLtIcPdls&list=RDCMUC-b2nGm0xLzic38Byti0VjA&start_radio=1"
        >從 Figma 到 VSCode，設計做到網頁切版</a
        >
      </li>
      <li>
        2013-2016
        實務經驗：鴻海軟體工程師，設計師轉職前端工程師，擅長將複雜觀念用圖形化方式呈現
      </li>
      <li>六屆 IT 鐵人邦獲選紀錄</li>
      <li>Modern Web 研討會講者</li>
      <li>線上課程超過萬人註冊</li>
      <li>
        研討會經驗-經驗豐富的技術開發者 2017 Modern Web 技術講者
      </li>
      <li>2021 {Laravel x Vue} Conf 技術講者</li>
      <li>五屆 IT 鐵人賽優選</li>
      <li>技術 Blog - 卡斯伯前端</li>
    </ul>
  </div>
  `,
];

function mobileToggleCoach() {
  const imageList = document.querySelector(".bootcamp-coach-list");

  let currentIndex = 0;

  imageList.querySelectorAll("li").forEach((item) => {
    totalWidth += item.clientWidth + 20;
  });

  imageList.addEventListener("scroll", function () {
    const scrollLeft = imageList.scrollLeft;
    const wrapperWidth = imageList.clientWidth;

    // 計算可視區域中心位置的左右邊界
    const centerLeft = scrollLeft + wrapperWidth / 2;
    const centerRight = scrollLeft + wrapperWidth / 2;

    // 找到滑動到畫面中央的圖片
    let centeredImage = null;

    const images = Array.from(imageList.querySelectorAll("li"));
    for (const image of images) {
      const imageLeft = image.offsetLeft;
      const imageRight = image.offsetLeft + image.offsetWidth;

      if (imageLeft <= centerLeft && imageRight >= centerRight) {
        centeredImage = image;
        break;
      }
    }

    if (centeredImage) {
      // 取得圖片的索引和說明
      const imageIndex = Array.from(images).indexOf(centeredImage);
      console.log(currentIndex, imageIndex);
      if (currentIndex !== imageIndex) {
        currentIndex = imageIndex;
        document.querySelector(".coach-exp").innerHTML = expContent[imageIndex];
      } else {
      }
    }
  });
}

// about animation
function aboutScroll() {
  const targetHeight = document.querySelector(".about-rocket").offsetHeight;
  const targetStart = (window.innerHeight - targetHeight) / 2;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about-rocket",
        markers: false,
        pin: true,
        scrub: true,
        start: `top: ${targetStart}`,
      },
    })
    .to(".job-list", {
      transform: "translateY(calc(-100% * 1 / 3 - 32px))",
    });
}

// 檢查設備是否為手機或特定解析度
function checkIsMoblie(
  mobileEvent = mobileToggleCoach,
  desktopEvent = aboutScroll
) {
  const isMobile = window.matchMedia("(max-width: 428px)").matches;
  // 條件性地綁定事件處理程序
  if (isMobile) {
    mobileEvent();
  } else {
    desktopEvent();
  }
}

// carousel animation
function spaceCarousel() {
  let totalWidth = -24;

  const carouselItems = document.querySelectorAll(".carousel li");
  carouselItems.forEach((item) => {
    totalWidth += item.offsetWidth + 24;
  });

  gsap.fromTo(
    ".carousel",
    {
      x: 0,
    },
    {
      x: -totalWidth + window.innerWidth,
      duration: 20,
      repeatDelay: 1.5,
      repeat: -1,
      yoyo: "true",
      ease: "none",
    }
  );
}
