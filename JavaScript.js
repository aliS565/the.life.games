var box_1 = document.querySelector('.box-1');
var box_2 = document.querySelector('.box-2');
var box_3 = document.querySelector('.box-3');
var box_4 = document.querySelector('.box-4');
var box_5 = document.querySelector('.box-5');
var box_6 = document.querySelector('.box-6');
var BodyElement = document.getElementById('BodyElement');
var Footer = document.querySelector('.Footer');
var BxBTN = document.querySelector('.Box-Buttons');
var ButtonElement = document.querySelector('.BTN-Element');
var DetialsText = document.querySelectorAll('.Detials_Parm p');
var BTN_NextPage = document.querySelector('.NextPage');
var TBox = document.getElementById('tutorialBox');
var GameView = document.querySelector('.GameView');
const LoadTXT = document.querySelector('.LoadTXT');
var MenuBTN = document.getElementById('BTN-Menu');
var WrapMenu = document.getElementById('Wrap-Menu');
var BoxSingUpForm = document.getElementById('FormBoxSingUpId');
var BoxLoginForm = document.getElementById('FormBoxLoginId');
var CloseFormBTN = document.getElementById('CloseFormLoginBTN');
var OpenFormBTN = document.getElementById('BTN-FormLogin');
var SuccessForm = document.querySelector('.SuccessForm');
var MainSuccessForm = document.querySelector('.SuccessForm .Main-SuccessForm');
var CloseSuccessFormBtN = document.getElementById('SuccessForm-Done-BTN');
var NewButton = document.createAttribute('NuttonNew').style.display = 'flex';   
let count = 10;
    const countdownEl = document.getElementById("countdown");
 const countdownInterval = setInterval(() => {
      count--;
      countdownEl.textContent = count;
      if (count === 0) {
        clearInterval(countdownInterval);
     countdown.style.transform = '-100%';
          countdown.style.opacity = '0';
      }
    }, 1000);
let i = 0;
const flaotWidth = [...Array(101).keys()];
const interval = setInterval(() => {
  LoadTXT.innerHTML = flaotWidth[i] + "%";
  i++;
  if (i == flaotWidth.length) {
    clearInterval(interval);
    LoadTXT.innerHTML = '100%';
  }
    i++;
}, 100);
let WaitTimeAnim = 0;
// const FloatTimeAnim = [100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
const FloatTimeAnim = [0];
var interval = setInterval(() => { 
    if (WaitTimeAnim == FloatTimeAnim.length) {
    SuccessForm.style.top = '-100%';
    SuccessForm.style.opacity = '0';
    clearInterval(interval);
    }
    WaitTimeAnim++;
}, 3200);
function Box_1() {
    BodyElement.style.background = 'linear-gradient(120deg, purple,black)';
    BodyElement.style.color = 'white';
    Footer.style.background = 'linear-gradient(120deg, purple,black)';
    BxBTN.style.background = 'linear-gradient(120deg, purple,black)';
}
function Box_2() {
    BodyElement.style.background = 'linear-gradient(120deg, cyan,black)';
    BodyElement.style.color = 'white';
    Footer.style.background = 'linear-gradient(120deg, cyan,black)';
    BxBTN.style.background = 'linear-gradient(120deg, cyan,black)';
}
function Box_3() {
    BodyElement.style.background = 'linear-gradient(120deg, orange,black)';
    BodyElement.style.color = 'white';
    Footer.style.background = 'linear-gradient(120deg, orange,black)';
    BxBTN.style.background = 'linear-gradient(120deg, orange,black)';
}
function Box_4() {
    BodyElement.style.background = 'linear-gradient(120deg, yellow,black)';
    BodyElement.style.color = 'white';
    Footer.style.background = 'linear-gradient(120deg, yellow,black)';
    BxBTN.style.background = 'linear-gradient(120deg, yellow,black)';
}
function Box_5() {
    BodyElement.style.background = 'linear-gradient(120deg, lime,black)';
    BodyElement.style.color = 'white';
    Footer.style.background = 'linear-gradient(120deg, lime,black)';
    BxBTN.style.background = 'linear-gradient(120deg, lime,black)';
}
function Box_6() {
    BodyElement.style.background = 'linear-gradient(120deg, red,black)';
    BodyElement.style.color = 'white';
    Footer.style.background = 'linear-gradient(120deg, red,black)';
    BxBTN.style.background = 'linear-gradient(120deg, red,black)';
}
function Box_7() {
    BodyElement.style.background = 'linear-gradient(120deg, rgb(50,50,50),black)';
    BodyElement.style.color = 'white';
    Footer.style.background = 'linear-gradient(120deg, rgb(50,50,50),black)';
    BxBTN.style.background = 'linear-gradient(120deg, rgb(50,50,50),black)';
}
function Box_8() {
    BodyElement.style.background = 'linear-gradient(120deg, rgb(255, 255, 255),black)';
    BodyElement.style.color = 'black';
    Footer.style.background = 'linear-gradient(120deg, rgb(255, 255, 255),black)';
    BxBTN.style.background = 'linear-gradient(120deg, rgb(255, 255, 255),black)';
}
function NextPageBTN() {
TBox.style.transform ='translateX(100%)';
GameView.style.transform = 'translateX(0)';
GameView.style.boxShadow = 'inset 0 0 10px 10px rgb(100,100,100)';
BTN_NextPage.style.top = '100%';
BTN_NextPage.style.opacity = '0';
}
function BackTo_TBox() {
TBox.style.transform ='translateX(0%)';
GameView.style.transform = 'translateX(100%)';
BTN_NextPage.style.top = '';
BTN_NextPage.style.opacity = '1';

}
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

    MainSuccessForm.style.height = '0';
    
 }
