import { Component, NgModule, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'joke',
  template: `
  <div class="card card-block">
    <h4 class="card-title">{{data.setup}}</h4>
    <p class="card-text"
      [hidden]="data.hide">
      {{data.punchline}}
      <ng-content></ng-content>
      <ng-content select=".punchline"></ng-content>
    </p>
    <a (click)="data.toggle()" class="btn btn-warning">Tell Me
    </a>
  </div>

  <h1>NG-Content</h1>
  <div class="card card-block">
  <h4 class="card-title">{{data.setup}}</h4>
  <p class="card-text"
    [hidden]="data.hide">
    {{data.punchline}}
    <ng-content></ng-content>
  </p>
  <a (click)="data.toggle()" class="btn btn-warning">Tell Me
  </a>

  <h1>Multiple-NG-Content</h1>
  <div class="card card-block">
  <h4 class="card-title">
    <ng-content select=".setup"></ng-content>
  </h4>
  <p class="card-text" [hidden]="data.hide">
    <ng-content select=".punchline"></ng-content>
  </p>
  <a (click)="data.toggle()" class="btn btn-warning">Tell Me
  </a>
</div>
  `
})
export class JokeComponent {
  @Input('joke') data: Joke;
  constructor() {
    console.log(`new - data is ${this.data}`);
  }
  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }
  ngOnInit() {
    console.log(`ngOnInit - data is ${this.data}`);
  }
  ngDoCheck() {
    console.log("ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}


export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;
  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }
  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'joke-form',
  template: `
    <div class="card card-block">
      <h4 class="card-title">Create Joke</h4>
      <div class="form-group">
        <input type="text"
          class="form-control"
          placeholder="Enter th setup"
          #setup>
      </div>
      <div class="form-group">
        <input type="text"
                class="form-control"
                placeholder="Enter the punchline"
                #punchline>
      </div>
      <button type="button"
              class="btn btn-primary"
              (click)="createJoke(setup.value, punchline.value)">Create
      </button>
    </div>
`,
  styles: [
    `.card {
      background-color: gray;
    }`
  ],
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.Native
  // encapsulation: ViewEncapsulation.None
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();
  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}

@Component({
  selector: 'joke-list',
  template: `
    <joke *ngFor="let j of jokes" [joke]="j"></joke>
    <button type="button"
            class="btn btn-success"
            (click)="addJoke()">Add Joke
    </button>
    <button type="button"
            class="btn btn-danger"
            (click)="deleteJoke()">Clear Jokes
    </button>
  `

  // <joke-form (jokeCreated)="addJoke($event)"></joke-form>
  // <joke *ngFor="let j of jokes" [joke]="j"></joke>
  //   <joke *ngFor="let j of jokes" [joke]="j">
  //   <h1>{{j.punchline}}</h1>  
  // </joke>
  // <joke *ngFor="let j of jokes" [joke]="j">
  // <span class="setup">{{ j.setup }} ?</span>
  // <h1 class="punchline">{{ j.punchline }}</h1> ①
  // </joke>
})
export class JokeListComponent {
  jokes: Joke[] = [];
  constructor() {
    // this.jokes = [
    //   new Joke("What did the cheese say when it looked in the mirror?", "Hello-me(Halloumi)"),
    //   new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-apony (Mascarpone)"),
    //   new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    // ];
  }
  addJoke(joke) {
    this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  }
  deleteJoke() {
    this.jokes = []
  }
}
// @Component({
//   selector: 'app',
//   template: `
// <joke-list></joke-list>
// `
// })
// class AppComponent {
// }
// @NgModule({
// imports: [BrowserModule],
// declarations: [
// AppComponent,
// JokeComponent,
// JokeListComponent,
// JokeFormComponent
// ],
// bootstrap: [AppComponent]
// })