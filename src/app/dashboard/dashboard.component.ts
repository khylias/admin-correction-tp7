import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientsService } from '../services/clients.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    user = {
        name: 'Jean'
    };

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

    skills = [
        {
            name: 'Développement WordPress',
            logo: 'assets/wordpress.jpg'
        },
        {
            name: 'Développement Front-end',
            logo: null
        },
        {
            name: 'Webdesign',
            logo: null
        }
    ];
    constructor(private clientsService: ClientsService) { }

    ngOnInit(): void {
        this.getClients();
    }

    getClients() {
        this.clients = this.clientsService.getClients();
    }

}
