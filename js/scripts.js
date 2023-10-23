$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 4000 });
    $("#carousel-pause").click(function () {
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function () {
        $("#mycarousel").carousel('cycle');
    });
});

$(document).ready(function() {
    const reserveModal = $('#reserveModal');
    const reserveModalButton = $('#reserveButton');
    
    reserveModalButton.click(function() {
        reserveModal.modal('show');
    });

});

$(document).ready(function() {
    const loginModal = $('#loginModal');
    const loginModalButton = $('#LoginBtn');
    
    loginModalButton.click(function() {
        loginModal.modal('show');
    });
    
});

