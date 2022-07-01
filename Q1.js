// QNo 1. Print the following Pattern.
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5
//  *                     *
//        *         *
//             *
//        *         *
//   *                     *


let n=5;
for(i=1;i<=n;i++){
    let stars='';
    for(j=1;j<=n;j++){
      if(i==j || i+j==6){
        stars+='  *  '
      }else{
        stars+='     '
      }
    }
    console.log(stars)
}

