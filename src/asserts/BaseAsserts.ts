import {BaseBlock, PageElement, timeout} from "src/block/BaseBlock";

export class BaseAsserts {

    constructor(protected browser: WebdriverIO.Client<void>, protected block: BaseBlock) {
    };

    public title(title: string) {

        const getTitle = this.browser.getTitle();

        this.browser.waitUntil(
            async () => getTitle === title,
            timeout.m,
            `The title of page: ${getTitle} but expected: ${title}`
        )
    };

    public text(element: PageElement, content: string) {
        this.browser.waitUntil(
            async () => element.getText() === content,
            timeout.m,
            `The text in the element: ${element.selector} does not match the expected: ${content}`
        )
    };
}
