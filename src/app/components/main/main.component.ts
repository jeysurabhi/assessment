import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { FormGroup, FormControl } from '@angular/forms';
import { AssessmentService } from 'src/app/assessment.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  assesments: any;
  constructor(
    private modalService: NgbModal,
    public _service: AssessmentService
  ) {}
  ngOnInit(): void {
    console.log(this._service.assesmentArray);
    this.assesments = this._service.assesmentArray;
  }
  open() {
    const modalRef = this.modalService.open(ModalComponent);
    // modalRef.componentInstance.name = 'World';
  }
}
