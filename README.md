# a-include

Custom element to include HTML content via plain JavaScript.

## Demo

https://unpkg.com/a-include/example/demo.html

## Usage

### Include Fragments

The `a-include` tag gets replaced with the content of [fragment.html](example/fragment.html).

```html
<a-include>
  <a href="./fragment.html">Link</a>
</a-include>

<!-- defines custom element a-include -->
<script src="./a-include.js"></script>
```

The `a-include` tag is built with progressive enhancement in mind.
The content is included asynchronously.
If - for whatever reason - the content can not be loaded, the `<a href="...">` Link is still available
as a fallback or for accessibility concerns.

To remove the link from being rendered use an empty `a` tag:

```html
<a-include>
  <a href="./fragment.html"></a>
</a-include>
```


### Include Fragments from Full Pages

Sometimes only a specific part of the HTML page should be included.
Specify a query selector for the content to include with the `selector` attribute.
In this example, we only include the `main` html element from the [fullpage.html](example/fullpage.html). 

```html
<a-include selector="main">
  <a href="./fullpage.html">Link</a>
</a-include>

<!-- defines custom element a-include -->
<script src="./a-include.js"></script>
```
