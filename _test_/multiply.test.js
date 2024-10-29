import {multiply} from "../multiply.js"
import { getNumber } from "../getNumber.js";


test('Test multiply with 0 digit at left ', () => 
    {let calculus="0*21";

        expect(multiply(getNumber(calculus, 1))).toBe(0);
    });


    test('Test multiply with 0 digit at right ', () => 
        {let calculus="21*0";
    
            expect(multiply(getNumber(calculus, 2))).toBe(0);
        });

test('Test multiply with 1 digit ', () => 
    {let calculus="5*2";

        expect(multiply(getNumber(calculus, 1))).toBe(10);
    });


    test('Test multiply with 2 digits ', () => 
        {let calculus="53*21";
    
            expect(multiply(getNumber(calculus, 2))).toBe(1113);
        });

        test('Test multiply with 5 digits ', () => 
            {let calculus="53333*25511";
        
                expect(multiply(getNumber(calculus, 5))).toBe(1360578163);
            });