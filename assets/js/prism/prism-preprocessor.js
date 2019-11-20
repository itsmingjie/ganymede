(function runPrismPreprocessor() {

    /* Process all <code> elements */
    var codeElements = $('pre > code[class*=lang-], pre > code[class*=language-]'); // All code elements with class language-* or lang-*
    if (codeElements.length) {
        codeElements.each(processCodeElement);
    };

    /* Process a <code> element */
    function processCodeElement() {
        var code = $(this);
        var pre = code.parent();

        processClass(code);
        processLineNumbers(code, pre);
        processDataStart(code, pre);
        processDataLine(code, pre);
        processDataLineOffset(code, pre);
        processDataSrc(code, pre);
    }

    /**
     * Apparently, Ghost removes everything after the first space in <code>'s class attribute.
     * As a workaround, I use "|" as a separator in Markdown and replace it with spaces here.
     */
    function processClass(code) {
        code.attr('class', code.attr('class').replace(/\|/g, " "));
    }

    /* Process line-numbers */
    function processLineNumbers(code, pre) {
        moveToPreClass("line-numbers", code, pre);
    }

    /* Process data-start */
    function processDataStart(code, pre) {
        moveToPreAttr(/(data-start)="(.+?)"/, code, pre);
    }

    /* Process data-line */
    function processDataLine(code, pre) {
        moveToPreAttr(/(data-line)="(.+?)"/, code, pre);
    }

    /* Process data-line-offset */
    function processDataLineOffset(code, pre) {
        moveToPreAttr(/(data-line-offset)="(.+?)"/, code, pre);
    }

    /* Process data-src */
    function processDataSrc(code, pre) {
        moveToPreAttr(/(data-src)="(.+?)"/, code, pre);
    }

    /* Removes a class from <code> and adds it to <pre> */
    function moveToPreClass(clazz, code, pre) {
        if (code.attr('class').indexOf(clazz) >= 0) {
            code.attr('class', code.attr('class').replace(clazz, ""));
            pre.addClass(clazz);
        }
    }

    /* Moves an attribute from <code> class to <pre> attribute */
    function moveToPreAttr(regex, code, pre) {
        var match = code.attr('class').match(regex);
        if (match) {
            var attr = match[1]; // Make sure regex sets this!!
            var value = match[2]; // Make sure regex sets this!!
            code.attr('class', code.attr('class').replace(regex, ""));
            pre.attr(attr, value);
        }
    }

})();
