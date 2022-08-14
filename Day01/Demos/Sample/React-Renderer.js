function RenderDOM(rootID,ClassName){
    var Container=document.getElementById(rootID);
    var Content="";
    if(ClassName=="MyComponent")
{
    var obj=new MyComponent();
    Content=obj.render();
}
Container.innerHTML=Content;
}