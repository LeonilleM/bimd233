var state = "Idle";
var cmd = "nop";    // 'nop' stands for "no operation"

function getUserInput(state){
    return prompt(`Enter a command for ${state}`, "next")
}

do {
    switch (state)  {
        case "Idle": 
            if (cmd === "run") {
                state = "S1";
                console.log(`Machine is now in state: ${state}`)
            }
            break;
        // ... You'll be coding S1 – S4
        case "S1":
        if(cmd == "next"){
            state = "S2";
            console.log(`Machine is now in state: ${state}`)
        }else if(cmd == "prev"){
            state = "S4";
            console.log(`Machine is now in state ${state}`)
        }else if(cmd == "skip"){
            state = "S3";
            console.log(`Machine is now in state ${state}`)
        }
        case "S2":
        if(cmd =="next"){
            state = "S3";
            console.log(`Machine is now in state ${state}`)
        }
        case "S3":{
            if(cmd = "next"){
            state = "S4";
            console.log(`Machine is now in state ${state}`)
            }
        }
        case "S4":{
            if(cmd == "next"){
                state = "S1";
                console.log(`Machine is now in state ${state}`)
            }else if(cmd == "exit" || cmd == "stop"){
                state = ""
                break
            }
        }
    }
    cmd = getUserInput(state); // ... You'll be coding this func
} while (cmd != "exit");
