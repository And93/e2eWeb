import {BaseBlock} from "src/block/BaseBlock";

export class SearchElement extends BaseBlock {

    private input: string;
    private _window = ".modal-iframe";
    private _searchResults = ".search__results";

    constructor(private fieldName: string) {
        super(browser);
        this.input = `[data-project='${this.fieldName}']`;
    };

    private get window() {
        return this.browser.$(this._window);
    };

    private get resultSearch() {
        return this.browser.$(this._searchResults);
    };

    private getOptions(title: string) {
        return this.getElement(`a*=${title}`);
    };

    public setValue(value: string) {
        this.browser.scroll(this.input);
        this.browser.$(this.input).setValue(value);
        this.window.waitForVisible();
        this.resultSearch.waitForVisible();
        this.getOptions(value).click();
    };
}
