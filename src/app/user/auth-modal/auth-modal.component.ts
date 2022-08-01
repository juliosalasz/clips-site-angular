import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {
    this.modal.register('auth');
  }

  //this will call the unregister and pass the id to be filtered out on the unmounting
  ngOnDestroy(): void {
    this.modal.unregister('auth');
  }
}
