codeFiddle
==========

Embeddable jsFiddle-like HTML/CSS/JS code fiddler

Live demo can be viewed here: http://sw4.github.io/codeFiddle

Allows you to embed jsFiddle-like code editing functionality into your web pages, simply include the JS and CSS.

Requirements:
----

**CodeMirror**

The editor relies up CodeMirror for its beautiful code formatting, as such (by default) you'll need to include the CodeMirror CSS:

`<link href="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/codemirror.css" rel="stylesheet">`

And the relevent CodeMirror JS files for the seperate editors being used:

```
<script src="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/codemirror.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/package/mode/xml/xml.js"></script>        
<script src="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/package/mode/htmlmixed/htmlmixed.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/package/mode/css/css.js"></script>        
<script src="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/package/mode/javascript/javascript.js"></script>
```

**jQuery**

`<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>`

