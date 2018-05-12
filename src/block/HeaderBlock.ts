import {BaseBlock} from "src/block/BaseBlock";
import {HeaderBlockAsserts} from "src/asserts/HeaderBlockAsserts";

export class HeaderBlock extends BaseBlock {

    public asserts: HeaderBlockAsserts;
    public peopleText = "Люди";
    public autoText = "Авто";
    public techText = "Технологии";
    public realtText = "Недвижимость";
    public abText = "Автобарахолка";
    public mbText = "Мотобарахолка";
    public saleText = "Продажа";
    public leaseText = "Аренда";

    private tabChildSelector = ".b-main-navigation__link";
    private dropDownTitleChildSelector = ".b-main-navigation__dropdown-title-link";

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
        this.asserts = new HeaderBlockAsserts(this.browser, this);
    };

    get catalogTab() {
        return this.getElement(HeaderBlock.baseUrl("catalog", "/") + this.tabChildSelector);
    };

    get newsTab() {
        return this.getElement(HeaderBlock.baseUrl("www") + this.tabChildSelector);
    };

    get autoTab() {
        return this.getElement( HeaderBlock.baseUrl("ab") + this.tabChildSelector);
    };

    get realtTab() {
        return this.getElement(HeaderBlock.baseUrl("r", "/pk") + this.tabChildSelector);
    };

    get servicesTab() {
        return this.getElement(HeaderBlock.baseUrl("s", "/tasks") + this.tabChildSelector);
    };

    get baraholkaTab() {
        return this.getElement(HeaderBlock.baseUrl("baraholka", "/") + this.tabChildSelector);
    };

    get forumTab() {
        return this.getElement(HeaderBlock.baseUrl("forum", "/") + this.tabChildSelector);
    };

    get dropDownMenu() {
        return this.browser.$(".b-main-navigation__dropdown.b-main-navigation__dropdown_visible")
    };

    get peopleColumn() {
        return this.browser.$(HeaderBlock.baseUrl("people") + this.dropDownTitleChildSelector);
    };

    get autoColumn() {
        return this.browser.$(HeaderBlock.baseUrl("auto") + this.dropDownTitleChildSelector);
    };

    get techColumn() {
        return this.browser.$(HeaderBlock.baseUrl("tech") + this.dropDownTitleChildSelector);
    };

    get realtColumn() {
        return this.browser.$(HeaderBlock.baseUrl("realt") + this.dropDownTitleChildSelector);
    };

    get abColumn() {
        return this.browser.$(HeaderBlock.baseUrl("ab") + this.dropDownTitleChildSelector);
    };

    get mbColumn() {
        return this.browser.$(HeaderBlock.baseUrl("mb") + this.dropDownTitleChildSelector);
    };

    get saleColumn() {
        return this.browser.$(HeaderBlock.baseUrl("r", "/pk") + this.dropDownTitleChildSelector);
    };

    get leaseColumn() {
        return this.browser.$(HeaderBlock.baseUrl("r", "/ak") + this.dropDownTitleChildSelector);
    };

    private static baseUrl(prefix: string, postfix: string = "") {
        return `[href="https://${prefix}.onliner.by${postfix}"]`;
    };
}
