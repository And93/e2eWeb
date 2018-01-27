import {BasePage} from "src/pages/BasePage";
import {MainCatalogBlock} from "src/block/catalog/MainCatalogBlock";

export class CatalogPage extends BasePage {

    public mainCatalogBlock: MainCatalogBlock;

    constructor(protected browser: WebdriverIO.Client<void>) {
        super(browser);
        this.mainCatalogBlock = new MainCatalogBlock(browser);
    };
}
