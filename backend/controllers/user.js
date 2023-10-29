import User from "../models/user.js"
import matchPasswords from "../utils/matchPasswords.js"
import validateEmail from "../utils/validateEmail.js"
import validatePassword from "../utils/validatePassword.js"
import hashPassword from '../utils/hashPassword.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const userControllers = {
    register: (req, res) => {
        const { email, password, rePassword } = req.body;
        console.log(email,password,rePassword)
        // check if email exist
        const emailExist = User.getUserByEmail(email);
        if (emailExist) {
            res.status(400).json({
                ok: false,
                message: 'Sorry, this email is already taken'
            });
        } else {
            const isEmailValid = validateEmail(email);
            const isPasswordValid = validatePassword(password);
            const isPasswordsMatch = matchPasswords(password, rePassword);

            if (isEmailValid & isPasswordValid & isPasswordsMatch) {
                const hashedPassword = hashPassword(password);
                const user = new User(email, hashedPassword);
                user.addUser();
                const token = jwt.sign(
                    { user: emailExist },
                    process.env.TOKEN_ACCESS_SECRET
                );
                console.log(token);
                res.cookie('token', token);
                res.status(201).json({
                    ok: true,
                    message: 'New user is registered'
                });
            } else {
                res.status(409).json({
                    ok: false,
                    message: 'Email or Password is not valid'
                });
            }
        }
    },
    logIn: (req, res) => {
        const { email, password } = req.body;
        // check if email exists
        const emailExist = User.getUserByEmail(email);
        if (!emailExist) {
            res.status(401).json({
                ok:false,
                message: `Please sign up first`
            });
        } else {
            // check password
            bcrypt.compare(password, emailExist.password, (err, isValid) => {
                if (isValid) {
                    res.status(201).json({ ok:true,message:'You are logged in'})
                } else {
                    res.status(409).json( {ok:false,
                        message: 'email or password is not correct'
                    });
                }
            });
        }
    },
     logIn: (req, res) => {
        const { email, password } = req.body;
        // check if email exists
        const emailExist = User.getUserByEmail(email);
        if (!emailExist) {
            res.status(401).json({
                ok:false,
                message: `Please sign up first`
            });
        } else {
            // check password
            bcrypt.compare(password, emailExist.password, (err, isValid) => {
                if (isValid) {
                    res.status(200).json({ ok: true, message:'You are logged in'})
                } else {
                    res.status(409).json( { ok: false,
                        message: 'email or password is not correct'
                    });
                }
            });
        }
     },
     logout: (req, res) => {
        res.clearCookie('token');
        res.json('Cookies are removed')
    }
};
export default userControllers
