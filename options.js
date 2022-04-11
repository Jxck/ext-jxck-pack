EventTarget.prototype.on = EventTarget.prototype.addEventListener;
const $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
  chrome.storage.sync.get(["deepl_auth_key"], ({ deepl_auth_key }) => {
    console.log(deepl_auth_key);
    if (deepl_auth_key) {
      $("#deepl_auth_key").value = deepl_auth_key;
    }
  });
});

$("#options").on("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const deepl_auth_key = fd.get("deepl_auth_key");
  chrome.storage.sync.set({ deepl_auth_key });
});
