var Hithandler = function() {

}

Hithandler.prototype.checkHits = function() {
        var self = this;
        var p = $('.enemy');
        var tx = p.position().left;
        var ty = p.position().top;
        $('.bullet').each(function() {
                    var bullet = $(this);
                    $('.enemy').each(function() {

                            }