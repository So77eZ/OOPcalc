class calc {
    private memory: number;
    private history: string[];

    constructor (initialValue: number = 0) {
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

    clearMemory(): void {
        this.memory = 0;
        this.logOperation(`Память очищена. Текущее значение памяти: ${this.memory}`);
    }

    getHistory(): string[] {
        return this.history;
    }

    add (value: number): number {
        this.validateNumber(value);
        const result = this.memory + value;
        this.logOperation(`Сложение: ${this.memory} + ${value} = ${result}`);
        this.memory = result;
        return this.memory;
    }

    subtract (value: number): number {
        this.validateNumber(value);
        const result = this.memory - value;
        this.logOperation(`Вычитание: ${this.memory} - ${value} = ${result}`);
        this.memory = result;
        return this.memory;
    }

    divide (value: number): number {
        this.validateNumber(value);
        if (value === 0) {
            throw new Error("Ошибка: деление на ноль!");
        }
        const result = this.memory / value;
        this.logOperation(`Деление: ${this.memory} / ${value} = ${result}`);
        this.memory = result;
        return this.memory;
    }

    multiply (value: number): number {
        this.validateNumber(value);
        const result = this.memory * value;
        this.logOperation(`Умножение: ${this.memory} * ${value} = ${result}`);
        this.memory = result;
        return this.memory;
    }

    power (value: number): number {
        this.validateNumber(value);
        const result = Math.pow(this.memory,value);
        this.logOperation(`Возведение в степень: ${this.memory} ^ ${value} = ${result}`);
        this.memory = result;
        return this.memory;
    }
}

const calculator = new calc(0);
calculator.add(10);
calculator.subtract(3);
calculator.multiply(2);
calculator.divide(4);
calculator.power(3);
calculator.clearMemory();
console.log("История операций:", calculator.getHistory());

calculator.divide(1);
calculator.add(1000);
console.log("История операций:", calculator.getHistory());