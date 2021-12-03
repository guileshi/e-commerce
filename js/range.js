var catalogRange = document.querySelector('#catalog__range');
var value = document.querySelector('#catalog__value');
var textMaxValue = document.querySelector('#catalog__maxValue')
var maxValue;
var minValue;

maxValue = 6000;
minValue = 128;

catalogRange.min = minValue;
catalogRange.max = maxValue
catalogRange.value = minValue

value.innerHTML = catalogRange.value;
textMaxValue.innerHTML = catalogRange.max;


catalogRange.oninput = function() {
    value.innerHTML = this.value;
}