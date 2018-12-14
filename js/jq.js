var jsonURL = "https://www.juicer.io/api/feeds/thalia-instagram.json";
$.getJSON(jsonURL, function (json)
{
    var imgList= "";
    var i = 0;
    $.each(json.posts.items, function () {
        if (++i > 9) {
            return false;
    }
    var url = this.full_url;
    var img = this.image;

    console.log(this.full_url);
        imgList += '<div><a href="' + url + '" target="_blank"><img src= "' + img + '"></a></div>';
    });

    $('#images').append(imgList);
});
