$(document).ready(function($) {
    var allSections = $('.content > p').hide()

    $('.content > h2 > a').click(function() {
        allSections.slideUp()
        $(this).parent().next().slideDown()
        return false
    })


})($)