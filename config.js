// === إعدادات Firebase ===
export const firebaseConfig = {
    apiKey: "", // ضع مفتاح API هنا
    authDomain: "", // ضع رابط الدومين هنا
    projectId: "", // ضع معرف المشروع هنا
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// ⚠️ هام جداً: ضع هنا رابط موقع الزبائن الذي قمت برفعه
export const CUSTOMER_SITE_URL = ""; 

export const hashPass = str => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash.toString();
};
