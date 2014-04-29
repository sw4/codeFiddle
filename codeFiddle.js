$(document).ready(function () {
    var codeFiddle={
        run:function(cfEl, cssEditor, htmlEditor, jsEditor){                
            var cfView = cfEl.find('.cf-view')[0];          
            cfView = (cfView.contentWindow) ? cfView.contentWindow : (cfView.contentDocument.document) ? cfView.contentDocument.document : cfView.contentDocument;
            cfView.document.open();
            cfView.document.write('<!doctype html><html lang="en"><head><meta charset="utf-8"><style>'+cssEditor.getValue()+'</style></head><body>'+htmlEditor.getValue()+'<scr'+'ipt>'+jsEditor.getValue()+'</scr'+'ipt></body></html>');
            cfView.document.close();
        },
        initCodeMirror:function(el){
            return CodeMirror.fromTextArea(el[0], {
                lineNumbers: true,
                mode: el.parent().hasClass('cf-html') ? "htmlmixed" : (el.parent().hasClass('cf-css') ? "css": "javascript"),
                viewportMargin:Infinity
            });            
        },
        ctrl:false,
        template: "<div class='codeFiddle'>"+
                    "<iframe class='cf-view'></iframe>"+
                    "<div class='cf-editors'>"+
                        "<div class='cf-html'><textarea></textarea></div>"+
                        "<div class='cf-css'><textarea></textarea></div>"+
                        "<div class='cf-js'><textarea></textarea></div>"+ 
                    "</div>"+
                    "<button class='cf-run'>Output (Click / Ctrl+Enter to Update)</button>"+
                "</div>",                 
        init:function(){
            var scope=this;                
            $('.codeFiddle').each(function(){                
                var cfEl=$(this);
                cfEl.html(scope.template);                                                        
                var cssEditor=scope.initCodeMirror(cfEl.find('.cf-css textarea')),
                    htmlEditor=scope.initCodeMirror(cfEl.find('.cf-html textarea')),
                    jsEditor=scope.initCodeMirror(cfEl.find('.cf-js textarea'));
                cfEl.find('.cf-run').on('click', function(){scope.run(cfEl, cssEditor, htmlEditor, jsEditor);});
                cfEl.find('textarea').on('keydown keyup', function(e){                    
                    if(e.which===17 && e.type==="keydown"){
                        scope.ctrl=true;
                    }else if(e.which===13 && scope.ctrl){                            
                        scope.run(cfEl, cssEditor, htmlEditor, jsEditor);
                    }else if(e.which===17 && e.type==="keyup"){
                        scope.ctrl=false;
                    }
                });
            });
        }        
    };        
    codeFiddle.init();
});