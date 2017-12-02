var map;
var infowindow;
var i = 0;

var locations = ["CHAND BAORI(STEPWELL)- ABHANERI","Harshat Mata Temple - Abhaneri","Jhajhirampura","Bhandarej","Lotwara","Bandikui","City Palace","Royal Stepwell","Nihal Tower","Shiv Temple aka Chausath Yogini Temple","Shergarh Fort","Machkund ","Sher Shikhar Gurudwara","Mughal Garden"," Jhor ","Damoh","Talab-e-Shahi","Van Vihar Sanctuary","A ride around the Ramsagar Sanctuary","Chambal Gharial Sanctuary","Sunehri Kothi","The Arabic and Persian Research Institute","Haathi Bhata","Bisaldeo Temple  ","Hadi Rani Baori ","Diggi Kalyanji Temple ","Kaila Devi Temple","Madan Mohan Ji Temple","MehandipurBalaji Temple","Shri Mahavir Ji Temple","GomtiDham","Bhanwar Vilas Palace","Kaila Devi Sanctuary","City Palace","Chhatri of Raja Gopal Singh","Timangarh Fort","Dev Giri Fort & Utgir","Mandrayal","Gadhmora","Gufa Temple","Bhatner Ashva Mela ","Bhatner Fort","Temple of Shri Gogaji ","Gogamedi Panorama","Kalibangan","Temple of Mata Bhadrakali","Bird Watching at Badopal  ","Gangaur","Badnore Fort","Pur Udan Chatri ","Kyara ke Balaji","The Madhav Gou Vigyan Anusandhan Kendra","Mandal","Harni Mahadev","Gayatri Shakti Peeth","Dhanop Mataji","Shri Beed ke Balaji ","Shri Charbhujanath Temple ","Bagore Sahib ","Chamunda Mata Mandir ","Menal Waterfall","Jataun Ka Mandir Temple","Ganesha Temple","Triveni","Meja Dam","Bijolia","Tilasvan Mahadev ","Shahpura","Jahazpur","Asind","Mandalgarh","Bror Village","Laila Majnu ka Mazar","Anupgarh fort","Hindumalkot Border","Buddha Johad Gurudwara","Padampur","Sethani Ka Johara ","Kanhaiyalal Bagla Haveli ","Aath Kambh Chhatri   ","Ratangarh Fort ","Laxminarayan Temple ","Digambar Jain Temple ","Tal Chhapar Sanctuary","Laxmangarh Fort ","Mansa Devi Temple ","Raghunathji Mandir ","Fatehpur","Ramgarh","Khetri Mahal ","Sunset Point Moda Pahar ","Rani Sati Mandir ","Hazrat Qamruddin Shahs Dargah ","Panchdev Mandir ","Bande Ka Balaji Temple ","Mandawa","Dundlod","Alsisar","Bissau","Nawalgarh","Heritage Walk","Ramgarh Bhand Devra Temple","Shahabad Fort","Shahi Jama Masjid of Shahabad","Shergarh Fort","Shergarh Sanctuary ","Sitabari","Tapasviyo ki Bagechi","Kakuni Temple Complex","Suraj Kund","Sorsan Wildlife Sanctuary","Sorsan Mataji Temple","Nahargarh Fort","Kanya Dah- Bilas Garh","Kapil Dhara","Gugor Fort","Ranakpur Festival","Ranakpur Jain Temples","Jawai Dam","Parshuram Mahadev Temple","Nimbo Ka Nath Temple","Jain Temple","Jalore Fort","Topekhana ","Malik Shahs Mosque","Sirey Mandir","Sundha Mata Temple","Nagaur Cattle Fair","Kiradu Temples","Barmer Fort & Garh Temple","Shri Nakoda Jain Temple","Devka-Sun Temple","Vishnu Temple","Rani Bhatiyani Temple","Juna fort & Temple","Chintamani Parasnath Jain Temple ","Cattle-fair and Camel Safari","Shopping","Nagaur Fair","World Sufi Spirit Festival","Nagaur Fort","Ladnun","Khimsar Fort","Kuchaman City","Khatu","Jhorda","Attend Cattle Fair","Kaila Devi Fair","Ganesh Chaturthi Fair","Shri Mahavirji Fair","Chauth Mata Temple Fair","Shiv Ratri Fair","Ranthambore fort","Ghushmeshwar Temple","Tonk","Sunheri Kothi","Jama Masjid","Hathi Bhata","Amreshwar Mahadev","Khandhar Fort","Kailadevi","Shri Mahavirji Temple","Ranthambore","Shilpgram - Sawai Madhopur","Safari at Ranthambore","Braj Holi Festival","Bharatpur Palace and Museum","Ganga Mandir","Laxman Mandir","Keoladeo Ghana National Park","Lohagarh Fort","Deeg","Band Baretha","Kaman","Dholpur Palace","Bird watching at Keoladeo Ghana National Park","Mewar Festival","Kumbhalgarh Festival","Udaipur City Palace","Lake Palace","Jag Mandir","Monsoon Palace","Ahar Museum","Jagdish Temple","Fateh Sagar Lake","Lake Pichola","Saheliyon ki Bari","Gulab Bagh and Zoo","Sukhadia Circle","Bharatiya Lok Kala Mandal","Bagore ki Haveli","Shilpgram","Udai Sagar Lake","Haldighati","Doodh Talai Lake","Jaisamand Lake","Navalakha Mahal (Gulab Bagh)","Wax Museum","Watch the Dharohar Dance Show at Bagore-ki-Haveli","Puppet Show at Bharatiya Lok Kala Mandal","Visit Shilpgram","Travel the Udaipur Ropeway","A bicycle trip through the lanes of Udaipur","Go rafting in the Gomati River","Pushkar Fair","Pushkar Lake","Brahma Temple","Gurudwara Singh Sabha","Varaha Temple","Savitri Temple","Rangji Temple","Pap Mochini Temple","Sri Panchkund Shiva Temple","Atmateshwar Temple","Man Mahal","Bathe in Pushkar Lake","Watch the evening prayers at Varah Ghat","Camel Safaris: Camel Safari in Pushkar","Dussehra "," Adventure Festival","Garh Palace","Maharao Madho Singh Museum","Abheda Mahal and Karani Mata Temple","Dad Devi Temple","Charan Chauki","Jagmandir Palace","Kota Barrage","Chambal Garden","Seven Wonder Park","Khade Ganesh Ji Temple","Karneshwar Temple","Godawari Dham","Alnia Dam","Mukundara Tiger Reserve","Garadia Mahadev Temple","Kansua Temple","Mathuradheesh Mandir","Gaiparnath Temple","Boat Safari","Go for a walk at Kishore Sagar","Heritage walk in the fortified old city","Marwar Festival ","Mehrangarh Fort","Khejarla Fort","Umaid Bhawan Palace","Moti Mahal","Sheesh Mahal","Phool Mahal","Chamunda Mataji Temple","Ranisar Padamsar","Jodhpur Government Museum","Jaswant Thada","Ghanta Ghar","Mahamandir Temple","Mandaleshwar Mahadev","Sardar Samand Lake and Palace","Masuria Hills","Shastri Circle","Mandore","Kailana Lake","Machiya Safari Park","Somnath Temple","Balsamand Lake","Guda Village","Flying Fox","Bishnoi Village Tour","When in Jodhpur"," A Camel Safari is a Must","Chandrabhaga Fair","Jhalawar Fort","Jhalawar Government Museum","Bhawani Natyashala","Gagron Fort","Chandrabhaga temple","Sun Temple","Herbal Garden","Dwarkadheesh Temple","Chandkheri Adinath Jain Temple"," Khanpur","Dalhanpur","Unhel Jain temple","Buddhist Caves and Stupas","Visit Buddhist Caves and Stupas","Desert Festival","Jaisalmer Fort","Jaisalmer Government Museum","Nathmal Ji Ki Haveli","Salim Singh Ki Haveli","Patwon Ki Haveli","Mandir Palace","Jain temples of Jaisalmer","Gadisar Lake","Bada Bagh","Desert National Park","Kuldhara","Tanot Mata Temple","Ramdevra Temple","Kuldhara","Jaisalmer War Muse?u?m","Laungewala War Memorial","Akal Wood Fossil Park","Camel safari","Have your own sand story @ the dunes of Jaisalmer","Kite Festival","Gangaur Festival","Teej Festival","Dhulandi Festival","Amber Palace","CITY PALACE","Jantar Mantar","HAWA MAHAL","ALBERT HALL MUSEUM (Central Museum)","NAHARGARH FORT","Jaigarh Fort","BIRLA TEMPLE","Jal Mahal","GAITORE (Memorials of Kings)","SISODIA RANI PALACE AND GARDEN","Vidyadhar Garden","Central Park","Anokhi Museum of Hand Printing","Govind Devji Temple","MOTI DOONGRI Ganesh temple","Akshardham Temple","Digamber Jain Mandir","Galtaji","Statue Circle","Ram Niwas Garden","Zoological Garden","Kanak Vrindavan","ISHWAR LAT (Sargasuli)","Amar Jawan Jyoti","MAHARANI KI CHHATRI (memorials of queens)","NAHARGARH BIOLOGICAL PARK","JAIPUR WAX MUSEUM","Samode","Jawahar Kala Kendra","Raj Mandir","Sambhar Lake","Madhvendra Palace"," Nahargarh","Shop","City Tours","Hot Air Balloon Rides","Baneshwar Fair","Udai Bilas Palace","Juna Mahal","Gaib Sagar Lake","Government Archaeological Museum","Badal Mahal","Baneshwar Temple","Bhuvaneshwar","Surpur Temple","Vijay Raj Rajeshwer Temple","Shrinathji Temple","Goodh Mandap","Nagfanji","Galiakot","Deo Somnath","Boreshwar","Kshetrapal Temple","Temple Visit","Visit Mahals","Chittorgarh Fort","Rani Padmini's Palace","Vijay Stambh","Kirti Stambh","Fateh Prakash Palace","Jain Temples","Kalika Mata Temple","Tulja Bhavani Temple","Gaumukh Reservoir","Ratan Singh Palace","Rana Kumbha Palace","Kumbha Shyam Temple","Meerabai Temple","Nagari","Bhainsrorgarh Fort","Temples of Baroli - Rawatbhata","Jaimal and Pattas Palace","Feed fish at Gaumukh Reservoir","KAJLI TEEJ","Bundi Festival","Sukh Mahal","Kshar Bag","Raniji ki Baori","Dabhai Kund","Nagar Sagar Kund","Taragarh Fort","84 Pillared Cenotaph","Lake Jait Sagar","Lake Nawal Sagar","Lake Kanak Sagar","Ramgarh Vishdhari Sanctuary","Phool Sagar","Safari on Chambal River","Kolayat Fair","Bikaner Camel Festival","Junagarh Fort","National Research Centre on Camel","Lalgarh Palace and Museum","Rampuria Haveli","Ganga Government Museum","Laxmi Niwas Palace","Prachina Museum","Deshnok Karni Mata Temple","Jain Temple Bhandasar","Kodamdesar Temple","Shri Laxminath Temple","Shiv Bari Temple","Gajner Palace and Lake","Gajner Wildlife Sanctuary","Devi Kund","Rajasthan State Archives","Kolayat","Katariasar Village","Jorbeed","Shopping","Wildlife Safari in Gajner Sanctuary","Adventuresthan","Anand Sagar Lake","Abdulla Pir","Andeshwar Parshwanathji","Ram Kund","Vithala Deo Temple","Diablab Lake","Kagadi Pikup weir","Mahi Dam","Paraheda","Raj Mandir","Talwara Temple","Tripura Sundari","Madareshwar Temple","Kalpa Vriksha","Samai Mata Bhandariya","Mangarh Dham","Cheech","Visit all twelve and a half Swayambhoo Shivalingas","Visit Water falls","Matsya Festival","Bala Qila","Alwar City Palace","The Palace Museum","Moosi Maharani Chhatri","Fateh Jung Gumbad","Purjan Vihar","Bhangarh","Garbhaji Water Falls","Hill Fort Kesroli","Pandu Pol","Neemrana Fort","Silliserh Lake","Sariska Tiger Reserve","Tijara Jain Temple","Moti Doongri","Talvrakash","Bhartrihari Temple","Naraini Mata","Neelkanth","Naldeshwar Shrine","Neemrana Baori","Shopping at Alwar","Sariska Wildlife Safari","Boating on Sillserh Lake","Traverse through the green side of Rajasthan","The Ajmer Sharif Dargah","Adhai Din Ka Jhonpda","Mayo College","Anasagar Lake","Soniji Ki Nasiyan","Lake Foy Sagar","Nareli Jain Temple","Sai Baba Temple","Ajmer Government Museum"];


