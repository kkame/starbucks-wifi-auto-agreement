if (window.location.href.indexOf('first.wifi.olleh.com/starbucks') !== -1) {
    if (document.getElementById('agreement_agree'))
        document.getElementById('agreement_agree').click();
    document.getElementById('purpose_agree').click();
    document.getElementById('contents').getElementsByTagName('a')[0].click();
}
else if (window.location.href.indexOf('http://www.istarbucks.co.kr/util/wireless.do') !== -1) {
    if (window.history.length > 2)
        window.history.go(-2);
}