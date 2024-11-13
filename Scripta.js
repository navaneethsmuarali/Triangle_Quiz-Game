const Base = document.getElementById('base');
const Height = document.getElementById('height');

const Click_button = document.getElementById('check_button');
const Output = document.getElementById('show_op')

Click_button.addEventListener('click', function() {
    const Ba = Number(Base.value)
    const Hi = Number(Height.value)


    const area = 0.5 * Ba * Hi

    Output.innerText = 'Area is ' + area

})