// $(document).ready(function() {
//     var allSections = $('.content > p').hide()

//     $('.content > h2 > a').click(function() {
//         allSections.slideUp()
//         $(this).parent().next().slideDown()
//         return false
//     })


// })

$(document).ready(function() {
    $(".section").on('click', 'a', function(e) {
        var tab = $(this).attr('href')
        $('.tab').removeClass('active')
        $(tab).addClass('active')
    })
})