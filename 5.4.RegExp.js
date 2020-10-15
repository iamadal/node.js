/**
 * MOST IMPORTANT
 * 01. Regular Expression - Author: Adal Khan - 01-06-2020
 * 02. var expression = /patterns/flags/
 * 03. Switchs:
 *     a. g — Indicates global mode, meaning the pattern will be applied to all of the string instead of
          stopping after the first match is found
       b. i — Indicates case - insensitive mode, meaning the case of the pattern and the string are ignored
          when determining matches
       c. m — Indicates multiline mode, meaning the pattern will continue looking for matches after
          reaching the end of one line of text

    ## As with regular expressions in other languages, all metacharacters must be escaped when used as part of
       the pattern. The metacharacters are as follows:
       ( [ { \ ^ $ | ) ? * + .

    ## See Beginning JavaScript 4th Edition- Wrox's Appendix
 */


/*
* Match all instances of "at" in a string.
*/
var pattern1 = /at/g;
/*
* Match the first instance of "bat" or "cat", regardless of case.
*/
var pattern2 = /[bc]at/i;
/*
* Match all three-character combinations ending with "at", regardless of case.
*/
var pattern3 = /.at/gi;

/*
* Match the first instance of "bat" or "cat", regardless of case.
*/
var pattern14 = /[bc]at/i;
/*
* Match the first instance of "[bc]at", regardless of case.
*/
var pattern24 = /\[bc\]at/i;
/*
* Match all three-character combinations ending with "at", regardless of case.
*/
var pattern34 = /.at/gi;
/*
* Match all instances of ".at", regardless of case.
*/
var pattern44 = /\.at/gi;


/*
* Same as pattern1, just using the constructor.
*/
var pattern29 = new RegExp("[bc]at", "i");


var pattern1 = /\[bc\]at/i;
console.log(pattern1.global); //false
console.log(pattern1.ignoreCase); //true
console.log(pattern1.multiline); //false
console.log(pattern1.lastIndex); //0
console.log(pattern1.source); //"\[bc\]at"
var pattern2 = new RegExp("\\[bc\\]at", "i");
console.log(pattern2.global); //false
console.log(pattern2.ignoreCase); //true
console.log(pattern2.multiline); //false
console.log(pattern2.lastIndex); //0
console.log(pattern2.source); //"\[bc\]at"

var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
console.log(matches.index); //0
console.log(matches.input); //"mom and dad and baby"
console.log(matches[0]); //"mom and dad and baby"
console.log(matches[1]); //" and dad and baby"
console.log(matches[2]); //" and baby"


/**
 /\[bc\]at/      Equivalent String     “ \\[bc\\]at “
/\.at/                                 “ \\.at “
/name\/age/                            “ name\\/age “
/\d.\d{1,2}/                           “ \\d.\\d{1,2} “
/\w\\hello\\123/                       “ \\w\\\\hello\\\\123 “
 */








var text = "cat, bat, sat, fat";
var pattern1 = /.at/;
var matches = pattern1.exec(text);
console.log(matches.index); //0
console.log(matches[0]); //cat
console.log(pattern1.lastIndex); //0
matches = pattern1.exec(text);
console.log(matches.index); //0
console.log(matches[0]); //cat
console.log(pattern1.lastIndex); //0
var pattern2 = /.at/g;
var matches = pattern2.exec(text);
console.log(matches.index); //0
console.log(matches[0]); //cat
console.log(pattern2.lastIndex); //0
matches = pattern2.exec(text);
console.log(matches.index); //5
console.log(matches[0]); //bat
console.log(pattern2.lastIndex); //8

