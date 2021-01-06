import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
    clients = [
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

    ngOnInit(): void {
    }

}
