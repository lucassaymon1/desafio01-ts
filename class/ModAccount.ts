import { DioAccount } from "./DioAccount";

export class ModAccount extends DioAccount{

  private newBalance: number = 0
  private oldBalance: number = 0

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.oldBalance = this.getBalance()
      this.newBalance = this.oldBalance + amount + 10
      this.setBalance(this.newBalance)
      console.log(`Voce depositou R$${amount + 10} reais.`)
    }
  }
}