class calc {
    private memory: number;
    private history: string[];

    constructor(initialValue: number = 0) {
        this.memory = initialValue;
        this.history = [];
        console.log(`Калькулятор инициализирован с памятью: ${this.memory}`);
    }
}