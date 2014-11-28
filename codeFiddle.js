$(document).ready(function () {
    return codeFiddle={
        run:function(cfEl, cssEditor, htmlEditor, jsEditor, options){
            var cfView = cfEl.find('.cf-view')[0],
                stylesheets = '',
                scripts = '';   
            if(options && options.stylesheets){
                options.stylesheets.forEach(function(href){
                    stylesheets+='<link href="'+href+'" rel="stylesheet">';
                });
            }    
            if(options && options.scripts){
                options.scripts.forEach(function(src){
                    scripts+='<script src="'+src+'"></script>';
                });
            }              
            cfView = (cfView.contentWindow) ? cfView.contentWindow : (cfView.contentDocument.document) ? cfView.contentDocument.document : cfView.contentDocument;
            cfView.document.open();
            cfView.document.write('<!doctype html><html lang="en"><head><meta charset="utf-8">'+stylesheets+'<style>'+cssEditor.getValue()+'</style></head><body>'+htmlEditor.getValue()+scripts+'<scr'+'ipt>'+jsEditor.getValue()+'</scr'+'ipt></body></html>');
            cfView.document.close();
        },
        initCodeMirror:function(el, options){        
            options=$.extend({
                lineNumbers: true,
                mode: el.parent().hasClass('cf-html') ? "htmlmixed" : (el.parent().hasClass('cf-css') ? "css": "javascript"),
                viewportMargin:Infinity
            }, options);
            return CodeMirror.fromTextArea(el[0], options);            
        },
        ctrl:false,
        template: "<iframe class='cf-view'></iframe>"+
                    "<div class='cf-editors'>"+
                        "<div class='cf-html'><textarea></textarea></div>"+
                        "<div class='cf-css'><textarea></textarea></div>"+
                        "<div class='cf-js'><textarea></textarea></div>"+ 
                    "</div>"+
                    "<button class='cf-run'>Output (Click / Ctrl+Enter to Update)</button>",         
        init:function(options){        
            var scope=this;                
            $('.codeFiddle').each(function(){                
                var cfEl=$(this);
                cfEl.html(scope.template);                                                        
                var cssEditor=scope.initCodeMirror(cfEl.find('.cf-css textarea'), options && options.cssEditor),
                    htmlEditor=scope.initCodeMirror(cfEl.find('.cf-html textarea'), options && options.htmlEditor),
                    jsEditor=scope.initCodeMirror(cfEl.find('.cf-js textarea'), options && options.jsEditor);
                cfEl.find('.cf-run').on('click', function(){scope.run(cfEl, cssEditor, htmlEditor, jsEditor, options);});
                cfEl.find('textarea').on('keydown keyup', function(e){                    
                    if(e.which===17 && e.type==="keydown"){
                        scope.ctrl=true;
                    }else if(e.which===13 && scope.ctrl){                            
                        scope.run(cfEl, cssEditor, htmlEditor, jsEditor, options);
                    }else if(e.which===17 && e.type==="keyup"){
                        scope.ctrl=false;
                    }
                });
            });
        }        
    };
});
