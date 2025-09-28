//--------------This is where we create color switch activity--------------
        //Select all html elements for manipulation
        const body = document.querySelector('body')
        const colorInput = document.getElementById('color-picker')
        const colorDiv = document.querySelector('.color-div')
        const hiddenText = document.querySelector('.color-div p')
        const resetBtn = document.querySelector('.color-div button')
        const somethingCoolBtn = document.getElementById('something-cool')
        
        function doSomethingCool(){
           colorDiv.style.display = 'block'
           somethingCoolBtn.style.display = 'none'
        }

        function changeColor(){
            const selectedColor = colorInput.value
            body.style.background = selectedColor
            resetBtn.style.display = 'block'
            hiddenText.style.display = 'block'
            colorInput.style.display = 'none'
        }

        function resetColor(){
            body.style.background = 'white'
            colorInput.value = '#0084ff'
            colorInput.style.display = 'block'
            somethingCoolBtn.style.display = 'block'

            hiddenText.style.display = 'none'
            resetBtn.style.display = 'none'
            colorDiv.style.display = 'none'
            
        }
//-------------------------------------------------------------------------

