const operation=(input,type,number,prevEva, prevRes, prevNum)=>{
    
    let casePi = (prevRes ==="") ? number : prevRes
    let casePrevRes = (prevRes ==="" && number ==="") ? "0" : prevRes

    let lastOperation = []
    let toEval = []
    let len = 0

    const whichType = type

    if(number === "" && prevNum === "" && prevRes === "" && type === "result"){
        toEval = ["",false,false,true]
        return toEval
    }


    if(prevRes !== "" || type === "delete" || type === "result"){
        lastOperation = prevEva.split('').filter(ele => ele !== " ")
        len = lastOperation.length
    }

    

    if(number === "" && prevNum === "" && casePrevRes === ""){
        console.log('everything is empty')
        toEval = [input,false,false,false]
    //  console.log(toEval)
        return toEval
    }

    


    if(type === "geo"){
        switch(input){
            case "sin" : toEval[0] = (number === "") ? `sin(0 deg)` :`sin(${number} deg)`;
                         toEval[1] = true ;
                         toEval[2] = false ;
                         toEval[3] = false;
                         break;
            case "cos" : toEval[0] = (number === "") ? `cos(0 deg)`: `cos(${number} deg)`;
                         toEval[1] = true ;
                         toEval[2] = false ;
                         toEval[3] = false;
                         break;
            case "tan" : toEval[0] = (number === "") ? `tan(0 deg)` : `tan(${number} deg)`;
                         toEval[1] = true ;
                         toEval[2] = false ;
                         toEval[3] = false;
                         break;
            default: break;
        }
    }else if(type === "operator"){

        switch(input){
            case "/" :  toEval[0] = `${number} /`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            case "*" :  toEval[0] = `${number} *`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            case "-" :  toEval[0] = `${number} -`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            case "+" :  toEval[0] = `${number} +`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            default: break;
        }

    }


    switch (whichType){

        case "square": toEval[0] = (number === "") ? `${casePrevRes}^2`: `${number}^2`;
                       toEval[1] = true ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "pow":    toEval[0] = (number === "") ? `${casePrevRes}` : `${number}^`;   
                       toEval[1] = false ;   
                       toEval[2] = false ;   
                       toEval[3] = false;   
                       break;


        case "sqrt":   toEval[0] = (number === "") ? `${casePrevRes}^(1/2)` : `${number}^(1/2)`; 
                       toEval[1] = true ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "pi":     toEval[0] = (number === "") ? `pi`: `${casePi}*pi`;
                       toEval[1] = true ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "exp":    toEval[0] = `${number}*(`;
                       toEval[1] = false ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "factorial": toEval[0] = (number === "") ? `${casePrevRes}!` :  `${number}!`;
                          toEval[1] = true ;
                          toEval[2] = false ;
                          toEval[3] = false;
                          break;

        case "percent": toEval[0] = (number === "") ? `${casePrevRes}*(1/100)` :  `${number}*(1/100)`;
                        toEval[1] = true ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;

        case "allClear": toEval[0] = "";
                         toEval[1] = false ;
                         toEval[2] = false ;
                         toEval[3] = true;
                         break;

        case "neg":     toEval[0] = (number === "") ? `${casePrevRes}*(-1)` :  `${number}*(-1)`;
                        toEval[1] = true ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;

        case "delete":  toEval[0] = `${lastOperation.splice(0,len-1).join(" ")}`
                        toEval[1] = false ;
                        toEval[2] = true ;
                        toEval[3] = false;
                        break;

        case "result": 
                        if(prevRes !== ""){
                            toEval[0] = (len === 2) ? `${lastOperation[len-2]} ${lastOperation[len-1]}` 
                                                    : `${prevRes} ${lastOperation[len-2]} ${lastOperation[len-1]}`
                            toEval[1] = true ;
                            toEval[2] = false ;
                            toEval[3] = false;
                            break;
                        }else{
                            toEval[0] = `${prevEva}`;
                            toEval[1] = true ;
                            toEval[2] = false ;
                            toEval[3] = false;
                            break;
                        }
                      
        default: break;     

    }
// console.log("toEval : ")
// console.log(toEval)
return toEval

}

export default operation