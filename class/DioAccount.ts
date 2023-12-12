export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.balance += amount
      console.log(`Voce depositou R$${amount} reais.`)
    }
  }

  withdraw = (amount: number): void => {
    if(amount <= this.balance && this.validateStatus()){
      this.balance -= amount
      console.log(`Você sacou R$ ${amount} reais.`)
    }
    else{
      console.log("Saldo insuficiente para realizar a operação.")
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  protected setBalance = (amount: number): void => {
    this.balance = amount
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

}
