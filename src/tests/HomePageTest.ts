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

describe("HomePageTest:", function () {

    it("should check load main page", function () {

        homePage.openHomePage();
        homePage.homeBlock.getLogoOnliner.waitForVisible();
        homePage.homeBlock.getPushNotification.waitForVisible();

        homePage.homeBlock.asserts.text(
            homePage.homeBlock.getPushNotification,
            homePage.homeBlock.pushNotificationContent
        );

        homePage.homeBlock.getPushNotificationCloseButton.click();
        homePage.homeBlock.getPushNotification.waitForVisible(timeout.s, true);
        homePage.homeBlock.asserts.title(homePageTitle);
    });

    it("should check clickable button and load catalog page", function () {

        homePage.headerBlock.getCatalogTab.click();
        catalogPage.mainCatalogBlock.asserts.title(catalogPageTitle);

        homePage.homeBlock.getLogoOnliner.waitForVisible();
        homePage.homeBlock.getLogoOnliner.click();
        homePage.homeBlock.asserts.title(homePageTitle);
        homePage.homeBlock.getPushNotification.waitForVisible(timeout.s, true);
    });

    it.skip("should search element", function () {
        homePage.homeBlock.fillSearch(SearchSample)
    });

    describe("Tab in main page:", function () {

        context("When move to Tab, Tab and Drop Down Menu should be visible", function () {

            it("should check News-Tab", function () {
                homePage.headerBlock.getNewsTab.moveToObject();
                homePage.headerBlock.getDropDownMenu.waitForVisible();
                homePage.headerBlock.asserts.text(homePage.headerBlock.getPeopleColumn, homePage.headerBlock.peopleText);
                homePage.headerBlock.asserts.text(homePage.headerBlock.getAutoColumn, homePage.headerBlock.autoText);
                homePage.headerBlock.asserts.text(homePage.headerBlock.getTechColumn, homePage.headerBlock.techText);
                homePage.headerBlock.asserts.text(homePage.headerBlock.getRealtColumn, homePage.headerBlock.realtText);
            });

            it("should check Auto-Tab", function () {
                homePage.headerBlock.getAutoTab.moveToObject();
                homePage.headerBlock.getDropDownMenu.waitForVisible();
                homePage.headerBlock.asserts.text(homePage.headerBlock.getAbColumn, homePage.headerBlock.abText);
                homePage.headerBlock.asserts.text(homePage.headerBlock.getMbColumn, homePage.headerBlock.mbText);
            });

            it("should check Realt-Tab", function () {
                homePage.headerBlock.getRealtTab.moveToObject();
                homePage.headerBlock.getDropDownMenu.waitForVisible();
                homePage.headerBlock.asserts.text(homePage.headerBlock.getSaleColumn, homePage.headerBlock.saleText);
                homePage.headerBlock.asserts.text(homePage.headerBlock.getLeaseColumn, homePage.headerBlock.leaseText);
            });

            it("should check Services-Tab", function () {
                homePage.headerBlock.getServicesTab.moveToObject();
                homePage.headerBlock.getDropDownMenu.waitForVisible(timeout.s, true);
            });

            it("should check Baraholka-Tab", function () {
                homePage.headerBlock.getBaraholkaTab.moveToObject();
                homePage.headerBlock.getDropDownMenu.waitForVisible(timeout.s, true);
            });

            it("should check Forum-Tab", function () {
                homePage.headerBlock.getForumTab.moveToObject();
                homePage.headerBlock.getDropDownMenu.waitForVisible(timeout.s, true);
            });
        });
    });

    describe("SubBlock in main page:", function () {

        context("When scroll to SubBlock, SubBlock and content should be visible", function () {

            it("should check People-SubBlock", function () {
                browser.scroll(homePage.homeBlock.getPeopleSubBlockTab.selector);
                homePage.headerBlock.asserts.text(homePage.homeBlock.getPeopleSubBlockTab, peopleTextTab);
            });

            it("should check Opinion-SubBlock", function () {
                browser.scroll(homePage.homeBlock.getOpinionSubBlockTab.selector);
                homePage.headerBlock.asserts.text(homePage.homeBlock.getOpinionSubBlockTab, opinionTextTab);
            });

            it("should check Auto-SubBlock", function () {
                browser.scroll(homePage.homeBlock.getAutoSubBlockTab.selector);
                homePage.headerBlock.asserts.text(homePage.homeBlock.getAutoSubBlockTab, autoTextTab);
            });

            it("should check Tech-SubBlock", function () {
                browser.scroll(homePage.homeBlock.getTechSubBlockTab.selector);
                homePage.headerBlock.asserts.text(homePage.homeBlock.getTechSubBlockTab, techTextTab);
            });

            it("should check Realt-SubBlock", function () {
                browser.scroll(homePage.homeBlock.getRealtSubBlockTab.selector);
                homePage.headerBlock.asserts.text(homePage.homeBlock.getRealtSubBlockTab, realtTextTab);
            });

            it("should check Forum-SubBlock", function () {
                browser.scroll(homePage.homeBlock.getForumSubBlockTab.selector);
                homePage.headerBlock.asserts.text(homePage.homeBlock.getForumSubBlockTab, forumTextTab);
            });
        });
    });
});
