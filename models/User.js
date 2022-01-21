const moongoose = require('moongoose');

const userSchema = moongoose.Schema({
    name:{
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        trim: true,
        //dj  koo@naver.com 없애줌
    },
    password:{
        type: String,
        minLength: 5
    },
    lastname: {
        String,
        maxLength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = moongoose.model('User', userSchema)
module.exports = {User}




