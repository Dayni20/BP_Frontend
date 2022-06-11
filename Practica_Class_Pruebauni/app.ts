import { level } from './types/random.type';
export function sumar(a:number, b:number):number{
    return a+b
}

export function getLevel(plevel:number):level{
    let currentLevel:level;

    if(plevel <= 40)
        currentLevel = "Junior";
    else if(plevel <=85)
        currentLevel="SemiSenior"
    else
        currentLevel = "Senior";

    return currentLevel;
}

export function getType(random:number): string | number {
    return random < 50 ? "Hola" : 100;
}

export function sayHello():void{
    const level = 60;
    console.log(`Hola Dayana tu nivel es: ${getLevel(level)}`);
}

export function mostrar():string{
    return getLevel(50);
}