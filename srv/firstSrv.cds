service MyService @(path: 'MyService') {
 
    function greetings(name:String(20)) returns String;
    function multi(a:Int16,b:Int16) returns Int16;
 
}