import {BasePage} from "src/pages/BasePage";
import {HomeBlock} from "src/block/home/HomeBlock";
import {HeaderBlock} from "src/block/HeaderBlock";

export class HomePage extends BasePage {

    public homeBlock: HomeBlock;
    public headerBlock: HeaderBlock;

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
        this.homeBlock = new HomeBlock(browser);
        this.headerBlock = new HeaderBlock(browser);
    };
}
