$('#btn_hesapla_yks').attr('href', 'javascript:void(0);');
$('#btn_temizle_yks').attr('href', 'javascript:void(0);');
$('#btn_hesapla_yks').on('click', function() {
    var td = $('input[name="form_fields[tyt_turkce_dogru]"]').val();
    var ty = $('input[name="form_fields[tyt_turkce_yanlis]"]').val();
    var md = $('input[name="form_fields[tyt_mat_dogru]"]').val();
    var my = $('input[name="form_fields[tyt_mat_yanlis]"]').val();
    var sd = $('input[name="form_fields[tyt_sos_dogru]"]').val();
    var sy = $('input[name="form_fields[tyt_sos_yanlis]"]').val();
    var fd = $('input[name="form_fields[tyt_fen_dogru]"]').val();
    var fy = $('input[name="form_fields[tyt_fen_yanlis]"]').val();
    var dp = $('input[name="form_fields[diploma_puan]"]').val();
    if ((parseInt(td) + parseInt(ty)) > 40) {
        alert("Türkçe sorularınızı kontrol ediniz!");
    } else if ((parseInt(md) + parseInt(my)) > 40) {
        alert("Matematik sorularınızı kontrol ediniz!")
    } else if ((parseInt(sd) + parseInt(sy)) > 20) {
        alert("Sosyal sorularınızı kontrol ediniz!");
    } else if ((parseInt(fd) + parseInt(fy)) > 20) {
        alert("Fen sorularınızı kontrol ediniz!");
    }else {
        var yksmd = $('input[name="form_fields[yks_mat_dogru]"]').val();
        var yksmy = $('input[name="form_fields[yks_mat_yanlis]"]').val();
        var yksed = $('input[name="form_fields[yks_edb_dogru]"]').val();
        var yksey = $('input[name="form_fields[yks_edb_yanlis]"]').val();
        var ykssd = $('input[name="form_fields[yks_sos_dogru]"]').val();
        var ykssy = $('input[name="form_fields[yks_sos_yanlis]"]').val();
        var yksfd = $('input[name="form_fields[yks_fen_dogru]"]').val();
        var yksfy = $('input[name="form_fields[yks_fen_yanlis]"]').val();
        var yksdd = $('input[name="form_fields[yks_dil_dogru]"]').val();
        var yksdy = $('input[name="form_fields[yks_dil_yanlis]"]').val();
        if ((parseInt(yksmd) + parseInt(yksmy)) > 40) {
            alert("Matematik Doğru/Yanlış sonuçlarınızı kontrol ediniz!");
        } else if ((parseInt(yksfd) + parseInt(yksfy)) > 40) {
            alert("Fen Doğru/Yanlış sonuçlarınızı kontrol ediniz!");
        } else if ((parseInt(yksed) + parseInt(yksey)) > 40) {
            alert("Edebiyat/Coğrafya Doğru/Yanlış sonuçlarınızı kontrol ediniz!");
        } else if ((parseInt(ykssd) + parseInt(ykssy)) > 40) {
            alert("Sosyal Doğru/Yanlış sonuçlarınızı kontrol ediniz!");
        } else if ((parseInt(yksdd) + parseInt(yksdy)) > 80) {
            alert("Dil Doğru/Yanlış sonuçlarınızı kontrol ediniz!");
        } else {
            var turkceNet = 0,
                sosyalNet = 0,
                matematikNet = 0,
                fenNet = 0,
                dpPuani = 30,
                turNet = 0,
                matNet = 0,
                sosNet = 0,
                feNet = 0,
                tyt = 0,
                tm = 0,
                mf = 0,
                ts = 0,
                tmYer = 0,
                tsYer = 0,
                mfYer = 0,
                dil = 0,
                dilYer = 0,
                dilNet=0;
            turNet = td - (ty * 0.25);
            matNet = md - (my * 0.25);
            sosNet = sd - (sy * 0.25);
            feNet = fd - (fy * 0.25);
            turkceNet = yksed - (yksey * 0.25);
            matematikNet = yksmd - (yksmy * 0.25);
            sosyalNet = ykssd - (ykssy * 0.25);
            fenNet = yksfd - (yksfy * 0.25);
            dilNet = yksdd - (yksdy * 0.25);
            if ($('input[name="form_fields[yerlesme]"]')[0].checked) {
                dpPuani = ((dp * 6) / 10) / 2;
            } else {
                if (dp != 0) {
                    dpPuani = (dp * 6) / 10;
                }
            }
            tyt = (turNet * 3) + (matNet * 3) + (sosNet * 4) + (feNet * 4) + 100;
            tm = (((tyt - 100) * 40) / 100) + ((((turkceNet * 5) + (matematikNet * 5)) * 60) / 100) + 100;
            ts = (((tyt - 100) * 40) / 100) + ((((turkceNet * 5) + (sosyalNet * 5)) * 60) / 100) + 100;
            mf = (((tyt - 100) * 40) / 100) + ((((fenNet * 5) + (matematikNet * 5)) * 60) / 100) + 100;
            dil = (((tyt - 100) * 40) / 100) + (((((dilNet * 5)) * 60) / 100)) + 100;
            tmYer = tm + dpPuani;
            tsYer = ts + dpPuani;
            mfYer = mf + dpPuani;
            dilYer = dil + dpPuani;
            var tytUzun = String(tyt).length;
            if (tytUzun >= 8) {
                tyt = String(tyt).substring(0, 7);
            }
            var tytYer = parseFloat(tyt) + parseFloat(dpPuani);
            var tytYerUzun = String(tytYer).length;
            if (tytYerUzun >= 8) {
                tytYer = String(tytYer).substring(0, 7);
            }
            $('.tyt_ham_puan div span').empty();
            $('.tyt_ham_puan div span').append(tyt);
            $('.tytYer div span').empty();
            $('.tytYer div span').append(tytYer);
            $('.yks_ea_ham div span').empty();
            $('.yks_ea_ham div span').append(tm);
            $('.yks_ea_yer div span').empty();
            $('.yks_ea_yer div span').append(tmYer);
            $('.yks_soz_ham div span').empty();
            $('.yks_soz_ham div span').append(ts);
            $('.yks_soz_yer div span').empty();
            $('.yks_soz_yer div span').append(tsYer);
            $('.yks_say_ham div span').empty();
            $('.yks_say_ham div span').append(mf);
            $('.yks_say_yer div span').empty();
            $('.yks_say_yer div span').append(mfYer);
            $('.yks_dil_ham div span').empty();
            $('.yks_dil_ham  div span').append(dil);
            $('.yks_dil_yer div span').empty();
            $('.yks_dil_yer  div span').append(dilYer);
            $('html, body').animate({
                scrollTop: $("#yks_sonuclar").offset().top
            }, 1000);
        }
    }
});
$('#btn_temizle_yks').on('click', function (){
    $('.tyt_ham_puan div span').empty();
    $('.tyt_ham_puan div span').append('-');
    $('.tytYer div span').empty();
    $('.tytYer div span').append('-');
    $('.yks_ea_ham div span').empty();
    $('.yks_ea_ham div span').append('-');
    $('.yks_ea_yer div span').empty();
    $('.yks_ea_yer div span').append('-');
    $('.yks_soz_ham div span').empty();
    $('.yks_soz_ham div span').append('-');
    $('.yks_soz_yer div span').empty();
    $('.yks_soz_yer div span').append('-');
    $('.yks_say_ham div span').empty();
    $('.yks_say_ham div span').append('-');
    $('.yks_say_yer div span').empty();
    $('.yks_say_yer div span').append('-');
    $('.yks_dil_ham div span').empty();
    $('.yks_dil_ham  div span').append('-');
    $('.yks_dil_yer div span').empty();
    $('.yks_dil_yer  div span').append('-');
    $('input[name="form_fields[yks_mat_dogru]"]').empty();
    $('input[name="form_fields[yks_mat_yanlis]"]').empty();
    $('input[name="form_fields[yks_edb_dogru]"]').empty();
    $('input[name="form_fields[yks_edb_yanlis]"]').empty();
    $('input[name="form_fields[yks_sos_dogru]"]').empty();
    $('input[name="form_fields[yks_sos_yanlis]"]').empty();
    $('input[name="form_fields[yks_fen_dogru]"]').empty();
    $('input[name="form_fields[yks_fen_yanlis]"]').empty();
    $('input[name="form_fields[yks_dil_dogru]"]').empty();
    $('input[name="form_fields[yks_dil_yanlis]"]').empty();
    $('input[name="form_fields[tyt_turkce_dogru]"]').empty();
    $('input[name="form_fields[tyt_turkce_yanlis]"]').empty();
    $('input[name="form_fields[tyt_mat_dogru]"]').empty();
    $('input[name="form_fields[tyt_mat_yanlis]"]').empty();
    $('input[name="form_fields[tyt_sos_dogru]"]').empty();
    $('input[name="form_fields[tyt_sos_yanlis]"]').empty();
    $('input[name="form_fields[tyt_fen_dogru]"]').empty();
    $('input[name="form_fields[tyt_fen_yanlis]"]').empty();
    $('input[name="form_fields[yerlesme]"]').prop('checked', false);
    $('input[name="form_fields[diploma_puan]"]').val('');
    $('html, body').animate({
        scrollTop: $("#yks_temizle").offset().top
    }, 1000);
});

