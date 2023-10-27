let ad = prompt() 

let name = document.querySelector("#isim")

isim.classList.add("name")

isim.innerHTML = ad.toUpperCase()

function saatGuncelle(){
    const clock = document.querySelector("#clock")
    const tarih = new Date()
    const saat = tarih.getHours()
    const dakika = tarih.getMinutes()
    const saniye = tarih.getSeconds()
    const saniyeMetni = saniye < 10 ? "0" + saniye : saniye
    const gun = tarih.getDay()
    
    if(gun == 1){
        dayName = "PAZARTESİ"
        
    }

    
    else if(gun == 2){
        dayName = "SALI"
        
    }

    else if(gun == 3){
        dayName = "ÇARŞAMBA"
        
    }

    else if(gun == 3){
        dayName = "PERŞEMBE"
        
    }

    else if(gun == 5){
        dayName = "CUMA"
        
    }

    else if(gun == 6){
        dayName = "CUMARTESİ"
        
    }

    else if(gun == 7){
        dayName = "PAZAR"
        
    }
    

    const saatMetni =`${saat}:${dakika}:${saniyeMetni}  ${dayName}`


    
    clock.innerHTML= saatMetni
    setInterval(saatGuncelle,1000)

}




saatGuncelle()

