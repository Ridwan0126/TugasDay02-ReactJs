function addData(){
    console.log('====================================');
    console.log("tes");
    console.log('====================================');
    var nomer;
    var nama;
    var alamat;

    var nomer = $('#nomer').val();
    var nama = $('#nama').val();
    var alamat = $('#alamat').val();
    console.log(nomer);
    console.log(nama);
    console.log(alamat);

    // var button = document.querySelector('#addButton');
    var table = document.querySelectorAll('table > tbody');

    // table.innerHTML += `
    //     <tr>
    //       <td>${nomer}</td>
    //       <td>${nama}</td>
    //       <td>${alamat}</td>
    //     </tr>
    // `
        var table = document.getElementsByTagName('table')[0];
        var newRow = table.insertRow(table.rows.length);
      
      
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
      
        // tambah nilai ke dalam cell
        cell1.innerHTML = nomer;
        cell2.innerHTML = nama;
        cell3.innerHTML = alamat;

    $("#myModal").modal("hide");
    clear();
}

function clear() {
    $("#nomer").val("");
    $("#nama").val("");
    $("#alamat").val("");
}