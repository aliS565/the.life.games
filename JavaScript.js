var MenuBTN = document.getElementById('BTN-Menu');
var WrapMenu = document.getElementById('Wrap-Menu');
var BoxSingUpForm = document.getElementById('FormBoxSingUpId');
var BoxLoginForm = document.getElementById('FormBoxLoginId');
var CloseFormBTN = document.getElementById('CloseFormLoginBTN');
var OpenFormBTN = document.getElementById('BTN-FormLogin');
var SuccessForm = document.querySelector('.SuccessForm');
var MainSuccessForm = document.querySelector('.SuccessForm .Main-SuccessForm');
var AboutUs_CoverDetialsBar = document.querySelector('.CoverDetailsBar'); 
var AboutUs_DetialsShowHideBTN = document.querySelector('.Wrap-AboutUs .Main-AboutUs .AboutUs-DetialsBar .Top-DetialsBar .AboutUs-DetialsShowHide-BTN');
function OpenMenu() {
        WrapMenu.style.transform = 'translateY(0)';
        WrapMenu.style.opacity = '1';
        WrapMenu.style.display = 'flex';
        BoxLoginForm.style.transform = 'translateY(-100%)';
        BoxLoginForm.style.opacity = '0';
        BoxSingUpForm.style.transform = 'translateY(-100%)';
        BoxSingUpForm.style.opacity = '0';
}
function CloseMenu() {

    WrapMenu.style.transform = 'translateY(-100%)';
    WrapMenu.style.opacity = '0';
}
function CloseFormLogin() {
   
    BoxLoginForm.style.transform = 'translateY(-100%)';
    BoxLoginForm.style.opacity = '0';
   
}
function CloseFormSingUp() {
    BoxSingUpForm.style.transform = 'translateY(-100%)';
    BoxSingUpForm.style.opacity = '0';
}
function OpenFormLoginMenu() {
   
    BoxLoginForm.style.transform = '';
    BoxLoginForm.style.opacity = '1';
    BoxLoginForm.style.display = 'flex';
    WrapMenu.style.transform = 'translateY(-100%)';
    WrapMenu.style.opacity = '0';
}
function OpenFormLoginpBTN() {

        BoxLoginForm.style.transform = '';
        BoxLoginForm.style.opacity = '1';
        BoxLoginForm.style.display = 'flex';
        BoxSingUpForm.style.transform = 'translateY(-100%)';
        BoxSingUpForm.style.opacity = '0';
        
}
function OpenFormSingUpBTN() {
    BoxSingUpForm.style.transform = '';
    BoxSingUpForm.style.opacity = '1';
    BoxSingUpForm.style.display = 'flex';
    BoxLoginForm.style.transform = 'translateY(-100%)';
    BoxLoginForm.style.opacity = '0';
}
function PasswordLoginBTN() {
    const passwordFieldLogin = document.getElementById('PasswordLogin');
    const eyeIconLogin = document.getElementById('IC-Eye-Login');

    if (passwordFieldLogin.type === 'password') {
      passwordFieldLogin.type = 'text';
      eyeIconLogin.classList.remove('fa-eye');
      eyeIconLogin.classList.add('fa-eye-slash');
    } else {
      passwordFieldLogin.type = 'password';
      eyeIconLogin.classList.remove('fa-eye-slash');
      eyeIconLogin.classList.add('fa-eye');
    }
  }
  function PasswordSingUpBTN() {
    const passwordFieldSingUp = document.getElementById('PasswordSingUp');
    const eyeIconSingUp = document.getElementById('IC-Eye-SingUp');

    if (passwordFieldSingUp.type === 'password') {
      passwordFieldSingUp.type = 'text';
      eyeIconSingUp.classList.remove('fa-eye');
      eyeIconSingUp.classList.add('fa-eye-slash');
    } else {
      passwordFieldSingUp.type = 'password';
      eyeIconSingUp.classList.remove('fa-eye-slash');
      eyeIconSingUp.classList.add('fa-eye');
    }
  }
function CloseSuccessForm() {
  // 1. ابدأ أنيميشن اختفاء SuccessForm لأعلى
  SuccessForm.classList.add('hide');

  // 2. بعد انتهاء الأنيميشن (1 ثانية)، اجعل MainSuccessForm height = 0
  setTimeout(() => {
    MainSuccessForm.style.height = '0';
  }, 1000); // متزامن مع transition: 1s
}

CloseSuccessFormBtN.addEventListener('click', CloseSuccessForm);
function AboutUsShowHideDetials() {
    AboutUs_CoverDetialsBar.classList.add('Hide');
}
AboutUs_DetialsShowHideBTN.addEventListener('click', AboutUsShowHideDetials);
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

  // ✅ استبدل هذه القيم من مشروع Firebase الخاص بك
  const firebaseConfig = {
    apiKey: "XXXXXXX",
    authDomain: "XXXXXXX.firebaseapp.com",
    databaseURL: "https://XXXXXXX-default-rtdb.firebaseio.com",
    projectId: "XXXXXXX",
    storageBucket: "XXXXXXX.appspot.com",
    messagingSenderId: "XXXXXXX",
    appId: "XXXXXXX"
  };

  // ⚙️ تهيئة التطبيق وقاعدة البيانات
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  // 👤 تسجيل الزائر
  function registerVisitor() {
    const visitorsRef = ref(db, 'visitors');
    push(visitorsRef, {
      timestamp: new Date().toISOString()
    });
  }

  // 🔢 عرض عدد الزوار
  function updateVisitorCount() {
    const visitorsRef = ref(db, 'visitors');
    onValue(visitorsRef, (snapshot) => {
      const data = snapshot.val();
      const count = data ? Object.keys(data).length : 0;
      document.getElementById("visitor-count").textContent = count;
    });
  }

  // 🚀 تشغيل الوظيفتين
  registerVisitor();
  updateVisitorCount();
</script>

