// Firebase إعداد
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// إعداد firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyBnA0eYHQbR8gfrkjXn0mEtwSh0MCHJpfU",
  authDomain: "thelifegamesvisitors.firebaseapp.com",
  databaseURL: "https://thelifegamesvisitors-default-rtdb.firebaseio.com",
  projectId: "thelifegamesvisitors",
  storageBucket: "thelifegamesvisitors.firebasestorage.app",
  messagingSenderId: "452655494921",
  appId: "1:452655494921:web:7a713d52f612e3724385d8",
  measurementId: "G-M0FV9P25PP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// توليد userId وتخزينه في localStorage
let userId = localStorage.getItem("userId");
if (!userId) {
  userId = `User-${Math.floor(Math.random() * 100000)}`;
  localStorage.setItem("userId", userId);
}

// التحقق من آخر زيارة في localStorage
const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
const lastVisit = localStorage.getItem("lastVisitDate");

// عداد الضغطات
let clicks = 0;
document.addEventListener("click", () => {
  clicks++;
});

const browser = navigator.userAgent;
const device = /Mobile|Android|iPhone/i.test(browser) ? "Mobile" : "Desktop";

// جلب IP والموقع
fetch("https://ipinfo.io/json?token=YOUR_TOKEN")
  .then((res) => res.json())
  .then(async (data) => {
    const ip = data.ip;

    // تحقق من تكرار نفس الـ IP اليوم في قاعدة البيانات
    const q = query(collection(db, "Cookies"), where("ip", "==", ip));
    const snapshot = await getDocs(q);

    let alreadyVisitedToday = false;
    snapshot.forEach((doc) => {
      const visitDate = doc.data().time?.split("T")[0];
      if (visitDate === today) {
        alreadyVisitedToday = true;
      }
    });

    if (lastVisit === today || alreadyVisitedToday) {
      console.log("⏳ تم تسجيل الزيارة اليوم بالفعل، لن يتم التكرار.");
      return;
    }

    // إذا لم تُسجل اليوم، خزّن التاريخ وادفع البيانات
    localStorage.setItem("lastVisitDate", today);

    const visitTime = new Date().toISOString();

    addDoc(collection(db, "Cookies"), {
      user: userId,
      time: visitTime,
      clicks: clicks,
      ip: ip,
      browser: browser,
      device: device,
      country: data.country_name,
      city: data.city,
      region: data.region,
    })
      .then(() => {
        console.log("✅ تم حفظ زيارة المستخدم اليوم في Firestore");
      })
      .catch((error) => {
        console.error("❌ خطأ في الحفظ:", error);
      });
  })
  .catch((err) => {
    console.error("❌ فشل جلب بيانات IP:", error);
  });
