import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  countries:any[] = [];
  user = {
    nombre: '',
    apellido: '',
    correo: ''
  }
  constructor(private countryService:PaisesService) { }

  ngOnInit(): void {

    this.countryService.getCountries().subscribe(country => {

      console.log(country);
      this.countries = country;
      this.countries.unshift({
        name: '[Seleccione un país]',
        code: ''
      })
    })
  }

  guardar = (form:NgForm) => {

    if(form.invalid){
      Object.values(form.controls).forEach(control => {

        control.markAsTouched();
      })
      return;
    }
    console.log(form);
    console.log(form.value);
  }

}
