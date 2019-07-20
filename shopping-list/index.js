// completed app
$(function(){
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('.shopping-list').prepend(
    `<li>
        <span class="shopping-item">` + $("#shopping-list-entry").val() + `</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
        </div>
    </li>`);
});

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

}); 