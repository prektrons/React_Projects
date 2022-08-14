function TellCustomDOMObjectWhatToDo()
                                {
                                    console.log("Dom tree is ready");
                                    var bodyTagObject=document.getElementsByTagName("body")[0];
                                    for(i=0;i<bodyTagObject.children.length;i++){
                                        var currentDomObject=bodyTagObject.children[i];
                                        debugger;
                                        if(currentDomObject.tagName=="Preksha")
                                            {
                                                var whatToCallOnClick=currentDomObject.dataset.myclick;
                                            }
                                    }
                                }