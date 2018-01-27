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

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
        this.asserts = new HomeBlockAsserts(this.browser, this);
    };

    get logoOnliner() {
        return this.browser.$(".b-top-logo")
    };

    get pushNotification() {
        return this.browser.$(".push-notification__content")
    };

    get pushNotificationClose() {
        return this.getElement(".push-notification__close")
    };

    private get search(): SearchElement {
        if (!this._search) {
            this._search = new SearchElement("onliner_main")
        }
        return this._search;
    };

    public fillSearch(value: Search) {
        this.search.setValue(value.value);
    };

    get peopleSubBlockTab() {
        return this.browser.$(`${this._subBlockParent} [href='https://people.onliner.by']`)
    };

    get opinionSubBlockTab() {
        return this.browser.$(`${this._subBlockParent} [href='https://people.onliner.by/opinions']`)
    };

    get autoSubBlockTab() {
        return this.browser.$(`${this._subBlockParent} [href='https://auto.onliner.by']`)
    };

    get techSubBlockTab() {
        return this.browser.$(`${this._subBlockParent} [href='https://tech.onliner.by']`)
    };

    get realtSubBlockTab() {
        return this.browser.$(`${this._subBlockParent} [href='https://realt.onliner.by']`)
    };

    get forumSubBlockTab() {
        return this.browser.$(`${this._subBlockParent} [href='https://forum.onliner.by/']`)
    };
}
