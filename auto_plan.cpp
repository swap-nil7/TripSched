#include <bits/stdc++.h>
using namespace std;
#define sd(x) scanf("%d", &x)
#define pb push_back
#define mp make_pair
#define INF 1000000008

double maxsatisfaction=0;
int maxseq=-1;
int starttime, endtime;
int totaltime;

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

//defining a vector for opening time of all places in minutes integer format considering 0:00 as 0
vector<int>optime;

//defining a vector for opening time of all places in minutes integer format considering 0:00 as 0
vector<int>cltime;

//sequences of visits
vector<vector<int>> visitseq;


void algo(int current, int timeleft, int pretime, vector<int> vect){
	vect.pb(current);
	sort(vect.begin(), vect.end());
	if(current==-1){
		for(int i=0; i<5; i++){
			int timerec=timeleft;
			int reachtime=pretime+spdis[i].second;
			int departtime=reachtime+placedist[spdis[i].first];
			if(reachtime>=optime[spdis[i].first] && departtime<=cltime[spdis[i].first]){
				if((spdis[i].second+placedist[spdis[i].first]+epdis[spdis[i].first])<=timeleft){
					timerec=timeleft-spdis[i].second-placedist[spdis[i].first];
					algo(spdis[i].first, timerec, departtime, vect);
				}
				else{
					if(vect.size()>1){
						visitseq.pb(vect);
					}
				}
			}
		}
	}
	else{
		for(int i=0; i<5; i++){
			int timerec=timeleft;
			int reachtime=pretime+distvect[current][i].second;
			int departtime=reachtime+placedist[distvect[current][i].first];
			if(reachtime>optime[distvect[current][i].first] && departtime<cltime[distvect[current][i].first]){
				if(!binary_search(vect.begin(), vect.end(), distvect[current][i].first)){
					if((distvect[current][i].second+placedist[distvect[current][i].first]+epdis[distvect[current][i].first])<=timeleft){
						timerec=timeleft-distvect[current][i].second-placedist[distvect[current][i].first];
						algo(distvect[current][i].first, timerec, departtime ,vect);
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
}


bool sortcol(const pair<int,int> &a, const pair<int,int> &b){
    return (a.second < b.second);
}

int main() {
	
	//input from user
	cin>>sp;
	
	cin>>ep;
	
	sd(starttime);
	sd(endtime);

	totaltime=endtime-starttime;

	int margin=int(0.15*totaltime);

	sd(MAXN);
	
	//defining an array for time of all locations from the user's location
	int spdist[MAXN];
	//defining an array of time between all places in a 2d array
	int dist[MAXN][MAXN];
	//defining an array for the time of all places from the ending point
	int epdist[MAXN];


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

	for(int i=0; i<MAXN; i++){
		int a;
		sd(a);
		optime.pb(a);
	}

	for(int i=0; i<MAXN; i++){
		int a;
		sd(a);
		cltime.pb(a);
	}

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
		double z2 = (double(minv)/double(placedist[i]))*5;
		double z = z1+z2;
		satisfy.pb(z);
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
	algo(-1, totaltime+margin, starttime, vect);


	if(visitseq.size()){
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
	}
	else{
		cout<<"Sorry! There are no possible plans."<<endl;
	}
	return 0;
}	
