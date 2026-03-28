# JavaScript Course - Complete Documentation

## Overview
This JavaScript course is a beginner-level program covering fundamental concepts from basic syntax to DOM manipulation. All materials are in Portuguese.

---

## 📚 Course Structure

### **Aula 1 - Introduction & Hello World**
**Concepts:** Basic console output, project setup

**Files:**
- `app.js` - First program with `console.log('Hello world!')`
- `index.js` - Empty file

**Learning Objectives:**
- Understanding what JavaScript is
- Setting up your first console.log
- Running JavaScript files

**Key Skills:**
- ✓ Basic console output
- ✓ JavaScript syntax basics

**Example Output:**
```
Hello world!
```

---

### **Aula 2 - Variables, Loops & String Concatenation**
**Concepts:** Variables, for loops, while loops, string operations

**Files:**
- `index.js` - Main lesson file

**Learning Objectives:**
- Declaring and using variables
- Understanding loop structures (for and while)
- String concatenation with `+`
- Console output with multiple parameters

**Key Concepts:**

#### Variables
```javascript
a = 7;        // Number variable
b = 1;        // Number variable
nome = '"Sinomar"'  // String variable
```

#### For Loop - Multiplication Table
```javascript
for ( i = 1; i <= 10; i++) {
    console.log(a, ' x ', i, ' = ', a*i);
}
```
Prints the multiplication table for number 7 (1-10)

#### While Loop - Counter
```javascript
while(b <= 10) {
    console.log(b);
    b++;
}
```
Prints numbers 1-10 with increment operator

#### String Concatenation
```javascript
console.log('Meu nome é ', nome + '. Estou aprendendo JavaScript às', 10, 'da manhã.')
```

**Key Skills:**
- ✓ Variable declaration
- ✓ For loops with index
- ✓ While loops with conditions
- ✓ String concatenation with `+`
- ✓ Increment operator `++`

---

### **Aula 3 - HTML Integration & Browser Console**
**Concepts:** Linking JavaScript to HTML, browser console, comments

**Files:**
- `index.html` - HTML page that loads JavaScript
- `js/index.js` - JavaScript executed in browser

**Learning Objectives:**
- Integrating JavaScript into HTML pages
- Using browser console for debugging
- Understanding comments in code
- Running code in browser environment

**HTML Structure:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha primeira página HTML</title>
</head>
<body>
    <script src="js/index.js"></script>
</body>
</html>
```

**JavaScript Features:**
- Comments: `//Um Comentario`
- Same concepts as Aula 2 (for/while loops, multiplication table)
- Browser console output instead of terminal

**Key Skills:**
- ✓ Linking JS to HTML with `<script>` tag
- ✓ Viewing console in browser (F12)
- ✓ Adding comments to code
- ✓ Understanding script execution in browser

---

### **Aula 4 - Variables & Narrative Text**
**Concepts:** Multiple variables, string concatenation, story formatting

**Files:**
- `index.js` - Narrative example

**Learning Objectives:**
- Declaring multiple variables
- Using `let` keyword for variable declaration
- Building narrative strings
- Concatenation with console.log parameters

**Code Example:**
```javascript
let nome = 'João';
let name2 = 'Maria';

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu', name2, '.');
console.log(nome, 'casou-se com', name2, 'em 2012.');
console.log(name2, 'teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');
```

**Output Structure:**
A narrative story about João and Maria's relationship timeline

**Key Skills:**
- ✓ Using `let` for variable declaration (modern ES6)
- ✓ Multiple variables in one console.log
- ✓ Automatic spacing with multiple parameters
- ✓ Building readable narrative output

---

### **Aula 5 - Variables & Calculations**
**Concepts:** Multiple variables, data types, calculations

**Files:**
- `index.js` - Person data and BMI calculation setup

**Learning Objectives:**
- Declaring variables for different data types
- Numbers (integers and decimals)
- String variables
- Preparing data for calculations

**Code Structure:**
```javascript
let name = 'Luiz Otávio';
let sobreNome = 'Miranda';
let idade = 30;
let peso = 84;
let altura = 1.8;
```

**Key Variables:**
- String variables: `name`, `sobreNome`
- Integer variables: `idade` (age)
- Float variables: `peso` (weight), `altura` (height)

**Note:** The calculation appears incomplete in the file, likely for BMI (Índice de Massa Corporal)

**Key Skills:**
- ✓ Declaring multiple variables
- ✓ Using appropriate data types
- ✓ Working with strings and numbers
- ✓ Preparing data for mathematical operations

---

### **Aula 6 - User Input & Alert Output**
**Concepts:** User interaction, input/output, type conversion, template literals

**Files:**
- `index.html` - Basic HTML page
- `js/script.js` - User interaction script

**Learning Objectives:**
- Getting user input with `prompt()`
- Converting strings to numbers with `Number()`
- Displaying results with `alert()`
- Using template literals for string formatting

**Code Example:**
```javascript
let num1 = Number(prompt('Digite um numero '));
let num2 = Number(prompt('Digite outro numero: '));
alert(`O Resultado da sua conta foi: ${num1 + num2}`)
```

