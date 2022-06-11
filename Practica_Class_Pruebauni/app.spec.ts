import { sumar, getLevel, getType } from './app';
// las pruebas se corren en conjuntos
describe("Functions Randoms", ()=>{
    //test o it --> palabras reservadas para pruebas
    test('debe sumar [10] y [20] y devolver [30] con la funcion #sumar',()=>{
        //AAA
        // ARRANQUE
        const primerValor = 10;
        const segundoValor = 20;
        const expectedResultado = 30;
        let resultado:number;
        // ACT: traer lo que me hace la función
        resultado=sumar(primerValor,segundoValor);
        // ASSERT: hipótesis
        expect(
            resultado
        ).toBe(expectedResultado);
    })

    test('debe devolver [Junio] con l a funcion #getLevel cuando envio [30]',()=>{
        const expectedResultado = "Junior";
        const level = 30;
        let result:string;

        result = getLevel(level);

        expect(
            result
        ).toBe(expectedResultado);
    })

    test('debe devolver [SemiSenior] con l a funcion #getLevel cuando envio [60]',()=>{
        const expectedResultado = "SemiSenior";
        const level = 60;
        let result:string;

        result = getLevel(level);

        expect(
            result
        ).toBe(expectedResultado);
    })

    test('debe devolver [Senior] con l a funcion #getLevel cuando envio [90]',()=>{
        const expectedResultado = "Senior";
        const level = 90;
        let result:string;

        result = getLevel(level);

        expect(
            result
        ).toBe(expectedResultado);
    })

    test('fn #getType', ()=>{
        const expected = expect.any(String);
        const random = 25;
        const result = getType(random);

        expect(
            result
        ).toEqual(
            expected
        )
    })

    test('Matchers',()=>{
        const data = ['Red','Blue','Orange'];
        expect(
            data
        ).toContain('Blue')

        expect(
            data
        ).not.toContain('Ramon')

        expect(
            30>40
        ).toBeFalsy()

        expect(
            30>50
        ).not.toBeTruthy()

        let lastName:string='';
        expect(
            lastName
        ).toBeDefined()

        expect(
            50
        ).toBeGreaterThan(25)

        expect(
            50
        ).toBeGreaterThanOrEqual(25)
    })

  
})