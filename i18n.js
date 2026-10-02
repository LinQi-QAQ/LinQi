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
    nav_sponsor_hint: "请我喝杯咖啡 →",
    nav_contact: "联系我",
    nav_contact_hint: "交个朋友 →",
    prev: "← 上一页",
    next: "下一页 →",
    home: "回到玄关 ↑",
    home_short: "首页",
    about_p1: "你好，我是 LinQi。姑且算是个学生，虽然要学的东西还有很多。",
    about_p2: "最近在学编程和网页开发，喜欢把脑子里的想法一点点变成真实的东西。这个小网站就是我的第一个小作品——从空白页面开始，慢慢把它收拾成现在的样子。",
    about_p3: "平时喜欢学习、探索新事物，也愿意花时间研究一个问题到底是怎么回事。这里会慢慢补充更多关于我的细节，欢迎随时回来看看。",
    sponsor_intro: "如果你喜欢这个培养皿，或者觉得这里的内容对你有帮助，可以请我喝杯咖啡。你的支持会让我更有动力把这里继续做下去，谢谢。",
    choose_method: "选择赞助方式",
    go_crypto: "虚拟货币",
    go_wechat: "微信赞赏码",
    back: "← 返回选择赞助方式",
    step1: "第一步：选择货币",
    step2: "第二步：选择网络",
    copy: "复制地址",
    copied: "已复制 ✓",
    go_supporters: "赞助者名单",
    supporters_title: "感谢每一位支持者",
    supporters_empty: "还没有赞助者，成为第一个支持我的人吧",
    contact_intro: "想交流、合作，或者只是打个招呼，可以通过下面的方式找到我。"
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
    nav_sponsor_hint: "請我喝杯咖啡 →",
    nav_contact: "聯絡我",
    nav_contact_hint: "交個朋友 →",
    prev: "← 上一頁",
    next: "下一頁 →",
    home: "回到玄關 ↑",
    home_short: "首頁",
    about_p1: "你好，我是 LinQi。姑且算是個學生，雖然要學的東西還有很多。",
    about_p2: "最近在學程式設計和網頁開發，喜歡把腦子裡的點子一點點變成真實的東西。這個小網站就是我的第一個小作品——從空白頁面開始，慢慢把它收拾成現在的樣子。",
    about_p3: "平時喜歡學習、探索新事物，也願意花時間研究一件事到底是怎麼回事。這裡會慢慢補充更多關於我的細節，歡迎隨時回來看看。",
    sponsor_intro: "如果你喜歡這個培養皿，或者覺得這裡的內容對你有幫助，可以請我喝杯咖啡。你的支持會讓我更有動力把這裡繼續做下去，謝謝。",
    choose_method: "選擇贊助方式",
    go_crypto: "虛擬貨幣",
    go_wechat: "微信讚賞碼",
    back: "← 返回選擇贊助方式",
    step1: "第一步：選擇貨幣",
    step2: "第二步：選擇網路",
    copy: "複製位址",
    copied: "已複製 ✓",
    go_supporters: "贊助者名單",
    supporters_title: "感謝每一位支持者",
    supporters_empty: "還沒有贊助者，成為第一個支持我的人吧",
    contact_intro: "想交流、合作，或者只是打個招呼，可以透過下面的方式找到我。"
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
    nav_sponsor_hint: "buy me a coffee →",
    nav_contact: "Contact",
    nav_contact_hint: "say hi →",
    prev: "← Prev",
    next: "Next →",
    home: "Back home ↑",
    home_short: "Home",
    about_p1: "Hi, I'm LinQi. A student, though there's still so much to learn.",
    about_p2: "I've been learning programming and web development, and love turning ideas in my head into something real. This site is my first little project — built from a blank page, slowly tidied into what it is now.",
    about_p3: "I enjoy learning and exploring new things, and like digging into how things work. More details will be added over time — feel free to come back.",
    sponsor_intro: "If you like this petri dish, or find something here helpful, you can buy me a coffee. Your support keeps me going — thank you.",
    choose_method: "Choose a way to support",
    go_crypto: "Crypto",
    go_wechat: "WeChat QR",
    back: "← Back to choices",
    step1: "Step 1: Choose currency",
    step2: "Step 2: Choose network",
    copy: "Copy",
    copied: "Copied ✓",
    go_supporters: "Supporters",
    supporters_title: "Thanks to every supporter",
    supporters_empty: "No supporters yet — be the first to support me!",
    contact_intro: "Want to chat, collaborate, or just say hi? Reach me below."
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
