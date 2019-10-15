$(document).ready(function() {
    $(".pic").on('click', 'a', function(e) {
        var tab = $(this).attr('href')
        $('.each').removeClass('active')
        $(tab).addClass('active')
    })
})