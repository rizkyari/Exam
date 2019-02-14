var arrInput =[]

do{
    cek = true
    var inputan = parseInt(prompt("Masukkan Angka:"));
    arrInput.push(inputan);
    console.log(arrInput)
    if(isNaN(inputan)){
        cek = false
    }else if(inputan == " "){
        cek = false
    }
}while (cek);

// function d()
// {
// console.log(Math.max(arrInput));
// console.log(Math.min(arrInput));
// }

for(var i=0;i<arrInput.length;i++)
        {    
             if(i == 0)
             { 
              var nilai_mak = arrInput[i];
             }
             else
             {
                    if(arrInput[i] > nilai_mak)
                    {
                      nilai_mak = arrInput[i];
                    }
             }              
        }  
console.log("Nilai Tertinggi: "+nilai_mak);

for(var i=0;i<arrInput.length;i++)
        {    
             if(i == 0)
             { 
              var nilai_min = arrInput[i];
             }
             else
             {
                    if(arrInput[i] < nilai_min)
                    {
                      nilai_min = arrInput[i];
                    }
             }              
        }  
console.log("Nilai Terendah: " +nilai_min);