export class RiceCooker {
  id: number
  isOperational: boolean
  isPlugged: boolean
  isCooking: boolean

  constructor (id: number, isOperational: boolean) {
    this.id = id
    this.isOperational = isOperational
    this.isCooking = false
    this.isPlugged = false
  }

  displayInfo (): void {
    console.log(`Rice cooker: {
            id: ${this.id},
            isOperational: ${this.isOperational ? 'yes' : 'no'},
            isPlugged: ${this.isPlugged ? 'yes' : 'no'},
            isCooking: ${this.isCooking ? 'yes' : 'no'}
        }`)
  }
}
