$("#search-field").ghostHunter({
    results: "#search-results",
    onKeyUp: true,
    result_template: "<li id='gh-{{ref}}' class='gh-search-item'><a href='{{link}}'>{{title}}</a></li>",
    info_template: "<header class='read-next-card-header'><h3 class='read-next-card-header-title'>Number of posts found: {{amount}}</h3></header>",
    subpath: "/blog",
    onComplete: function(results) {
        if (results && results.length) {
            $('.search-results').show();
        } else {
            var query = $('#search-field').val();
            if (!query) {
                $('.search-results').hide();
            }
        }
    },
});