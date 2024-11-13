const Angle_1 = document.getElementById('angle_1');
const Angle_2 = document.getElementById('angle_2');
const Angle_3 = document.getElementById('angle_3');
const Click_button = document.getElementById('check_button');
const Output = document.getElementById('show_op')

Click_button.addEventListener('click', function() {
    const value_1 = Number(Angle_1.value)
    const value_2 = Number(Angle_2.value)
    const value_3 = Number(Angle_3.value)


    const sum = value_1 + value_2 + value_3

    if (sum === 180) {

        Output.innerText = 'Possible Triangle'

    } else {
        Output.innerText = ' cannot form  Triangle'
    }
})