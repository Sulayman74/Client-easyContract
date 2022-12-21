import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.scss']
})
export class ProfilEntrepriseComponent implements OnInit {

 test = [{
  prenom : "Jane",
  nom : "La Banane",
  email : "crazy45@gmail.com"
 },
 {
  prenom : "Joni",
  nom : "La Banane",
  email : "crazyefe@gmail.com"
 },{
  prenom : "Joe",
  nom : "La Banane",
  email : "crazy@gmail.com"
 }]

  constructor() { }

  ngOnInit(): void {
    

  }

  onSubmit(): void {
    
    

  }

  





}
