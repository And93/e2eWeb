import {HomePage} from "src/pages/HomePage";
import {CatalogPage} from "src/pages/CatalogPage";
import {timeout} from "src/block/BaseBlock";
import {SearchSample} from "src/fixtures/Search";

const homePage = new HomePage(browser),
    catalogPage = new CatalogPage(browser),
    homePageTitle = "Onliner.by",
    catalogPageTitle = "Каталог Onliner.by",
    peopleTextTab = "ЛЮДИ",
    opinionTextTab = "МНЕНИЯ",
    autoTextTab = "АВТО",
    techTextTab = "ТЕХНОЛОГИИ",
    realtTextTab = "НЕДВИЖИМОСТЬ",
    forumTextTab = "ФОРУМ";

describe('action with my most favorite web-portal Onliner.by:', function () {

    it('should check load main page', function () {

        homePage.openHomePage();
        homePage.homeBlock.logoOnliner.waitForVisible();
        homePage.homeBlock.pushNotification.waitForVisible();

        homePage.homeBlock.asserts.text(
            homePage.homeBlock.pushNotification,
            homePage.homeBlock.pushNotificationContent
        );

        homePage.homeBlock.pushNotificationClose.click();
        homePage.homeBlock.pushNotification.waitForVisible(timeout.s, true);
        homePage.homeBlock.asserts.title(homePageTitle);
    });

    it('should check clickable button and load catalog page', function () {

        homePage.headerBlock.catalogTab.click();
        catalogPage.mainCatalogBlock.asserts.title(catalogPageTitle);

        homePage.homeBlock.logoOnliner.waitForVisible();
        homePage.homeBlock.logoOnliner.click();
        homePage.homeBlock.asserts.title(homePageTitle);
        homePage.homeBlock.pushNotification.waitForVisible(timeout.s, true);
    });

    it('should move to tab and check it', function () {

        homePage.headerBlock.newsTab.moveToObject();
        homePage.headerBlock.dropDownMenu.waitForVisible();
        homePage.headerBlock.asserts.text(homePage.headerBlock.peopleColumn, homePage.headerBlock.peopleText);
        homePage.headerBlock.asserts.text(homePage.headerBlock.autoColumn, homePage.headerBlock.autoText);
        homePage.headerBlock.asserts.text(homePage.headerBlock.techColumn, homePage.headerBlock.techText);
        homePage.headerBlock.asserts.text(homePage.headerBlock.realtColumn, homePage.headerBlock.realtText);

        homePage.headerBlock.autoTab.moveToObject();
        homePage.headerBlock.dropDownMenu.waitForVisible();
        homePage.headerBlock.asserts.text(homePage.headerBlock.abColumn, homePage.headerBlock.abText);
        homePage.headerBlock.asserts.text(homePage.headerBlock.mbColumn, homePage.headerBlock.mbText);

        homePage.headerBlock.realtTab.moveToObject();
        homePage.headerBlock.dropDownMenu.waitForVisible();
        homePage.headerBlock.asserts.text(homePage.headerBlock.saleColumn, homePage.headerBlock.saleText);
        homePage.headerBlock.asserts.text(homePage.headerBlock.leaseColumn, homePage.headerBlock.leaseText);

        homePage.headerBlock.servicesTab.moveToObject();
        homePage.headerBlock.dropDownMenu.waitForVisible(timeout.s, true);

        homePage.headerBlock.baraholkaTab.moveToObject();
        homePage.headerBlock.dropDownMenu.waitForVisible(timeout.s, true);

        homePage.headerBlock.forumTab.moveToObject();
        homePage.headerBlock.dropDownMenu.waitForVisible(timeout.s, true);
    });

    it('should scroll to subBlock and check it', function () {

        browser.scroll(homePage.homeBlock.peopleSubBlockTab.selector);
        homePage.headerBlock.asserts.text(homePage.homeBlock.peopleSubBlockTab, peopleTextTab);

        browser.scroll(homePage.homeBlock.opinionSubBlockTab.selector);
        homePage.headerBlock.asserts.text(homePage.homeBlock.opinionSubBlockTab, opinionTextTab);

        browser.scroll(homePage.homeBlock.autoSubBlockTab.selector);
        homePage.headerBlock.asserts.text(homePage.homeBlock.autoSubBlockTab, autoTextTab);

        browser.scroll(homePage.homeBlock.techSubBlockTab.selector);
        homePage.headerBlock.asserts.text(homePage.homeBlock.techSubBlockTab, techTextTab);

        browser.scroll(homePage.homeBlock.realtSubBlockTab.selector);
        homePage.headerBlock.asserts.text(homePage.homeBlock.realtSubBlockTab, realtTextTab);

        browser.scroll(homePage.homeBlock.forumSubBlockTab.selector);
        homePage.headerBlock.asserts.text(homePage.homeBlock.forumSubBlockTab, forumTextTab);
    });

    it('should search element', function () {

        homePage.homeBlock.fillSearch(SearchSample)
    });
});
