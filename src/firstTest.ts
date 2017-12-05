describe('action with my most favorite web-portal Onliner.by:', function() {
    it('should check load main page', function() {

        browser.url("https://www.onliner.by/");
        browser.waitUntil(async () => browser.getTitle() === "Onliner.by",
            2000, "The main page was not opened"
        );
    });

    it('should check clickable button and load catalog page', function() {

        browser.$("a[href='https://catalog.onliner.by/']").click();
        browser.waitUntil(async () => browser.getTitle() === "Каталог Onliner.by",
            2000, "Catalog was not opened"
        );
    });
});