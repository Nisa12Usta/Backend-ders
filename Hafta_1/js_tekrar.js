// let , const ve var

let ad = "Nisa"                 // string
const yil = 2013               // number
let bilgi = true              // bool
let isimler = ["Nisa","Nur"] // array
let ogrenci = {             
    ad : "Nisa",           
    okul : "NSO"          
}                        //object

// koşullar
if (2026 - yil < 22){
    console.log("ogrenci kart")
} else if(2026 - yil > 65){
    console.log("65 yas üstü kart")
} else {
    console.log("tam kart")
}

//döngüler
for (let i = 0; i < isimler.length; i++){
    console.log(isimler[i])
}

let sayac = 1
while(true){
    if (sayac > isimler.length){
        console.log(isimler[sayac])
        break
    }
    sayac++
}

// en az 1 kere çalışır , koşul sağlanmasa bile
do {
    console.log("sayac degeri : " , sayac , " her zaman bir kere çalişir" )
}while(sayac < 3)

// foreach 

for (isim of isimler){
    console.log("isim : " , isim)
}

//fonksiyonlar

function veri_uret(a,b){
    return a + b
}
let sonuc = veri_uret(10,15)
console.log("sonuc : " , sonuc)

function param_donussuz(a){
    console.log(a, "donussuz")
}
param_donussuz(15)

// ES6 sonrası
// arrow funcition

const carp = (a,b) => {
    return a * b 
}
console.log("carp(5)" , carp(5,5))

//class - OOP

class Kullanici{
    constructor(kullanici_adi, şifre){
        this.kullanici_adi = kullanici_adi
        this.şifre = şifre
    }
    bilgi_yaz(){
        console.log("ad : " , this.kullanici_adi)
        console.log("şifre : ", this.şifre) 
    }
    static birleştir(isim,soyisim){
        
    }
}   

const kullanici1 = new Kullanici("Nisa" ,"1234567890" )
kullanici1.bilgi_yaz()

