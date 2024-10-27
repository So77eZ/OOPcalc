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

    add(value: number): number {
        this.validateNumber(value);
        this.memory += value;
        this.logOperation(`Сложение: ${this.memory} + ${value} = ${this.memory}`);
        return this.memory;
    }

    substract (value: number): number {
        this.validateNumber(value);
        this.memory -= value;
        this.logOperation(`Вычитание: ${this.memory} - ${value} = ${this.memory}`);
        return this.memory;
    }

    divide(value: number): number {
        this.validateNumber(value);
        if (value === 0) {
            throw new Error("Ошибка: деление на ноль!");
        }
        this.memory /= value;
        this.logOperation(`Деление: ${this.memory} / ${value} = ${this.memory}`);
        return this.memory;
    }

    multiply (value: number): number {
        this.validateNumber(value);
        this.memory *= value;
        this.logOperation(`Умножение: ${this.memory} * ${value} = ${this.memory}`);
        return this.memory;
    }

    power(value: number): number {
        this.validateNumber(value);
        this.memory = Math.pow(this.memory, value);
        this.logOperation(`Возведение в степень: ${this.memory} ^ ${value} = ${this.memory}`);
        return this.memory;
    }
}