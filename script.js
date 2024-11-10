const qrInpiput = document.querySelector('#qr-input')
const qrImg = document.querySelector('#qr-img')
const qrBox = document.querySelector('#qr-box')
const NotifBox = document.querySelector('#notif-box')
const QR = document.querySelector('.qr')

let button = document.createElement('button')

let succesmsg = 'کد شما ساخته شد  <i class="fa fa-check"></i>'
let errormsg =  'لطفا آدرس وارد نماییـد  <i class="fa fa-close"></i>'

function QRgenerate() {
    if (qrInpiput.value.length > 0) {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInpiput.value
    qrBox.classList.add('active')

    if (! QR.button) {
        buttnRemove()
    }

    ShowNotif(succesmsg)
    } else {
        qrInpiput.classList.add('error')
        ShowNotif(errormsg)
        setTimeout(() => {
            qrInpiput.classList.remove('error')
        }, 1000);
    }
}

function ShowNotif(msg) {
    let notif = document.createElement('div')
    notif.classList.add('notif')
    notif.innerHTML = msg
    NotifBox.appendChild(notif)

    if (msg.includes('ساخته')) {
        notif.classList.add('succesmsg')
    } else if (msg.includes('لطفا')) {
        notif.classList.add('errormsg')
    }

    setTimeout(() => {
        notif.remove()
    }, 3000);
}

function removeImg() {
    qrBox.classList.remove('active')
}

function buttnRemove() {
    button.classList.add('btnRemove')
    button.innerHTML = 'پاک کردن'
    QR.appendChild(button)
    button.addEventListener('click' , () => {
        removeImg()
        setTimeout(() => {
            button.remove()
        }, 2000);
    })
}
