export default class BasePage {
    get title() {
        return $('title').getText();
    }
}