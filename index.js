const myWorker = new Worker('worker.js')

const msgHtml = document.getElementById('msg')
myWorker.onmessage = (e) => {
    msgHtml.innerHTML += e.data
}
