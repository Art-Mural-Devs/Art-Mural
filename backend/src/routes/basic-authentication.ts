/*

import {Request, Response, Router}from 'express'
import  bcryptjs from 'bcryptjs';
import  mysql from 'mysql'
import { dbConfig, handleConnection } from '../database';
import Mailgun from 'mailgun-js'
import { NodeMailgun } from 'ts-mailgun';

let router = Router();

let connection: any;
 connection = mysql.createConnection(dbConfig);

 let useremail:string =''
 let confirmUrl:string =`http://localhost:3000/confirmEmail/${useremail}`
let APIKEY:string = 'fc1214fd252130c1324453afa7a33c98-203ef6d0-9a10649d';
 let DOMAIN:string = 'https://app.mailgun.com/app/sending/domains/sandbox86db9147f80c43a18aa0453d1dc7051b.mailgun.org';

router.get('/',(req:Request, res:Response) =>{
    console.log('Log me')

    return res.status(200).json({error: false, message:"Cheks"})
})
router.post('/signUp',async (req: Request, res:Response) => {

    if(!req.body.email || req.body.email ===''){
        return res.status(401).json({error: true, message:"Please provide email"})
    }
    if(!req.body.password || req.body.password ===''){
        return res.status(401).json({error: true, message:"Please provide password"})
    }
    if(!req.body.name || req.body.name ===''){
        return res.status(401).json({error: true, message:"Please provide name"})
    }
    useremail=req.body.email

    const hashed = await bcryptjs.hash(req.body.password, 12)


    let userData ={
        email: req.body.email,
        password: hashed,
        name: req.body.name
    }

    connection.query('Select * from users where email = ?', req.body.email, (err:any, result:any, fields:any)=>{
        if(err){
            return res.status(400).json({error:true, message:"An error has occurred"})
        }else {
            if(result[0]){
                return res.status(401).json({error: true, message:"email already exist"})
            }
            connection.query("Insert into users set ?", userData,(err:any, result:any, fields:any) => {

                if(err){
                    return res.status(400).json({error: true, message:"An error occur while creating user"})
                }else{
                  //  console.log('Email: ', req.body.email)
                    //console.log('Full name: ', req.body.name)
                    sendEmail(req.body.email,"Successful Registration", `Hello ${req.body.name} Thank you for your registration, please click on this link to activate your account ${confirmUrl}`);
                    return  res.status(200).json({error: false, message:'User created successfully'})
                }
            })
        }
    })

})

router.post('/login',async (req: Request, res:Response) => {

    if(!req.body.email || req.body.email ===''){
        return res.status(401).json({error: true, message:"Please provide email"})
    }
    if(!req.body.password || req.body.password ===''){
        return res.status(401).json({error: true, message:"Please provide password"})
    }


    let userData ={
        email: req.body.email,
        password: req.body.password,
    }

    connection.query('Select * from users where email =?', req.body.email, async (err:any, result:any, fields:any)=>{
        if(err){
            return res.status(400).json({error:true, message:"An error has occurred"})
        }else {
            if(result.length){
                const match = await bcryptjs.compare(req.body.password, result[0].password)
                if(!match){
                    return  res.status(401).json({error: true, mesage:"Either email or password is incorrect"})
                }else{
                    return res.status(200).json({error: false, message:"login success", user: result[0]})
                }


            }

        }
    })

})

router.post('/testMailgun',(req:Request, res:Response):void =>{
    const mailer = new NodeMailgun();
    mailer.apiKey = APIKEY
    mailer.domain = DOMAIN
    mailer.fromEmail = `noreply@${DOMAIN}`; // Set your from email
    mailer.fromTitle = 'My Sample App'; // Set the name you would like to send from

    mailer.init();

    mailer
        .send('jjames310@icloud.com', 'Hello from sample app!', '<h1>hsdf</h1>')
        .then((result) => console.log('Done', result))
        .catch((error) => console.error('Error: ', error));
})

const sendEmail  =(recipent:string, greeting:string, sample:string)=> {


    console.log('==suppose receipent==', recipent)
    console.log('==suppose receipent==', greeting)
    const mailer = new NodeMailgun();
    mailer.apiKey = APIKEY
    mailer.domain = DOMAIN
    mailer.fromEmail = `noreply@${DOMAIN}`; // Set your from email
    mailer.fromTitle = 'My Sample App'; // Set the name you would like to send from

    mailer.init();

    mailer
        .send(recipent, greeting, sample)
//        .send('jjames310@icloud.com', 'Hello from sample app!', '<h1>hsdf</h1>')
        .then((result) => console.log('Done', result))
        .catch((error) => console.error('Error: ', error));
}

export default  router;*/
