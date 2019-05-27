import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'app';shop-list
  loadedFeature = 'recipe';
  onNavigate(feature){
    this.loadedFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC9kVx5oDGZCo9gHonII4lvVWbOizhtF90",
      authDomain: "ng-recipe-book-91ca4.firebaseapp.com",
    });
  }
}
