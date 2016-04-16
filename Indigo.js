var lib = "012345678";
//note: length of lib must be equal to the base
var wsh = new ActiveXObject("WScript.Shell");
//begin input values here
var bsx = 9;
//end input values here
var resx = "";
var fso = new ActiveXObject("Scripting.FileSystemObject"); 
var fh = fso.CreateTextFile("Indigo.txt", 2, true);
for (var i = 1; i < 119; i++)
{
resx = reverse(erx(i, bsx, lib));
fh.WriteLine(i + " = " + resx + "\n");
}
fh.Close();
wsh.Popup("Indigo Module Completely Executed!");
//convert decimal to any base
function erx(str, bac, lib)
{
var res = "";
if (str == 0)
{
return "0";
}
for (var i = str; 0 < i; i = Math.floor(i / bac)) 
{
res += lib.substr((i % bac), 1);
}
return res;
}
function reverse(s)
{
return s.split("").reverse().join("");
}
// INDIGO BY VP70[NIHFEX] 04/16/2016
