(function () {
    const countdown = document.querySelector("#countdown-ref");
    const first_oprand = document.querySelector(".first-value");
    const operator = document.querySelector(".operator");
    const second_oprand = document.querySelector(".second-value");
    const answerBox = document.querySelector("#answer");
    const submit_btn = document.querySelector("#btn");
    const flag_values = document.querySelectorAll(".value");
    let operators = ['+', '-', '*', '/', '%'];
    let cancel_;

    // let conuntdown = document.querySelector(".countdown");
    function begain_countdown() {
        let number = 20;
        // console.log(number)
         cancel_ = setInterval(() => {
            if (number < 0) {
                clearInterval(cancel_)
                flag_values[0].style.background = 'grey';
                flag_values[1].style.background = 'grey';
                setTimeout(() => {
                    flag_values[0].style.background = 'white';
                    flag_values[1].style.background = 'white';
                }, 1000);
                answerBox.value = "";
                // number = 0;
                setGameValues(first_oprand, operator, second_oprand);
            }
            else {
                countdown.innerHTML = number--;
            }
        }, 1000);
        // console.log("hello")
    };




    submit_btn.addEventListener("click", function () {
        // console.log()
        // console.log(eval(first_oprand.textContent + operator.textContent + second_oprand.textContent))
        if (parseInt(answerBox.value, 10) === eval(first_oprand.textContent + operator.textContent + second_oprand.textContent) || parseFloat(answerBox.value, 10) === eval(first_oprand.textContent + operator.textContent + second_oprand.textContent)) {
            // console.log("it's working")
            flag_values[0].style.background = 'rgb(0, 255, 0)';
            flag_values[1].style.background = 'rgb(0, 255, 0)';
            setTimeout(() => {
                flag_values[0].style.background = 'white';
                flag_values[1].style.background = 'white';
            }, 1000);
            answerBox.value = "";
            // begain_countdown()
            clearInterval(cancel_);
            setGameValues(first_oprand, operator, second_oprand);
            // alert("correct!");
        }
        else {
            // console.log("it's not")
            flag_values[0].style.background = 'red';
            flag_values[1].style.background = 'red';
            setTimeout(() => {
                flag_values[0].style.background = 'white';
                flag_values[1].style.background = 'white';
            }, 1000);
            answerBox.value = "";
            // begain_countdown()
            clearInterval(cancel_);
            setGameValues(first_oprand, operator, second_oprand);
            // alert("Try-again!");
        }
    })

    setGameValues(first_oprand, operator, second_oprand);

    function setGameValues(first_oprand, operator, second_oprand) {
        
        let first_op = Math.floor(Math.random() * 20);
        if (first_op < 10) {
            first_oprand.innerHTML = `0${first_op}`;
        }
        else {
            first_oprand.innerHTML = first_op;
        }

        let op = operators[Math.floor(Math.random() * operators.length)];
        operator.innerHTML = op;

        let second_op = Math.floor(Math.random() * 20);
        if (second_op < 10) {
            second_oprand.innerHTML = `0${second_op}`;
        }
        else {
            second_oprand.innerHTML = second_op;
        }
        begain_countdown()
        // checkresult(first_op,op,second_op);
    }

})()
