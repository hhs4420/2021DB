const titlenum = document.getElementsByClassName("js-title");
const rangenum = document.getElementById("js-range");
const printForm = document.getElementById("js-guess");
const display = document.getElementById("js-result");

const handlePrint = (e) => {
    e.preventDefault();

    const tn = rangenum.value
    const mynumber = printForm.querySelector("input");
    const displaySpan1 = titlenum[0].querySelector("span");
    const displaySpan2 = display.querySelector("span");
    const rand_0_a2 = Math.floor(Math.random() * (Number(tn) + 1));

    displaySpan1.innerHTML = `
    ${tn}`;

    if (mynumber.value > rand_0_a2) {
        displaySpan2.innerHTML = `
        You choose: ${mynumber.value}<br>
        the machine choose: ${rand_0_a2}<br>
        You Win!`;
    }
    else if (mynumber.value < rand_0_a2) {
        displaySpan2.innerHTML = `
        You choose: ${mynumber.value}<br>
        the machine choose: ${rand_0_a2}<br>
        You lost!`;
    }
    else {
        displaySpan2.innerHTML = `
        You choose: ${mynumber.value}<br>
        the machine choose: ${rand_0_a2}<br>
        Draw!`;
    }
};

const click = printForm.querySelector("button");
click.addEventListener("click", handlePrint);