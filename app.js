
const prompt = require('prompt-sync')({sigint: true});
//const encrypt = require('./encrypt');

console.log('Welcome to my Cryptography app');


function start (){

    const action = prompt('Do you want to encode or decode a text \n')

    if(action.toLowerCase() === 'encode'){
        console.log('You have select to encode \n');
        let text = prompt('Enter text to encrypt \n');
        let u = prompt('Enter shift key \n');
        let s = Number(u)


        function encode (text, s){
            console.log('executing code')
            let result = " ";
            for (let i = 0; i < text.length; i++){
                
                let char = text [i];
                
                if(char.toLowerCase(text[i])){
                    let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
                    result += ch;
                }
                else {
                    let ch = String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
                    result += ch;
                }
                
            }
            return console.log(result);
            
            }
            encode(text,s);
            tryagain()
    }

    if(action.toLowerCase() == 'decode'){
        console.log('You have select to decode \n');
        let text = prompt('Enter text to decrypt \n');
        let u = prompt('Enter shift key \n');
        let s = 26 - Number(u);
            
        function decode (text, s){
            console.log('executing code')
            let result = " ";
            for (let i = 0; i < text.length; i++){
                
                let char = text [i];
                
                if(char.toLowerCase(text[i])){
                    let ch = String.fromCharCode ((char.charCodeAt(0) + s-97) % 26 + 97);
                    result += ch;
                }
                else {
                    let ch = String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
                    result += ch;
                    
                }
                
            }
            return console.log(result);
            
            }
            decode(text,s);
            tryagain()

    }

}; start()



function tryagain(){
    Again = prompt('Do you want to try again \n')

    if (Again !== 'Yes'){
        console.log('Thank you for using our Cryptography service')
    }else{
        start()
    }

}

