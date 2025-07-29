

  // ✅ استيراد مكتبات Firebase (نفس النسخة)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-check.js";
  // ✅ إعداد Firebase
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

  // ✅ تهيئة Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const dbRTDB = getDatabase(app);
  const dbFS = getFirestore(app);
  const auth = getAuth(app);
//onAuthStateChanged(auth, (user) => {
 // if (!user) {
  //  window.location.href = "/";
 // }
// });

  // ✅ تفعيل App Check (reCAPTCHA v3)
  // ✅ تسجيل الزائر في Realtime Database
  const visitorsRef = ref(dbRTDB, 'visitors');
  push(visitorsRef, { timestamp: new Date().toISOString() });

  // ✅ عرض عدد الزوار في العنصر
  window.addEventListener("DOMContentLoaded", () => {
    onValue(visitorsRef, (snapshot) => {
      const count = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
      const el = document.getElementById("visitor-count");
      if (el) el.textContent = count;
    });
  });

  // ✅ تسجيل الزائر في Firestore
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

  // ✅ تسجيل حساب
  window.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.getElementById('FormSingUp');
    const loginForm = document.getElementById('FormLogIn');
    const submitSignUp = document.getElementById('SubmitButtonSingUp');
    const submitLogin = document.getElementById('SubmitButtonLogin');

    // 🟢 إنشاء حساب جديد
    if (submitSignUp) {
      submitSignUp.addEventListener('click', async (event) => {
        event.preventDefault();

        const email = document.getElementById('emailSignUp')?.value.trim();
        const password = document.getElementById('password')?.value;
        const gender = signUpForm?.querySelector('input[name="gender"]:checked')?.value;

        if (!email || !password || !gender) {
          alert("❌ من فضلك أكمل كل الحقول.");
          return;
        }

        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          await setDoc(doc(dbFS, "users", user.uid), {
            email,
            gender,
            createdAt: new Date().toISOString()
          });

          alert("✅ تم إنشاء الحساب بنجاح");
          window.location.href = "https://the-life-games.vercel.app/";
        } catch (error) {
          alert("❌ " + error.message);
        }
      });
    }

    // 🟢 تسجيل دخول
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
       const email = loginForm.querySelector('#emailLogin')?.value.trim();
        const password = loginForm.querySelector('input[name="upass"]')?.value;

        if (!email || !password) {
          alert("❌ من فضلك أدخل البريد وكلمة المرور");
          return;
        }

        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          alert("✅ تم تسجيل الدخول بنجاح");
          window.location.href = "https://the-life-games.vercel.app/";
        } catch (error) {
          alert("❌ " + error.message);
        }
      });
    }
  });


