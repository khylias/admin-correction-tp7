import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
    providedIn: 'root'
})
export class ClientsService {
    clients: Client[] = [
        {
            name: 'Lego'
        },
        {
            name: 'Ville de La Rochelle'
        },
        {
            name: 'Peugeot'
        }
    ];

    constructor() { }

    getClients(): Client[] {
        return this.clients;
    }

    addClient(data: Client) {
        this.clients.push(data);
    }
}
