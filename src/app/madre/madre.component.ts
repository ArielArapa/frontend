import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-madre',
  templateUrl: './madre.component.html',
})
export class MadreComponent implements OnInit {

  madres!: FormGroup;
  constructor() {

    this.buildForm();
  }

  ngOnInit(): void {
  }
  private buildForm() {
    this.madres = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      tipoDoc: new FormControl(''),
      numDoc: new FormControl(''),
    });


  }
  save(event: Event) {
    event.preventDefault();
    const value = this.madres.value;
    const nombre = this.madres.value.nombre;
    const apellido = this.madres.value.apellido;
    console.log(value);
    console.log(`Tu nombre: ${nombre} y apellido: ${apellido}.`);
  }
}
