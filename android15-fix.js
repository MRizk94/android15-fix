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

      // تعديل المسافة السفلية لمحتوى الصفحة
      document.body.style.paddingBottom = "42.5px";

      // الزر العائم الرئيسي
      const fab = document.querySelector('.floating-btn');
      if (fab) fab.style.bottom = "82.5px";

      // شريط التنقل السفلي
      const navbar = document.querySelector('.navbar');
      if (navbar) navbar.style.bottom = "45px";

      // النص العائم (مثل إشعار أو ملحوظة)
      const floatingText = document.querySelector('.floating-text');
      if (floatingText) floatingText.style.bottom = "67.5px";

      // القائمة المنبثقة العائمة
      const floatingMenu = document.querySelector('.floating-menu');
      if (floatingMenu) floatingMenu.style.bottom = "132.5px";

      // الزر العائم الإضافي (مثل أيقونة البحث أو اليوتيوب)
      const floatingIcon = document.querySelector('.floating-icon');
      if (floatingIcon) floatingIcon.style.bottom = "67.5px"; // نفس مسافة الزر العائم

      // تعديل موقع زر الفلتر
      const filterBtnElement = document.querySelector('.filter-btn');
      if (filterBtnElement) filterBtnElement.style.bottom = "112.5px";

      // نافذة الفلاتر
      const filterOptions = document.querySelector('.filter-options');
      if (filterOptions) filterOptions.style.bottom = "180px"; // نفس مسافة القائمة المنبثقة
 
    // تعديل مسافة زر التمرير إلى الأعلى من الأسفل
    const scrollToTopBtnElement = document.querySelector('#scrollToTopBtn');
    if (scrollToTopBtnElement) scrollToTopBtnElement.style.bottom = "67.5px";

    // تعديل مسافة أيقونة YouTube من الأسفل
    const youtubeIconElement = document.querySelector('#youtubeIcon');
    if (youtubeIconElement) youtubeIconElement.style.bottom = "67.5px";
   
   }
  });