//Lgs Hesaplama

function findStandartPointForCourse (_net, _averageNet, _deviation){
    return ((_net - _averageNet) / _deviation) * 10 + 50;
}

$('#btn_temizle_lgs').on('click', function (){
    $('.lgs_puan div span').empty();
    $('.lgs_puan  div span').append('-');
    $('input[name="form_fields[lgs_turkce_dogru]"]').val('');
    $('input[name="form_fields[lgs_turkce_yanlis]"]').val('');
    $('input[name="form_fields[lgs_inkilap_dogru]"]').val('');
    $('input[name="form_fields[lgs_inkilap_yanlis]"]').val('');
    $('input[name="form_fields[lgs_din_dogru]"]').val('');
    $('input[name="form_fields[lgs_din_yanlis]"]').val('');
    $('input[name="form_fields[lgs_ingilizce_dogru]"]').val('');
    $('input[name="form_fields[lgs_ingilizce_yanlis]"]').val('');
    $('input[name="form_fields[lgs_matematik_dogru]"]').val('');
    $('input[name="form_fields[lgs_matematik_yanlis]"]').val('');
    $('input[name="form_fields[lgs_fen_dogru]"]').val('');
    $('input[name="form_fields[lgs_fen_yanlis]"]').val('');
    $('html, body').animate({
        scrollTop: $("#lgs_puan").offset().top
    }, 1000);
});

