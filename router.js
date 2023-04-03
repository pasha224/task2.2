var express = require('express');
var router = express.Router();


const credential = {
    email:"admin@123",
    phone:"7449001874",
    otp:"6513"
}

router.post('/login', (req, res)=>{
if(req.body.email == credential.email && req.body.otp == credential.otp){
    req.session.user = req.body.email;
    res.redirect('https://admin.gifinfinity.com/accounts/api/client/v1/user-otp-login/');
    // res.end("login successfully...");


}else{
    res.end("invalid email")
}
});
router.post('/login', (req, res)=>{
    if(req.body.phone == credential.phone && req.body.otp == credential.otp){
        req.session.user = req.body.phone;
        res.redirect('https://admin.gifinfinity.com/accounts/api/client/v1/user-otp-login/');
        // res.end("login successfully...");
    
    
    }else{
        res.end("invalid phone")
    }
    });
    
router.get('/https://admin.gifinfinity.com/products/api/client/v1/products-list/',(req,res)=>{
    if(req.session.user){
        res.render('https://admin.gifinfinity.com/products/api/client/v1/products-list/',{user:req.session.user})
    }else{
        res.send('Unauthorize user')
    }
})

router.get('/logout', (req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("error")
        }else{
            res.render('base',{title:"Express", logout:"logout successfully"})
        }
    })
})


module.exports = router;