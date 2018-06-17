import {BaseBlock} from "src/block/BaseBlock";
import {HomeBlockAsserts} from "src/asserts/Home/HomeBlockAsserts";
import {SearchElement} from "src/helpers/SearchElement";
import {Search} from "src/fixtures/Search";

export class HomeBlock extends BaseBlock {

    public asserts: HomeBlockAsserts;
    public pushNotificationContent = "Включите уведомления Onliner, " +
        "чтобы сразу получать самые важные новости. Никакого спама, обещаем";

    private _search: SearchElement;
    private _subBlockParent = ".b-main-page-grid-4.b-main-page-news-2";
    private logoOnliner = ".b-top-logo";
    private pushNotification = ".push-notification__content";
    private pushNotificationCloseButton = ".push-notification__close";
    private searchField = "onliner_main";
    private peopleSubBlockTab = `${this._subBlockParent} [href='https://people.onliner.by']`;
    private opinionSubBlockTab = `${this._subBlockParent} [href='https://people.onliner.by/opinions']`;
    private autoSubBlockTab = `${this._subBlockParent} [href='https://auto.onliner.by']`;
    private techSubBlockTab = `${this._subBlockParent} [href='https://tech.onliner.by']`;
    private realtSubBlockTab = `${this._subBlockParent} [href='https://realt.onliner.by']`;
    private forumSubBlockTab = `${this._subBlockParent} [href='https://forum.onliner.by/']`;

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
        this.asserts = new HomeBlockAsserts(this.browser, this);
    };

    get getLogoOnliner() {
        return this.browser.$(this.logoOnliner);
    };

    get getPushNotification() {
        return this.browser.$(this.pushNotification);
    };

    get getPushNotificationCloseButton() {
        return this.getElement(this.pushNotificationCloseButton);
    };

    private get search(): SearchElement {
        if (!this._search) {
            this._search = new SearchElement(this.searchField)
        }
        return this._search;
    };

    public fillSearch(value: Search) {
        this.search.setValue(value.value);
    };

    get getPeopleSubBlockTab() {
        return this.browser.$(this.peopleSubBlockTab)
    };

    get getOpinionSubBlockTab() {
        return this.browser.$(this.opinionSubBlockTab)
    };

    get getAutoSubBlockTab() {
        return this.browser.$(this.autoSubBlockTab)
    };

    get getTechSubBlockTab() {
        return this.browser.$(this.techSubBlockTab)
    };

    get getRealtSubBlockTab() {
        return this.browser.$(this.realtSubBlockTab)
    };

    get getForumSubBlockTab() {
        return this.browser.$(this.forumSubBlockTab)
    };
}
