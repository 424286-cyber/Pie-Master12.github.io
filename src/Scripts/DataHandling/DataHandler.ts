export class DataHandler {
    Clicks = 0;

    constructor() {
        this.Clicks = 0;
    }

    IncreaseClickCount(ClickIncrement: number) {
        this.Clicks += ClickIncrement;
    }
}