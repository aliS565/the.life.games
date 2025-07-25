// استيراد مكتبات Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-check.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

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
const dbVisitor = getDatabase(app);
const dbFirestore = getFirestore(app);
export { dbFirestore };

// ✅ App Check باستخدام reCAPTCHA v3 (استخدم مفتاح الموقع الخاص بك)
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Ldv8okrAAAAAJcDlwcpIXDKBBtqquak5q89HQpm'),
  isTokenAutoRefreshEnabled: true
});

// ✅ تسجيل الزائر في Realtime Database
const visitorsRef = ref(dbVisitor, 'visitors');
push(visitorsRef, { timestamp: new Date().toISOString() });

// ✅ عرض عدد الزوار على العنصر الذي يحتوي id="visitor-count"
onValue(visitorsRef, (snapshot) => {
  const count = snapshot.val() ? Object.keys(snapshot.val()).length : 0;
  const el = document.getElementById("visitor-count");
  if (el) el.textContent = count;
});
// tracker.js
import { dbFirestore } from './firebase-config.js';
import {
  collection,
  addDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

(async () => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const ipData = await res.json();

    const visitData = {
      ip: ipData.ip,
      city: ipData.city,
      region: ipData.region,
      country: ipData.country_name,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      duration: 0
    };

    const docRef = await addDoc(collection(dbFirestore, "visitors"), visitData);

    sessionStorage.setItem("visitorDocId", docRef.id);
    const start = Date.now();

    window.addEventListener("beforeunload", async () => {
      const duration = Math.round((Date.now() - start) / 1000);
      const id = sessionStorage.getItem("visitorDocId");
      if (id) {
        await updateDoc(doc(db, "visitors", id), { duration });
      }
    });
  } catch (e) {
    console.error("Error logging visitor:", e);
  }
})();

// ✅ Google Tag Manager (اختياري، يُفضّل وضعه في الـ <head> و<noscript> في <body>)
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KDWCZN7G');
