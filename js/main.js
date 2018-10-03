$(function() {
  function getQueryString() {
    var url = window.location.href,
      parser = document.createElement('a');

    parser.href = url;

    return parser.search.substring(1);
  }


  $('.js-survey-btn').each(function() {
    var href = $(this).attr('href');
    if(/\?.+/.test(href)) {
      href += '&' + getQueryString();
    } else if (/\?/.test(href)) {
      href += getQueryString();
    } else {
      href += '?' + getQueryString();
    }

    console.log(href);

    $(this).attr('href', href);
  });
});
