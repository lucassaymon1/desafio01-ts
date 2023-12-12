import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  private newBalance: number = 0
  private oldBalance: number = 0

  constructor(name: string, accountNumber: number){
    super(name, accountNumber, )
  }

  getLoan = (amount: number): void => {
    if(this.validateStatus()){
      this.oldBalance = this.getBalance()
      this.newBalance = this.oldBalance + amount
      this.setBalance(this.newBalance)
      console.log(`Voce pegou um empréstimo de R$ ${amount} reais`)
    }
  }
}
