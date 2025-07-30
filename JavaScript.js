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
const WebsiteFormSingIn = document.getElementById('WebsiteFormLogin');
const WebsiteFormSingUp = document.getElementById('WebsiteFormSingUp');
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
function WebsiteCloseFormLogin() {
  WebsiteFormSingIn.style.transform = 'translateY(-100%)';
  WebsiteFormSingIn.style.opacity = '0';
  WebsiteFormSingIn.style.display = 'none';
}

function WebsiteCloseFormSingUp() {
  WebsiteFormSingUp.style.transform = 'translateY(-100%)';
  WebsiteFormSingUp.style.opacity = '0';
  WebsiteFormSingUp.style.display = 'none';
}

function WebsiteOpenFormSingUpBTN() {
  WebsiteFormSingIn.style.transform = 'translateY(-100%)';
  WebsiteFormSingIn.style.opacity = '0';
  WebsiteFormSingIn.style.display = 'none';

  WebsiteFormSingUp.style.display = 'flex';
  WebsiteFormSingUp.style.transform = 'translateY(0)';
  WebsiteFormSingUp.style.opacity = '1';
}

function WebsiteOpenFormLoginpBTN() {
  WebsiteFormSingUp.style.transform = 'translateY(-100%)';
  WebsiteFormSingUp.style.opacity = '0';
  WebsiteFormSingUp.style.display = 'none';

  WebsiteFormSingIn.style.display = 'flex';
  WebsiteFormSingIn.style.transform = 'translateY(0)';
  WebsiteFormSingIn.style.opacity = '1';
}

function CloseSuccessForm() {
  // 1. ابدأ أنيميشن اختفاء SuccessForm لأعلى
  SuccessForm.classList.add('hide');

  // 2. بعد انتهاء الأنيميشن (1 ثانية)، اجعل MainSuccessForm height = 0
  setTimeout(() => {
    MainSuccessForm.style.height = '0';
  }, 1000); // متزامن مع transition: 1s
}
function AboutUsShowHideDetials() {
    AboutUs_CoverDetialsBar.classList.add('Hide');
}

function TransformToTop() {
  var WrapSuccessWork = document.querySelector('.WrapSuccessWork');
  WrapSuccessWork.style.transform = 'translateY(-100%)';
  WrapSuccessWork.style.opacity = '0';
 // window.location.href = 'index.html';
 window.open('https://the-life-games.vercel.app/', '_blank');
}
function OpenWebsiteLoginSingUp() {
  window.open('https://the-life-games.vercel.app/LoginSingUp.html', '_blank');
}

