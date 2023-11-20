# The ultimate Def Leppard Quiz

[Live GitHub website](https://saroltah.github.io/def-leppard-quiz/)

A fun game about one of my favorite bands.

_Goal of this website:_ to entertain people, to give some new information, and to awaken interest.

---

## Original Idea:

- Questions are shown one by one because that looks better on mobile devices.
- Three answer options to choose from: buttons - so I can manipulate them and make the design interesting.
- No submit button is needed. The answers should change to different colors (right/wrong)
- Next button: to show the next question.
- Current score: that counts the clicked correct answers.

---

## Output and solutions from the idea:

### Questions:

- There is a default question - "Are you ready to start the quiz?" When the user clicks _Start_, that is when the game starts.
- I didn’t number the questions, I think not knowing how many questions left makes the user more alert to answer correctly. I also don’t think the user quits in the middle because it is not that long.

### Answer/next buttons:

- When the user clicks on the right answer, it turns green, and the _Next_ button turns yellow, so the user can see, that the answer is submitted, and it is time for the next question. If the user decides they don’t want to answer, it is possible, but they lose the chance of getting points. Once the user chooses the answer, they can not click on other answers.
- Since they are buttons, we don't need a separate Submit button - that is easier to use on mobile devices.

### Show result:

- After the last question instead of _Next_: it shows: _Show result_, so the user knows, that was the last question. The result shows the obtained points (which the user can see during the whole game), also shows a personalized message - depending on if the points fall into low- middle- or high-score category, and a YouTube link to watch the Def Leppard movie - in a new tab.
- On the _result_ page, only the title remains from the default text, which makes sense semantically, and shows the test is over.

### Start again:

- After the result, the user can decide to leave the page or try the game again, with the _Start again_ button.

### Buttons:

- The _Start_ and _Start Again_ button is also yellow - it indicates to click on - just like the _Next_ button after choosing an answer.
- I chose a slightly different design (different background, font-family, and shape) for the _Next_ button, so it is not mixed up with the answer buttons. I also gave a _box-shadow_ to the answers, so it leads the eye to look at them.

### Design:

- The background image is the band's album cover, which is widely recognized - so I don't feel the need to put an image of the whole band. I added a black background under the image in case the photo can not stretch more or if the image is not loading.
- I added image of the singer, on which he is looking in the user's eye, as he would ask "Are you ready?". Also it is an old image - just like the album I used the cover-image of. I added yellow border, so it fits to the design. I also left its shape without _border-radius_, so it fits to the _main contanier_'s shape.
- I created a different section over the image with a slightly transparent white background, to be able to read the text.
- I chose the app's colors from the background album cover, so it matches together. I made them slightly transparent with _rgba_, so they are not so strong, and more readable.
- I chose two different font-families, so the sections and functions are more separate. Also, the main font is more decorative while the questions and answers are much more readable. I also varied the font-weight and font-style qualities to make the little sections more separable and easier to follow.
- _Points_ section under the _Next_ button has a fun but light border, to be seen but does not take the attention away from the questions.
- The result page shows the obtained point _bold_ because that is the main result that affects the evaluation text. The _Def Leppard movie link_ is blue, and I also kept little space in front of it and after it, so it indicates that it is a different part of the text, that the user can click on.

### Structure

- The name of the page is on the top.
- Then h2 says what the page is about.
- The default question does not show answers, _Start button_ indicates to start the game. This way the user can decide when to start the game. The image is between the default question and _Start_ button - where the answers will be.
- On the bottom of the quiz _Points_ can be seen: 0/15 - so the user sees that there will be 15 questions. 
- The questions are  _bold_, so the eye leads there, the cursor changes, so it indicates to click on, and the _Next_ button is the same as the _Start button_, so that indicates to click on that for the next question.
- After the 15th question, the _result_ section nicely congratulates for the result and tells the obtained points. Then the evaluation is under it, and the _Start again_ button is yellow to be easy to spot. I kept big spaces between the sections, so the eye could easily look through them.

### Functionality:

- The HTML has default question and default answers. I hide the answers, because they are not part of the game, and you can not score for clicking on them. Answer options are only shown after the game starts. To make the start page more appealing, added an image which disappeares after the game starts.
- I made sure that I created a function before I declared it - so the order of them is not the order of writing.
- I changed _jpg_ to _webp_ for optimization.
- I used only one _section_ because that holds headings, the rest of the content is in main container.
- I added the same names for variables in JS as their class/id name, so it is easy to follow.

---

## Workflow

In this project I was focusing on Java script functionality, so used a reversed order of coding.

---

### 1.

I planned the app on paper, so I see the HTML elements and visualize the functions. - It was faster and easier than using a wireframe app.

---

### 2.

How to use the Code Institute template: Click on: get the template, use this template. Create a repository, open it with GitHub Desktop, clone the repository, and open it in VS code.

---

### 3.

I created the initial folders, files, and links, then published the page on GitHub.

**Deployment**:

    I. Log in to the git-hub page

    II. Go to "your repositories" when clicking on your profile picture in the right corner

    III. Choose def-leppard-quiz

    IV. On the menu above go to settings

    V. On the left side menu go to code and automation and click pages

    VI. Choose the source: "deploy from branch",

    VII. Select "branch: main", folder: "/(root)", and click save

    VIII. Then go back to your main page, on the top, select saroltah/def-Leppard-quiz

    IX. On the right side menu click on "deployments, GitHub-pages"

    X. Under deployment on the right side choose all environments

    XI. Under GitHub pages there is the link: https://saroltah.github.io/def-leppard-quiz

**Run the project locally**

    I. Open the GitHub repository
    https://github.com/saroltah/def-leppard-quiz

    II. Select the green _Code_ dropdown, under _Clone_ copy the HTTPS link

    III. Open your IDE and your chosen directory in it

    IV. Open your terminal and type _git clone_ and paste the link

    V. Now the clone is ready to be used.

</br>

| Bug / Issue                                                     | Solution                                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------- |
| My basic (empty) HTML didn't load, and couldn’t find the reason | I set up the document again, and then it functioned properly. |
---

</br>

### 4.

Added basic HTML with one default question, sections, and text.

</br>

_Add basic HTML:_

![add basic html](/assets/images/readme-images/add%20basic%20html.png)

</br>

_Try out CSS and JS:_

![tying out css and js](/assets/images/readme-images/trying%20out%20css%20and%20js.png)

</br>

---

### 5.

I wrote Java Script first with 2 questions and made sure everything was working before adding more.

</br>

_Figure out what functions I need:_

![figure out what functions I need](/assets/images/readme-images/figure%20out%20what%20functions%20i%20need.png)

</br>

### Logic:

**Add questions, and _Next_ button to change question:**

- I use an array for the questions, so I can loop through, and I put objects in the array. - Every question has three options, and a "right" answer, which is the same as one of the options.
- I loop through the questions/answers and put them into the inner HTML with the _changeQuestion()_ function.
- First I made allQuestions and allAnswers as separate arrays, but then I put them all into one allQuestions array because it is shorter and simpler.

</br>

**Add color to the answers when they are clicked:**

- I give _eventListener_ to the button that is clicked. I tested first with alert() and with console.log.
- I use an _if_ statement to check if it is right - the text content is the same as the _right value_ in the object.
- If it is _right_ get a class, if it is wrong get another class. If any of them is clicked, the _Next_ button gets the property(color). If the property is on, the function does not run.
- When the questions are changing, all the properties and classes are removed  with the _deleteBackgroundColor()_ function.

</br>

| Issue/Bug                                                                                                                                     | Solution                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| I used the index number as a value instead of a string for the “right” value in the object. So the changeQuestion() function was not working. | _Console.log_ my arrays, to see if they are correct - yes. Noticed that W h i are the first letters of the question. I wrote accidentally All Questions instead of All Answers so it took the letters out. Then Answers got undefined because I realized I work with objects inside an array. Objects have no index numbers. So I corrected the numbers to strings. |
| It only shows the last question and only that one, it doesn't change for the button. - it overwrites always the previous one                  | I realized I didn’t need a loop, instead, I made _i_ a variable and made _showNext()_ function that always adds 1 to the _i_ when the Next button is  clicked. _i_ = 0 as default.                                                                                                                                 |
| It turns green for the right answer, but when I change the question that option stays green.                                                  | I set the _deleteBackgroundColor()_ function                                                                                                                                                                                                                                                                                                                        |
| I can click on more options.                                                                                                                  | I set up conditional, if something was clicked on, the _Next_ button gets a property (yellow color). If that property is off, only in that case can the function run. I also remove that property when we change the question.                                                                                                                                                     |
| First I displayed default answers. But since they didn't trigger the functions that should happen by clicking, the console threw an error message.   | I hid the default _answer buttons_ and made _showFirst()_ function, which displays the buttons after the Start.                                                                                                                                                                                                                                                  |
| The first (index 0) question is not shown.                                                                                                    | I display the first question in _showFirst()_ function. Then I created a new function _start()_ which decides if it should show first question or the next ones with the _showNext()_ function which every time raises the index number.                                                                                                                            |

</br>

_Try out eventListener with alert:_

![Try out eventListener with alert](/assets/images/readme-images/try%20out%20event%20listener%20with%20alert.png)

</br>

_Color change for right answer:_

![color change for right answer](/assets/images/readme-images/right%20answer.png)

</br>

_Color change for wrong answer:_

![color change for wrong answer](/assets/images/readme-images/wrong%20answer.png)

</br>

**Add one point when the right answer is clicked**

- Change the innerHTML of the _current points span_ if the option background turns green.
- Created _old points_ variable which is always the current written out point - and the function adds 1, and then that becomes the new _old point_.

</br>

| Issue/Bug                                                       | Solution                                 |
| --------------------------------------------------------------- | ---------------------------------------- |
| _Current point span_ was a string - when it added 1+1 turned 11 | Converted it to number - _use parsInt()_ |

</br>

**Refresh page**

- Add _location.reload()_ in the refreshPage() function to the _Start again_ button.

</br>

**Add the result and change the innerHTML after the last question**

- The _showResult()_ function loads when it arrives at the last question, it changes the innerHTML to the result page and shows the _Start Again_ button.

</br>

| Issue/Bug                                                   | Solution                                              |
| ----------------------------------------------------------- | ----------------------------------------------------- |
| The last question was deleted because the innerHTML changed | I made one last object with no real values(last-last) |
| It couldn’t refer to current points, ${} was not working.    | Added _textContent_ to the _currentPoints_.          |

</br>

**Make default question as welcome text**

- Change the default _Next_ button to _Start_, and after in the displayFirst gi() function change it back to _Next_.

- Change*Next* button’s innerHTML to _Show result_ for the last question.

</br>

**Add all questions and Result messages**

- Add all the questions, and the Result messages with an if-else statement depending on the number of correct answers.

</br>

| Issue/Bug                                                | Solution                                                                                                                            |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| The showResult function was not dynamic and was too long | I created an object with the data, added them to the showResultMessages()function, and created the _Start again_ button separately. |

</br>

_Different result, low score:_

![low score result](/assets/images/readme-images/different%20result%201.png)

</br>

_Different result, middle score:_

![middle score result](/assets/images/readme-images/different%20result%203.png)

</br>

_Different result, high score:_

![high score result](/assets/images/readme-images/different%20result%202.png)

</br>

---

### 6.

I added CSS

- Styled it first for the mobile device, after I edited it for bigger screens.
- Added font-size and spacing first. I added a max-width to the main-container, because the content is not long, and it needs to keep a nice shape.

</br>

_Add spacing and font-size:_

![add spacing and font-size](/assets/images/readme-images/add%20spacing%20and%20font-size.png)

</br>

- I added flexbox to the buttons, so I could style them together nicely lined up under each other.
- I put the _Result text_ under the main page, so I could style it. After I copied it back to Java Script.

</br>

_Edit result text on the main page:_

![edit result text on the main page](/assets/images/readme-images/editing%20result%20text%20in%20main%20page.png)

</br>

- Added background image to full screen, and transparent color for the main container.
- Added two font-families Pangolin and Poppins, the first one is more decorative, and the second is easy to read.

</br>

_Choose font-family:_

![Choose font-family](/assets/images/readme-images/checking%20for%20font%20family.png)

</br>

- I chose colors from the background image.

</br>

_Choose colors:_

![Choose colors](/assets/images/readme-images/choosing%20colors.png)

</br>

yellow: rgb(235,226,22)

blue:rgb(73,151,209)

green: rgb(81,160,62)

red: rgb(204,19,18)

- I was thinking of giving hover to the buttons, but without a cursor, but I don't like how it works without cursor.

- I use CSS variables because it is more readable and easier to edit the code with them.

</br>

| Issue/Bug                    | Solution                                          |
| ---------------------------- | ------------------------------------------------- |
| The body was not long enough | I changed from height: 100% to min-height: 100vh. |

</br>

_Error in body height:_

![error in body height ](/assets/images/readme-images/error%20in%20body%20height.png)

</br>

_Corrected body height:_

![corrected body height ](</assets/images/readme-images/body%20height%20error%20fixed%20(and%20cut%20black%20part%20from%20image).png>)

</br>

---

### 7.

Last touches

- Deleted containers and CSS properties that were not needed.
- Checked the validators, lighthouse, etc, and ran one more test.
- Optimized add point function - made it shorter.

---

## Technology

_Programs:_

- [VS Code](https://code.visualstudio.com/)
- [Github](https://github.com/)

_Font family:_

- [Pangolin from GoogleFonts](https://fonts.google.com/specimen/Pangolin?query=pangolin)
- [Poppins from Google Fonts](https://fonts.google.com/specimen/Poppins?query=poppins)

_Images and icons:_

- [Convert io](https://convertio.co/jpg-webp/)
- [Favicon](https://favicon.io/favicon-generator/)

_Color palette:_

- [Chrome color picker](https://chrome.google.com/webstore/detail/color-picker-for-chrome/clldacgmdnnanihiibdgemajcfkmfhia)

_Validating:_

- [Am I responsive?](https://ui.dev/amiresponsive)
- [W3C CSS validator](https://jigsaw.w3.org/css-validator/)
- [W3C HTML validator](https://validator.w3.org/)
- [JSHint](https://jshint.com/)

---

## Testing

Tried on mobile, tablet, laptop and desktop screen view.

</br>

| What to do                                                                                                         | How to do                                                               | Expected outcome                                                                                                                                                                                                                        | Actual Outcome                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When i first open the page the default question is visible                                                         | Open/refresh the page                                                   | Default question is visible                                                                                                                                                                                                             | Default question is visible                                                                                                                                                                                                             |
| Default answers are not clickable                                                                                  | Clicg on default answers                                                | Nothing happens                                                                                                                                                                                                                         | Nothing happens                                                                                                                                                                                                                         |
| Cursor changes on the button                                                                                       | I bring my cursor on the answer buttons or _Next_ button                | The cursor changes to pointer                                                                                                                                                                                                           | The cursor changes to pointer                                                                                                                                                                                                           |
| The _Start_ button is default yellow                                                                               | I open / refresh page                                                   | The \_Start_button is yellow                                                                                                                                                                                                            | The _Start_ button is yellow                                                                                                                                                                                                            |
| The _Start_ button starts the quiz                                                                                 | Click on _Start_ button                                                 | The innerHTML changes. The first “real” question, three option answers _Next_ button is visible instead of _Start_ button                                                                                                               | The innerHTML changes. The first “real” question, three option answers _Next_ button is visible instead of _Start_ button                                                                                                               |
| The correct answer turns green                                                                                     | Click on the correct answer                                             | It changes color, turns green                                                                                                                                                                                                           | It changes color, turns green                                                                                                                                                                                                           |
| The wrong answer turns red                                                                                         | Click on a wrong answer                                                 | It changes color, turn red                                                                                                                                                                                                              | It changes color, turns red                                                                                                                                                                                                             |
| It gives a point for correct answer                                                                                | Click on the correct answer                                             | The innerHTML of “points:” changes, and the number is bigger with 1, than before.                                                                                                                                                       | The innerHTML of “points:” changes, and the number is bigger with 1, than before.                                                                                                                                                       |
| The wrong answer does not give a point                                                                             | Click on a wrong answer                                                 | The innerHTML of “points” remains the same, nothing changes                                                                                                                                                                             | The innerHTML of “points” remains the same, nothing changes                                                                                                                                                                             |
| I can only choose one answer                                                                                       | Click on more answers                                                   | The color changes only for the the button first clicked, the rest clicks have no effect                                                                                                                                                 | The color changes only for the the button first clicked, the rest clicks have no effect                                                                                                                                                 |
| The _Next_ button turns yellow when an answer button is clicked                                                    | Click on an answer button                                               | The _Next_ button turns yellow                                                                                                                                                                                                          | The _Next_ button_turns yellow                                                                                                                                                                                                          |
| The _Next_ button shows the next question and answers                                                              | click on the Next button                                                | The question’s and answers’ innerHTML change, it shows a new question and three new answers                                                                                                                                             | The question’s and answers’ innerHTML change, it shows a new question and three new answers                                                                                                                                             |
| You can skip a question                                                                                            | Click on _Next_ button without choosing an answer                       | It shows the next question with answers, and the user loses the chance to answer, there is no going back                                                                                                                                | It shows the next question with answers, and the user loses the chance to answer, there is no going back                                                                                                                                |
| There are 15 questions with 15\*3 answers                                                                          | Click through the quiz and count                                        | There are 15 questions with 15\*3 answers                                                                                                                                                                                               | There are 15 questions with 15\*3 answers                                                                                                                                                                                               |
| All the questions has one right and two wrong answers, which get the green(right) or red(wrong)color by clicking   | Click on different answers when clicking through the test multiple time | All the questions has one right and two wrong answers, which get the green(right) or red(wrong)color by clicking                                                                                                                        | All the questions has one right and two wrong answers, which get the green(right) or red(wrong)color by clicking                                                                                                                        |
| The _Next_ button turns yellow when I click on an answer in all the questions                                      | Click through the quiz and choose an answer for every question          | The Next button turns yellow                                                                                                                                                                                                            | The _Next_ button turns yellow                                                                                                                                                                                                          |
| The 15th question (“Which book..”) does not have a Next_button, instead it’s innerHTML turns to Show Result button | Click through the quiz until you arrive to the 15th question            | The _Next_ button’s innerHTML turns to _Show Result_                                                                                                                                                                                    | The _Next_ button’s innerHTML turns to _Show Result_                                                                                                                                                                                    |
| The _Show Result_ button has no background-color, but clicking on an answer turns it yellow                        | Click on an answer at the 15th question                                 | _Show Result_ button turns yellow                                                                                                                                                                                                       | _Show Result_ button turns yellow                                                                                                                                                                                                       |
| _Show Result_ button leads to the “Result” page                                                                    | Click on _Show result_ button                                           | The inner HTML of the whole page changes. Under the title the user sees a congratulating text with our obtained points. Then a written evaluation paragraph with a _link_ of the Def Leppard movie. Then a yellow _Start Again_ button. | The inner HTML of the whole page changes. Under the title the user sees a congratulating text with our obtained points. Then a written evaluation paragraph with a _link_ of the Def Leppard movie. Then a yellow _Start Again_ button. |
| The obtained point shows the correct number of points                                                              | Go to the result page by clicking _Show result_ button                  | The obtained point shows the same value as the user have seen under the submit(_Start_ / _Next_ / _Show result_ ) button                                                                                                                | The obtained point shows the same value as the user have seen under the submit(_Start_ / _Next_ / _Show result_ ) button                                                                                                                |
| There are 3 types of result messages according to the obtained points                                              | Click through the page with different numbers of correct answers        | Lower score - obtained 0-6 points shows “You might not be…” , middle score - obtained 7-10 points shows “I believe you…” , hight score - obtained 11-15 points shows “That shows you are…” message.                                     | Lower score - obtained 0-6 points shows “You might not be…” , middle score - obtained 7-10 points shows “I believe you…” , hight score - obtained 11-15 points shows “That shows you are…” message.                                     |
| _Start Again_ button starts again the quiz, going back to the default page, deleting all data                      | Click on _Start again_ button                                           | The page refreshes                                                                                                                                                                                                                      | The page refreshes                                                                                                                                                                                                                      |
| The _Def Leppard movie link_ opens in a new tab                                                                    | Click on the _Def Leppard movie link_                                   | It opens YouTube in a new tab                                                                                                                                                                                                           | It opens YouTube in a new tab                                                                                                                                                                                                           |
| Responsive on all screen sizes                                                                                     | Open developer tools and check, using _Am I responsive?_ website        | It looks good, and all the functions are working properly in all screen sizes                                                                                                                                                           | It looks good, and all the functions are working properly in all screen sizes                                                                                                                                                           |
| Correct CSS file                                                                                                   | Copy the CSS code to the W3C CSS validator website                      | There are no errors                                                                                                                                                                                                                     | There are no errors                                                                                                                                                                                                                     |
| Correct HTML file                                                                                                  | Copy the HTML code to the W3C HTML validator website                    | There are no errors                                                                                                                                                                                                                     | There are no errors                                                                                                                                                                                                                     |
| Correct Java Script file                                                                                                  | Copy the JS code to the JSHint website                    | There are no errors                                                                                                                                                                                                                     | no errors, just 1 warning, that in one loop my semantic might be confusing                                                                                                                                                                                                                     |

</br>

_Correct HTML file:_

![correct HTML file ](/assets/images/readme-images/html%20validator.png)

</br>

_Correct CSS file:_

![correct css file ](/assets/images/readme-images/css%20%20validator.png)

</br>

**Lighthouse check for desktop devices:**

**Desktop:**

- Performance: 100%
- Accessibility: 100%
- Best Practices: 100%
- SEO: 100%

</br>

_Lighthouse desktop:_

![lighthouse desktop ](/assets/images/readme-images/lighthouse%20desktop.png)

</br>

**Mobile:**

- Performance: 98%
- Accessibility: 100%
- Best Practices: 100%
- SEO: 100%

_Lighthouse mobile:_

![lighthouse mobile ](/assets/images/readme-images/lighthouse%20mobile.png)

</br>

_Am I responsive?:_

![am i responsive ](/assets/images/readme-images/am%20i%20responsive.png)

</br>

_JSHint:_

![js hint ](/assets/images/readme-images/jshint.png)
</br>
---

## Credits

_Information for the quiz:_

- [Wikipedia](https://en.wikipedia.org/wiki/Def_Leppard)
- [imvdb](https://imvdb.com/n/def-leppard/videography-by-year)

_README.me document format:_

- Inspired by my own [Yoga project](https://github.com/saroltah/yoga-project)

_Images:_

- _Hysteria album cover:_ [Amazon](https://www.amazon.com/dp/B09384G91N/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B09384G91N&pd_rd_w=JOP99&content-id=amzn1.sym.eb7c1ac5-7c51-4df5-ba34-ca810f1f119a&pf_rd_p=eb7c1ac5-7c51-4df5-ba34-ca810f1f119a&pf_rd_r=3VS04E5FCC57VWC2AHYM&pd_rd_wg=Qv2IN&pd_rd_r=f73c69db-d547-4a05-b583-1c5fe9d2586b&s=home-garden&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw)

- _Joe Elliot:_ [80's music video page on Facebook](https://www.facebook.com/80sMusicVideoPage/photos/a.1841156106110182/2574502639442188/?type=3)

_Video:_

- [Def Leppard movie from YouTube](https://www.youtube.com/watch?v=FEHaEuiN3CA&ab_channel=PederRoos)

_I learned new Code snippets from:_

- _location.reload()_ from [Free code camp](https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/)
- _element.classList.contains(className)_ from [Stack overflow](https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript)
- _const last = array[array.length - 1]_ from [medium](https://medium.com/codex/how-to-get-the-last-element-in-an-array-in-javascript-c106f2f4b830)

Special thanks to [Code Institute](https://codeinstitute.net/se/full-stack-software-development-diploma/?utm_term=code%20institute&utm_campaign=CI+-+SWE+-+Search+-+Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=8983321581&hsa_cam=14660337051&hsa_grp=134087657984&hsa_ad=635849372549&hsa_src=g&hsa_tgt=aud-594467886660:kwd-319867646331&hsa_kw=code%20institute&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad=1&gclid=CjwKCAjw4P6oBhBsEiwAKYVkqzzIpIRAmKF-tC7OHL0D0ijr9ic8Bv2gLino_uOt3SWXrRzbR7NoNhoCisIQAvD_BwE) and my mentor **Ronan McClelland** for reviewing, helping and answering all my questions.
