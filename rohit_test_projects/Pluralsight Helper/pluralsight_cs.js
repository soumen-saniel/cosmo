
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.action == "courseCounts"){
        //do something
        //alert("")
        //logic for count course
    }

    if(request.action == "makeSortable"){
        $('.course').dataTable({ "bPaginate": false });
    }

});
chrome.runtime.sendMessage({action:show});