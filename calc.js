function plus(form) {
    form.total.value = parseInt(form.first.value) + parseInt(form.second.value)
}
function multiplication(form) {
    form.total.value = form.second.value * form.first.value
}
function division(form) {
    form.total.value = form.first.value / form.second.value 
}
function subtraction(form) {
    form.total.value = form.first.value - form.second.value
}
