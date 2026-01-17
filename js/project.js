$(function () {
    var search = location.search
    var params = new URLSearchParams(search);
    var getParam = params.get('name');

    switch (getParam) {
        case 'gallery':
            $('.portfolio-title').html('갤러리');
            $('.gallery').removeClass('d-none');
            break;
            
        case 'digitalnow':
            $('.portfolio-title').html('디지털나우');
            $('.digitalnow').removeClass('d-none');
            break;

        case 'butlerlounge':
            $('.portfolio-title').html('버틀러라운지');
            $('.butlerlounge').removeClass('d-none');
            break;

        case 'popupsystem':
            $('.portfolio-title').html('팝업 시스템');
            $('.popupsystem').removeClass('d-none');
            break;

        case 'lotto':
            $('.portfolio-title').html('로또 앱');
            $('.lotto').removeClass('d-none');
            break;

        case 'polaroid':
            $('.portfolio-title').html('폴라로이드 앱');
            $('.polaroid').removeClass('d-none');
            break;

        case 'IyouMarket':
            $('.portfolio-title').html('IyouMarket');
            $('.IyouMarket').removeClass('d-none');
            break;
    }
});