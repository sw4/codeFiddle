codeFiddle
==========

**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

Embeddable jsFiddle-like HTML/CSS/JS code fiddler

Live demo can be viewed here: http://sw4.github.io/codeFiddle

Allows you to embed jsFiddle-like code editing functionality into your web pages, simply include the JS and CSS.

Requirements:
----

**CodeMirror**

The editor uses CodeMirror (http://codemirror.net/) for its beautiful code formatting, as such (by default) you'll need to include the CodeMirror CSS:

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


Usage:
----

Once the relevant libraries have been included in your page, add (as many) elements with the class `codeFiddle`

To instantiate the codeFiddles, simply call `codeFiddle.init();` e.g:

```
$(document).ready(function () {
   codeFiddle.init();
});
```


Options
-----

When instantiating codeFiddle, you can pass an options object with the following values:

```
stylesheets:[] // array of stylesheets to be applied to fiddle output
scripts:[] // array of scripts to be applied to fiddle output 
htmlEditor:{} // object of CodeMirror options for HTML editor*
cssEditor:{} // object of CodeMirror options for CSS editor*
jsEditor:{} // object of CodeMirror options for JS editor*
```
<sup>CodeMirror options can be found here: http://codemirror.net/doc/manual.html#config</sup>

**Sample Options**

The below will instantiate codeFiddle with the Meyer CSS reset and jQuery 2.1.0 applied:

```
$(document).ready(function () {
   codeFiddle.init({
       stylesheets:['http://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css'],
       scripts:['http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js']
   });        
});  
```



Sample HTML Page
--------

```
<!doctype html>
<html lang="en">
    <head>
        <title>codeFiddle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <meta charset="utf-8">
        <!-- Codemirror CSS -->
        <link href="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/codemirror.css" rel="stylesheet">   
        <!-- codeFiddle CSS -->
        <link href="http://rawgit.com/sw4/codeFiddle/master/codeFiddle.css" rel="stylesheet">     
        <style>
            html,body{
                height:100%;
                width:100%;
                margin:0;
                padding:0;
            }        
        </style>
    </head>
    <body>
        <div class='codeFiddle'></div>    
        <!-- Codemirror.js -->
        <script src="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/codemirror.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/package/mode/xml/xml.js"></script>        
        <script src="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/package/mode/htmlmixed/htmlmixed.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/package/mode/css/css.js"></script>        
        <script src="http://cdnjs.cloudflare.com/ajax/libs/codemirror/4.1.0/package/mode/javascript/javascript.js"></script>
        <!-- jQuery -->
        <script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>        
        <!-- codeFiddle JS -->
        <script src="http://rawgit.com/sw4/codeFiddle/master/codeFiddle.js"></script>
        <script>
           $(document).ready(function () {
               codeFiddle.init();        
           });        
        </script>
    </body>
</html>
```

Notes
----

By default, codeFiddles will be 99% the height of their parent `.codeFiddle` containers, this is due to there being 3 vertically aligned editors with height of 33% (non integer % sizes have browser-specific nuances).
