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

  async switchToBaseSepoliaNetwork(): Promise<void> {
    const chainIdHex = '0x14A34'; // Chain ID para Base Sepolia es 0x149a4 (84532 en decimal)
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainIdHex }]
      });
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        // Chain not added, try to add it
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: chainIdHex, // Chain ID correcto
                chainName: 'Base Sepolia',
                nativeCurrency: {
                  name: 'Ethereum',
                  symbol: 'ETH',
                  decimals: 18
                },
                rpcUrls: ['https://sepolia.base.org'],
                blockExplorerUrls: ['https://sepolia-explorer.base.org']
              }
            ]
          });
          // After adding, switch to the chain
          await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: chainIdHex }]
          });
        } catch (addError) {
          console.error('Failed to add Base Sepolia network', addError);
          throw addError;
        }
      } else {
        console.error('Failed to switch to Base Sepolia network', switchError);
        throw switchError;
      }
    }
  }

  async makePayment(address: string, amount: string): Promise<void> {
    try {
      await this.switchToBaseSepoliaNetwork(); // Asegúrate de estar en la red Base Sepolia antes de hacer el pago

      const transactionParameters = {
        to: address,
        from: await this.connectWallet(),
        value: '0x' + parseInt(amount).toString(16), // Convertir la cantidad a hexadecimal
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
