$(".vibes").each(function(i,e) {
    var paragraph = $(e).text();
    var maxlength = 100;
    var strlength = paragraph.length;
    if (strlength > maxlength) {
        var introduction    = paragraph.substr(0,maxlength); // cut string
        var search          = introduction.lastIndexOf(" "); // find position of last space (last word cannot be cut)
        introduction        = introduction.substr(0, search); // cut string until last space
        introduction        = introduction + "..."; // add ... in the end
        $(e).text(introduction);
    }
});

// $(".prod-caption a").each(function(i,e) {
//     var paragraph = $(e).text();
//     var maxlength = 32;
//     var strlength = paragraph.length;
//     if (strlength > maxlength) {
//         var introduction    = paragraph.substr(0,maxlength); // cut string
//         var search          = introduction.lastIndexOf(" "); // find position of last space (last word cannot be cut)
//         introduction        = introduction.substr(0, search); // cut string until last space
//         introduction        = introduction + "..."; // add ... in the end
//         $(e).text(introduction);
//     }
// });
