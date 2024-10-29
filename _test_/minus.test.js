import {minus} from "../minus.js"
import {getNumber} from "../getNumber.js"

let calculus="5-2"
test('Testing minus with for 1 digit', () => 
    {let calculus="5-2"

        expect(minus(getNumber(calculus, 1))).toStrictEqual(3);

    });
    test('Testing for 2 digit', () => 
        {let calculus="53-21"
    
            expect(minus(getNumber(calculus, 2))).toStrictEqual(32);
    
        });

    test('Testing  5 digit', () => 
        {let calculus="53333-25511"
    
            expect(minus(getNumber(calculus, 5))).toStrictEqual(27822);
    
        });
