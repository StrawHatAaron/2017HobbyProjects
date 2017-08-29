// 
// vmSucksDick.cpp
// Lab2

#include <iostream>
#include <vector>

using namespace std;

void f(v value){
    v.push_back(value);
}

int main() {
    int numOfValues;
    std::cout << "Enter amount of values \n";
    
    cin >> numOfValues;
    vector <float> v(numOfValues);
    float value; 
    //values.push_back(value);
    for (int i = 0; i<v.size; i++)
    {
          cout<<"Enter value number" << i+1 << "\n";
          cin>>value;
          v.push_back(value);    
    } 
  }