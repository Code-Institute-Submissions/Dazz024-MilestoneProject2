# Milestone Project 2 - Dazz's Games
This website will allow people to play a simon says memory game where by they can read up a little about memory and the science behind it and allows them to train their memory and
have fun trying to beat their high score. It will store their high scores locally so they share their results on social media buttons at the footer of the page. The main goal is to
 have fun.

## User Experience
### User Stories
User 1 - aged 30 wants:
* To have a fun game to play.
* To see what level they're on and how high they've ever been.
* To be able to share their scores.

User 2 - aged 16 wants:
* The site to have clear instructions on how to play the game. 
* To see store their current high score.
* The game to have increasing difficulty.

## Design
### Colour Scheme
* I main colour scheme is going to be light blue, black and white to make it fun and its going to be very boxy to have a retro feel to the site.

### Font Choice
* The two fonts I will be using is PT Sans for the main body and for any big logo headings or big eye catching titles I will use Goldman.

### Media Choice
* I have picked out good imagery which will catch the eye of the user and represents the content along side it.

### Wireframes
[Home Page](https://drive.google.com/file/d/17_UOgzID1HNJIbNeFWSv3qD79bDiSN2R/view?usp=sharing)

[Easy Page](https://drive.google.com/file/d/1YiSM0qsC26PP7jAfF3ndIXsWLxs9Vtrt/view?usp=sharing)

[Medium Page](https://drive.google.com/file/d/1VNVKvNrqMEKaKynM7rZw3GmPY00R6Yi_/view?usp=sharing)

[Hard Page](https://drive.google.com/file/d/1Dfi7-VXStClX5CI_8KXUlyH8WGGw15VO/view?usp=sharing)

## Features
### Existing Features
1. You can view the website on any device as it is responsive.
2. It has a number of ways to go from one page to another and even go to external sites such as social medias.
3. There are interactive elements such as the video player and the Simon Says game.
4. It stores your high score into local memory so you can come back and try to beat it.

### Missing Features
1. It doesn't have more games than just Simon Says.
2. It needs to have some way to share scores directly to one of the social medias automatically.
3. It doesn't have any auditory cues connected with the visual flashes of the game.

## Technologies Used
### Languages Used
1. HTML
2. CSS
3. Javascript

### Frameworks, Libraries & Programs Used
1. [Google font's](https://fonts.google.com/) for PT Sans font and their Goldman font and integrated it into the website through their prebuilt script.
2. [font awesome](https://fontawesome.com/icons?d=gallery) for their library of little icons to help to user navigate easier and make the website more user friendly.
3. Pencil to create the wireframes for planning and design.
4. [Google Drive](https://drive.google.com/drive/folders/1mRNqi1IElHsr0rsdyY_o4BG4VywE9Chd?usp=sharing) to store my wireframes.
5. Git for pushing to github and maintaining version control.
6. Github to store my repositories and to push to.
7. jQuery for making writing Javascript easier.

## Testing
### Validator
Firstly, I tested my code with the W3C Markup Validator and W3C CSS Validator Services to ensure there were no syntax errors in my code.
* [W3C Markup Validator](https://validator.w3.org/#validate_by_input+with_options) - [Results](https://drive.google.com/file/d/1BSzCldyC8BWoAqVVJFOABTyvZZVmU_lF/view?usp=sharing)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input+with_options) - [Results](https://drive.google.com/file/d/1ZbH5q7b08SRqEzj9hSfhaswxcs86VOy_/view?usp=sharing)

Secondly, I used JSHint to test my JavaScript to ensure there are no major issues.
* [JSHint](https://jshint.com/) - [Results](https://drive.google.com/file/d/1aNNzHV40Xk3F06fL0iTGdozPXdo7VX5g/view?usp=sharing)

### Testing the Game
* When played correctly everything is fine and continues until you get an incorrect tile.
* When tiles are pressed before the start button nothing happens as the tiles are disabled if the game has not been started.
* When the start button is pressed during the game playing nothing happens as the button has been disabled when the game is going on.
* There is no time limit to how long it takes you to answer so after flashing the sequence of tiles the game will sit and wait.
* Rapidly, clicking all tiles makes no difference to the result if you were clicking them normally.
* Keyboard acuation does nothing as there is no event for any keys.
* Pressing middle mouse on the tiles or start button does nothing however does open links in a new tab as expected.
* You can however input answers before the sequence is done flashing.

### User Experience Testing
User 1:
* wants to have a fun game to play.
    * [I have created a fun game of Simon says.](https://drive.google.com/file/d/1QiipQeC4KBP9tYJpSXi_Qo9Drz2swBcS/view?usp=sharing)
* wants to see their high score and what level they're on.
    * [There are current score and high score values showing at the bottom of the game and are stored into local memory.](https://drive.google.com/file/d/107rbZZyCSPLFGTTIMlcK8Y0kSjLzZsRP/view?usp=sharing)
* wants to be able to share their score.  
    * [There are direct links to social medias at the bottom of the page.](https://drive.google.com/file/d/1_s99xnyP_wIrpspqDz4ZODGdyJjYx-Uh/view?usp=sharing)

User 2:
* wants the site to have clear instructions on how to play.
    * [There is a paragraph above every game telling you how to play it.](https://drive.google.com/file/d/1vqtgk64-p7tQKO9f4lPZ9AI9BCkT8Tyw/view?usp=sharing)
* wants to see their current high score.
    * [High scores are showed at the bottom and are stored locally so it can be viewed later.](https://drive.google.com/file/d/107rbZZyCSPLFGTTIMlcK8Y0kSjLzZsRP/view?usp=sharing)
* wants the game to have increasing difficulty.
    * [There are 3 difficulty levels each increasing the complexity of the game.](https://drive.google.com/file/d/1CE4kGAQuFTYLGIk8dIC0EIvKGhRTuxq1/view?usp=sharing)

### Further Testing
* I tested the responsiveness with Google Chrome's inbuilt inspect tool and also with a site called [Am I Responsive?](http://ami.responsivedesign.is/#).
* I have tested all clickable links and the video player.
* I have tested deploying it to GitHub Pages.

### Known Bugs
* You can start inputting your answer as the sequence is still flashing.

## Deployment
### Github pages
As I will do with this website, you can deploy the project onto GitHub Pages:
1. Log into GitHub and find this repository.
2. Click on the cogwheel or settings button and scroll down until you find the "GitHub Pages" section.
3. Under "Source", click the dropdown box and select "None" and select "Master Branch".
4. Then after it refreshes scroll back down to find the new published link in the same section.

## Credits
### Content
* [Paragraph about science of memory](https://en.wikipedia.org/wiki/Memory).

### Media
* [Hero Video](https://www.pexels.com/photo/friends-vintage-retro-screen-4842505/) Video by cottonbro from Pexels.
* [Woman holding bulb](https://images.pexels.com/photos/3973059/pexels-photo-3973059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)Photo by Andrea Piacquadio from Pexels.
* [Chess photo](https://images.pexels.com/photos/5477776/pexels-photo-5477776.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5477776.jpg&fm=jpg)Photo by Karolina Grabowska from Pexels.

### Acknowledgements
* I took inspireation on a previous projects called Superfit and Love Running which helped me out with similar styling.
* [W3schools](https://www.w3schools.com/html/html_tables.asp) helped me with things like creating a table in HTML.
