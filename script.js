function updatePortions(amount) {
    var servingsElement = document.getElementById('number_of_servings');
    var currentServings = parseInt(servingsElement.textContent);
    var newServings = currentServings + amount;

    if (newServings > 0 && newServings <= 10) {
        servingsElement.textContent = formatNumber(newServings);

        var ingredientList = document.getElementById('ingredient-list');
        var ingredientItems = ingredientList.querySelectorAll('li');

        ingredientItems.forEach(function (item) {
            var quantityElement = item.querySelector('.qnt');
            if (quantityElement) {
                var currentQuantity = parseInt(quantityElement.textContent);
                var newQuantity = currentQuantity * newServings / currentServings;
                quantityElement.textContent = Math.round(newQuantity);
            }
        });
    } else {
        document.querySelector('.error').style.display = 'block';
        setTimeout(function () {
            document.querySelector('.error').style.display = 'none';
        }, 2000);
    }
}

function formatNumber(number) {
    return number < 10 ? '0' + number : number.toString();
}