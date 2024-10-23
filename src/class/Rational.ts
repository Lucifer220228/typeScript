/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    numerator:number;
    denominator:number;

    constructor (numerator:number,denominator:number){
        if(denominator === 0){
            throw new Error('Denominator cannot be 0.');
        }
        this.numerator = numerator;
        this.denominator = denominator;
       
    }

    getNumerator(){
        return this.numerator;
    }

    getDenominator(){
        return this.denominator;
    }
    normalize(){
        let gcd = this.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
        this.numerator /= gcd;
        this.denominator /= gcd

        if(this.denominator < 0){
            this.numerator = -this.numerator;
            this.denominator = -this.denominator;
        }
        return new Rational(this.numerator, this.denominator);
    }

    gcd(a: number, b: number){
        while(b !== 0){
            let temp = b;
            b = a%b;
            a = temp;
        }
        return a;
    }

    isWhole(){
        return this.denominator === 1;
    }

    isDecimal(){
        return this.denominator !== 1;
    }

    equals(r: Rational){
        return this.numerator == r.numerator && this.denominator == r.denominator;
    }

    static _parseRational(numeratorChars: any[], denominatorChars: any[]){
        let numerator = parseInt(numeratorChars.join(''));
        let denominator = parseInt(denominatorChars.join(''));
        return new Rational(numerator, denominator);
    }

    static parseRational(str: string){
        let part = str.split('/');
        if(part.length !== 2){
            throw new Error('Format is incorrect.')
        }
        let numerator = parseInt(part[0].trim());
        let denominator = parseInt(part[1].trim());
    
    return new Rational(numerator, denominator);

    }

    toString(){
        if(this.denominator === 1){
            return `${this.numerator}`;
        }
        return `${this.numerator}/${this.denominator}`;
    }

}