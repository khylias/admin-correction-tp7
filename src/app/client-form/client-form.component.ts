import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

    public form: FormGroup;

    constructor(private clientsService: ClientsService,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        this.initForm();
    }

    add() {
        this.clientsService.addClient(this.form.value);
    }

    initForm() {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            description: [''],
            date: [''],
            type: ['']
        });
    }
}
