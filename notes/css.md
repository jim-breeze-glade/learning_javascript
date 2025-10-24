## CSS
- element selector:
```

body {
 background-color: blue;
 color: white;
 font-family: Helvetica;
}
```
- class selector
```
// html file
<p class="gray-element">text</p>

// css file
.gray-element {
 background-color: lightgrey
}
```
-id selector
```
// html file
<button id="capital-letter">Text</button>

// css file
```
#capital-letter {
 color: blue;
}
```

### Font Properties
- `font-size: 20px;`
- `font-family: Courier New;`
- `font-style: italic;`
- `font-weight: bold;`
- `change the size of any element:`
```
// html file
<p class="medium">Pittsburgh: 300,000</p>
<p class="small">Hollywood: 150,000</p>

// css file
.medium {
 width: 300px;
 background-color: red;
}

.small {
 width: 150px;
 background-color: pink;
}
```

### Size and Borders
- you can set the size for any element:
```
.flat {
 height: 100px;
 width: 100px;
}
```
- border needs 'solid':
```
.title {
 border: solid 10px red;
 }
```
- border radius:
```
p {
 border-radius: 10px;
 background-color: lightBlue;
 border: solid;
}
```
- to make a square image a circle half the height/width:
```
img {
 height: 100px;
 width: 100px;
 border-radius: 50px;
}
```


