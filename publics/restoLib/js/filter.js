(function ($) {
    $('#reSearch').keyup(function (event) {
        var input = $(this);
        var val = input.val();
        if (val == '') {
            $('#search li').show();
            $('#search span').removeClass('highlighted');
            return true;
        }
        var regex = '\\b(.*)';
        for (var i in val){
            regex += '('+val[i]+')(.*)';
        }
        regex+='\\b';
        $('#search li').show();
        $('#search').find('a>span').each(function () {
            var span = $(this);
            var resultats = span.text().match(new RegExp(regex,'i'));
            if (resultats) {
                var string = '';
                for (var i in resultats) {
                  if (i > 0) {
                      if (i%2 == 0) {
                          string += '<span class="highlighted">'+resultats[i]+'<span>';
                      }else{
                        string += resultats[i];
                    }
                  }  
                }
                span.empty().append(string);
            }else{
                span.parent().parent().hide();
            }
         })
    });
})(jQuery);