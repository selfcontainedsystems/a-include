# a-include

Custom Element to include the html content of a link via plain JavaScript.

## Usage

### Include Fragements

The [fragment.html](example/fragment.html) contains the HTML code that should be included:

```html
<a-include>
  <a href="./fragment.html">Link</a>
</a-include>
```

Also, add the [a-include.js](./a-include.js) script, which defines the custom element, at the end of the page:

```html
<script src="./a-include.js"></script>
```

The `a-include` tag gets replaced via the content of the HTML fragment.

### Include Fragements from Full Pages

Sometimes only a specific part of the HTML page should be included:

```html
<a-include selector="main">
  <a href="./fullpage.html">Link</a>
</a-include>
```

The `selector` attributes specifies a query selector for the content to include.

## Progressive Enhancement
The content is included asynchronously.
If - for whatever reason - the content can not be loaded, the `<a href="...">` Link is still available 
as a fallback or for accessibility concerns.

To remove the link from being rendered use an empty tag:

```html
<a-include>
  <a href="./fragment.html"></a>
</a-include>
```
