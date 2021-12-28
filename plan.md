# Basic idea
Take my Murder in the Alps escape room, and make it interactive, with the detective notes being written to and accessed from a database

## Puzzles to be solved

1. accessing cable car booth - 6369 - padlock - click to rotate numbers on padlock, submit button
2. measuring footprint - size 8 - input box - type in size 8, submit button
3. open Greta's case - SNOWING - buttons on case - click to rotate letters, open button
4. open skis/shoe locker - 220758 - buttons on locker - click to rotate numbers, open button
5. open Alyssa's secret diary - 319 - click to rotate numbers on padlock, open button
6. open CCTV door - CC149C0Y - click to select keys on keypad, open button
7. access alyssa's laptop - fireflynovember1986 - input box - type in password, submit button
8. decipher coded message - signed by neddy - input box - copy translated message, submit
9. password to unlock email attachment - insideman - input box - type in password, submit
10. who is the murderer? - Damien - input box - type in answer, submit


## Notes that need to be stored:

1. foot is a size 8
2. murder weapon was a shovel
3. murderer a man
4. three people take a size 8 shoe
5. Alyssa having affair with Edmund, her husband's brother. Potential motive for Brendan and Francesca?
6. Edmund takes size 10 shoes
7. on 31/10/20 it was a week before Alyssa's 34th birthday
8. Carolyn having an affair with Brendan - potential motive for Brendan and Carolyn?
9. Brendan and Carolyn filmed discussing killing Alyssa?
10. 2 people (man and woman), one with size 8 feet, walked together away from chalet at time of murder. Not involved
11. message sent from (?) supposedly from Edmund to Alyssa getting her to the sauna at 10pm
12. Francesca watching films in her room at 10.05 - alibi
13. email contained evidence of embezzlement - Damien responsible? 
14. no married couple was together at 10.05pm

### Suspects, motives and alibis

Brendan – the victim’s husband
    Motive:
        Alyssa having affair with Edmund
        Brendan having affair with Carolyn
    Alibi:
        Walking with Carolyn at the time of the murder
Carolyn – the victim’s best friend
    Motive: 
        Carolyn having an affair with Brendan
    Alibi:
        Walking with Brendan at the time of the murder
Damien – Carolyn’s husband
    Motive:
        Damien was embezzling funds from work
    Alibi:
        none
Edmund – Brendan’s brother
    Motive:
        ? having affair with Alyssa
    Alibi:
        Has size 10 feet
Francesca – Edmund’s wife
    Motive:
        Alyssa having affair with her husband
    Alibi:
        watching films
Greta – the chalet maid
    none

### One table in the database:

2 columns - stage number and evidence. Depending on what stage user has reached, can only retrieve evidence up to that stage

## Layout

New html page for each puzzle
At left hand side - notes folder - retrieve evidence
Click on image for larger view and for interactive elements

# To Do List

1. Set up server with pg database
2. Create pages with basic text / images for puzzles
3. For each page, create interactive elements to submit answers
4. Test different parts work

### Greta's case:
3 equal rows, buttons on row 2
11 columns,  10x1fr, 1x3fr
