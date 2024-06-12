import { Injectable } from '@angular/core';

declare let ethereum: any;

@Injectable({
  providedIn: 'root'
})
export class EthPaymentService {

  constructor() { }

  async connectWallet(): Promise<string | null> {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      return accounts[0];
    } catch (error) {
      console.error('Error connecting wallet:', error);
      return null;
    }
  }

  async makePayment(address: string, amount: string): Promise<void> {
    try {
      const transactionParameters = {
        to: address,
        from: await this.connectWallet(),
        value: amount,
      };
      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
    } catch (error) {
      console.error('Payment failed:', error);
      throw new Error('Payment failed');
    }
  }
}
