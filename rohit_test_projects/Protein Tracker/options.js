$(function() {

    chrome.storage.sync.get('goal', function(items){
        $('#goal').text(items.goal);
    });

    $('#save').click(function(){
        var goal = $('#goal').val();
        if(goal){
            //callback called after done saving
            chrome.storage.sync.set({'goal':goal}, function(){
                close();
            });
        }
    });

    $('#reset').click(function(){
        chrome.storage.sync.set({'total':0},function(){
            var opt = {
                type: "basic",
                title: "total reset",
                message: "Total has been reset to zero",
                iconUrl: "icon.png"
            }

            chrome.notifications.create('reset',opt, function(){
                
            });
        });
    });
});