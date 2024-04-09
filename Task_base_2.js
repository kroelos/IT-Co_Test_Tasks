"use strict";
function checkSyntax(str_check){
    let str_opened=""
    for (let i = 0; i < str_check.length; i++) {
        if((str_check.charAt(i)==')')||(str_check.charAt(i)==']')||(str_check.charAt(i)=='}')||(str_check.charAt(i)=='>')){
            if(str_check.charAt(i)!=str_opened.slice(-1)){
                return 1
            }
            str_opened=str_opened.slice(0,-1)
        }
        switch(str_check.charAt(i)){
            case '(':
                str_opened=str_opened+')'
                break
            case '<':
                str_opened=str_opened+'>'
                break
            case '[':
                str_opened=str_opened+']'
                break
            case '{':
                str_opened=str_opened+'}'
        }
      }
      if(str_opened.length!=0){
        return 1
      }
      return 0
}
/**
 * Если  требуется проверять только набор скобок <,[,{, то в этом случае придётся внести небольшие изменения в функцию,
 * ввиду того, что в этом случае круглые скобки необходимо обрабатывать как обычные символы, не являющиеся скобками, а ,следовательно, 
 * их вложенность и сбалансированность проверять не нужно, дабы функция не видела ошибок там, где при таком наборе скобок их нет.
 * Если говорить о более конкретных изменениях, то для того, чтобы функция соответствовала новому набору скобок достаточно будет сделать следующее:
 * -Убрать  из самого первого if-а проверку на равенство текущего символа входной строки закрывающей круглой скобке(str_check.charAt(i)==')'). 
 * -Из конструкции switch case убрать обработку варианта, когда текущий символ входной строки равен открывающей круглой скобке(case '(':......).
 */
try {
    test(checkSyntax, ['---(++++)----'], 0);
    test(checkSyntax, [''], 0);
    test(checkSyntax, ['before ( middle []) after '], 0);
    test(checkSyntax, [') ('], 1);
    test(checkSyntax, ['} {'], 1);
    test(checkSyntax, ['<(   >)'], 1);
    test(checkSyntax, ['(  [  <>  ()  ]  <>  )'], 0);
    test(checkSyntax, ['   (      [)'], 1);

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}


function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}