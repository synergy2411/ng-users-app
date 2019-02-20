import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'countrycode'
})
export class CountryCodePipe implements PipeTransform{

    transform(contact_no : number, code : string, bool : boolean){
        if(bool){
            if(code === 'US'){
                return "US : +1 " + contact_no;    
            }
            if(code === 'AUS'){
                return "AUS : +73 " + contact_no;
            }
            return "IND : +91 " + contact_no;
        }
        else{
            if(code === 'US'){
                return "+1 " + contact_no;    
            }
            if(code === 'AUS'){
                return "+73 " + contact_no;
            }
            return "+91 " + contact_no;
        }
    }
}