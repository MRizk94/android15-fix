document.addEventListener("DOMContentLoaded", () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const androidVersionMatch = userAgent.match(/Android (\d+)/);
  const androidVersion = androidVersionMatch ? parseInt(androidVersionMatch[1], 10) : 0;

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
        box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1); /* ظل خفيف لتمييز الحافة */
        z-index: 9999;
        pointer-events: none;
      }

      /* تحسين مظهر شارة الإشعارات */
      .notification-badge {
        background-color: red !important;
        color: white !important;
        font-weight: bold;
        font-size: 14px;
      }
    `;
    document.head.appendChild(style);

    const fakeBar = document.createElement('div');
    fakeBar.id = "android-nav-color-fake";
    document.body.appendChild(fakeBar);

    document.body.style.paddingBottom = "42.5px";

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
