window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

// toggle page
const banner = document.querySelector(".banner");

banner.addEventListener("click", (e) => {
  const targetBtn = e.target.closest(".btn-wrapper");

  if (targetBtn) {
    // clear btn style
    document.querySelectorAll(".btn-wrapper").forEach((item) => {
      item.style = "opacity : 0.5";
      item.querySelector(".btn").style = "box-shadow:  0";
      item.querySelector(".btn-highlight").style = "display: none";
    });

    // set target style
    toggleBtn(targetBtn.classList[1], targetBtn, "#bfc9f0");
  }
});

function toggleBtn(btnName, element) {
  element.style = "opacity : 1";
  element.querySelector(".btn").style = `box-shadow:  8px 8px 0px 0px ${
    btnName === "btn-rocket" ? "#bfc9f0" : "#eee5ff"
  } `;
  element.querySelector(".btn-highlight").style = "display: inline";

  if (btnName === "btn-rocket") {
    document.querySelector(".page-rocket").style = "display: block";
    document.querySelector(".page-space").style = "display: none";
  }
  if (btnName === "btn-space") {
    document.querySelector(".page-rocket").style = "display: none";
    document.querySelector(".page-space").style = "display: block";
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

ScrollTrigger.refresh();

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about",
      markers: false,
      pin: true,
      scrub: true,
      start: "top 15%",
    },
  })
  .to(".jobs", {
    transform: "translateY(calc(-100% * 1 / 3))",
  });

const expContent = [
  `
  <div class="exp-content">
    <span class="bold" > 前端教練 | 廖洧杰</span >
    <ul>
      <li>
        2016-2022 過往經歷：<a href="https://www.hexschool.com/"></a
        >、<a
          href="https://www.facebook.com/%E7%81%AB%E7%AE%AD%E9%9A%8A%E5%9F%B9%E8%A8%93%E7%87%9F-113926539963626"
        >六角學院校長</a
        >
        高雄火箭隊前端教練
      </li>
      <li>
        2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位
      </li>
      <li>2013-2019 授課人數：線上+線下授課學員超過 25,000 位</li>
      <li>2014-2019 線下授課：高雄大學前端領域兼任講師</li>
      <li>
        2007-2019 實務經驗：經手超過 100
        個實際專案，其領域不乏中小企業、政府專案、銀行系統
      </li>
    </ul></div>
 `,
  `
  <div class="exp-content"><span class="bold" > 前端教練 | 穎旻</span >
    <ul>
      <li>六角學院前端工程師</li>
      <li>六角學院前端講師</li>
      <li>金龍國小教育訓練講師</li>
      <li>國泰產險教育訓練講師</li>
    </ul>
  </div>`,
  `
  <div class="exp-content">
    <span class="bold" > 後端教練 | 賈斯汀</span >
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
    <span class="bold" > UI 教練 | 卡斯伯</span >
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

/*gsap.fromTo(
  ".carousel",
  {
    xPercent: -33,
  },
  {
    xPercent: 33,
    duration: 1,
    repeatDelay: 0.5,
    repeat: -1,
    yoyo: "true",
    ease: "none",
  }
);
*/
