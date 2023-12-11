[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/PHq8Kfj_)

# Typescript implementation of My Rice Cooker

Here you can find the implementation of __My Rice Cooker__ using __Typescript__.

## Requirements :computer:

On your machine you will have to install and setup node environment. You can refer to this [documentation](https://www.typescriptlang.org/download) for installation.

## Installation :hammer_and_wrench:
Clone this repository in your local machine:
```shell
    git clone https://github.com/hei-school/cc-d2-my-rice-cooker-Onitsiky.git
```

Checkout into the __feature/typescript__ branch:
```shell
    cd cc-d2-my-rice-cooker-Onitsiky/
    git checkout origin/feature/typescript
```
Install required dependencies
```shell
    npm install
```

## Running the application :flight_departure:
Build the application 
```shell
    npm run build
```

And finally run it
```sheel
    node ./src/mainMenu.js
```

## Bug :bug:
When leaving the application, it doesn't directly leave but still loop on the menu. 

## Linter

As linter I used ts-standard, which is similar to [StandardJs](https://standardjs.com/rules)

So to check, you can run :
```shell
    npm run lint
```

__Ps__: in the file handling.ts, I always get the lint error, which I couldn't find how to check  :
```shell
    handling.ts:127:9: Unexpected nullable boolean value in conditional. Please handle the nullish case explicitly. (@typescript-eslint/strict-boolean-expressions)
    
    handling.ts:107:15: Unexpected nullable boolean value in conditional. Please handle the nullish case explicitly. (@typescript-eslint/strict-boolean-expressions)
```