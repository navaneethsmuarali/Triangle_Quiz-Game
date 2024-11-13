const Side_1 = document.getElementById('side_1');
const Side_2 = document.getElementById('side_2');

const Click_button = document.getElementById('check_button');
const Output = document.getElementById('show_op')

Click_button.addEventListener('click', function() {
    const value_1 = Number(Side_1.value)
    const value_2 = Number(Side_2.value)


    const sum = Math.sqrt(value_1 * value_1 + value_2 * value_2)

    Output.innerText = 'Hypotenuse is ' + sum

})