module.exports = async (srv) => {
 
    //implementation code
    srv.on('greetings', (req,res)=>{
        return "good morning ! " + req.data.name ;
    })
    srv.on('multi',(req,res)=>{
        x=req.data.a * req.data.b;
        return "Multiplication result :" + x;
    })
 
}