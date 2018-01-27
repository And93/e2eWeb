import {BaseBlock} from "src/block/BaseBlock";
import {MainCatalogBlockAsserts} from "src/asserts/catalog/MainCatalogBlockAsserts";

export class MainCatalogBlock extends BaseBlock {

    public asserts: MainCatalogBlockAsserts;

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
        this.asserts = new MainCatalogBlockAsserts(this.browser, this)
    };
}
