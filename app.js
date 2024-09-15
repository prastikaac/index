// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

// Request permission for notifications
document.getElementById('request-permission').addEventListener('click', async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const token = await getToken(messaging, {
        vapidKey: "BLBc04cZcWBlpMran4iRl7jBWuRtEanBCtVmbYO7jJbZJU8IpqHjqZjhdZuH1E0DdsZD2tznaIrhVWuQHBSCQrU"
      });
      console.log("FCM Token:", token);
      // Send the token to your server or save it for later use
    } else {
      console.error("Unable to get permission to notify.");
    }
  } catch (error) {
    console.error("Error getting permission or token: ", error);
  }
});

// Handle foreground messages
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  if (Notification.permission === "granted") {
    new Notification(notificationTitle, notificationOptions);
  }
});

// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then(function (registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function (err) {
      console.error('Service Worker registration failed:', err);
    });
}
