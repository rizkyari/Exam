
var persegi =() =>{
   var baris = parseInt(prompt("Ukuran:")); 
let z='';
for (let i=0; i<baris; i++){
for (let j=0; j<baris ;j++){
z += ' * '
}
z += '\n'
}
console.log(z)

}

var kiri= ()=>{
    var size = parseInt(prompt("Ukuran:"));
    let q='';
    for(let i=1;i<=size;i++){
        for(let j = 1;j<=i;j++){
        q+='*'
        }
        q+='\n'
    }
    console.log(q);  
    
}

// var kanan =() =>{
//     var panjang = parseInt(prompt("Ukuran:"));
//     let w='';
//     for(let i=1;i<=panjang;i++){
//         for (let j=i;j<=panjang;j++){
//             w+=' ';
//         }
//         for (var k=1;k<=i;k++){
//             w +='*';
//         }
//             w+='\n';
//     }
// }
// console.log(w);
// document.write(w);

            
var kanan =()=>{

    var panjang = parseInt(prompt("Ukuran:"));
            let str = "";

            for(let i = 1; i <= panjang; i++ ){
                for(let j = 1; j <= panjang; j++){
                    if(i + j >= panjang){
                        str = str.concat("*");
                    }else{
                        str = str.concat(" ")
                    }
                }
                str = str.concat("\n")
            }

            console.log(str)
        }

do{
    var pilihan = parseInt(prompt("Silahkan pilih gambar mana:\n1.Persegi\n2.Segita siku2 rata kiri\n3.Segita siku2 rata kanan"))
    if (pilihan == 1){
       persegi();
    }else if(pilihan == 2){
        kiri();
    }else if (pilihan == 3){
        kanan();
    }else{
        alert("Masukkan nomer hanya 1-3!!!")
    }
}while(false);