import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-banlist',
  templateUrl: './banlist.component.html',
  styleUrls: ['./banlist.component.css']
})
export class BanlistComponent implements OnInit {
  banlist: any

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getBanlist();
  }

  getBanlist() {
    this.api.getBanlist().subscribe(
      data => { this.banlist = data },
      err => console.error(err),
      () => console.log('done loading banlist')
    )
  }

}
