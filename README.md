# TempuraJs
Simple easy-to-use javascript library for html templates

### Setting up

Include the compressed bundle after jQuery.

```html
<script src="https://code.jquery.com/jquery-1.11.3.js"></script>
<script src="tempura.0.1.0.min.js"></script>
```

### Usage

You can specify the dom template anywhere in your html files:

```html
<ul>
  <li class="custom-class" data-template-name="example-li">##id## - ##content##</li>
</ul>
```

The template doms will not be visible and you can set every template entries through the set function

```javascript
  TempuraJs.set( 'example-li' , [
    { content: 'Apple' , id: 1 },
    { content: 'Banana' , id: 3 },
    { content: 'Orange' , id: 6 },
  ] );
```

The output will be: 

```html
<ul>
  <li class="custom-class" data-template-name="example-li">##id## - ##content##</li>
  <li class="custom-class" data-template-from="example-li">1 - Apple</li>
  <li class="custom-class" data-template-from="example-li">3 - Banana</li>
  <li class="custom-class" data-template-from="example-li">6 - Orange</li>
</ul>
```

### Reference 
