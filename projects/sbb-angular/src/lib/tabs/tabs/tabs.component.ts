import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ComponentFactoryResolver,
  ElementRef,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  ViewEncapsulation,
  ViewChildren
} from '@angular/core';
import { LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW, TAB } from '@angular/cdk/keycodes';
import { Observable, merge, of, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { TabComponent } from '../tab/tab.component';

let counter = 0;

@Component({
  selector: 'sbb-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements AfterContentInit, OnDestroy {
  /**
   * Class property that tracks tab number of the list
   */
  nameOfTabList = `sbb-tabs-${counter++}`;
  /**
   * Index of tab list
   */
  tabListIndex = 0;
  /**
   * Option keys available to move between tabs
   */
  private allowedKeyCodes = [
    LEFT_ARROW,
    RIGHT_ARROW,
    UP_ARROW,
    DOWN_ARROW,
    TAB
  ];
  /**
   * Class property that tracks changes in the tabs contained in the list
   */
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  /**
   * Class property that tracks changes in the content tab in the list of tab
   */
  tabs$: Observable<TabComponent[]>;
  /**
   * Class property that tracks changes in the label tab in the list of tab
   */
  @ViewChildren('label') labels: QueryList<ElementRef>;
  /**
   * Class property that records an event on tabs
   */
  private _tabsSubscription = Subscription.EMPTY;

  constructor(/** * Class property that manages different events */ public componentFactoryResolver: ComponentFactoryResolver,
    /**
     * Class property that refers to the component object
     */
    public elementRef: ElementRef,
    private _changeDetector: ChangeDetectorRef) { }

  ngAfterContentInit() {

    this.checkNumberOfTabs();

    this.initTabs();

    this._tabsSubscription = this.tabs$
      .pipe(
        map(tabs => tabs.map(t => t._stateChanges)),
        switchMap(stateChanges => merge(...stateChanges)))
      .subscribe(() => this._changeDetector.markForCheck());

  }
  /**
   * Method that verifies the initial tabs state
   */
  initTabs() {
    this.tabs$ = merge<TabComponent[]>(of(this.tabs.toArray()), this.tabs.changes);

    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length !== 1) {
      this.selectTab(this.tabs.first);
    }
  }
  /**
   * Method that destroys an event subscribed on tabs
   */
  ngOnDestroy() {
    this._tabsSubscription.unsubscribe();
  }
  /**
   * Method that recovers the first tab selected
   */
  openFirstTab() {
    this.tabListIndex = 0;
    this.selectTab(this.tabs.first);
  }
  /**
   * Method that recovers the tab selected by index
   */
  openTabByIndex(tabIndex: number) {
    const tabToSelect = this.tabs.toArray()[tabIndex];
    this.selectTab(tabToSelect);
  }
  /**
   * Method that selects the tab that matches with the tab in input
   */
  selectTab(tab: TabComponent) {
    this.tabs.forEach((t, index) => {
      if (t.labelId === tab.labelId) {
        this.tabListIndex = index;
      }
      t.active = false;
      t.tabindex = -1;
      t.tabMarkForCheck();
    });

    tab.active = true;
    tab.tabindex = 0;
    tab.tabMarkForCheck();
  }
  /**
   * Method that responds only to arrows and tab event
   */
  onKeyUp(event : any) {
    // respond only to arrows and tab
    if (this.allowedKeyCodes.indexOf(event.keyCode) !== -1) {
      if (event.keyCode === TAB) {
        this.tabListIndex = this.tabs.map(t => t.active).indexOf(true);
      } else {
        this.handleKeyUp(event.keyCode);
      }
    }
  }

  private handleKeyUp(keyCode) {
    const tabLabels = this.labels.toArray();
    const hasReachEnd = this.handleKeyCodeReturnHasReachEnd(keyCode);
    const tabToFocus = tabLabels[this.tabListIndex];

    if (tabToFocus.nativeElement.disabled && !hasReachEnd) {
      // go to next
      this.handleKeyUp(keyCode);
    } else if (tabToFocus.nativeElement.disabled && hasReachEnd) {
      // reached end and no focusable tabs found. reverse direction to find a focusable one
      if (keyCode === LEFT_ARROW || keyCode === UP_ARROW) {
        this.handleKeyUp(RIGHT_ARROW);
      } else {
        this.handleKeyUp(LEFT_ARROW);
      }
    } else {
      tabLabels[this.tabListIndex].nativeElement.focus();
    }

  }

  private handleKeyCodeReturnHasReachEnd(keyCode): boolean {
    let hasReachEnd = false;

    switch (keyCode) {
      case LEFT_ARROW:
      case UP_ARROW:
        if (this.tabListIndex > 0) {
          this.tabListIndex -= 1;
        } else {
          hasReachEnd = true;
        }
        break;

      case RIGHT_ARROW:
      case DOWN_ARROW:
        if (this.tabListIndex < this.tabs.length - 1) {
          this.tabListIndex += 1;
        } else {
          hasReachEnd = true;
        }
        break;

      default:
        this.tabListIndex = this.tabListIndex;
    }

    return hasReachEnd;
  }
  /**
   * Method that controls if the activated tab number is at least two
   */
  private checkNumberOfTabs(): void {
    if (this.tabs.length < 2) {
      throw new Error(`The number of tabs must be at least 2`);
    }
  }

}
