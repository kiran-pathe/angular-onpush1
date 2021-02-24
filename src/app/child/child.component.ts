import { ChangeDetectionStrategy, ChangeDetectorRef,  Component, Input,  OnChanges,    OnInit, SimpleChange, SimpleChanges } from "@angular/core";
import { SharedDataService } from "../shared-data.service";

@Component({
  selector: "child-component",
  template: `
    <div>
      <h3>{{ this.executeFunction() }}</h3>
      <button (click)='addCounter()'>Add</button>
      my counter : {{counter}}<br>
      parent counter : {{parentCounter.counter}}<br>
      parent title : {{title}} <br>
      obs val : {{obsVal}}

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges {
  counter = 0;

  obsVal:number = 0;

  @Input()
  title;

  @Input()
  parentCounter;
  
  executeFunction() {
    console.log("App Rerendered");
    return "This is Child Component";
  }

  constructor(private cdr:ChangeDetectorRef,private sharedDataService: SharedDataService){  
    this.sharedDataService.latestNews.subscribe((val)=>{
      //console.log(val);
      this.obsVal = val;
      this.cdr.detectChanges()
    })  
  }


  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
  }

  addCounter() {
    this.counter = this.counter+1;
  }

}
