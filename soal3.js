let arrManusia = [
    {nama: 'Alex', umur: 22,kelamin:'Pria', job: 'Dev'},
    {nama: 'Alicia', umur: 32,kelamin:'Wanita', job: 'Dev'},
    {nama: 'Alona', umur: 26,kelamin:'Wanita', job: 'Dev'},
    {nama: 'Batios', umur: 33,kelamin:'Pria', job: 'CEO'},
    {nama: 'Bakhti', umur: 38,kelamin:'Pria', job: 'PM'},
    {nama: 'Charlee', umur: 27,kelamin:'Pria', job: 'CTO'}
];

let arrJob = [
    'All' ,'Dev', 'CEO', 'PM', 'CTO'
];

let fn0 = () => {  // Membuat baris table
    var x = arrManusia.map((val) =>
        `<tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.kelamin}</td>
            <td>${val.job}</td>
        </tr>`
    );
    
    var z = arrJob.map((val) =>
        `<option value="${val}">${val}</option>`
    );

    
    document.getElementById('here').innerHTML = x.join('');
    document.getElementById('job').innerHTML = z.join('');
    
}

// ADD DATA
let fn1 = () => {
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let kelamin = document.getElementById("gender").value;
    let job = document.getElementById("jobT").value;

    arrManusia.push({nama,umur,kelamin,job})

    var x = arrManusia.map((val) =>
        `<tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.kelamin}</td>
            <td>${val.job}</td>
        </tr>`
    );
    
    document.getElementById('here').innerHTML = x.join('');

    if (arrJob.includes(job) == false) {
        arrJob.push(job);
    }

    var z = arrJob.map((val) =>
        `<option value="${val}">${val}</option>`
    );
    
    
    document.getElementById('job').innerHTML = z.join('');
}


// FILTER NAME
var fn2 = () => {
    var input, filter, table, tr, td, i;

    filter = document.getElementById("search").value.toUpperCase();
    // filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr"); //HTMLCollection [tr,tr, ..]
    // console.log(tr[1].getElementsByTagName('td')); HTMLCollection [td,td, ...]
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// FILTER UMUR
var fn3 = () => {
    var table, tr, td, i, num1, num2;

    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    num1 = document.getElementById('num1').value; // 2
    num2 = document.getElementById('num2').value; // 2

    if (num1 == '' || num2 == '') {
        num1 = 0;
        num2 = 999;
    }

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (parseInt(td.innerHTML) >= num1 && parseInt(td.innerHTML) <= num2) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

// FILTER JOB
var fn4 = () => {
    var table, tr, opt, i;

    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    let sel = document.getElementsByTagName('option'); //HTMLCollection[option, option, ...]
    for (let i = 0; i < sel.length; i++) {
        if(sel[i].value == 'All'){
            opt = 'All';
        } else if (sel[i].selected == true) {
            opt = sel[i].value;
        }

    }

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            if (td.innerHTML == opt || opt == 'All') {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

var fn5 = () => {
    var input, filter, table, tr, td, i;

    filter = document.getElementById("gender").value
    
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr"); 
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function sortKelamin() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  function sortKerjaan() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[3];
        y = rows[i + 1].getElementsByTagName("TD")[3];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  } 

function sortUmur() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
fn0();