import { Component, OnInit } from '@angular/core';
import { Concession } from '../../../models/concession.model';
import { ManageService } from '../../../services/manage.service';

@Component({
  selector: 'app-concession-create-page',
  templateUrl: './concession-create-page.component.html',
  styleUrls: ['./concession-create-page.component.scss']
})
export class ConcessionCreatePageComponent implements OnInit {

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {
  }

  public saveConcession(concession: Concession) {
    this.manageService.addConcession(concession).subscribe(res =>
      console.log(res));

  }
}
