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
    private catalogTab = HeaderBlock.baseUrl("catalog", "/") + this.tabChildSelector;
    private newsTab = HeaderBlock.baseUrl("www") + this.tabChildSelector;
    private autoTab = HeaderBlock.baseUrl("ab") + this.tabChildSelector;
    private realtTab = HeaderBlock.baseUrl("r", "/pk") + this.tabChildSelector;
    private servicesTab = HeaderBlock.baseUrl("s", "/tasks") + this.tabChildSelector;
    private baraholkaTab = HeaderBlock.baseUrl("baraholka", "/") + this.tabChildSelector;
    private forumTab = HeaderBlock.baseUrl("forum", "/") + this.tabChildSelector;
    private dropDownMenu = ".b-main-navigation__dropdown.b-main-navigation__dropdown_visible";
    private peopleColumn = HeaderBlock.baseUrl("people") + this.dropDownTitleChildSelector;
    private autoColumn = HeaderBlock.baseUrl("auto") + this.dropDownTitleChildSelector;
    private techColumn = HeaderBlock.baseUrl("tech") + this.dropDownTitleChildSelector;
    private realtColumn = HeaderBlock.baseUrl("realt") + this.dropDownTitleChildSelector;
    private abColumn = HeaderBlock.baseUrl("ab") + this.dropDownTitleChildSelector;
    private mbColumn = HeaderBlock.baseUrl("mb") + this.dropDownTitleChildSelector;
    private saleColumn = HeaderBlock.baseUrl("r", "/pk") + this.dropDownTitleChildSelector;
    private leaseColumn = HeaderBlock.baseUrl("r", "/ak") + this.dropDownTitleChildSelector;

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
        this.asserts = new HeaderBlockAsserts(this.browser, this);
    };

    private static baseUrl(prefix: string, postfix: string = "") {
        return `[href="https://${prefix}.onliner.by${postfix}"]`;
    };

    get getCatalogTab() {
        return this.getElement(this.catalogTab);
    };

    get getNewsTab() {
        return this.getElement(this.newsTab);
    };

    get getAutoTab() {
        return this.getElement(this.autoTab);
    };

    get getRealtTab() {
        return this.getElement(this.realtTab);
    };

    get getServicesTab() {
        return this.getElement(this.servicesTab);
    };

    get getBaraholkaTab() {
        return this.getElement(this.baraholkaTab);
    };

    get getForumTab() {
        return this.getElement(this.forumTab);
    };

    get getDropDownMenu() {
        return this.browser.$(this.dropDownMenu);
    };

    get getPeopleColumn() {
        return this.browser.$(this.peopleColumn);
    };

    get getAutoColumn() {
        return this.browser.$(this.autoColumn);
    };

    get getTechColumn() {
        return this.browser.$(this.techColumn);
    };

    get getRealtColumn() {
        return this.browser.$(this.realtColumn);
    };

    get getAbColumn() {
        return this.browser.$(this.abColumn);
    };

    get getMbColumn() {
        return this.browser.$(this.mbColumn);
    };

    get getSaleColumn() {
        return this.browser.$(this.saleColumn);
    };

    get getLeaseColumn() {
        return this.browser.$(this.leaseColumn);
    };
}
