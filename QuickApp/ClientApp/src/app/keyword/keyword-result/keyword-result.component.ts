import { Component, Input, OnInit } from '@angular/core';
import { KeywordResult } from 'src/app/models/keyword-result.model';

@Component({
  selector: 'app-keyword-result',
  templateUrl: './keyword-result.component.html',
  styleUrls: ['./keyword-result.component.scss']
})
export class KeywordResultComponent implements OnInit {

  @Input() public keyword: string;
  public keywordModel: KeywordResult;

  constructor() { }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData() {
    this.keywordModel = new KeywordResult(
      1,
      17,
      123,
      'About 21,600,000 results (0.42 seconds)'
    );
  }

  handleViewCachedFirstPage() {
    console.log('Show first page content');

    //TO-DO: Handle showing cached first page by using this.id
  }
}
