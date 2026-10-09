/* ============================================================
   多语言支持：简中 / 繁中 / 英文
   用法：给要翻译的元素加 data-i18n="键名"，语言自动切换并记住选择
   ============================================================ */

const I18N = {

  /* ---------- 简体中文（默认） ---------- */
  zh: {
    lead: "我叫 LinQi，欢迎来到培养皿。",
    about_title: "关于我",
    sponsor_title: "赞助",
    contact_title: "联系我",
    toc_what: "这个培养皿里有什么",
    nav_about: "关于我",
    nav_about_hint: "认识一下 →",
    nav_sponsor: "赞助",
    nav_sponsor_hint: "打赏一下 →",
    nav_contact: "联系我",
    nav_contact_hint: "交个朋友 →",
    prev: "← 上一页",
    next: "下一页 →",
    home: "回到玄关 ↑",
    home_short: "首页",
    about_p1: "这里是我的培养皿，欢迎路过看看。你也许不认识我（也有可能我们互相认识），但看完一小段介绍，或许你会有点了解吧。",
    about_p2: "我只是一个入门的写代码和做网页的草履虫，脑容量有限，无法制作大型物品。如果你有兴趣提出建议，欢迎通过最后一页的联系方式私信我（暂时不添加国内的联系方式，除非我们熟悉了）。",
    about_p3: "我也不知道在这个简介里再写点什么，毕竟它叫做简介。或许我会再做一页，用来上传我的其他东西吧。",
    sponsor_intro: "如果你愿意，可以给我打赏，我会记录的。",
    choose_method: "选择赞助方式",
    go_crypto: "虚拟货币",
    go_wechat: "微信赞赏码",
    back: "← 返回选择赞助方式",
    choose_network: "选择网络",
    copy: "复制地址",
    copied: "已复制 ✓",
    go_supporters: "赞助者名单",
    supporters_title: "感谢每一位支持者",
    supporters_empty: "还没有赞助者，成为第一个支持我的人吧",
    contact_intro: "想交流、合作，或者只是打个招呼，可以通过下面的方式找到我。",
    wa_note: "（不常使用，回复可能较慢）"
  },

  /* ---------- 繁體中文 ---------- */
  "zh-TW": {
    lead: "我叫 LinQi，歡迎來到培養皿。",
    about_title: "關於我",
    sponsor_title: "贊助",
    contact_title: "聯絡我",
    toc_what: "這個培養皿裡有什麼",
    nav_about: "關於我",
    nav_about_hint: "認識一下 →",
    nav_sponsor: "贊助",
    nav_sponsor_hint: "打賞一下 →",
    nav_contact: "聯絡我",
    nav_contact_hint: "交個朋友 →",
    prev: "← 上一頁",
    next: "下一頁 →",
    home: "回到玄關 ↑",
    home_short: "首頁",
    about_p1: "這裡是我的培養皿，歡迎路過看看。你也許不認識我（也有可能我們互相認識），但看完一小段介紹，或許你會有點了解吧。",
    about_p2: "我只是一個入門的寫程式和做網頁的草履蟲，腦容量有限，無法製作大型物品。如果你有興趣提出建議，歡迎透過最後一頁的聯絡方式私信我（暫時不新增國內的聯絡方式，除非我們熟悉了）。",
    about_p3: "我也不知道在這個簡介裡再寫點什麼，畢竟它叫做簡介。或許我會再做一頁，用來上傳我的其他東西吧。",
    sponsor_intro: "如果你願意，可以給我打賞，我會記錄的。",
    choose_method: "選擇贊助方式",
    go_crypto: "虛擬貨幣",
    go_wechat: "微信讚賞碼",
    back: "← 返回選擇贊助方式",
    choose_network: "選擇網路",
    copy: "複製位址",
    copied: "已複製 ✓",
    go_supporters: "贊助者名單",
    supporters_title: "感謝每一位支持者",
    supporters_empty: "還沒有贊助者，成為第一個支持我的人吧",
    contact_intro: "想交流、合作，或者只是打個招呼，可以透過下面的方式找到我。",
    wa_note: "（不常使用，回覆可能較慢）"
  },

  /* ---------- English ---------- */
  en: {
    lead: "I'm LinQi. Welcome to my petri dish.",
    about_title: "About me",
    sponsor_title: "Sponsor",
    contact_title: "Contact",
    toc_what: "What's inside",
    nav_about: "About",
    nav_about_hint: "get to know me →",
    nav_sponsor: "Sponsor",
    nav_sponsor_hint: "send a tip →",
    nav_contact: "Contact",
    nav_contact_hint: "say hi →",
    prev: "← Prev",
    next: "Next →",
    home: "Back home ↑",
    home_short: "Home",
    about_p1: "This is my petri dish — feel free to look around. You might not know me (or maybe we do), but after a short intro, you might get to know me a little.",
    about_p2: "I'm just a paramecium new to coding and web pages — limited brain capacity, so I can't build anything large. If you'd like to share a suggestion, message me through the contact details on the last page (for now I'm not adding China-based contact methods, unless we get to know each other).",
    about_p3: "I don't know what else to write in this intro — after all, it's called an intro. Maybe I'll make another page later to upload my other things.",
    sponsor_intro: "If you'd like, you can send me a tip. I'll keep a record of it.",
    choose_method: "Choose a way to support",
    go_crypto: "Crypto",
    go_wechat: "WeChat QR",
    back: "← Back to choices",
    choose_network: "Choose network",
    copy: "Copy",
    copied: "Copied ✓",
    go_supporters: "Supporters",
    supporters_title: "Thanks to every supporter",
    supporters_empty: "No supporters yet — be the first to support me!",
    contact_intro: "Want to chat, collaborate, or just say hi? Reach me below.",
    wa_note: "(rarely used, replies may be slow)"
  }
};

let currentLang = localStorage.getItem('lang') || 'zh';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (I18N[lang][k]) el.textContent = I18N[lang][k];
  });
  document.querySelectorAll('.lang-switch button').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang));
}

// 生成右上角语言切换按钮
document.addEventListener('DOMContentLoaded', () => {
  const sw = document.createElement('div');
  sw.className = 'lang-switch';
  sw.innerHTML =
    '<button data-lang="zh">简</button>' +
    '<button data-lang="zh-TW">繁</button>' +
    '<button data-lang="en">EN</button>';
  document.body.appendChild(sw);
  sw.querySelectorAll('button').forEach(b =>
    b.onclick = () => applyLang(b.dataset.lang));
  applyLang(currentLang);
});
