document.addEventListener("DOMContentLoaded", () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid15 = userAgent.includes("Android 15");

    if (isAndroid15) {
      // إنشاء <style> خاص بـ Android 15 فقط
      const style = document.createElement('style');
      style.innerHTML = `
        #android-nav-color-fake {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 42.5px;
          background-color: #e1f5fe; /* لون خلفية الصفحة */
          z-index: 9999;
          pointer-events: none;
        }
      `;
      document.head.appendChild(style);

      // إنشاء عنصر الشريط السفلي الوهمي
      const fakeBar = document.createElement('div');
      fakeBar.id = "android-nav-color-fake";
      document.body.appendChild(fakeBar);

      // تعديل المسافات السفلية للعناصر
      

      const fab = document.querySelector('.floating-btn');
      if (fab) fab.style.bottom = "82.5px";

      const navbar = document.querySelector('.navbar');
      if (navbar) navbar.style.bottom = "45px";

      const floatingText = document.querySelector('.floating-text');
      if (floatingText) floatingText.style.bottom = "67.5px";

      const floatingMenu = document.querySelector('.floating-menu');
      if (floatingMenu) floatingMenu.style.bottom = "132.5px";
    }
  });
