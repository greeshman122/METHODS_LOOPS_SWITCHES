var s = "DeMoN"
document.write(s.toUpperCase());
document.write("<br>");
document.write(s.toLowerCase());
document.write("<br>")
document.write(s.startsWith("D"))
document.write("<br>")
//pattern matching using regular expression//
var str1 = "I am a anime fan";
var p = new RegExp("anime");
var result = p.test(str1);
document.write(result)
