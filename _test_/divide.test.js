import {divide} from "../divide.js"
import { getNumber } from "../getNumber.js";
test('Test divide with one digit 5/2', () => 
    {
        let calculus="5/2"

        expect(divide(getNumber(calculus, 1))).toBe(2.5);
    });



test('Test division with 0 digit at left 0/21 ', () => 
    {let calculus="0/21";

        expect(divide(getNumber(calculus, 1))).toBe(0);
    });


    test('Test division with 0 digit at right 21/0', () => 
        {let calculus="21/0";
    
            expect(divide(getNumber(calculus, 2))).toBe("FIRST DIGIT IS NULL");
        });



    test('Test division with 2 digits ', () => 
        {let calculus="53/21";
    
            expect(divide(getNumber(calculus, 2))).toBe(2.5238095238095237);
        });

        test('Test division with 5 digits ', () => 
            {let calculus="53333/25511";
        
                expect(divide(getNumber(calculus, 5))).toBe(2.0905883736427424);
            });