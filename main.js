let allNotify = document.querySelectorAll(".notification");
let notifyNumber = document.querySelector(".numberNf");
let markAllAsRead = document.querySelector(".one p");

markAllAsRead.addEventListener('click', function () {
    allNotify.forEach(notify => {
        notify.classList.remove('read');
    });
    notifyNumber.textContent = document.querySelectorAll(".notification.read").length;
});

notifyNumber.textContent = document.querySelectorAll(".notification.read").length;

allNotify.forEach(notify => {
    notify.addEventListener('click', function () {
        if (this.classList.contains("read")) {
            this.classList.remove('read');
            notifyNumber.textContent = document.querySelectorAll(".notification.read").length;
        }
    })
})
