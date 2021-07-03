#include <bits/stdc++.h>
using namespace std;

//function to print the array
void print(vector<string> Hackathons){
	for(int i=0;i<Hackathons.size();i++)
		cout<<Hackathons[i]<<endl;
	printf("\n");
}

bool mycomp(string a, string b){
	//returns 1 if string a is alphabetically 
	//less than string b
	//quite similar to strcmp operation
	return a<b;
}

vector<string> alphabaticallySort(vector<string> a){
	int n=a.size();
	//mycomp function is the defined function which 
	//sorts the strings in alphabatical order
	sort(a.begin(),a.end(),mycomp);
	return a;
}

int main()
{   
	int n;
	printf("Enter number of Hackathons to be added: ");
	scanf("%d",&n);

	//creating a vector of strings
	//vector to store strings(Hackathons)
	vector<string> Hackathons;
	string Hackathon;
	printf("Enter Hackathons: \n");
	//taking input
	for(int i=0;i<n;i++){
		cin>>Hackathon;
		//insert Hackathons into the vector
		Hackathons.push_back(Hackathon); 
	}

	printf("\nBefore sorting\n");
	print(Hackathons);

	//function to sort Hackathons alphabetically
	Hackathons=alphabaticallySort(Hackathons);

	printf("After alphabetical sorting\n");
	print(Hackathons);

	return 0;
}
