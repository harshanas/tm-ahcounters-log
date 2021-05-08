var tmSessionDataKey = "tmSessionData"

if (!localStorage.getItem(tmSessionDataKey)){
    localStorage.setItem(tmSessionDataKey, JSON.stringify([]));
}



$(document).on('click', '.addbutton', function(e) {
    e.preventDefault();
    var currentSessionData = {}
    var $oriTr = $("#countsFormOri");
    var $lastTr = $(this).prev('table').find('tbody>tr:last');
    var $lastTrChildren = $lastTr.children();
    $.each($lastTrChildren, function(index, elem) {
        currentSessionData[$(elem).children().attr('name')] = $(elem).children().val();
    })

    console.log(currentSessionData);

    tmSessionData = JSON.parse(localStorage.getItem(tmSessionDataKey));
    tmSessionData.push(currentSessionData);
    localStorage.setItem(tmSessionDataKey, JSON.stringify(tmSessionData));
    
    $oriTr.clone(true).insertAfter($lastTr);
});


function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); };
$(document).on("keydown", disableF5);