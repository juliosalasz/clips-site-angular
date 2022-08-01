import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;
  constructor() {}

  //for selecing the children components
  ngAfterContentInit(): void {
    //this will search the tab with the active class
    const activeTabs = this.tabs?.filter((tab) => tab.active);

    //this will auto select the first tab if no other tab is active
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }
  //select tab will make all tabs inactive and activate the selected one
  selectTab(tab: TabComponent) {
    this.tabs?.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
    return false;
  }
}
