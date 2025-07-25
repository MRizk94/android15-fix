document.addEventListener("DOMContentLoaded", () => {
  // التحقق من إصدار أندرويد
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const androidVersionMatch = userAgent.match(/Android (\d+)/);
  const androidVersion = androidVersionMatch ? parseInt(androidVersionMatch[1], 10) : 0;

  // تغيير لون شريط الحالة العلوي (Status Bar)
  const metaThemeColor = document.querySelector("meta[name=theme-color]");
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", "#004C97");
  } else {
    const newMeta = document.createElement('meta');
    newMeta.name = "theme-color";
    newMeta.content = "#004C97"; // أزرق غامق ليظهر النص الأبيض بوضوح
    document.head.appendChild(newMeta);
  }

  if (androidVersion >= 15) {
    const style = document.createElement('style');
    style.innerHTML = `
      /* الشريط السفلي الوهمي */
      #android-nav-color-fake {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 42.5px;
        background-color: transparent;
        box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1); /* ظل خفيف */
        z-index: 9999;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    // إنشاء عنصر الشريط السفلي الوهمي
    const fakeBar = document.createElement('div');
    fakeBar.id = "android-nav-color-fake";
    document.body.appendChild(fakeBar);

    // تعديل المسافة السفلية لمحتوى الصفحة
    document.body.style.paddingBottom = "42.5px";

    // تعديل مواضع العناصر حسب الشريط السفلي
    const fab = document.querySelector('.floating-btn');
    if (fab) fab.style.bottom = "82.5px";

    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.bottom = "45px";

    const floatingText = document.querySelector('.floating-text');
    if (floatingText) floatingText.style.bottom = "67.5px";

    const floatingMenu = document.querySelector('.floating-menu');
    if (floatingMenu) floatingMenu.style.bottom = "132.5px";

    const floatingIcon = document.querySelector('.floating-icon');
    if (floatingIcon) floatingIcon.style.bottom = "67.5px";

    const filterBtnElement = document.querySelector('.filter-btn');
    if (filterBtnElement) filterBtnElement.style.bottom = "112.5px";

    const filterOptions = document.querySelector('.filter-options');
    if (filterOptions) filterOptions.style.bottom = "180px";

    const scrollToTopBtnElement = document.querySelector('#scrollToTopBtn');
    if (scrollToTopBtnElement) scrollToTopBtnElement.style.bottom = "67.5px";

    const youtubeIconElement = document.querySelector('#youtubeIcon');
    if (youtubeIconElement) youtubeIconElement.style.bottom = "67.5px";
  }
});
