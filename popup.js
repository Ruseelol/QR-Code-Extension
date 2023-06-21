document.addEventListener('DOMContentLoaded', function () {
  var convertBtn = document.getElementById('convertBtn');
  var urlInput = document.getElementById('urlInput');
  var qrcodeDiv = document.getElementById('qrcode');

  convertBtn.addEventListener('click', function () {
    var url = urlInput.value;
    if (url) {
      qrcodeDiv.innerHTML = '';
      var qrcode = new QRCode(qrcodeDiv, {
        text: url,
        width: 128,
        height: 128
      });
    }
  });
});
