#include <iostream>
#include <vector> 
using namespace std;
 
int main( ) {
int numOfValues;
float value;
float sum = 0;

cout<<"Please enter the number of values \n";
cin >> numOfValues;

vector <float> values(numOfValues);

for (int i = 0; i<numOfValues; i++){
	cout<<"enter value"<< i+1 <<"\n";
	cin >> value;
	cout<< "the value at index" << i << "is" << value << "\n"; 
	
	sum += values[i];
	}
	cout<< "the sum of the values is " << sum << "\n"; 
for (int j = )
}
