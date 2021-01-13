import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    constructor(private httpClient: HttpClient) { }

    getClients(): Observable<any> {
        return this.httpClient.get('http://localhost:3000/clients');
    }

    addClient(data: Client) {
        return this.httpClient.post('http://localhost:3000/clients', data);
    }
}
