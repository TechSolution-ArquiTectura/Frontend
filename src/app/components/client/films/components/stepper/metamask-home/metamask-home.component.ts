import { Component } from '@angular/core';
import {Web3Service} from "../../../../../../core/services/metamask/web3.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-metamask-home',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './metamask-home.component.html',
  styleUrl: './metamask-home.component.scss'
})
export class MetamaskHomeComponent {
  account: string | undefined = "";
  balance: string | undefined = "";

  constructor(private web3Service: Web3Service) {}

  async loadAccountData() {
    await this.web3Service.connect();
    this.account = await this.web3Service.getAccount();
    this.balance = await this.web3Service.getBalance();
  }

}

