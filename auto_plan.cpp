#include <bits/stdc++.h>
using namespace std;
#define sd(x) scanf("%d", &x)
#define pb push_back
#define mp make_pair
#define INF 1000000008

double maxsatisfaction=0;
int maxseq=-1;

//places are assigned a specific unsigned integer id

//sp is the starting point
string sp;

//ep is the ending point
string ep;

//MAXN is the total number of locations
int MAXN;

//vector to hold places nearby a place in a sorted order
vector<vector<pair<int, int>>> distvect;

//vector to hold distance of places from starting point in sorted order
vector<pair<int, int>> spdis;

//vector to hold distance of places from starting point in sorted order
vector<int> epdis;

//defining a vector for the satisfaction user gets after visiting a place
vector<double>satisfy;

//defining a vector for time spent at a particular location
vector<int>placedist;

//defining a vector for ratings of a place
vector<double>ratings;

//sequences of visits
vector<vector<int>> visitseq;


void algo(int current, int timeleft, vector<int> vect){
	vect.pb(current);
	sort(vect.begin(), vect.end());
	if(current==-1){
		for(int i=0; i<5; i++){
			int timerec=timeleft;
			if((spdis[i].second+placedist[spdis[i].first]+epdis[spdis[i].first])<=timeleft){
				timerec=timeleft-spdis[i].second-placedist[spdis[i].first];
				algo(spdis[i].first, timerec, vect);
			}
			else{
				if(vect.size()>1){
					visitseq.pb(vect);
				}
			}
		}
	}
	else{
		for(int i=0; i<5; i++){
			int timerec=timeleft;
			if(!binary_search(vect.begin(), vect.end(), distvect[current][i].first)){
				if((distvect[current][i].second+placedist[distvect[current][i].first]+epdis[distvect[current][i].first])<=timeleft){
					timerec=timeleft-distvect[current][i].second-placedist[distvect[current][i].first];
					algo(distvect[current][i].first, timerec, vect);
				}
				else{
					if(vect.size()>1){
						visitseq.pb(vect);
					}
				}
			}
		}
	}
}


bool sortcol(const pair<int,int> &a, const pair<int,int> &b){
    return (a.second < b.second);
}

int main() {
	
	//input from user
	cin>>sp;
	
	cin>>ep;
	int totaltime;
	sd(totaltime);

	int margin=int(0.15*totaltime);

	sd(MAXN);
	
	//defining an array for time of all locations from the user's location
	int spdist[MAXN];
	//defining an array of time between all places in a 2d array
	int dist[MAXN][MAXN];
	//defining an array for the time of all places from the ending point
	int epdist[MAXN];
	//defining an array for locations that can be visited from a location
	int nearby[MAXN][5];


	//input from our database

	for(int i=0; i<MAXN; i++){
		sd(spdist[i]);
	}
		
	for(int i=0; i<MAXN; i++){
		spdis.pb(mp(i, spdist[i]));
	}

	sort(spdis.begin(), spdis.end(), sortcol);

	for(int i=0; i<MAXN; i++){
		for(int j=0; j<MAXN; j++){
			sd(dist[i][j]);
		}
	}
	
	for(int i=0; i<MAXN; i++){
		sd(epdist[i]);
		epdis.pb(epdist[i]);
	}

	//sort(epdis.begin(), epdis.end(), sortcol);
	int minv=INF;

	for(int i=0; i<MAXN; i++){
		int a;
		sd(a);
		placedist.pb(a);
		if(a<minv){
			minv=a;
		}
	}


	for(int i=0; i<MAXN; i++){
		double a;
		cin>>a;
		ratings.pb(a);
	}
	
	for(int i=0; i<MAXN; i++){
		double z1 = ratings[i];
		double z2 = (double(placedist[i])/double(minv))*5;
		satisfy[i] = z1+z2;
	}
	

	for(int i=0; i<MAXN; i++){
		vector<pair<int, int>> vect;
		for(int j=0; j<MAXN; j++){
			vect.pb(mp(j, dist[i][j]));
		}
		sort(vect.begin(), vect.end(), sortcol);
		distvect.pb(vect);
	}


	vector<int> vect;
	algo(-1, totaltime+margin, vect);

	for(int i=0; i<visitseq.size(); i++){
		double satisfaction=0.0;
		for(int j=0; j<visitseq[i].size(); j++){
			satisfaction+=satisfy[visitseq[i][j]];
		}
		if(satisfaction>maxsatisfaction){
			maxseq=i;
			maxsatisfaction=satisfaction;
		}
	}

	for(int i=1; i<visitseq[maxseq].size(); i++){
		cout<<visitseq[maxseq][i]<<endl;
	}
	cout<<maxsatisfaction<<endl;
	return 0;
}	