//1
$(document).ready(function() {
    
    $('h2.head').css('background-color', 'green');
    
    
    $('h2.head .inner').css('font-size', '35px');
});

//2
$(document).ready(function() {
    $('a').filter(function() {
        return
        $(this).attr('href').startsWith ('https://');
    }).attr('target', '_blank');
    });

// 3
$(document).ready(function() {
    $('h3').each(function() {
        let h3 = $(this);
        let div = h3.next('div');
        if(div.length) {
            h3.before(div);
        }
    });
});

//4
$(document).ready(function() {
    let checkboxes = $('input[type="checkbox"]');
    checkboxes.change(function() {
        let checkedCount =
        checkboxes.filter(':checked').length;
        if (checkedCount >= 3) {
            checkboxes.prop('disabled', true);
        }
    });
});
