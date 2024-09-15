importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMfEhAeJE_BQ8eQyK6Mn52hiGf3LeXzcg",
  authDomain: "prasiddhaacharya-com-np.firebaseapp.com",
  projectId: "prasiddhaacharya-com-np",
  storageBucket: "prasiddhaacharya-com-np.appspot.com",
  messagingSenderId: "912047485186",
  appId: "1:912047485186:web:23dab6d9bc527d8a84d21b",
  measurementId: "G-TCFKJ034P3"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
