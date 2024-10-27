class calc {
    private memory: number;
    private history: string[];

    constructor(initialValue: number = 0) {
        this.memory = initialValue;
        this.history = [];
        console.log(`Калькулятор инициализирован с памятью: ${this.memory}`);
    }

    private validateNumber(value: number): void {
        if (typeof value !== 'number') {
            throw new Error("Ошибка: аргумент должен быть числом!");
        }
    }

    private logOperation(operation: string): void {
        this.history.push(operation);
        console.log(operation);
    }
}