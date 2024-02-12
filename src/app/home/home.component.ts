import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    selector: 'app-home',
    template: `
    <h2>DoingTo</h2>
    `
})

export default class HomeComponent{}
// default export cause this is a routed component