import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from './modules';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  filteredString: string = '';
  countrystring: string = '';
  locationString: string = '';
  categoryString: string = '';
  countryString: string = '';

  items: Jobs[] = [
    {
      medium: 'Hindi',
      class: 'VI',
      class1: 6,
      img: 'assets/science0.png',
      subject: 'Science',
      chapter: ' Chemical Reactions and Equations',
    },
    {
      medium: 'Hindi',
      class: 'VI',
      class1: 6,
      img: 'assets/social0.png',
      subject: "Social",
      chapter: ' Acids, Bases, and Salts',
    },
    {
      medium: 'English',
      class: 'VI',
      class1: 6,
      img: 'assets/science1.png',
      subject: "Science",
      chapter: ' Chemical Reactions and Equations',
    },
    {
      medium: 'English',
      class: 'VI',
      class1: 6,
      img: 'assets/social1.png',
      subject: "Social",
      chapter: ' Acids, Bases, and Salts',
    },
    {
      medium: 'Hindi',
      class: 'VII',
      class1: 7,
      img: 'assets/social1.png',
      subject: "Social",
      chapter: ' Metals and Non-Metals',
    },
    {
      medium: 'Hindi',
      class1: 7,
      class: 'VII',
      img: 'assets/science0.png',
      subject: "Science",
      chapter: 'Carbon and Its Compounds',
    },
    {
      medium: 'English',
      class1: 7,
      class: 'VII',
      img: 'assets/social0.png',
      subject: "Social",
      chapter: ' Metals and Non-Metals',
    },
    {
      medium: 'English',
      class: 'VII',
      class1: 7,
      img: 'assets/science1.png',
      subject: "Science",
      chapter: 'Carbon and Its Compounds',
    },
    {
      medium: 'Hindi',
      class: 'VIII',
      class1: 8,
      img: 'assets/social0.png',
      subject: "Social",
      chapter: 'Life Processes',
    },
    {
      medium: 'Hindi',
      class: 'VIII',
      class1: 8,
      img: 'assets/science0.png',
      subject: "Science",
      chapter: 'Periodic Classification of Elements',
    },
    {
      medium: 'English',
      class: 'VIII',
      class1: 8,
      img: 'assets/social1.png',
      subject: "Social",
      chapter: 'Life Processes',
    },
    {
      medium: 'English',
      class: 'VIII',
      class1: 8,
      img: 'assets/science1.png',
      subject: "Science",
      chapter: 'Periodic Classification of Elements',
    },
    {
      medium: 'Hindi',
      class: 'IX',
      class1: 9,
      img: 'assets/science0.png',
      subject: 'Science',
      chapter: ' Control and Coordination',
    },
    {
      medium: 'Hindi',
      class: 'IX',
      class1: 9,
      img: 'assets/social1.png',
      subject: "Social",
      chapter: ' How Do Organisms Reproduce',
    },
    {
      medium: 'English',
      class: 'IX',
      class1: 9,
      img: 'assets/science1.png',
      subject: "Science",
      chapter: ' Control and Coordination',
    },
    {
      medium: 'English',
      class: 'IX',
      class1: 9,
      img: 'assets/social0.png',
      subject: "Social",
      chapter: ' How Do Organisms Reproduce',
    },
    {
      medium: 'Hindi',
      class: 'X',
      class1: 10,
      img: 'assets/social0.png',
      subject: "Social",
      chapter: 'Light reflection and refraction',
    },
    {
      medium: 'Hindi',
      class: 'X',
      class1: 10,
      img: 'assets/science1.png',
      subject: "Science",
      chapter: 'Heredity and Evolution',
    },
    {
      medium: 'English',
      class: 'X',
      class1: 10,
      img: 'assets/social1.png',
      subject: "Social",
      chapter: 'Light reflection and refraction',
    },
    {
      medium: 'English',
      class: 'X',
      class1: 10,
      img: 'assets/science0.png',
      subject: "Science",
      chapter: 'Heredity and Evolution',
    },
    {
      medium: 'Hindi',
      class: 'XI',
      class1: 11,
      img: 'assets/science1.png',
      subject: 'Science',
      chapter: 'Electricity',
    },
    {
      medium: 'Hindi',
      class: 'XI',
      class1: 11,
      img: 'assets/social0.png',
      subject: "Social",
      chapter: 'Human eye and colorful world',
    },
    {
      medium: 'English',
      class: 'XI',
      class1: 11,
      img: 'assets/science0.png',
      subject: "Science",
      chapter: 'Electricity',
    },
    {
      medium: 'English',
      class: 'XI',
      class1: 11,
      img: 'assets/social1.png',
      subject: "Social",
      chapter: 'Human eye and colorful world',
    },
    {
      medium: 'Hindi',
      class: 'XII',
      class1: 12,
      img: 'assets/social0.png',
      subject: "Social",
      chapter: 'Our Environment',
    },
    {
      medium: 'Hindi',
      class: 'XII',
      class1: 12,
      img: 'assets/science1.png',
      subject: "Science",
      chapter: 'Sources of energy',
    },
    {
      medium: 'English',
      class: 'XII',
      class1: 12,
      img: 'assets/social1.png',
      subject: "Social",
      chapter: 'Our Environment',
    },
    {
      medium: 'English',
      class: 'XII',
      class1: 12,
      img: 'assets/science0.png',
      subject: "Science",
      chapter: 'Sources of energy',
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pick() {
    // this.router.navigate("https://forms.gle/SPtZ1okyXpNRUQLQA");
    var URL = 'https://forms.gle/SPtZ1okyXpNRUQLQA';
    window.open(URL, '_blank');
  }
}
