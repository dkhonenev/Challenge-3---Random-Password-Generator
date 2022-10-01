# Challenge-3---Random-Password-Generator

* Challenge Overview:

This challenge presented me with starter code, where I had to make changes to script.js file in order to make a random password generator, where user is able to choose the length of the password from 8 to 128 characters, and to include lowercase letters, uppercase letters, special characters, and numbers. 

* My work-process:

I began the work by reviewing the pseudocode from the class session. The first idea for me was to write 4 functions, which would generate a random lowercase, uppercase, special character, and number. I created 4 arrays with strings to include all lowercase, uppercase, special, and number options. Then I used math.floor(math.random()*x) and I was able to achieve 4 functions I desired. This is where I did the initial commit.

I understood, that I would need a single function to run my password generator. I created a new function, and started with adding a prompt() to receive user input on desired amount of characters. I added alerts in if statements, so if the user chooses the correct amount of characters, the function keeps running, but if the amount is incorrect, it returns to the prompt once again.

Finally, I added confirm() for all of my previously created generateRandom functions, so console would display a random character when the user chooses to have Lowercase? Uppercase? Special character? or Number?.

I stopped my work on implementing a for-loop for my randomGenerate functions, so the user input of desired characters would make the loop add random characters from each array until the user input number is reached.

* Final Thoughts;

I wasn't able to finish this challenge successfully, but I have sharpened my skills with JavaScript. I am not including a photo of the working application, becuase it does not work. I will continue to learn the JavaScript basics, in order to finish this challenge later. Thank you for your attention!
