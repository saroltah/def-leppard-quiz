#The ultimate Def Leppard Quiz

[Live GitHub website](https://saroltah.github.io/def-leppard-quiz/)

A fun game about one of my favorite bands.

_Goal of this website:_ to entertain people, to give some new information, and to awaken interest.

## Original Idea:

- Questions are shown one by one because that looks better on mobile devices.
- Three answer options to choose from: buttons - so I can manipulate them and make the design interesting.
- No submit button is needed. The answers should change to different colors (right/wrong)
- Next button: to show the next question.
- Current score: that counts the clicked correct answers.

## Output and solutions from the idea:

### Questions:

- For the default question, all the answers are true, and the game is not started - the default question is not part of the game, which is why the answers don’t turn to color. When the user clicks _Start_, that is when the game starts.
- I didn’t number the questions, I think not knowing how many questions left makes the user more alert to answer correctly. I also don’t think the user quits in the middle because it is not that long.

### Answer/next buttons:

- When the user clicks on the right answer, it turns green, and the _Next_ button turns yellow, so the user can see, that the answer is submitted, and it is time for the next question. If the user decides they don’t want to answer, it is possible, but they lose the chance of getting points. Once you choose the answer, you can not click on other answers.
- Since they are buttons, we don't need a separate Submit button - that is easier to use on mobile devices.

### Show result:

- After the last question instead of _Next: it shows: \_Show result_, so the user knows, that was the last question. The result shows the obtained points (which the user can see during the whole game), also shows a personalized message - depending on if the points fall into low- middle- or high-score category, and a YouTube link to watch the Def Leppard movie - in a new tab.
- On the _result_ page, only the title remains from the default text, which makes sense semantically, and shows the test is over.

### Start again:

- After the result, the user can decide to leave the page or try the game again, with the _Start again_ button.

### Buttons:

- The _Start_ and _Start Again_ button is also yellow - it indicates to click on - just like the _Next_ button after choosing an answer.
- I chose a slightly different design (different background, font-family, and shape) for the _Next_ button, so it is not mixed up with the answer buttons. I also gave a _box-shadow_ to the answers, so it leads the eye to look at them.

### Design:

- The background image is the band's album cover, which is widely recognized - so I don't feel the need to put an image of the members also. I added a black background under the image in case the photo can not stretch more or if the image is not loading.
- I used a different section with a slightly transparent white background, to be able to read the text.
- I chose the app's colors from the background album cover, so it matches together. I make them slightly transparent with _rgba_, so they are not so strong, and more readable.
- I chose two different font-families, so the sections and functions are more separate. Also, the main font is more decorative while the questions and answers are much more readable. I also varied the font-weight and font-style qualities to make the little sections more separable and easier to follow.
- _Points_ section under the \_Next_button has a fun but light border, to be seen but does not take the attention away from the questions.
- The result page shows the obtained point \_bold* because that is the main result that affects the text evaluation. The \_Def Leppard movie link* is blue, and I also kept little space in front of it and after it, so it indicates that is a different part of the text, that the user can click on.

### Structure

- The name of the page is on the top.
- Then h2 says what the page is about.
- The default question shows 3 answers and just leads up the game - all true and a yellow _Start button_ indicates to start the game. This way the user already gets familiar with the look, and logic of the game
- Under the questions the _Points_ can be seen: 0/15 - so the user sees that there will be 15 questions. ()
- After starting the user sees the question _bold_, so the eye leads there, the cursor changes, so it indicates to click on, and the _Next_ button is the same as the _Start button_, so that indicates to click on that for the next question.
- After the 15th question, the “Result” section nicely Congratulates the result and tells the obtained points. Then the “less important” evaluation is under it, and the _Start again_ button is yellow to be easy to spot. I kept big spaces between the sections, so the eye could easily look through them.

### Functionality:

- I put the _showNext()_ function in HTML _onclick_, instead of adding an _eventListener_, because this way the HTML is the default, and I can create my home page with the yellow _Start_ button and unclickable answers.
- I made sure that I created a function before I declared it - so the order of them is not the order of writing.
- I changed _jpg_ to _webp_ for optimization.
- I didn't make semantically sections because there were no headings in each. Instead, I used _divs_.

## Workflow

In this project I was focusing on Java script functionality, so used a reversed order of coding.

#### 1. I planned the app on paper, so I see the HTML elements and visualize the functions. - It was faster and easier than using a wireframe app.

#### 2. How to use the Code Institute template: Click on: get the template, use this template. Create a repository, open it with GitHub Desktop, clone the repository, and open it in VS code.

#### 3. I created the initial folders, files, and links, then published the page on GitHub.

**Deployment**:

    I. Log in to the git-hub page

    II. Go to "your repositories" when clicking on your profile picture in the right corner

    III. Choose def-leppard-quiz

    IV. On the menu above go to settings

    V. On the left side menu go to code and automation and click pages

    VI. Choose the source: "deploy from branch",

    VII. Select "branch: main", folder: "/(root)", and click save

    VIII. Then go back to your main page (on the top select saroltah/def-Leppard-quiz

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

#### 4. Added basic HTML with one default question, sections, and text.

| Bug / Issue                                                     | Solution                                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------- |
| My basic (empty) HTML didn't load, and couldn’t find the reason | I set up the document again, and then it functioned properly. |

#### 5. I wrote Java Script first with 2 questions and made sure everything was working before adding more.

### Logic:

**Add questions, and _Next_ button to change question:**

- I use an array for the questions, so I can loop through, and I put objects in the arrays. - Every question has three options, and a "right" answer, which is the same as one of the options.
- I loop through the questions/answers and put them into the inner HTML with the _changeQuestion()_ function.
- First I made allQuestions and allAnswers as separate arrays, but then I put them all into one allQuestions array because it is shorter and simpler.

**Add options - answers color when they are clicked:**

- I give _eventListener_to the button that is clicked. I tested first with \_alert()_ and with _console.log_. - I use an _if_ statement to check if it is right - the text content is the same as the "right value" in the object. - If it is _right_ get a class, if it is wrong get another class. If any of them is clicked, the _Next_ button gets the property(color). If the property is on, the function does not run.

- When the questions are changing, all the properties and classes are removed to start again.

| Issue/Bug                                                                                                                                     | Solution                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| I used the index number as a value instead of a string for the “right” value in the object. So the changeQuestion() function was not working. | _Console.log_ my arrays, to see if they are correct - yes. |

Noticed that W h i are the first letters of the question. I wrote accidentally All Questions instead of All Answers so it took the letters out.
Then Answers got undefined because I realized I work with objects inside an array. Objects have no index numbers. So I corrected the numbers to strings. |
|It only shows the last question and only that one, it doesn't change for the button. - it overwrites always the previous one | I realized I didn’t need a loop, instead, I made _i_ a variable and made _showNext()_ function that always adds 1 to the _i_when the \_Next_ button is clicked. Add the _i_ -1 value as default, so it starts at 0 - first question. |
|It turns green for the right answer, but when I change the question that option stays green. | |I set the _deleteBackgroundColor()_ function | I can click on more options. | I set up conditional, if something was clicked on, the _Next_ button gets a property. If that property is off, only in that case can the function run. I also remove that property when we change the question. |
**Add a point for the right answer**
Change the innerHTML of the _current points span_ if the option background turns green.
Created _old points_ variable which is always the current written out point - and the function adds 1, and then that becomes the new _old point_.
| Issue/Bug | Solution |
| ------------- | ------------- |
| _Current point span_ was a string - when it added 1+1 turned 11 | Converted it to number - _use parsInt()_|
**Refresh page**
Add _location.reload()_ in the refreshPage() function to the _Start again_ button.

**Add the result and change the innerHTML after the last question**

The showResult() function loads when it arrives at the last question, it changes the innerHTML to the result page with the _Start Again_ button.
| Issue/Bug | Solution |
| ------------- | ------------- |
| The last question was deleted because the innerHTML changed| I made one last object with no real values(last-last)|
|It couldn’t refer to current points,${} was not working. | Added _.textContent_ to the _currentPoints_.
**Make default question as welcome text**

Change the default _Next_ button to _Start_, and after in the showNext() function change it back to _Next_.

- Change*Next* button’s innerHTML to _Show result_ for the last question.

\*\*Add all questions and Result messages

Add all the questions, and the Result messages with an if-else statement depending on the number of correct answers.
| Issue/Bug | Solution |
| ------------- | ------------- |
| The showResult function was not dynamic and was too long| I created an object with the data, added them to the showResultMessages()function, and created the _Start again_ button separately. 6. Added CSS

Styled it first for the mobile device, after I edited it for bigger screens.
Added font-size and spacing first. I added a max-width to the main-container, because the content is not long, and it needs to keep a nice shape.
I added flexbox to the buttons, so I could style them together nicely lined up under each other.
I put the _Result text_ under the main page, so I could style it. After I copied it back to Java Script.
Added background image to full screen, and transparent color for the main container.
Added two font-families Pangolin and Poppins, the first one is more decorative, and the second is easy to read.
I chose colors from the background image.
I was thinking of giving hover to the buttons, but without a cursor, it is not working nicely.

yellow: rgb(235,226,22)
blue:rgb(73,151,209)
green: rgb(81,160,62)
red: rgb(204,19,18)

I use CSS variables because it is more readable and easier to edit the code with them.

| Issue/Bug                    | Solution                                          |
| ---------------------------- | ------------------------------------------------- |
| The body was not long enough | I changed from height: 100% to min-height: 100vh. |

7. Last touches

Deleted containers and CSS properties that were not needed.
Checked the validators, lighthouse, etc, and ran one more test.
Optimized add point function - made it shorter.

## Technology

_Programs:_

- [VS Code](https://code.visualstudio.com/)
- [Github](https://github.com/)

_Font family:_

font family: [Pangolin from GoogleFonts](https://fonts.google.com/specimen/Pangolin?query=pangolin)
[Poppins from Google Fonts](https://fonts.google.com/specimen/Poppins?query=poppins)

_Images and icons:_

- [Convert io](https://convertio.co/jpg-webp/)

_Color palette:_

- [Chrome color picker](https://chrome.google.com/webstore/detail/color-picker-for-chrome/clldacgmdnnanihiibdgemajcfkmfhia)

_Validating:_

- [Am I responsive?](https://ui.dev/amiresponsive)
- [W3C CSS validator](https://jigsaw.w3.org/css-validator/)
- [W3C HTML validator](https://validator.w3.org/)

**Lighthouse check for desktop devices:**

**Desktop:**

- Performance: 100%
- Accessibility: 100%
- Best Practices: 100%
- SEO: 100%
  **Mobile:**

- Performance: 98%
- Accessibility: 100%
- Best Practices: 100%
- SEO: 100%

## Credits

_information of the quiz:_

- [Wikipedia](https://en.wikipedia.org/wiki/Def_Leppard)
- [imvdb](https://imvdb.com/n/def-leppard/videography-by-year)

_README.me document format:_

- Inspired by my own [Yoga project](https://github.com/saroltah/yoga-project)

_Image:_

- [Def Leppard album image from Amazon](https://www.amazon.com/dp/B09384G91N/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B09384G91N&pd_rd_w=JOP99&content-id=amzn1.sym.eb7c1ac5-7c51-4df5-ba34-ca810f1f119a&pf_rd_p=eb7c1ac5-7c51-4df5-ba34-ca810f1f119a&pf_rd_r=3VS04E5FCC57VWC2AHYM&pd_rd_wg=Qv2IN&pd_rd_r=f73c69db-d547-4a05-b583-1c5fe9d2586b&s=home-garden&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw)

_Video:_

- [Def Leppard movie from YouTube](https://www.youtube.com/watch?v=FEHaEuiN3CA&ab_channel=PederRoos)

_Code snippets:_
_location.reload()_ from [Free code camp](https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/)
_element.classList.contains(className)_ from [Stack overflow](https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript)
_const last = array[array.length - 1] _ from [medium](https://medium.com/codex/how-to-get-the-last-element-in-an-array-in-javascript-c106f2f4b830)

Special thanks to [Code Institute](https://codeinstitute.net/se/full-stack-software-development-diploma/?utm_term=code%20institute&utm_campaign=CI+-+SWE+-+Search+-+Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=8983321581&hsa_cam=14660337051&hsa_grp=134087657984&hsa_ad=635849372549&hsa_src=g&hsa_tgt=aud-594467886660:kwd-319867646331&hsa_kw=code%20institute&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad=1&gclid=CjwKCAjw4P6oBhBsEiwAKYVkqzzIpIRAmKF-tC7OHL0D0ijr9ic8Bv2gLino_uOt3SWXrRzbR7NoNhoCisIQAvD_BwE) and my mentor **Ronan McClelland** for reviewing, helping and answering all my questions.
