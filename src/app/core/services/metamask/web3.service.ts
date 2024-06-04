
import { Injectable } from '@angular/core';
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3: Web3 | undefined;
  public account: string | undefined;

  constructor() {
    if (window.ethereum) {
      this.web3 = new Web3(window.ethereum);
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        this.account = accounts[0];
        console.log('Account changed:', this.account);
      });
    } else if (window.web3) {
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.warn('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  public async connect(): Promise<void> {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        this.account = accounts[0];
        console.log('Connected account:', this.account);
      } catch (error) {
        console.error('User denied account access');
      }
    }
  }

  public async getAccount(): Promise<string | undefined> {
    if (this.web3) {
      const accounts = await this.web3.eth.getAccounts();
      this.account = accounts[0];
      return this.account;
    }
    return undefined;
  }

  public async getBalance(): Promise<string | undefined> {
    if (this.web3 && this.account) {
      const balance = await this.web3.eth.getBalance(this.account);
      return this.web3.utils.fromWei(balance, 'ether');
    }
    return undefined;
  }
}
