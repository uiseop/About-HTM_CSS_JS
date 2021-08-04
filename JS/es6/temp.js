function countdown(){
    let i
    console.log("CountDonwn:");
    for(i=5;i>=0;i--){
        setTimeout(function(){
            console.log(i===0?"GO":i);
        },(5-i)*1000)
    }
}

countdown()