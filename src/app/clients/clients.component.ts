import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientsService } from '../services/clients.service';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
    clients: Client[] = [];
    constructor(private clientsService: ClientsService) { }

    ngOnInit(): void {
        this.getClients();
    }

    getClients() {
        this.clientsService.getClients().subscribe(response => {
            this.clients = response;
        });
    }
}
