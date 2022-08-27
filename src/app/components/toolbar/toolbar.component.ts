import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements AfterViewInit, OnInit {

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  public sources: any[] = [];
  public articles: any[] = [];
  public currentNewsChannel?: string;

  constructor(private observer: BreakpointObserver, private changeDetector: ChangeDetectorRef, private newsApi: NewsService) { }

  ngOnInit(): void {
    this.newsApi.initArticles().subscribe((data: any) => this.articles = [ ...data.articles ]);
    this.newsApi.initSource().subscribe((data: any) => this.sources = [ ...data.sources ]);
    this.currentNewsChannel = 'TechCrunch';
  }

  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width: 787px)']).subscribe(res => {
      if (res?.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();        
      }
    });
    this.changeDetector.detectChanges();
  }

  getArticles(source: any) {
    this.newsApi.getArticlesById(source.id).subscribe((data: any) => {
      this.articles = [ ...data.articles ];
      this.currentNewsChannel = source.name;
    });
  }
}