**Features:**
- `prompt()` - Gets input from user (returns string)
- `Number()` - Converts string to number
- `${expression}` - Template literal for embedding values
- `alert()` - Displays popup message

**User Flow:**
1. Prompt user for first number
2. Convert to number type
3. Prompt user for second number
4. Convert to number type
5. Add them together using template literal in alert

**Key Skills:**
- ✓ `prompt()` for user input
- ✓ Type conversion with `Number()`
- ✓ Template literals with backticks
- ✓ `alert()` for output
- ✓ Simple arithmetic operations

**Use Case:** Calculator application that adds two numbers

---

### **Aula 7 - String Methods & DOM Manipulation**
**Concepts:** String properties/methods, DOM manipulation, user interaction

**Files:**
- `index.html` - Basic HTML page
- `js/script.js` - String methods and DOM output

**Learning Objectives:**
- Getting input from users
- Working with string methods and properties
- Manipulating DOM with `innerHTML`
- Using template literals with expressions
- Understanding string indexing

**Code Example:**
```javascript
const nome = prompt('Digite seu nome completo: ');
document.body.innerHTML += `O seu nome é: ${nome} <br />`;
document.body.innerHTML += `O seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra S no seu nome? ${nome.indexOf()}<br />`;
document.body.innerHTML += ` Qual o último índice da letra R no seu nome? ${nome.lastIndexOf()} <br />`;
```

**String Methods & Properties:**

| Method/Property | Purpose | Example |
|---|---|---|
| `.length` | Get string length | `"João".length` → 4 |
| `[index]` | Access character at index | `"João"[0]` → "J" |
| `.indexOf(char)` | Find first index of character | `"João".indexOf("ã")` → 2 |
| `.lastIndexOf(char)` | Find last index of character | `"João".lastIndexOf("o")` → 3 |

**DOM Manipulation:**
- `document.body.innerHTML` - Accesses HTML body content
- `+=` - Appends new content to existing content
- `<br />` - HTML line break tag

**Output Display:**
Results are displayed directly in the webpage, not in console

**Key Skills:**
- ✓ String `.length` property
- ✓ String character access with index notation `[n]`
- ✓ `.indexOf()` method for finding characters
- ✓ `.lastIndexOf()` method for reverse search
- ✓ `document.body.innerHTML` for DOM manipulation
- ✓ Template literals with multiple expressions
- ✓ `const` for constant variables

**Use Case:** Analyze user-entered name and display various properties

---

## 🎯 Learning Path Summary

### Progression by Topic:

**Console & Output:**
- Aula 1: Basic console.log
- Aula 3: Browser console integration
- Aula 6: Alert output
- Aula 7: DOM output with innerHTML

**Variables:**
- Aula 2: Basic variable assignment
- Aula 4: `let` keyword and multiple variables
- Aula 5: Different data types
- Aula 7: `const` keyword

**Control Flow:**
- Aula 2: For loops and while loops

**String Operations:**
- Aula 2: String concatenation
- Aula 4: Narrative building
- Aula 7: String methods and properties

**User Interaction:**
- Aula 6: Input with prompt(), output with alert()
- Aula 7: Input with prompt(), output with DOM

---

## 🔧 Key JavaScript Concepts Covered

1. **Variables:** `let`, `const`, untyped assignment
2. **Data Types:** Strings, Numbers (int and float)
3. **Operators:** `+` (concatenation and addition), `++` (increment)
4. **Loops:** `for`, `while`
5. **String Methods:** `.length`, `.indexOf()`, `.lastIndexOf()`, `[index]`
6. **Functions:** `prompt()`, `alert()`, `Number()`, `console.log()`
7. **Template Literals:** `` `text ${expression}` ``
8. **DOM Manipulation:** `document.body.innerHTML`
9. **Comments:** `//`

---

## 🚀 How to Use This Course

### For Each Aula:
1. Open the folder
2. If it has `.html` file:
   - Open in browser (right-click → Open with Browser)
   - Press F12 to open Developer Tools
   - Check Console tab for output
3. If it has only `.js` file:
   - Run in Node.js: `node index.js` or `node app.js`
   - Or open `.html` file if available

### Practice Tips:
- Modify values in variables to see different outputs
- Try creating your own loops
- Combine learned concepts from multiple aulas
- Use browser console for debugging

---

## 📝 Notes for Future Lessons

This course covers JavaScript fundamentals. Future topics may include:
- Objects and Arrays
- Functions (declaration and arrow functions)
- Conditional statements (if/else, switch)
- Events and interactivity
- DOM manipulation techniques
- ES6+ features

---

## 🔗 Quick Reference

### File Organization:
```
aula1/  → console.log basics
aula2/  → loops and variables
aula3/  → HTML integration
aula4/  → multiple variables
aula5/  → variable types
aula6/  → user input/output
Aula7/  → string methods
```

### Keyboard Shortcuts:
- **F12** - Open browser Developer Tools
- **Ctrl+Shift+J** - Open Console directly
- **Node.js** - Run JS files: `node filename.js`

---

**Last Updated:** March 28, 2026
