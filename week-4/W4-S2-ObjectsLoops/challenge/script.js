//Yield output in lower case.
for(let i = 97; i <= 122; i++) {
    //console.log(String.fromCharCode(i));
}

//convert alphabet to Upper case
for(let i = 97; i <= 122; i++) {    
//console.log(String.fromCharCode(i).toUpperCase());
}
    
let alphbet = "abcdefghijklmnopqrstuvwxyz";
let alphbetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphbetArray = alphbet.split("");
let alphbetUpperArray = alphbetUpper.split("");
//let trimmedAlphbet = alphbetArray.trim();
console.log(alphbetArray); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z' ]
console.log(alphbetUpperArray); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z' ]
console.log(alphbetArray.slice(5, 13)); // ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
console.log(alphbetArray.reverse()) //['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
console.log(alphbet.indexOf('g')); // 6
console.log(alphbetArray.join(' -> '));