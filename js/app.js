// document ready function
$(function () {
  // listen for click event on button with id='roll-dice'

  /* Vanilla JavaScript way to lisen for a click event:
    document.getElementById('roll-dice').onclick = rollDice
  */

  /* jQuery way to listen for a click event */
  $('#roll-dice').click(() => {
    console.log('dice is being rolled!')

    // calling the generateRandomDie() function to generate a
    // random number from 1 to 6
    const randomDie1 = generateRandomDie()
    const randomDie2 = generateRandomDie()

    console.log(`1st die: ${randomDie1}`)
    console.log(`2nd die: ${randomDie2}`)

    // generate dynamic class name for dice
    const firstDieClass = `dice-${randomDie1}`
    const secondDieClass = `dice-${randomDie2}`

    console.log(firstDieClass)
    console.log(secondDieClass)

    updatePage(firstDieClass, secondDieClass)
  })

  // specify function only responsible for
  // generating random numbers
  function generateRandomDie () {
    return Math.floor(Math.random() * 6) + 1
  }

  // specify function only responsible for
  // updating our page
  function updatePage (firstDieClass, secondDieClass) {
    // dynamically apply new class names to the dom (html page)

    /*
      Vanilla JavaScript way to apply a new class to an element:

      document.getElementById('first-die').className = firstClass
      document.getElementById('second-die').className = secondClass
    */

    /* jQuery way to apply a new class to an element */
    $('#first-die').attr('class', firstDieClass)
    $('#second-die').attr('class', secondDieClass)
  }
})
