import {getNumber} from "../getNumber.js"


test('Testing for 1 digit', () => 
    {let calculus="5+2"

        expect(getNumber(calculus, 1)).toStrictEqual([5,2]);

    });
    test('Testing for 2 digit', () => 
        {let calculus="53+21"
    
            expect(getNumber(calculus, 2)).toStrictEqual([53,21]);
    
        });

    test('Testing  5 digit', () => 
        {let calculus="53333+25511"
    
            expect(getNumber(calculus, 5)).toStrictEqual([53333, 25511]);
    
        });

        test('Testing  5 digit with negative number', () => 
            {let calculus="-53333+25511"
        
                expect(getNumber(calculus, 6)).toStrictEqual([-53333, 25511]);
        
            });