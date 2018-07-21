function deleteIt(elm){
    $(elm.target).remove();
}
$('body').click(deleteIt);