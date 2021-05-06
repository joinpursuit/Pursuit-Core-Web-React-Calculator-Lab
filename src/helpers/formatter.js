const formatter =(numbers,format)=>{

    const numbers_ = numbers
    const len = numbers.length

    if((len >= 21 && format === false) || (numbers_.includes("e")) || (numbers_.includes(".")) || (numbers_.includes("-"))){
        
        if(numbers_.includes("e")){
                return numbers_
        }else{
            return parseFloat(numbers_).toLocaleString()
        }
    }

    if(numbers_ === "Infinity" || numbers_ === "-Infinity"){
        return parseFloat(numbers_).toLocaleString()
    }
    
    const div = Math.floor(len / 3)
    const mod = len % 3
    let display = ''   


    switch(div){
        case 0 : 
                    display = numbers_;break;
                  
        
        case 1 : switch(mod){
                    case 0 : display  = numbers_;break;
                    case 1 : display  = numbers_.substring(0,1)+','+ numbers_.substring(1,len);break;
                    case 2 : display  = numbers_.substring(0,mod)+','+ numbers_.substring(mod,len);break; 
                    default : break;
                    }break;
                 
                 
        case 2 : 
                 switch(mod){
                    case 0 : display  = numbers_.substring(0,3)+','+ numbers_.substring(3,len);break;
                    case 1 : display  = numbers_.substring(0,1)+','+ numbers_.substring(1,4)+','+ numbers_.substring(4,len);break;
                    case 2 : display  = numbers_.substring(0,2)+','+ numbers_.substring(2,5)+','+ numbers_.substring(5,len);break; 
                    default : break;
                }break;
        case 3 : 
                switch(mod){
                   case 0 : display  = numbers_.substring(0,3)+','+ numbers_.substring(3,6)+','+ numbers_.substring(6,len);break;
                   case 1 : display  = numbers_.substring(0,1)+','+ numbers_.substring(1,4)+','+ numbers_.substring(4,7)+','+ numbers_.substring(7,len);break; 
                   case 2 : display  = numbers_.substring(0,2)+','+ numbers_.substring(2,5)+','+ numbers_.substring(5,8)+','+ numbers_.substring(8,len);break; 
                   default : break;
               }break;
        case 4 : 
               switch(mod){
                  case 0 : display  = numbers_.substring(0,3)+','+ numbers_.substring(3,6)+','+ numbers_.substring(6,9)+','+ numbers_.substring(9,len);break; 
                  case 1 : display  = numbers_.substring(0,1)+','+ numbers_.substring(1,4)+','+ numbers_.substring(4,7)+','+ numbers_.substring(7,10)+','+ numbers_.substring(10,len);break; 
                  case 2 : display  = numbers_.substring(0,2)+','+ numbers_.substring(2,5)+','+ numbers_.substring(5,8)+','+ numbers_.substring(8,11)+','+ numbers_.substring(11,len);break; 
                  default : break;
              }break;
        
        case 5 : 
              switch(mod){
                 case 0 : display  = numbers_.substring(0,3)+','+ numbers_.substring(3,6)+','+ numbers_.substring(6,9)+','+ numbers_.substring(9,12)+','+ numbers_.substring(12,len);break; 
                 case 1 : display  = numbers_.substring(0,1)+','+ numbers_.substring(1,4)+','+ numbers_.substring(4,7)+','+ numbers_.substring(7,10)+','+ numbers_.substring(10,13)+','+ numbers_.substring(13,len);break; 
                 case 2 : display  = numbers_.substring(0,2)+','+ numbers_.substring(2,5)+','+ numbers_.substring(5,8)+','+ numbers_.substring(8,11)+','+ numbers_.substring(11,14)+','+ numbers_.substring(14,len);break; 
                 default : break;
             }break;

        case 6 : display = numbers_.substring(0,1)+'.'+ numbers_.substring(1,3)+'e'+len;break
        case 7 : display = numbers_.substring(0,1)+'.'+ numbers_.substring(1,3)+'e'+len;break
        case 8 : display = numbers_.substring(0,1)+'.'+ numbers_.substring(1,3)+'e'+len;break
        case 9 : display = numbers_.substring(0,1)+'.'+ numbers_.substring(1,3)+'e'+len;break
        case 10 : display = numbers_.substring(0,1)+'.'+ numbers_.substring(1,3)+'e'+len;break 
        case 11 : display = numbers_.substring(0,1)+'.'+ numbers_.substring(1,3)+'e'+len;break 
        case 12 : display = numbers_.substring(0,1)+'.'+ numbers_.substring(1,3)+'e'+len;break
        case 13 : display = numbers_.substring(0,1)+'.'+ numbers_.substring(1,3)+'e'+len;break
        case 14 : display = numbers_.substring(0,1)+'.'+ numbers_.substring(1,3)+'e'+len;break
        case 15 : display = numbers_.substring(0,1)+'.'+ numbers_.substring(1,3)+'e'+len;break         
        default: break;
    }
    return display
}


export default formatter