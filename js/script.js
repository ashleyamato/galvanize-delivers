document.addEventListener("DOMContentLoaded", function(event) {

 var obj= {
   burger: {
     name: 'Royale with Cheese',
     price: 8.99,
   },
    swine: {
     name: 'Smoked Swine',
     price: 14.99,
   },
    pizza: {
     name: 'Arugula Pie',
     price: 11.99,
   },
    iceCream: {
     name: 'Ice Cream Biscuit',
     price: 7.99,
   },
 }
  var subtotal = 0

  function price() {
    var tax = subtotal * .1
    var total = subtotal + tax
    $('#subtotal').text(subtotal)
    $('#tax').text(tax.toFixed(2))
    $('#total').text(total.toFixed(2))
  }

  $('#menu_item_one').click(function(event) {
    event.preventDefault()
    var cardContent = $('.card-content')[0]
    var royale = obj.burger.name
    var royalePrice = obj.burger.price
    var newTable = '<tr><td>' + royale + '</td><td>' + royalePrice + '</td></tr>'
    $('table tbody').append(newTable)
    subtotal += royalePrice
    price()
  })
  $('#menu_item_two').click(function(event) {
    event.preventDefault()
    var cardContent = $('.card-content')[1]
    var swine = obj.swine.name
    var swinePrice = obj.swine.price
    var newTable = '<tr><td>' + swine + '</td><td>' + swinePrice + '</td></tr>'
    $('table tbody').append(newTable)
    subtotal += swinePrice
    price()
  })
  $('#menu_item_three').click(function(event) {
    event.preventDefault()
    var cardContent = $('.card-content')[2]
    var pizza = obj.pizza.name
    var pizzaPrice = obj.pizza.price
    var newTable = '<tr><td>' + pizza + '</td><td>' + pizzaPrice + '</td></tr>'
    $('table tbody').append(newTable)
    subtotal += pizzaPrice
    price()
  })
  $('#menu_item_four').click(function(event) {
    event.preventDefault()
    var cardContent = $('.card-content')[3]
    var iceCream = obj.iceCream.name
    var iceCreamPrice = obj.iceCream.price
    var newTable = '<tr><td>' + iceCream + '</td><td>' + iceCreamPrice + '</td></tr>'
    $('table tbody').append(newTable)
    subtotal += iceCreamPrice
    price()
  })
  $('#button').click(function() {
    if ($('#name').val() === '' || $('#phone').val() === '' || $('#address').val() === '' || subtotal === 0) {
    Materialize.toast('Please choose a menu item and enter required fields.', 4000)
    } else {
      Materialize.toast('Your order has been submitted.', 4000)
    }
  })
  $(".button-collapse").sideNav();
})
