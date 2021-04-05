
const data = {
		"competitions": [
			{"id":1,"name":"Division A","link":"Div-A","compType":1},
			{"id":2,"name":"Division B","link":"Div-B","compType":1},
			{"id":3,"name":"Division A Cup","link":"DivA-Cup","compType":2},
			{"id":4,"name":"Division B Cup","link":"DivB-Cup","compType":2},
			{"id":5,"name":"Handicap Cup","link":"HCup","compType":3},
			{"id":6,"name":"Graham Lomas Cup","link":"GLCup","compType":4,"message":"To be played over one frame","perFrame":true},
			{"id":7,"name":"Singles Cup","link":"Singles","compType":4,"message":"To be played over two frames, aggregate score.\nHandicaps are per frame.","playAsOne":true,"perFrame":true},
			{"id":8,"name":"Doubles Cup","link":"Doubles","compType":4,"message":"To be played over two frames, aggregate score.\nHandicaps are per frame.","playAsOne":true,"perFrame":true},
			{"id":9,"name":"Triples Cup","link":"Triples","compType":4,"message":"To be played over three frames, aggregate score.\nHandicaps are total."}
		],
		"clubs": [
			{"id":0,"name":"","nickname":"","link":"","website":"","mapLink":""},
			{"id":1,"name":"Alvechurch","nickname":"Alvechurch","link":"Alvechurch","website":"https://www.alvechurchsocial.co.uk/","mapLink":"https://goo.gl/maps/zVgQN"},
			{"id":2,"name":"Astwood Bank","nickname":"Astwood Bank","link":"AstwoodBank","website":"https://www.facebook.com/astwoodbankclub","mapLink":"https://goo.gl/maps/fn13L"},
			{"id":3,"name":"Barnt Green","nickname":"Barnt Green","link":"BarntGreen","website":"http://barntgreensocialclub.co.uk/","mapLink":"https://goo.gl/maps/qmLeX"},
			{"id":4,"name":"Blackwell","nickname":"Blackwell","link":"Blackwell","website":"https://www.blackwellclub.co.uk/","mapLink":"https://goo.gl/maps/z4Oyj"},
			{"id":5,"name":"Bromsgrove Unionist","nickname":"Bromsgrove","link":"Bromsgrove","website":"https://www.facebook.com/Bromsgrove-Unionist-Club-228986563802751/","mapLink":"https://goo.gl/maps/gWfSE","message":"Home games to be played at Lickey End"},
			{"id":6,"name":"Greenlands","nickname":"Greenlands","link":"Greenlands","website":"https://www.facebook.com/pages/Greenlands-Social-Club/160475987298918","mapLink":"https://goo.gl/maps/QsNFX"},
			{"id":7,"name":"Hawthorns","nickname":"Hawthorns","link":"Hawthorns","website":"https://www.facebook.com/hawthornssocial/","mapLink":"https://goo.gl/maps/oBdY8"},
			{"id":8,"name":"Lickey End","nickname":"Lickey End","link":"LickeyEnd","website":"http://www.lickeyendsocialclub.co.uk/","mapLink":"https://goo.gl/maps/PfcKb"},
			{"id":9,"name":"Northfield & District","nickname":"Northfield & Dist.","link":"NorthfieldDist","website":"https://www.yell.com/biz/northfield-and-district-social-club-birmingham-9549192/","mapLink":"https://goo.gl/maps/o77nm75ZxpP2"},
			{"id":10,"name":"Rednal","nickname":"Rednal","link":"Rednal","website":"https://www.facebook.com/rednalsocialbarntgreenroad/","mapLink":"https://goo.gl/maps/qFR2K"},
			{"id":11,"name":"Rubery Memorial","nickname":"Rubery","link":"Rubery","website":"https://www.facebook.com/Rubery-Rednal-Royal-British-Legion-161485297217186/","mapLink":"https://goo.gl/maps/NAuer"}
		],
		"teams": [
			{"id":0,"clubId":0,"suffix":"TBC","link":"","handicap":0},
			{"id":1,"clubId":1,"suffix":"","link":"Alvechurch","handicap":80},
			{"id":2,"clubId":2,"suffix":"","link":"AstwoodBank","handicap":10},
			{"id":3,"clubId":3,"suffix":"A","link":"BarntGreen-A","handicap":0},
			{"id":4,"clubId":3,"suffix":"B","link":"BarntGreen-B","handicap":150},
			{"id":5,"clubId":3,"suffix":"C","link":"BarntGreen-C","handicap":20},
			{"id":6,"clubId":4,"suffix":"A","link":"Blackwell-A","handicap":30},
			{"id":7,"clubId":4,"suffix":"B","link":"Blackwell-B","handicap":220},
			{"id":8,"clubId":5,"suffix":"","link":"Bromsgrove","handicap":110},
			{"id":9,"clubId":6,"suffix":"A","link":"Greenlands-A","handicap":120},
			{"id":10,"clubId":6,"suffix":"B","link":"Greenlands-B","handicap":190},
			{"id":11,"clubId":7,"suffix":"A","link":"Hawthorns-A","handicap":90},
			{"id":12,"clubId":7,"suffix":"B","link":"Hawthorns-B","handicap":160},
			{"id":13,"clubId":7,"suffix":"C","link":"Hawthorns-C","handicap":170},
			{"id":14,"clubId":8,"suffix":"","link":"LickeyEnd","handicap":90},
			{"id":15,"clubId":9,"suffix":"A","link":"NorthfieldDist-A","handicap":200},
			{"id":16,"clubId":9,"suffix":"B","link":"NorthfieldDist-B","handicap":210},
			{"id":17,"clubId":10,"suffix":"A","link":"Rednal-A","handicap":170},
			{"id":18,"clubId":10,"suffix":"B","link":"Rednal-B","handicap":130},
			{"id":19,"clubId":11,"suffix":"","link":"Rubery","handicap":140},
			{"id":20,"clubId":0,"suffix":"Bye","link":"","handicap":0}
		]
	};

export default data;
