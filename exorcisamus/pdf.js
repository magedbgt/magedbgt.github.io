function printCert(certPrint) {
   let certificado = document.getElementById('certPrint').innerHTML,
   certificado_ = document.body.innerHTML;

   document.body.innerHTML = certificado;

   window.print();

   document.body.innerHTML = certificado_;
}
