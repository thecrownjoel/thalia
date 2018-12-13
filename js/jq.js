var jsonURL = "https://www.juicer.io/api/feeds/thalia-instagram.json";
$.getJSON(jsonURL, function (json)
{
    var imgList= "";
    var i = 0;
    $.each(json.posts.items, function () {
        if (++i > 9) {
            return false;
    }
    console.log(this);
        imgList += '<li><img src= "' + this.image + '"></li>';
    });

    $('#images').append(imgList);
});
