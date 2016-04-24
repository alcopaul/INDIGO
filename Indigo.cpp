#include <iostream>
#include <string>
#include <math.h>
#include <algorithm>

using namespace std;

string bass(int str, int bac, string lib)
{
	string res = "";

	if (str == 0)
	{
		return "0";
	}
	for (int i = str; 0 < i; i = (int)floor(i / bac))
	{
		res += lib.substr((i % bac), 1);
	}
	return res;
}
int main()
{
	string lib = "012345678";
	
	string result = "";
	
	for (int i = 1; i < 119; i++)
	{
	result = bass(i, 9, lib);
	reverse(result.begin(), result.end());
	cout << i << " = " << result << "\n";
	}
	return 0;
}
/* indigo by vp7o [nihfex]
