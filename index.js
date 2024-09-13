document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    this.setAttribute('action','payment.html')
    this.submit()

})
