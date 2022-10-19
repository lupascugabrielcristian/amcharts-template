export class HistoricalDataResponse {
    meta: HistoricalDataMeta = new HistoricalDataMeta();
    data: HistoricalDataItem[] = [];
}

export class HistoricalDataMeta {
    ticker: string = "";
    name: string = "";
    found: number = 0;
    returned: number = 0;
}

export class HistoricalDataItem {
    date: string = "";
    open: number = 0;
    high: number = 0;
    low: number = 0;
    close: number = 0;
    volume: number = 0;
}