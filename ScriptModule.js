import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-check.js";

// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBnA0eYHQbR8gfrkjXn0mEtwSh0MCHJpfU",
  authDomain: "thelifegamesvisitors.firebaseapp.com",
  databaseURL: "https://thelifegamesvisitors-default-rtdb.firebaseio.com",
  projectId: "thelifegamesvisitors",
  storageBucket: "thelifegamesvisitors.firebasestorage.app",
  messagingSenderId: "452655494921",
  appId: "1:452655494921:web:7a713d52f612e3724385d8",
  measurementId: "G-M0FV9P25PP"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// App Check باستخدام reCAPTCHA v3
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('YOUR_SITE_KEY'), // ← غيّره بمفتاحك
  isTokenAutoRefreshEnabled: true
});

// تسجيل الزائر
const visitorsRef = ref(db, 'visitors');
push(visitorsRef, { timestamp: new Date().toISOString() });

// عرض عدد الزوار
onValue(visitorsRef, (snapshot) => {
  const count = snapshot.val() ? Object.keys(snapshot.val()).length : 0;
  const el = document.getElementById("visitor-count");
  if (el) el.textContent = count;
});

// Google Tag Manager (في العادة يوضع في HTML، لكن يمكن إضافته أيضًا JS)
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KDWCZN7G');
