export class KeywordResult {
    constructor(
      id: number,
      adwordsAdvertiserCount?: number,
      linkCount?: number,
      searchStatsText?: string) {
        this.id = id;
        this.adwordsAdvertiserCount = adwordsAdvertiserCount;
        this.linkCount = linkCount;
        this.searchStatsText = searchStatsText;
    }

    id: number;
    adwordsAdvertiserCount?: number;
    linkCount?: number;
    searchStatsText?: string;
}
