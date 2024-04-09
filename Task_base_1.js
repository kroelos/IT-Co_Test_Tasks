"use strict";
  function dscount(str_in,s1_in,s2_in){
    let str_main = str_in.toLowerCase()
    let s1=s1_in.toLowerCase()
    let s2=s2_in.toLowerCase()
    let num_pairs=0
    for (let i = 0; i < str_main.length; i++) {
        if((str_main.charAt(i)==s1)&&(i!=str_main.length-1)){
            if(str_main.charAt(i+1)==s2){
                num_pairs++
            }
        }
      }
      return num_pairs
  }
  try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}


function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}