function initMap() {
	var pyrmont = {lat: 24.5854, lng: 73.7125};


	map = new google.maps.Map(document.getElementById('map'), {
		center: pyrmont,
		zoom: 15
	});

	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);

  	a = setInterval(function() {
  		q = locations[i] + ', Rajasthan'
  		//console.log(q);
  		var request = {
    		location: map.getCenter(),
    		radius: '500',
    		query: q
  		};
  		service.textSearch(request, callback);
		i++;
		/*console.log(i);*/
		if (i >= locations.length)
			clearInterval(a);
  	}, 500);
  	
/*
  	var request1 = {
    	location: map.getCenter(),
    	radius: '500',
    	query: 'Ambrai Ghat, Rajasthan'
  	};

	service.textSearch(request, callback);
	service.textSearch(request1, callback)*/;
}

function callit() {
	
}

function callback(results, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) {
		//for (var i = 0; i < results.length; i++) {
			console.log(results[0]);
			document.getElementById('data').innerHTML += (results[0].place_id + ', ');
			//createMarker(results[i]);
		}
	else {
		document.getElementById('data').innerHTML += 'NA, ';
	}



	/*var marker = new google.maps.Marker({
      	map: map,
      	place: {
        	placeId: results[0].place_id,
        	location: results[0].geometry.location
      	}
    });*/
	
}

function createMarker(place) {
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(place.name);
		infowindow.open(map, this);
	});
}