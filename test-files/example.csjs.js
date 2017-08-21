const csjs = require('csjs');

let someColor = '#fff';

module.exports = csjs`

    ${
        let x = 10;
        let fn = () => {
            
        }
    };

    ${ var singleLine };

    div {
        color: #fff;

        color: ${ someColor };
        
        ${
            let x = 10;
            let fn = () => {
                
            }
        }

        ${
            let x = 10;
            let fn = () => {
                
            }
        }

    }

    #some-id {
        color: rgb(0, 0, 0);
    }

    .some-class {
        color: #ffffff;
    }

`