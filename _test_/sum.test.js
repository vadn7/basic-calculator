import {sum} from "../sum.js"
import {getNumber} from "../getNumber.js"

test('Testing for 1 digit', () => 
    {let calculus="5+2"

        expect(sum(getNumber(calculus, 1))).toStrictEqual(7);

    });
    test('Testing for 2 digit', () => 
        {let calculus="53+21"
    
            expect(sum(getNumber(calculus, 2))).toStrictEqual(74);
    
        });

    test('Testing  5 digit', () => 
        {let calculus="53333+25511"
    
            expect(sum(getNumber(calculus, 5))).toStrictEqual(78844);
    
        });


    // let num = Number(str);
    // let num = parseFloat(str);