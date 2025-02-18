import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  providers: [provideNgxMask()]
})
export class ContatoComponent implements OnInit {

  formContato;

  constructor(private readonly fb: FormBuilder) {
    this.formContato = this.fb.group({
      nome: ["", [Validators.minLength(4), Validators.required]],
      assunto: ["", [Validators.minLength(10), Validators.required]],
      telefone: ["", [Validators.minLength(11), Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      mensagem: ["", [Validators.minLength(20), Validators.required]]
    });
  }

  ngOnInit(): void { }

  enviarFormulario(){
    alert("A mensagem foi enviada!")
    this.formContato.reset();
  }
}
