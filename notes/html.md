## HTML
```
<!doctype html>
<html>
 <head>
  stuff goes here
 </head>
 <body>
  stuff you see goes here
 </body>
</html>
```
- `<button>Button Text</button> `<br>This is an element.
- `<em></em> and <strong></strong>`<br>italics and bold text
- `<p>Paragraph</p>`
- `<h1>Heading 1</h1>`
- `<h6>Heading 6</h6>`
- `<a>Anchor</a>`
- `<a href="https://www.link.com">Link Text</a>` <br>href is the tag's attribute, which provides information about the tag.
- `<img src="https://image.com/img.png" width="200" height="200">` <br>img is an empty tag, doesn't need closing tag.

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
#capital-letter {
 color: blue;
}
```

### Font Properties
- font-size: 20px;
- font-family: Courier New;
- font-style: italic;
- font-weight: bold;
- change the size of any element:
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

