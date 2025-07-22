document.addEventListener("DOMContentLoaded", () => {
  // التحقق من إصدار أندرويد
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const androidVersionMatch = userAgent.match(/Android (\d+)/);
  const androidVersion = androidVersionMatch ? parseInt(androidVersionMatch[1], 10) : 0;

  if (androidVersion >= 15) {
      // إنشاء <style> خاص بـ Android 15 والأعلي
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










        /* تنسيق النافذة المنبثقة */
        .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            background: white;
            padding: 25px 30px;
            border-radius: 16px;
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
            display: flex;
            flex-direction: column;
            align-items: center;
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            z-index: 10002;
            max-width: 85%;
            width: fit-content;
            min-width: 260px;
            max-width: 320px;
            text-align: center;
            border-top: 5px solid;
        }

        .popup.show {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }

        /* تنسيق الأيقونة */
        .popup-icon {
            font-size: 26px;
            margin-bottom: 2.5px;
            transition: all 0.3s;
        }

        /* تنسيق الرسالة */
        .popup-message {
            font-size: 20px;
            line-height: 1.0;
            font-weight: bold; 
            color: #333;
        }

        /* ألوان وأنواع الرسائل */
        .popup.info {
            border-color: #4285f4;
            background: linear-gradient(145deg, #f7faff, #e8f1fe);
        }
        .popup.warning {
            border-color: #fbbc05;
            background: linear-gradient(145deg, #fff9e6, #fff2cc);
        }
        .popup.error {
            border-color: #ea4335;
            background: linear-gradient(145deg, #ffefed, #ffe5e3);
        }
        .popup.success {
            border-color: #34a853;
            background: linear-gradient(145deg, #f0f9f2, #e6f5e9);
        }

        /* ألوان الأيقونات */
        .info .popup-icon { color: #4285f4; }
        .warning .popup-icon { color: #fbbc05; }
        .error .popup-icon { color: #ea4335; }
        .success .popup-icon { color: #34a853; }

        /* تأثيرات الحركة */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        .popup.show .popup-icon {
            animation: float 2s ease-in-out infinite;
        }

        /* طبقة التعتيم */
        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.45);
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s;
            backdrop-filter: blur(3px);
            pointer-events: none;
        }
        .popup-overlay.show {
            opacity: 1;
            display: block;
            pointer-events: auto;
        }

        .settings-popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10001;
            width: 90%;
            max-width: 400px;
            display: none;
            animation: fadeInUp 0.3s ease-out;
            border: 5px solid #ddd;
        }

        .settings-popup.show {
            display: block;
        }

        .settings-header {
            margin-bottom: 20px;
            text-align: center;
        }

        .settings-header h3 {
            margin: 0;
            font-size: 20px;
            color: #1a237e;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-weight: bold;
        }

        .settings-content {
            max-height: 60vh;
            overflow-y: auto;
            padding-right: 5px;
        }

        .settings-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            padding: 10px 12px;
            background-color: #f8f9fa;
            border-radius: 10px;
        }

        .settings-label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: bold;
            color: #333;
            font-size: 18px;
        }

        .settings-label i {
            font-size: 18px;
            width: 22px;
            text-align: center;
        }

        .settings-controls {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .settings-checkbox {
            -webkit-appearance: none;
            appearance: none;
            width: 26px;
            height: 26px;
            border: 2px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
            position: relative;
            transition: all 0.2s ease;
        }

        .settings-checkbox:checked {
            background-color: #0277bd;
            border-color: #0277bd;
        }

        .settings-checkbox:checked::after {
            content: '\f00c';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 10px;
        }

        .toggle-all {
            background: #f8f9fa;
            padding: 12px 15px;
            border-radius: 10px;
            margin: 15px 0;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .toggle-all-label {
            font-weight: bold;
            color: #1a237e;
            font-size: 18px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .settings-footer {
            display: flex;
            gap: 10px;
            margin-top: 5px;
        }

        .settings-footer a {
            flex: 1;
            padding: 10px 20px;
            font-size: 18px;
            border-radius: 8px;
            max-width: none;
        }

        /* ألوان خاصة بكل نوع من الرسائل */
        .info { 
            color: #0277bd; 
            border-left-color: #0277bd;
            background: #e3f2fd;
        }
        .success { 
            color: #2e7d32; 
            border-left-color: #2e7d32;
            background: #e8f5e9;
        }
        .warning { 
            color: #ff8f00; 
            border-left-color: #ff8f00;
            background: #fff8e1;
        }
        .error { 
            color: #c62828; 
            border-left-color: #c62828;
            background: #ffebee;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -55%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }

        /* تحسينات للشاشات الصغيرة */
        @media (max-width: 400px) {
            .settings-popup {
                padding: 15px;
            }
            
            .settings-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
            }
            
            .settings-controls {
                width: 100%;
                justify-content: space-between;
            }
            
            .settings-select {
                width: 100%;
            }
        }

        #durationInfo {
            background-color: #1565c0;
            color: #fff;
            font-weight: 900;
            text-align: center;
            width: 100%;
            outline: none;
            border-radius: 60px;
            padding: 6px 20px;
            font-size: 18px;
            height: 45px;
            border: 0px solid #420c0c;
            border-radius: 5px;            
            margin:1.5px 0; 
            margin-top: 0px;      
        } 
              
        #durationInfo:focus{
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.50);
        }
              
        #durationSuccess {
            background-color: #1565c0;
            color: #fff;
            font-weight: 900;
            text-align: center;
            width: 100%;
            outline: none;
            border-radius: 60px;
            padding: 6px 20px;
            font-size: 18px;
            height: 45px;
            border: 0px solid #420c0c;
            border-radius: 5px;            
            margin:1.5px 0; 
            margin-top: 0px;      
        } 
              
        #durationSuccess:focus{
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.50);
        }
              
        #durationWarning {
            background-color: #1565c0;
            color: #fff;
            font-weight: 900;
            text-align: center;
            width: 100%;
            outline: none;
            border-radius: 60px;
            padding: 6px 20px;
            font-size: 18px;
            height: 45px;
            border: 0px solid #420c0c;
            border-radius: 5px;            
            margin:1.5px 0; 
            margin-top: 0px;      
        } 
              
        #durationWarning:focus{
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.50);
        }
              
        #durationError {
            background-color: #1565c0;
            color: #fff;
            font-weight: 900;
            text-align: center;
            width: 100%;
            outline: none;
            border-radius: 60px;
            padding: 6px 20px;
            font-size: 18px;
            height: 45px;
            border: 0px solid #420c0c;
            border-radius: 5px;            
            margin:1.5px 0; 
            margin-top: 0px;      
        } 
              
        #durationError:focus{
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.50);
        }
      
      
      
      
      
      
      
      
      
      
      
        :root {
            --transition: all 0.3s ease;
        }
        
        /* زر العائمة الرئيسي */
        .floating-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
        }
        
        .floating-btn {
            bottom: 42.5px;
            right: -20px;
            width: 47.5px;
            height: 47.5px;
            background: linear-gradient(135deg, #0277bd, #1a237e); /* خلفية متدرجة */
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: var(--transition);
            border: none;
            outline: none;
            position: relative;
            z-index: 1001;
        }
        
        .floating-btn i {
            font-size: 28px;
            transition: var(--transition);
        }
        
        .floating-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 15px rgba(67, 97, 238, 0.3);
        }
        
        .floating-btn.active {
            transform: rotate(135deg);
            background: linear-gradient(135deg, #f72585, #b5179e);
        }
        
        /* تأثير النبض */
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(67, 97, 238, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(67, 97, 238, 0); }
            100% { box-shadow: 0 0 0 0 rgba(67, 97, 238, 0); }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        /* القائمة المنبثقة */
        .floating-menu {
            position: absolute;
            bottom: 95px;
            right: -12.5px;
            width: 230px;
            background: linear-gradient(to right, white, #e1f5fe);
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: var(--transition);
            padding: 15px;
            z-index: 1000;
            border: 3px solid #ddd; /* حدود */
        }
        
        .floating-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
      
        /* إضافة هذا لمنع التمرير عند ظهور القائمة */
       .body-no-scroll {
         overflow: hidden;
         position: fixed;
         width: 100%;
         height: 100%;
        }   
      
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: none;
            z-index: 999;
        }      
        
        .menu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;          
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2.5px solid #eee;
        }
        
        .menu-header h3 {
            color: #2b2d42;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            margin: 0;
        }
        
        .close-btn {
            position: absolute;
            top: 12px;
            left: -87.5px;
            background: none;
            border: none;
            color: #999;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: var(--transition);
            padding: 0;
            line-height: 1;
        }
        
        .close-btn:hover {
            color: #f72585;
            transform: rotate(90deg);
        }
        
        .menu-items {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .menu-item {
            padding: 10px 8px;
            margin: 2.5px 0;
            border-radius: 8px;
            transition: var(--transition);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .menu-item:hover {
            background-color: rgba(67, 97, 238, 0.1);
            transform: translateX(-5px);
        }
        
        .menu-item i {
            width: 25px;
            height: 25px;
            background: linear-gradient(135deg, #4895ef, #4361ee);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            flex-shrink: 0;
        }
        
        .menu-item.gold i {
            background: linear-gradient(135deg, #ffb700, #ffd700);
        }
        
        .menu-item a {
            color: #2b2d42;
            text-decoration: none;
            font-weight: 500;
            flex-grow: 1;
            font-size: 16px;
            font-weight: bold;
        }
        
        .menu-item .badge {
            background-color: #f72585;
            color: white;
            border-radius: 10px;
            padding: 2px 8px;
            font-size: 12px;
            font-weight: bold;
            margin-right: 2.5px;
        }
        
        .gold-badge {
            background: gold;
            color: white;
            border-radius: 10px;
            padding: 2px 8px;
            font-size: 12px;
            margin-right: 1.5px;
            font-weight: bold;
        }
        
        /* تأثيرات دخول العناصر */
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        .menu-item {
            animation: slideIn 0.3s forwards;
            opacity: 0;
        }
        
        .menu-item:nth-child(1) { animation-delay: 0.1s; }
        .menu-item:nth-child(2) { animation-delay: 0.2s; }
        .menu-item:nth-child(3) { animation-delay: 0.3s; }
        .menu-item:nth-child(4) { animation-delay: 0.4s; }
        .menu-item:nth-child(5) { animation-delay: 0.5s; }
        .menu-item:nth-child(6) { animation-delay: 0.6s; }
        .menu-item:nth-child(7) { animation-delay: 0.7s; }
        .menu-item:nth-child(8) { animation-delay: 0.8s; }      

      
      
    .color-palette {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 12.5px;
        background: #f5f5f5;
        border-radius: 8px;
        margin-left: 0px;
        max-width: 385px;
      margin-top: 2.5px;
      margin-bottom: 2.5px;
      border: 2.5px solid #212121;
    }
    
    .color-option {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        cursor: pointer;
        border: 2px solid transparent;
        transition: all 0.2s ease;
    }
    
    .color-option:hover {
        border-color: #333;
        transform: scale(1.1);
    }
    
    .color-option.selected {
        border-color: #333;
        transform: scale(1.2);
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
    }
    
    #textbox8.highlighted, 
    #textbox6.highlighted, 
    #textbox4.highlighted {
        background-color: var(--tax-highlight-color, #FFFF99);
        transition: background-color 0.3s ease;
    } 
      
      
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.85); /* خلفية أكثر عتامة */
            z-index: 9999; /* أعلى قيمة لضمان ظهوره فوق كل شيء */
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(5px); /* تأثير ضبابي للخلفية */
        }
        
        .modal-content {
            width: 90%;
            max-width: 900px;
            background-color: transparent; /* خلفية شفافة */
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 30px rgba(0,0,0,0.7);
            position: relative;
        }
        
        .video-container {
            position: relative;
            padding-bottom: 56.25%; /* نسبة 16:9 */
            height: 0;
            overflow: hidden;
            border-radius: 8px;
        }
        
        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
