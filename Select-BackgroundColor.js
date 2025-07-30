    document.addEventListener("DOMContentLoaded", function () {
      const select = document.getElementById("Select-BackgroundColor");
      const resetBtn = document.getElementById("ResetBTN-WrapSetting");
      const saveBtn = document.getElementById("SaveBTN-WrapSetting");
      const body = document.body;

      const gradients = {
        1: "linear-gradient(45deg,rgb(9, 184, 143), black)",
        2: "linear-gradient(45deg,rgb(177, 0, 68), black)",
        3: "linear-gradient(45deg,rgb(173, 23, 186), black)",
        4: "linear-gradient(45deg,rgb(0, 205, 75), black)",
        5: "linear-gradient(45deg,rgb(185, 182, 9), black)"
      };

      // تحميل الخلفية المحفوظة
      const saved = localStorage.getItem("bg-select");
      if (saved && gradients[saved]) {
        body.style.background = gradients[saved];
        select.value = saved;
      }

      // عند تغيير الخلفية
      select.addEventListener("change", function () {
        const value = select.value;
        if (gradients[value]) {
          body.style.background = gradients[value];
        }
      });

      // حفظ الإعداد
      saveBtn.addEventListener("click", function () {
        localStorage.setItem("bg-select", select.value);
        alert("تم حفظ الخلفية ✅");
      });

      // إعادة التعيين
      resetBtn.addEventListener("click", function () {
        select.value = "1";
        body.style.background = gradients["1"];
        localStorage.removeItem("bg-select");
      });
    });
    const toggleBtn = document.querySelector('.Heeader-SettingButton');
    const wrapSetting = document.querySelector('.Wrap-Setting');
    const closeBtn = document.querySelector('.Close-WrapSettingBTN');
  
    toggleBtn.addEventListener('click', () => {
      wrapSetting.classList.toggle('active');
    });
  
    closeBtn.addEventListener('click', () => {
      wrapSetting.classList.remove('active');
    });