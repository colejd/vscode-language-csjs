const csjs = require('csjs');

let someColor = '#fff';
let someWidth = 10;

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
        width: calc(${someColor}px + 10px);
        
        ${
            let fn = function() {
                return "color: black;";
            }
            return fn();
        }

        ${
            // Second example (test if mutliple blocks in a row highlight properly)
            let fn = function() {
                return "color: white;";
            }
            return fn();
        }

    }

    #some-id {
        color: rgb(0, 0, 0);
    }

    .some-class {
        color: #ffffff;
    }

`