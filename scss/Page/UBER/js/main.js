/*
    Author: Rung;
    Date: 24/44/2018;
    Mục đích:
        + Tính tiền taxi uber
*/
var GIATIENUBERX_1 = 8000;
var GIATIENUBERX_2 = 12000;
var GIATIENUBERX_3 = 10000;
var GIATIENUBERX_CHO = 2000;

var GIATIENUBERSUV_1 = 9000;
var GIATIENUBERSUV_2 = 14000;
var GIATIENUBERSUV_3 = 12000;
var GIATIENUBERSUV_CHO = 3000;

var GIATIENUBERBLACK_1 = 10000;
var GIATIENUBERBLACK_2 = 16000;
var GIATIENUBERBLACK_3 = 14000;
var GIATIENUBERBLACK_CHO = 4000;

function TinhTien() {
    // Lấy thông tin người dùng
    // Lấy loại xe
    var loaiXe = LayLoaiXe();
    var soKM = parseFloat(getEle("txtSoKM").value);
    var tgCho = parseFloat(getEle("txtTgCho").value);

    // Tính Toán
    var tongTien = 0;
    if (loaiXe == "uberX") {
        tongTien = TinhTongTien(soKM, tgCho, GIATIENUBERX_1, GIATIENUBERX_2, GIATIENUBERX_3, GIATIENUBERX_CHO);
    } else if (loaiXe == "uberSUV") {
        tongTien = TinhTongTien(soKM, tgCho, GIATIENUBERSUV_1, GIATIENUBERSUV_2, GIATIENUBERSUV_3, GIATIENUBERSUV_CHO);
    } else if (loaiXe == "uberBlack") {
        tongTien = TinhTongTien(soKM, tgCho, GIATIENUBERBLACK_1, GIATIENUBERBLACK_2, GIATIENUBERBLACK_3, GIATIENUBERBLACK_CHO);
    }

    var divThanhTien = getEle("divThanhTien");
    divThanhTien.style.display = "block";
    // divThanhTien.style.backgroundColor = "blue";
    var spanTanhTien = getEle("xuatTien");
    spanTanhTien.innerHTML = tongTien;
}

function TinhTongTien(SoKM, TgCho, giaTien1, giaTien2, giaTien3, giaTienCho) {
    var tongTien = 0;
    if (SoKM < 1) {
        tongTien = giaTien1 + TgCho * giaTienCho;
    } else if (SoKM <= 20) {
        tongTien = giaTien1 + giaTien2 * (SoKM - 1) + TgCho * giaTienCho;
    } else if (SoKM > 20) {
        tongTien = giaTien1 + giaTien2 * 19 + giaTien3 * (SoKM - 20) + TgCho * giaTienCho;
    }
    return tongTien;
}

function getEle(id) {
    return document.getElementById(id);
}
function LayLoaiXe() {
    var loaiXe = "";
    var uberX = getEle("uberX");
    var uberSUV = getEle("uberSUV");
    var uberBlack = getEle("uberBlack");

    if (uberX.checked) {
        loaiXe = uberX.value;
    }
    else if (uberSUV.checked) {
        loaiXe = uberSUV.value;
    }
    else if (uberBlack.checked) {
        loaiXe = uberBlack.value;
    }
    return loaiXe;
}
