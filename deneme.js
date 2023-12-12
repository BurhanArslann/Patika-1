
let inputDOM = document.querySelector('#input')
let submitDOM = document.querySelector('#submit')
let userListDOM = document.querySelector('#userList')
let resultTaskDOM = document.querySelector('#resultTask')
let taskDoneDOM = document.querySelector('#taskDone')
let remainingTaskDOM =document.querySelector('#remainingTask')
taskDoneCounter = 0
remainingTaskDOM = 0
counter = 0
click = 0


submitDOM.addEventListener('click', addList)
inputDOM.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addList()
    }
})

function addList() {
    if (inputDOM.value) {
        let liDOM = document.createElement('li')
        let spanDOM = document.createElement('span')
        spanDOM.style.cssText = 'position:absolute; right:0; padding-right:1vh; font-weight:bolder; background-color:transparent;'
        spanDOM.innerHTML = 'X'
        spanDOM.addEventListener('click', deleteLi)
       
        let textSpan = document.createElement('span')
        textSpan.style.backgroundColor = 'transparent'
        textSpan.innerHTML = inputDOM.value

        liDOM.appendChild(textSpan)
        liDOM.appendChild(spanDOM)

        liDOM.classList.add('list-group-item')
        userListDOM.append(liDOM)
        Toastify({
            text: "Listeye Eklendi",
            duration: 1000,
            className: "add",  // Stil sınıfı
            // Kapatma düğmesini göster
            escapeMarkup: false,  // HTML etiketlerini kaçın
        }).showToast();

        counter++
        
        if (counter % 2 === 0) {
            liDOM.classList.add('list-group-item-secondary')
        }
        inputDOM.value = ""

        liDOM.addEventListener('click', complatedTask)
        
    }
    else{
        Toastify({
            text: "Boş Veri eklenemez",
            duration: 1000,
            className: "info",  // Stil sınıfı
            // Kapatma düğmesini göster
            escapeMarkup: false,  // HTML etiketlerini kaçın
        }).showToast();
        
    }
    resultTaskDOM.innerHTML = `${counter}`
}


function complatedTask() {
    let textSpan = this.querySelector('span')
    let thumbsUpIcon = textSpan.querySelector('.fa-thumbs-up')

    if (thumbsUpIcon) {
        
        thumbsUpIcon.parentNode.removeChild(thumbsUpIcon);
        this.style.cssText = ''

    } else {
        
        textSpan.innerHTML = '<i class="fa-solid fa-thumbs-up" style="color: white;background-color:transparent;"></i>  ' + textSpan.innerHTML;
        this.style.cssText = 'background-color: #2594F0; text-decoration: line-through;transation:2s;'
        
        
        
    }
}

function deleteLi(){
    let liToDelete = this.parentNode
    liToDelete.parentNode.removeChild(liToDelete)
    counter--
   resultTaskDOM.innerHTML = `${counter} `
}



