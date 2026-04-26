let yas : number = 10
let isim : string = "backend dersi"

//ts dosyalarını çalıştırmak için :
//npx ts-node /Hafta_1/Dosyanın ismi.ts

let hazir_mi : boolean = true

//interface -> arayüzler

interface Iogrenci{
    isim :string;
    soy_isim:string
    yas:number;
    mezun:boolean;
}

let ogrenci : Iogrenci = {
    isim: "Nisa",
    soy_isim: "USTA",
    yas: 13,
    mezun:false,
}

class Araba {
    public marka : string;
    public hiz : number;

    constructor(marka:string , hiz:number){
        this.marka = marka;
        this.hiz = hiz;
    }

    vites_arttir(vites_numarasi:number){
        const artacak_hiz : number = vites_numarasi * 15;
        this.hiz = this.hiz + artacak_hiz
        return this.hiz
    }
}

const araba1 = new Araba( "BMW" , 75 )
let son_hiz :number = araba1.vites_arttir(4)
console.log("son hiz : " , son_hiz)