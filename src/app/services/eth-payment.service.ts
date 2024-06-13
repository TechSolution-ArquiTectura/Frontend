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

  async makePayment(address: string, ehterAmount: number): Promise<void> {
    try {

      const weiValue=this.toHexWei(ehterAmount);

      const transactionParameters = {
        to: address,
        from: await this.connectWallet(),
        value: weiValue,
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

  toHexWei(amount: number): string {
    const wei = BigInt(Math.round(amount * 1e18)); // Conversión de ether a wei
    return '0x' + wei.toString(16); // Formato hexadecimal
  }




}
