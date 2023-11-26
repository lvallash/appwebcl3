import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private characterService: CharacterService){

  }

  onNavigateToAlmacenPage(): void{
    this.router.navigate(['home'], {relativeTo: this.route});
  }

  onNavigateToSalarioPage(): void{
    this.router.navigate(['almacen'], {relativeTo: this.route});
  }

  onNavigateToCharacterPage(): void{
    this.router.navigate(['salario'], {relativeTo: this.route});
  }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(data => {
      console.log(data); 
    });
  }

}
