$(document).ready(function () {
    $('.js-target-scroll').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - 50 + 1)
            }, 1000);
            return false;
        }
    });

    $('.js-create-popup-img').each(function () {
        console.log('test');
        var $self = $(this);
        var items = new Array()
        var conf = new Object();
        conf.ending = $self.data('ending')
        conf.type = $self.data('type');
        conf.path = '_assets/' + ((conf.type == 'image') ? 'img' : 'video') + '/' + $self.data('path') + '/';
        conf.min = $self.data('min');
        conf.max = $self.data('max');

        var i;
        
        for (i = conf.min; i <= conf.max; i++) {
            name = (i < 10) ? ('0' + i.toString()) : i.toString();
            var entry = {src: conf.path + name + '.' + conf.ending};
            items.push(entry);
        }

        var obj = new Object();

        obj.items = items;
        obj.gallery = {enabled: true};
        obj.type = 'image';

        var json = JSON.stringify(obj);
        this.dataset.json = json;
        $self.removeClass('js-create-magnific-popup');
        $self.addClass('js-popMeUp');
    });

    $('.js-gallery').each(function(index) {
        var $self = $(this);
        var i, j;
        var name;
        var entry;
        
        var items = new Array();
        var conf = new Object;
        conf.ending = 'jpg'; 
        conf.path = $self.data('path');
        conf.index = $self.data('index');
        conf.max = $self.data('max')

        for (i = conf.index; i < (conf.index + conf.max); i++) {
            j = i % (conf.max + 1);
            name = (j < 10) ? ('0' + j.toString()) : j.toString();
            entry = {src: conf.path + name + '.' + conf.ending};
            items.push(entry);
        }
        var obj = new Object();

        obj.items = items;
        obj.gallery = {enabled: true};
        obj.type = 'image';

        var json = JSON.stringify(obj);
        this.dataset.json = json;
        $self.removeClass('js-gallery');
        $self.addClass('js-popMeUp');
    });

    $('.js-popMeUp').each(function(index) {
        var self = $(this);
        self.magnificPopup(self.data('json'));
    });
});