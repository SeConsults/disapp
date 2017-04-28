var init_stock_lookup;

init_stock_lookup = function(){
    $('#stock-looup-form').on('ajax:success', function(event, data, status){
        $('#stock-looup').replaceWith(data);
        init_stock_lookup();
    })
}

$(document).ready(function(){
    init_stock_lookup();
})