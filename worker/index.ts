import { Workbox } from "../node_modules/workbox-window";

declare let self: ServiceWorkerGlobalScope;

declare global {
  interface Window {
    workbox: Workbox;
  }
}

// To disable all workbox logging during development, you can set self.__WB_DISABLE_DEV_LOGS to true
// self.__WB_DISABLE_DEV_LOGS = true

// listen to message event from window
self.addEventListener("message", (event) => {
  console.log(event?.data);
});



self.addEventListener("push", function (event) {
  console.log("Push started");
  const data = event?.data.json();
  var notif = self.registration.showNotification(data.title, {
    body: data.message,
    icon: "/icons/favicon-96x96.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
  });
  event?.waitUntil(notif);
  console.log("Push finished");
});

self.addEventListener("notificationclick", (event) => {
  event?.notification.close();
  event?.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then(function (clientList) {
        if (clientList.length > 0) {
          let client = clientList[0];
          for (let i = 0; i < clientList.length; i++) {
            if (clientList[i].focused) {
              client = clientList[i];
            }
          }
          return client.focus();
        }
        return self.clients.openWindow("/");
      })
  );
});
