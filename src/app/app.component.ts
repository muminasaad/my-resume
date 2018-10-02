import '../libraries/pdfobject';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('pdfLocation') pdfLocationDiv: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    getWindow().PDFObject.embed('/assets/Resume_Vol1.pdf', '#pdfLocation');

  }



}


function getWindow(): any {
  return window;
}