$('#btn_hesapla_lgs').on('click',function(){
    var turkceNet = parseFloat($('input[name="form_fields[lgs_turkce_dogru]"]').val() - ($('input[name="form_fields[lgs_turkce_yanlis]"]').val() / 3));
    var tcInkilapTarihiNet  = parseFloat($('input[name="form_fields[lgs_inkilap_dogru]"]').val() - ($('input[name="form_fields[lgs_inkilap_yanlis]"]').val() / 3));
    var dinKulturuNet  = parseFloat($('input[name="form_fields[lgs_din_dogru]"]').val() - ($('input[name="form_fields[lgs_din_yanlis]"]').val() / 3));
    var yabanciDilNet  = parseFloat($('input[name="form_fields[lgs_ingilizce_dogru]"]').val() - ($('input[name="form_fields[lgs_ingilizce_yanlis]"]').val() / 3));
    var matematikNet  = parseFloat($('input[name="form_fields[lgs_matematik_dogru]"]').val() - ($('input[name="form_fields[lgs_matematik_yanlis]"]').val() / 3));
    var fenBilimleriNet  = parseFloat($('input[name="form_fields[lgs_fen_dogru]"]').val() - ($('input[name="form_fields[lgs_fen_yanlis]"]').val() / 3));
    var turkceStandartPoint = findStandartPointForCourse(turkceNet, 9.451, 6.5764);
    var tcInkilapTarihiStandartPoint = findStandartPointForCourse(tcInkilapTarihiNet, 6.036, 3.581);
    var dinKulturuStandartPoint = findStandartPointForCourse(dinKulturuNet, 5.918, 3.1104);
    var yabanciDilStandartPoint = findStandartPointForCourse(yabanciDilNet, 3.63, 3.699);
    var matematikStandartPoint = findStandartPointForCourse(matematikNet, 2.798, 4.8753);
    var fenBilimleriStandartPoint = findStandartPointForCourse(fenBilimleriNet, 7.278, 5.9291);
    var turkceResultPoint = turkceStandartPoint * 4;
    var tcInkilapTarihiResultPoint = tcInkilapTarihiStandartPoint * 1;
    var dinKulturuResultPoint = dinKulturuStandartPoint * 1;
    var yabanciDilResultPoint = yabanciDilStandartPoint * 1;
    var matematikResultPoint = matematikStandartPoint * 4;
    var fenBilimleriResultPoint = fenBilimleriStandartPoint * 4;
    var totalPoint = turkceResultPoint + tcInkilapTarihiResultPoint + dinKulturuResultPoint + yabanciDilResultPoint + matematikResultPoint + fenBilimleriResultPoint;
    var resultPoint = 100 + ((400 * (totalPoint  - 413.611358996675 ))  / (1082.53807400458 - 413.611358996675));
    var result = Math.round(resultPoint * 10000) / 10000;
    if(result > 500){
        result = 500;
    }
    if(result < 100){
        result = 100;
    }
    $('.lgs_puan div span').empty();
    $('.lgs_puan div span').text(result.toString().replace('.',','));
    $('html, body').animate({
        scrollTop: $("#lgs_temizle").offset().top
    }, 1000);
});