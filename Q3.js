// Qno 3: Print the following pattern
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15



let count=1;
for(let n=1;n<=5;n++){
  stars='';
  for(let m=1;m<=n;m++){
    stars=stars +` ${count} `;
    count=count+1;
  }
  console.log(stars)
}