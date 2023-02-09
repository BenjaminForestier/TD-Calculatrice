new Vue ({
    el: '#app',
    data: {
        previous: null,
        result: '',
        operator: null,
        operatorClicked: false,
    },
    methods: {
        addtoresult(number) {
            if (this.operatorClicked) {
                this.result = '';
                this.operatorClicked = false;
            }
            this.result = `${this.result}${number}`;
        },
        clear() {
            this.result = '';
        },
        remainder() {
            this.result = `${parseFloat(this.result) / 100}`;
        },
        sign() {
            this.result = this.result.charAt(0) === '-' ?
                this.result.slice(1) : `-${this.result}`;
        },
        point() {
            if (this.result.indexOf('.') === -1) {
                this.addtoresult('.');
            }
        },
        setPrevious() {
            this.previous = this.result;
            this.operatorClicked = true;
        },
        divide() {
            this.operator = (a, b) => a / b;
            this.setPrevious();
        },
        mult() {
            this.operator = (a, b) => a * b;
            this.setPrevious();
        },
        sous() {
            this.operator = (a, b) => a - b;
            this.setPrevious();
        },
        add() {
            this.operator = (a, b) => a + b;
            this.setPrevious();
        },
        equal() {
            this.result = `${this.operator(
                parseFloat(this.result),
                parseFloat(this.previous),
            )}`;
            this.previous = null;
        },
    },
})