describe('My first src', function() {
    it('www.onliner.by', function() {

        browser.url("https://www.onliner.by/");
        browser.waitUntil(async () => browser.getTitle() === "Onliner.by",
            2000, "The main page was not opened"
        );
    });

    it('www.onliner.by', function() {

        browser.$("a[href='https://catalog.onliner.by/']").click();
        browser.waitUntil(async () => browser.getTitle() === "Каталог Onliner.by",
            2000, "Catalog was not opened"
        );
    });
});