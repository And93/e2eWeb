import {BaseBlock} from "src/block/BaseBlock";

export class BasePage extends BaseBlock {

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
    };

    public openHomePage() {
        return this.browser.url("/");
    };
}
