import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-check.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const dbRTDB = getDatabase(app);
const dbFS = getFirestore(app);
const auth = getAuth(app);
// ✅ تفعيل App Check باستخدام reCAPTCHA v3
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Ldv8okrAAAAAJcDlwcpIXDKBBtqquak5q89HQpm'),
  isTokenAutoRefreshEnabled: true
});


// ✅ تسجيل الزائر في Realtime Database
const visitorsRef = ref(dbRTDB, 'visitors');
push(visitorsRef, { timestamp: new Date().toISOString() });

// ✅ عرض عدد الزوار في عنصر بـ id="visitor-count"
// ✅ عرض عدد الزوار بعد التأكد من تحميل DOM
window.addEventListener("DOMContentLoaded", () => {
  const visitorsRef = ref(dbRTDB, 'visitors');
  onValue(visitorsRef, (snapshot) => {
    const count = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
    const el = document.getElementById("visitor-count");
    if (el) el.textContent = count;
  });
});

// ✅ تسجيل الزائر في Firestore مع معلومات المتصفح والموقع
(async () => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const ipData = await res.json();

    const userAgent = navigator.userAgent;
    const browser = (() => {
      if (/Edg/.test(userAgent)) return "Edge";
      if (/Chrome/.test(userAgent)) return "Chrome";
      if (/Firefox/.test(userAgent)) return "Firefox";
      if (/Safari/.test(userAgent)) return "Safari";
      return "Unknown";
    })();
    const deviceType = /Mobi|Android/i.test(userAgent) ? "📱 موبايل" : "💻 كمبيوتر";

    const visitData = {
      ip: ipData.ip,
      city: ipData.city,
      region: ipData.region,
      country: ipData.country_name,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      browser,
      device: deviceType,
      duration: 0
    };

    const docRef = await addDoc(collection(dbFS, "visitors"), visitData);
    sessionStorage.setItem("visitorDocId", docRef.id);

    const start = Date.now();
    window.addEventListener("beforeunload", async () => {
      const duration = Math.round((Date.now() - start) / 1000);
      const id = sessionStorage.getItem("visitorDocId");
      if (id) {
        await updateDoc(doc(dbFS, "visitors", id), { duration });
      }
    });

  } catch (err) {
    console.error("🔥 خطأ أثناء تسجيل بيانات الزائر:", err);
  }
})();

// ✅ نظام إنشاء حساب وتسجيل دخول
const signUpForm = document.getElementById('FormSingUp');
const loginForm = document.getElementById('FormLogIn');
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const gender = signUpForm.qurySelector('input[name="gender"]:checked')?.value;
const SubmitButtonLogin = document.getElementById('SubmitButtonLogin');
const SubmitButtonSingUp = document.getElementById('SubmitButtonSingUp');

SubmitButtonSingUp.addEventListener('click' function <event> {
  event.preventDefault()
 createUserWithEmailAndPassword(auth, email, password, gender).then((userCredential) => {
   const user = userCredential.user;
  alert('Creating Emaill');
 }).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMassage);
})
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[name="uemail"]').value.trim();
    const password = loginForm.querySelector('input[name="upass"]').value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("✅ تسجيل الدخول:", user);
      alert("✅ تم تسجيل الدخول بنجاح", user);
      window.location.href = "https://the-life-games.vercel.app/";
    } catch (error) {
      alert("❌ " + error.message);
    }
  });
}
