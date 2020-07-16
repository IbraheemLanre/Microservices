$(document).ready(() => {
    $('#form').submit((e) => {
        e.preventDefault();
        $.ajax({
            url: '/',
            type: 'post',
            contenttype: 'applicaton/json',
            data:  JSON.stringify($('#form').serializeArray()),
            success: (res) => {
                console.log('Response successful');
                console.log(res);
            }
        });
    })
});