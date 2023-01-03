import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.scss']
})
export class ProfilEntrepriseComponent implements OnInit {

  @Input() profilEntreprise!: any

  constructor() { }

  ngOnInit(): void {
    

  }

  onSubmit(): void {
    
    

  }

  





}
