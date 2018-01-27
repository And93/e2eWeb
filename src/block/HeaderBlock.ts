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
        return this.getElement(`[href='https://catalog.onliner.by/']${this.tabChildSelector}`);
    };

    get newsTab() {
        return this.getElement(`[href='https://www.onliner.by']${this.tabChildSelector}`);
    };

    get autoTab() {
        return this.getElement(`[href='https://ab.onliner.by']${this.tabChildSelector}`)
    };

    get realtTab() {
        return this.getElement(`[href='https://r.onliner.by/pk']${this.tabChildSelector}`)
    };

    get servicesTab() {
        return this.getElement(`[href="https://s.onliner.by"]${this.tabChildSelector}`)
    };

    get baraholkaTab() {
        return this.getElement(`[href="https://baraholka.onliner.by/"]${this.tabChildSelector}`)
    };

    get forumTab() {
        return this.getElement(`[href="https://forum.onliner.by/"]${this.tabChildSelector}`)
    };

    get dropDownMenu() {
        return this.browser.$(".b-main-navigation__dropdown.b-main-navigation__dropdown_visible")
    };

    get peopleColumn() {
        return this.browser.$(`[href='https://people.onliner.by']${this.dropDownTitleChildSelector}`)
    };

    get autoColumn() {
        return this.browser.$(`[href="https://auto.onliner.by"]${this.dropDownTitleChildSelector}`)
    };

    get techColumn() {
        return this.browser.$(`[href="https://tech.onliner.by"]${this.dropDownTitleChildSelector}`)
    };

    get realtColumn() {
        return this.browser.$(`[href="https://realt.onliner.by"]${this.dropDownTitleChildSelector}`)
    };

    get abColumn() {
        return this.browser.$(`[href="https://ab.onliner.by"]${this.dropDownTitleChildSelector}`)
    };

    get mbColumn() {
        return this.browser.$(`[href="https://mb.onliner.by"]${this.dropDownTitleChildSelector}`)
    };

    get saleColumn() {
        return this.browser.$(`[href="https://r.onliner.by/pk"]${this.dropDownTitleChildSelector}`)
    };

    get leaseColumn() {
        return this.browser.$(`[href="https://r.onliner.by/ak"]${this.dropDownTitleChildSelector}`)
    };
}
