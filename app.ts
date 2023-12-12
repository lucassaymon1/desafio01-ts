import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { ModAccount } from './class/ModAccount'

// Área de testes

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(50.87)
peopleAccount.withdraw(52)
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(40)
console.log(peopleAccount.getBalance())
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(5500.00)
companyAccount.getLoan(7000)
console.log(companyAccount.getBalance())
console.log(companyAccount)

const modAccount: ModAccount = new ModAccount('Moderator', 30)
modAccount.deposit(50.87)
console.log(modAccount.getBalance())
console.log(modAccount)