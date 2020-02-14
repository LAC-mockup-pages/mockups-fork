// Actions and logic

const personnelData = [
  {
    id: 1,
    FirstName: "Wenonah",
    LastName: "Brummitt",
    DateStarted: "01/10/2014",
    Position: 4,
    Subject: "BN",
    PaidVolunteer: "P",
    TimeStatus: "P",
    ExperienceYears: 3,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "E1",
      BirthDate: "01/04/1976",
      Education: "G",
      EmploymentStatus: "A",
      Occupation: 6,
      Referral: "K"
    },
    HomeAdrs: {
      StrAdrs: "7704 Eliot Terrace",
      City: "Mesquite",
      State: "TX",
      Zip: "75185",
      HomePhone: "972-196-2004",
      MobilePhone: "909-882-9234",
      Email: "wbrummitt0@foxnews.com",
      AltEmail: "wbrummitt0@dot.gov"
    },
    WorkAdrs: {
      StrAdrs: "701 New Castle Trail",
      City: "Pomona",
      State: "CA",
      Zip: "91797",
      Phone: "910-807-7903",
      PhoneExt: 433,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 2,
    FirstName: "Merrill",
    LastName: "Marcum",
    DateStarted: "04/05/2018",
    Position: 6,
    Subject: "OS",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 7,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "C1",
      BirthDate: "05/15/1986",
      Education: "B",
      EmploymentStatus: "C",
      Occupation: 5,
      Referral: "S"
    },
    HomeAdrs: {
      StrAdrs: "59166 Schiller Road",
      City: "Dallas",
      State: "TX",
      Zip: "75265",
      HomePhone: "214-736-5291",
      MobilePhone: "770-919-0236",
      Email: "mmarcum1@studiopress.com",
      AltEmail: "mmarcum1@multiply.com"
    },
    WorkAdrs: {
      StrAdrs: "8 Memorial Way",
      City: "Marietta",
      State: "GA",
      Zip: "30066",
      Phone: "202-257-1744",
      PhoneExt: 599,
      CanMail: false,
      CanCall: false
    }
  },
  {
    id: 3,
    FirstName: "Pamela",
    LastName: "Falks",
    DateStarted: "04/27/2014",
    Position: 9,
    Subject: "NI",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 7,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "E1",
      BirthDate: "05/12/1994",
      Education: "B",
      EmploymentStatus: "C",
      Occupation: 6,
      Referral: "M"
    },
    HomeAdrs: {
      StrAdrs: "51310 Golden Leaf Pass",
      City: "Chicago",
      State: "IL",
      Zip: "60609",
      HomePhone: "773-279-1397",
      MobilePhone: "251-605-4567",
      Email: "pfalks2@mail.ru",
      AltEmail: "pfalks2@salon.com"
    },
    WorkAdrs: {
      StrAdrs: "901 Green Ridge Street",
      City: "Mobile",
      State: "AL",
      Zip: "36641",
      Phone: "773-252-6721",
      PhoneExt: 532,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 4,
    FirstName: "Giffy",
    LastName: "Giacopini",
    DateStarted: "08/25/2018",
    Position: 4,
    Subject: "GE",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 2,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "C1",
      BirthDate: "09/24/1996",
      Education: "B",
      EmploymentStatus: "A",
      Occupation: 6,
      Referral: "R"
    },
    HomeAdrs: {
      StrAdrs: "06 Sage Way",
      City: "South Bend",
      State: "IN",
      Zip: "46614",
      HomePhone: "574-450-4417",
      MobilePhone: "913-661-6916",
      Email: "ggiacopini3@go.com",
      AltEmail: "ggiacopini3@upenn.edu"
    },
    WorkAdrs: {
      StrAdrs: "3635 Hooker Court",
      City: "Kansas City",
      State: "KS",
      Zip: "66160",
      Phone: "907-362-3095",
      PhoneExt: 90,
      CanMail: false,
      CanCall: false
    }
  },
  {
    id: 5,
    FirstName: "Curt",
    LastName: "Halloway",
    DateStarted: "05/21/2012",
    Position: 18,
    Subject: "BEES",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 15,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "A2",
      BirthDate: "02/26/1988",
      Education: "G",
      EmploymentStatus: "U",
      Occupation: 4,
      Referral: "I"
    },
    HomeAdrs: {
      StrAdrs: "25356 Monterey Junction",
      City: "Baltimore",
      State: "MD",
      Zip: "21239",
      HomePhone: "410-883-0232",
      MobilePhone: "515-815-0176",
      Email: "challoway4@apple.com",
      AltEmail: "challoway4@webmd.com"
    },
    WorkAdrs: {
      StrAdrs: "763 Moulton Street",
      City: "Des Moines",
      State: "IA",
      Zip: "50320",
      Phone: "702-854-0702",
      PhoneExt: 412,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 6,
    FirstName: "Karilynn",
    LastName: "Scutter",
    DateStarted: "11/25/2012",
    Position: 7,
    Subject: "ES",
    PaidVolunteer: "P",
    TimeStatus: "F",
    ExperienceYears: 11,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "C3",
      BirthDate: "02/23/1992",
      Education: "A",
      EmploymentStatus: "U",
      Occupation: 3,
      Referral: "Z"
    },
    HomeAdrs: {
      StrAdrs: "9 Summit Junction",
      City: "Naples",
      State: "FL",
      Zip: "33961",
      HomePhone: "305-920-8176",
      MobilePhone: "863-423-7227",
      Email: "kscutter5@merriam-webster.com",
      AltEmail: "kscutter5@acquirethisname.com"
    },
    WorkAdrs: {
      StrAdrs: "17218 Gateway Trail",
      City: "Winter Haven",
      State: "FL",
      Zip: "33884",
      Phone: "614-630-8955",
      PhoneExt: 105,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 7,
    FirstName: "Harmony",
    LastName: "Roberti",
    DateStarted: "11/26/2005",
    Position: 6,
    Subject: "CLS",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 2,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "E1",
      BirthDate: "02/06/1987",
      Education: "C",
      EmploymentStatus: "G",
      Occupation: 5,
      Referral: "M"
    },
    HomeAdrs: {
      StrAdrs: "803 Meadow Ridge Crossing",
      City: "Saint Petersburg",
      State: "FL",
      Zip: "33710",
      HomePhone: "727-645-2895",
      MobilePhone: "330-678-7527",
      Email: "hroberti6@opera.com",
      AltEmail: "hroberti6@behance.net"
    },
    WorkAdrs: {
      StrAdrs: "606 Becker Lane",
      City: "Akron",
      State: "OH",
      Zip: "44329",
      Phone: "915-547-4159",
      PhoneExt: 407,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 8,
    FirstName: "Eloise",
    LastName: "Shackell",
    DateStarted: "12/22/2013",
    Position: 11,
    Subject: "J",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 6,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "C3",
      BirthDate: null,
      Education: "B",
      EmploymentStatus: "B",
      Occupation: 5,
      Referral: "R"
    },
    HomeAdrs: {
      StrAdrs: "5 2nd Trail",
      City: "Cedar Rapids",
      State: "IA",
      Zip: "52405",
      HomePhone: "319-949-0495",
      MobilePhone: "916-668-5880",
      Email: "eshackell7@theglobeandmail.com",
      AltEmail: "eshackell7@businesswire.com"
    },
    WorkAdrs: {
      StrAdrs: "49305 Hoepker Avenue",
      City: "Sacramento",
      State: "CA",
      Zip: "95865",
      Phone: "941-202-2298",
      PhoneExt: 554,
      CanMail: true,
      CanCall: true
    }
  },
  {
    id: 9,
    FirstName: "Hillyer",
    LastName: "Tully",
    DateStarted: "10/20/2005",
    Position: 8,
    Subject: "B",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 3,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "A2",
      BirthDate: "01/13/1977",
      Education: "H",
      EmploymentStatus: "I",
      Occupation: 7,
      Referral: "G B"
    },
    HomeAdrs: {
      StrAdrs: "72 Valley Edge Junction",
      City: "New York City",
      State: "NY",
      Zip: "10045",
      HomePhone: "347-611-7640",
      MobilePhone: "626-396-2421",
      Email: "htully8@hp.com",
      AltEmail: "htully8@bandcamp.com"
    },
    WorkAdrs: {
      StrAdrs: "81 Steensland Plaza",
      City: "Alhambra",
      State: "CA",
      Zip: "91841",
      Phone: "419-562-6307",
      PhoneExt: 530,
      CanMail: true,
      CanCall: true
    }
  },
  {
    id: 10,
    FirstName: "Doria",
    LastName: "Aggett",
    DateStarted: "10/25/2013",
    Position: 15,
    Subject: "BEES",
    PaidVolunteer: "P",
    TimeStatus: "F",
    ExperienceYears: 4,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "C3",
      BirthDate: "07/18/1995",
      Education: "A",
      EmploymentStatus: "C",
      Occupation: 8,
      Referral: "W"
    },
    HomeAdrs: {
      StrAdrs: "2906 Commercial Parkway",
      City: "Concord",
      State: "CA",
      Zip: "94522",
      HomePhone: "925-825-5688",
      MobilePhone: "786-165-8618",
      Email: "daggett9@uol.com.br",
      AltEmail: "daggett9@wix.com"
    },
    WorkAdrs: {
      StrAdrs: "5 Pawling Terrace",
      City: "Miami",
      State: "FL",
      Zip: "33190",
      Phone: "212-109-8022",
      PhoneExt: 536,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 11,
    FirstName: "Sherm",
    LastName: "Demeza",
    DateStarted: "07/01/2005",
    Position: 19,
    Subject: "MA",
    PaidVolunteer: "P",
    TimeStatus: "F",
    ExperienceYears: 4,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "C1",
      BirthDate: "05/21/1983",
      Education: "D",
      EmploymentStatus: "C",
      Occupation: 8,
      Referral: "L"
    },
    HomeAdrs: {
      StrAdrs: "279 Corry Crossing",
      City: "Memphis",
      State: "TN",
      Zip: "38136",
      HomePhone: "901-524-2695",
      MobilePhone: "202-181-5174",
      Email: "sdemezaa@nature.com",
      AltEmail: "sdemezaa@ehow.com"
    },
    WorkAdrs: {
      StrAdrs: "85228 Ryan Parkway",
      City: "Washington",
      State: "DC",
      Zip: "20073",
      Phone: "574-767-0709",
      PhoneExt: 538,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 12,
    FirstName: "Holly",
    LastName: "Stonary",
    DateStarted: "04/05/2015",
    Position: 7,
    Subject: "BE",
    PaidVolunteer: "P",
    TimeStatus: "F",
    ExperienceYears: 8,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "A1",
      BirthDate: null,
      Education: "C",
      EmploymentStatus: "E",
      Occupation: 4,
      Referral: "Y"
    },
    HomeAdrs: {
      StrAdrs: "2028 Magdeline Crossing",
      City: "Waterbury",
      State: "CT",
      Zip: "06726",
      HomePhone: "203-939-9528",
      MobilePhone: "212-522-2474",
      Email: "hstonaryb@cocolog-nifty.com",
      AltEmail: "hstonaryb@jigsy.com"
    },
    WorkAdrs: {
      StrAdrs: "5525 Tomscot Park",
      City: "Jamaica",
      State: "NY",
      Zip: "11431",
      Phone: "562-327-7552",
      PhoneExt: 196,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 13,
    FirstName: "Jody",
    LastName: "Wardell",
    DateStarted: "04/26/2011",
    Position: 14,
    Subject: "X",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 5,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "C2",
      BirthDate: "01/24/1972",
      Education: "F",
      EmploymentStatus: "D",
      Occupation: 3,
      Referral: "T"
    },
    HomeAdrs: {
      StrAdrs: "72276 Kim Alley",
      City: "Bloomington",
      State: "IN",
      Zip: "47405",
      HomePhone: "812-680-1859",
      MobilePhone: "412-537-1948",
      Email: "jwardellc@house.gov",
      AltEmail: "jwardellc@hibu.com"
    },
    WorkAdrs: {
      StrAdrs: "8911 Harbort Center",
      City: "Pittsburgh",
      State: "PA",
      Zip: "15205",
      Phone: "520-811-9778",
      PhoneExt: 527,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 14,
    FirstName: "Gypsy",
    LastName: "Mudd",
    DateStarted: "02/12/2012",
    Position: 11,
    Subject: "BE",
    PaidVolunteer: "P",
    TimeStatus: "F",
    ExperienceYears: 1,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "A1",
      BirthDate: "01/02/1986",
      Education: "B",
      EmploymentStatus: "I",
      Occupation: 6,
      Referral: "E"
    },
    HomeAdrs: {
      StrAdrs: "1 Sheridan Street",
      City: "Houston",
      State: "TX",
      Zip: "77293",
      HomePhone: "281-220-9778",
      MobilePhone: "213-285-5481",
      Email: "gmuddd@surveymonkey.com",
      AltEmail: "gmuddd@ed.gov"
    },
    WorkAdrs: {
      StrAdrs: "6 Morrow Street",
      City: "Los Angeles",
      State: "CA",
      Zip: "90010",
      Phone: "281-643-5822",
      PhoneExt: 83,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 15,
    FirstName: "Kori",
    LastName: "Gini",
    DateStarted: "06/17/2008",
    Position: 14,
    Subject: "E",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 6,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "A1",
      BirthDate: "12/12/1992",
      Education: "B",
      EmploymentStatus: "F",
      Occupation: 7,
      Referral: "AB"
    },
    HomeAdrs: {
      StrAdrs: "14 Huxley Avenue",
      City: "Sterling",
      State: "VA",
      Zip: "20167",
      HomePhone: "571-172-5777",
      MobilePhone: "215-952-4920",
      Email: "kginie@dropbox.com",
      AltEmail: "kginie@gravatar.com"
    },
    WorkAdrs: {
      StrAdrs: "8 Glendale Plaza",
      City: "Philadelphia",
      State: "PA",
      Zip: "19191",
      Phone: "734-632-2685",
      PhoneExt: 82,
      CanMail: false,
      CanCall: false
    }
  },
  {
    id: 16,
    FirstName: "Jamil",
    LastName: "Ranahan",
    DateStarted: "01/21/2011",
    Position: 17,
    Subject: "X",
    PaidVolunteer: "P",
    TimeStatus: "P",
    ExperienceYears: 5,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "E1",
      BirthDate: "10/23/1993",
      Education: "F",
      EmploymentStatus: "F",
      Occupation: 1,
      Referral: "K"
    },
    HomeAdrs: {
      StrAdrs: "11361 Southridge Street",
      City: "El Paso",
      State: "TX",
      Zip: "88574",
      HomePhone: "915-240-9799",
      MobilePhone: "518-412-4147",
      Email: "jranahanf@amazon.com",
      AltEmail: "jranahanf@jigsy.com"
    },
    WorkAdrs: {
      StrAdrs: "95589 Fallview Point",
      City: "Albany",
      State: "NY",
      Zip: "12255",
      Phone: "213-324-6243",
      PhoneExt: 426,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 17,
    FirstName: "Celisse",
    LastName: "Carah",
    DateStarted: "07/02/2009",
    Position: 10,
    Subject: "MA",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 10,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "A1",
      BirthDate: "09/27/1993",
      Education: "D",
      EmploymentStatus: "I",
      Occupation: 7,
      Referral: "R"
    },
    HomeAdrs: {
      StrAdrs: "2964 Packers Point",
      City: "Boca Raton",
      State: "FL",
      Zip: "33487",
      HomePhone: "305-471-7143",
      MobilePhone: "360-195-7195",
      Email: "ccarahg@printfriendly.com",
      AltEmail: "ccarahg@sakura.ne.jp"
    },
    WorkAdrs: {
      StrAdrs: "8403 Shasta Plaza",
      City: "Olympia",
      State: "WA",
      Zip: "98516",
      Phone: "615-743-6717",
      PhoneExt: 498,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 18,
    FirstName: "Cyrillus",
    LastName: "Eddoes",
    DateStarted: "11/17/2019",
    Position: 12,
    Subject: "BN",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 7,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "A2",
      BirthDate: "09/24/1997",
      Education: "D",
      EmploymentStatus: "E",
      Occupation: 6,
      Referral: "X"
    },
    HomeAdrs: {
      StrAdrs: "6 Moose Parkway",
      City: "Atlanta",
      State: "GA",
      Zip: "31190",
      HomePhone: "404-526-1983",
      MobilePhone: "916-861-8384",
      Email: "ceddoesh@opensource.org",
      AltEmail: "ceddoesh@ebay.com"
    },
    WorkAdrs: {
      StrAdrs: "48515 Bowman Terrace",
      City: "Sacramento",
      State: "CA",
      Zip: "95818",
      Phone: "843-634-2779",
      PhoneExt: 226,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 19,
    FirstName: "Linzy",
    LastName: "Russell",
    DateStarted: "03/14/2015",
    Position: 1,
    Subject: "Y",
    PaidVolunteer: "P",
    TimeStatus: "F",
    ExperienceYears: 10,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "A1",
      BirthDate: null,
      Education: "A",
      EmploymentStatus: "F",
      Occupation: 4,
      Referral: "Q"
    },
    HomeAdrs: {
      StrAdrs: "38 Duke Circle",
      City: "Memphis",
      State: "TN",
      Zip: "38181",
      HomePhone: "901-986-6259",
      MobilePhone: "706-550-4895",
      Email: "lrusselli@smh.com.au",
      AltEmail: "lrusselli@nifty.com"
    },
    WorkAdrs: {
      StrAdrs: "4 Straubel Pass",
      City: "Athens",
      State: "GA",
      Zip: "30610",
      Phone: "682-694-0347",
      PhoneExt: 265,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 20,
    FirstName: "Sukey",
    LastName: "Middleton",
    DateStarted: "04/14/2011",
    Position: 13,
    Subject: "J",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 5,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "B2",
      BirthDate: "06/18/1980",
      Education: "F",
      EmploymentStatus: "D",
      Occupation: 2,
      Referral: "N"
    },
    HomeAdrs: {
      StrAdrs: "7 Mosinee Terrace",
      City: "Pasadena",
      State: "CA",
      Zip: "91199",
      HomePhone: "626-944-7299",
      MobilePhone: "989-634-9074",
      Email: "smiddletonj@skype.com",
      AltEmail: "smiddletonj@ed.gov"
    },
    WorkAdrs: {
      StrAdrs: "0071 Chinook Hill",
      City: "Saginaw",
      State: "MI",
      Zip: "48604",
      Phone: "317-210-2533",
      PhoneExt: 468,
      CanMail: false,
      CanCall: false
    }
  },
  {
    id: 21,
    FirstName: "Anastassia",
    LastName: "Cars",
    DateStarted: "05/02/2007",
    Position: 13,
    Subject: "Y",
    PaidVolunteer: "P",
    TimeStatus: "F",
    ExperienceYears: 3,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "C1",
      BirthDate: null,
      Education: "G",
      EmploymentStatus: "C",
      Occupation: 7,
      Referral: "F"
    },
    HomeAdrs: {
      StrAdrs: "12 Bartillon Circle",
      City: "Marietta",
      State: "GA",
      Zip: "30066",
      HomePhone: "770-122-6816",
      MobilePhone: "203-679-2624",
      Email: "acarsk@cam.ac.uk",
      AltEmail: "acarsk@sciencedaily.com"
    },
    WorkAdrs: {
      StrAdrs: "37598 International Center",
      City: "Fairfield",
      State: "CT",
      Zip: "06825",
      Phone: "212-111-4405",
      PhoneExt: 200,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 22,
    FirstName: "Knox",
    LastName: "Rewcastle",
    DateStarted: "11/04/2011",
    Position: 3,
    Subject: "ES",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 15,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "B2",
      BirthDate: "02/25/1997",
      Education: "B",
      EmploymentStatus: "I",
      Occupation: 3,
      Referral: "J"
    },
    HomeAdrs: {
      StrAdrs: "725 Onsgard Court",
      City: "Pensacola",
      State: "FL",
      Zip: "32505",
      HomePhone: "850-159-3745",
      MobilePhone: "786-303-3131",
      Email: "krewcastlel@gizmodo.com",
      AltEmail: "krewcastlel@thetimes.co.uk"
    },
    WorkAdrs: {
      StrAdrs: "2 Elmside Circle",
      City: "Miami",
      State: "FL",
      Zip: "33134",
      Phone: "601-839-8258",
      PhoneExt: 477,
      CanMail: true,
      CanCall: true
    }
  },
  {
    id: 23,
    FirstName: "Tammy",
    LastName: "Whitwood",
    DateStarted: "09/04/2015",
    Position: 11,
    Subject: "EB",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 6,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "A2",
      BirthDate: "10/04/1971",
      Education: "D",
      EmploymentStatus: "J",
      Occupation: 6,
      Referral: "AA"
    },
    HomeAdrs: {
      StrAdrs: "6536 Melvin Place",
      City: "Jacksonville",
      State: "FL",
      Zip: "32259",
      HomePhone: "904-867-0034",
      MobilePhone: "913-811-2362",
      Email: "twhitwoodm@umn.edu",
      AltEmail: "twhitwoodm@hao123.com"
    },
    WorkAdrs: {
      StrAdrs: "0 Blaine Point",
      City: "Kansas City",
      State: "KS",
      Zip: "66160",
      Phone: "559-461-3366",
      PhoneExt: 497,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 24,
    FirstName: "Sully",
    LastName: "Buttwell",
    DateStarted: "05/25/2007",
    Position: 17,
    Subject: "OS",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 2,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "B2",
      BirthDate: null,
      Education: "E",
      EmploymentStatus: "F",
      Occupation: 6,
      Referral: "A"
    },
    HomeAdrs: {
      StrAdrs: "423 Pennsylvania Place",
      City: "Lexington",
      State: "KY",
      Zip: "40591",
      HomePhone: "859-857-1397",
      MobilePhone: "423-956-1750",
      Email: "sbuttwelln@shop-pro.jp",
      AltEmail: "sbuttwelln@ycombinator.com"
    },
    WorkAdrs: {
      StrAdrs: "6 American Ash Court",
      City: "Chattanooga",
      State: "TN",
      Zip: "37450",
      Phone: "513-410-1468",
      PhoneExt: 315,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 25,
    FirstName: "Rodolph",
    LastName: "Ferenczy",
    DateStarted: "06/01/2013",
    Position: 13,
    Subject: "MA",
    PaidVolunteer: "P",
    TimeStatus: "P",
    ExperienceYears: 13,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "A2",
      BirthDate: "06/05/1983",
      Education: "F",
      EmploymentStatus: "J",
      Occupation: 5,
      Referral: "D"
    },
    HomeAdrs: {
      StrAdrs: "7692 Drewry Drive",
      City: "Carol Stream",
      State: "IL",
      Zip: "60351",
      HomePhone: "309-559-8291",
      MobilePhone: "951-567-9920",
      Email: "rferenczyo@4shared.com",
      AltEmail: "rferenczyo@pinterest.com"
    },
    WorkAdrs: {
      StrAdrs: "7 Kenwood Parkway",
      City: "Riverside",
      State: "CA",
      Zip: "92513",
      Phone: "215-748-6575",
      PhoneExt: 45,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 26,
    FirstName: "Flinn",
    LastName: "Taylorson",
    DateStarted: "12/02/2018",
    Position: 7,
    Subject: "CLS",
    PaidVolunteer: "P",
    TimeStatus: "F",
    ExperienceYears: 12,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "B1",
      BirthDate: "02/28/1985",
      Education: "E",
      EmploymentStatus: "D",
      Occupation: 3,
      Referral: "E"
    },
    HomeAdrs: {
      StrAdrs: "323 Buhler Center",
      City: "Lubbock",
      State: "TX",
      Zip: "79491",
      HomePhone: "806-434-7430",
      MobilePhone: "678-253-7812",
      Email: "ftaylorsonp@microsoft.com",
      AltEmail: "ftaylorsonp@last.fm"
    },
    WorkAdrs: {
      StrAdrs: "9 Basil Circle",
      City: "Decatur",
      State: "GA",
      Zip: "30089",
      Phone: "602-877-7292",
      PhoneExt: 334,
      CanMail: false,
      CanCall: false
    }
  },
  {
    id: 27,
    FirstName: "Janene",
    LastName: "Habercham",
    DateStarted: "01/15/2019",
    Position: 3,
    Subject: "OS",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 10,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "A1",
      BirthDate: "02/12/1971",
      Education: "E",
      EmploymentStatus: "A",
      Occupation: 2,
      Referral: "F"
    },
    HomeAdrs: {
      StrAdrs: "96673 Carpenter Circle",
      City: "Charleston",
      State: "WV",
      Zip: "25356",
      HomePhone: "304-239-0733",
      MobilePhone: "317-366-5690",
      Email: "jhaberchamq@so-net.ne.jp",
      AltEmail: "jhaberchamq@wunderground.com"
    },
    WorkAdrs: {
      StrAdrs: "7472 Magdeline Alley",
      City: "Indianapolis",
      State: "IN",
      Zip: "46278",
      Phone: "253-248-0076",
      PhoneExt: 104,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 28,
    FirstName: "Gustavus",
    LastName: "Pakes",
    DateStarted: "06/17/2007",
    Position: 18,
    Subject: "NI",
    PaidVolunteer: "P",
    TimeStatus: "P",
    ExperienceYears: 13,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "C2",
      BirthDate: "07/11/1995",
      Education: "H",
      EmploymentStatus: "H",
      Occupation: 7,
      Referral: "C"
    },
    HomeAdrs: {
      StrAdrs: "393 Thackeray Court",
      City: "Dallas",
      State: "TX",
      Zip: "75397",
      HomePhone: "214-133-5578",
      MobilePhone: "864-426-5402",
      Email: "gpakesr@newyorker.com",
      AltEmail: "gpakesr@mashable.com"
    },
    WorkAdrs: {
      StrAdrs: "6387 Express Crossing",
      City: "Greenville",
      State: "SC",
      Zip: "29610",
      Phone: "404-221-4111",
      PhoneExt: 502,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 29,
    FirstName: "Roderic",
    LastName: "Snalham",
    DateStarted: "05/17/2018",
    Position: 3,
    Subject: "EB",
    PaidVolunteer: "P",
    TimeStatus: "P",
    ExperienceYears: 8,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "A2",
      BirthDate: null,
      Education: "B",
      EmploymentStatus: "E",
      Occupation: 5,
      Referral: "K"
    },
    HomeAdrs: {
      StrAdrs: "90 Barnett Circle",
      City: "Norfolk",
      State: "VA",
      Zip: "23551",
      HomePhone: "757-668-4352",
      MobilePhone: "423-666-4761",
      Email: "rsnalhams@hud.gov",
      AltEmail: "rsnalhams@salon.com"
    },
    WorkAdrs: {
      StrAdrs: "95 Forest Way",
      City: "Kingsport",
      State: "TN",
      Zip: "37665",
      Phone: "240-787-8281",
      PhoneExt: 287,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 30,
    FirstName: "Amandi",
    LastName: "Kondratovich",
    DateStarted: "09/04/2015",
    Position: 5,
    Subject: "OS",
    PaidVolunteer: "P",
    TimeStatus: "F",
    ExperienceYears: 3,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "B2",
      BirthDate: "03/26/1998",
      Education: "B",
      EmploymentStatus: "B",
      Occupation: 7,
      Referral: "Z"
    },
    HomeAdrs: {
      StrAdrs: "3312 Merrick Center",
      City: "Pittsburgh",
      State: "PA",
      Zip: "15261",
      HomePhone: "412-888-0130",
      MobilePhone: "813-218-1972",
      Email: "akondratovicht@google.pl",
      AltEmail: "akondratovicht@sakura.ne.jp"
    },
    WorkAdrs: {
      StrAdrs: "37733 Arkansas Avenue",
      City: "Tampa",
      State: "FL",
      Zip: "33625",
      Phone: "585-199-1376",
      PhoneExt: 223,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 31,
    FirstName: "Gearalt",
    LastName: "Gateman",
    DateStarted: "06/23/2009",
    Position: 7,
    Subject: "H",
    PaidVolunteer: "P",
    TimeStatus: "P",
    ExperienceYears: 10,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "C1",
      BirthDate: "01/05/1977",
      Education: "H",
      EmploymentStatus: "H",
      Occupation: 3,
      Referral: "AE"
    },
    HomeAdrs: {
      StrAdrs: "3 Thompson Terrace",
      City: "Norfolk",
      State: "VA",
      Zip: "23520",
      HomePhone: "757-505-2023",
      MobilePhone: "504-378-2619",
      Email: "ggatemanu@yandex.ru",
      AltEmail: "ggatemanu@dyndns.org"
    },
    WorkAdrs: {
      StrAdrs: "90959 Eagle Crest Trail",
      City: "Metairie",
      State: "LA",
      Zip: "70005",
      Phone: "606-898-4454",
      PhoneExt: 197,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 32,
    FirstName: "Licha",
    LastName: "Scotchmoor",
    DateStarted: "05/09/2017",
    Position: 9,
    Subject: "X",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 8,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "C1",
      BirthDate: "07/16/1973",
      Education: "B",
      EmploymentStatus: "H",
      Occupation: 3,
      Referral: "Q"
    },
    HomeAdrs: {
      StrAdrs: "41 Sutherland Parkway",
      City: "Fort Wayne",
      State: "IN",
      Zip: "46805",
      HomePhone: "260-233-0189",
      MobilePhone: "858-686-4096",
      Email: "lscotchmoorv@multiply.com",
      AltEmail: "lscotchmoorv@unesco.org"
    },
    WorkAdrs: {
      StrAdrs: "3851 Pearson Trail",
      City: "San Diego",
      State: "CA",
      Zip: "92105",
      Phone: "609-619-9924",
      PhoneExt: 41,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 33,
    FirstName: "Ruggiero",
    LastName: "Strotone",
    DateStarted: "12/18/2012",
    Position: 8,
    Subject: "O",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 4,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "A1",
      BirthDate: "07/10/1995",
      Education: "D",
      EmploymentStatus: "D",
      Occupation: 4,
      Referral: "N"
    },
    HomeAdrs: {
      StrAdrs: "43135 Sauthoff Pass",
      City: "San Diego",
      State: "CA",
      Zip: "92160",
      HomePhone: "619-272-6819",
      MobilePhone: "402-963-1909",
      Email: "rstrotonew@scribd.com",
      AltEmail: "rstrotonew@nifty.com"
    },
    WorkAdrs: {
      StrAdrs: "07 Chinook Avenue",
      City: "Lincoln",
      State: "NE",
      Zip: "68510",
      Phone: "402-191-2619",
      PhoneExt: 438,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 34,
    FirstName: "Candis",
    LastName: "Penticoot",
    DateStarted: "12/21/2018",
    Position: 5,
    Subject: "EB",
    PaidVolunteer: "P",
    TimeStatus: "P",
    ExperienceYears: 11,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "B1",
      BirthDate: "07/05/1993",
      Education: "B",
      EmploymentStatus: "F",
      Occupation: 3,
      Referral: "S"
    },
    HomeAdrs: {
      StrAdrs: "6 Welch Place",
      City: "Louisville",
      State: "KY",
      Zip: "40280",
      HomePhone: "502-423-7359",
      MobilePhone: "562-533-5787",
      Email: "cpenticootx@biblegateway.com",
      AltEmail: "cpenticootx@examiner.com"
    },
    WorkAdrs: {
      StrAdrs: "41 Rusk Center",
      City: "Long Beach",
      State: "CA",
      Zip: "90810",
      Phone: "832-105-7982",
      PhoneExt: 222,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 35,
    FirstName: "Dorie",
    LastName: "Atton",
    DateStarted: "12/05/2014",
    Position: 16,
    Subject: "BE",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 9,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "B2",
      BirthDate: "12/22/1980",
      Education: "H",
      EmploymentStatus: "H",
      Occupation: 5,
      Referral: "I"
    },
    HomeAdrs: {
      StrAdrs: "1 Kingsford Park",
      City: "Huntington",
      State: "WV",
      Zip: "25709",
      HomePhone: "304-440-1534",
      MobilePhone: "503-734-4511",
      Email: "dattony@washingtonpost.com",
      AltEmail: "dattony@blogtalkradio.com"
    },
    WorkAdrs: {
      StrAdrs: "01 Stang Park",
      City: "Portland",
      State: "OR",
      Zip: "97296",
      Phone: "702-819-0048",
      PhoneExt: 589,
      CanMail: true,
      CanCall: true
    }
  },
  {
    id: 36,
    FirstName: "Dorine",
    LastName: "Atrill",
    DateStarted: "09/28/2016",
    Position: 16,
    Subject: "W",
    PaidVolunteer: "P",
    TimeStatus: "P",
    ExperienceYears: 11,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "E1",
      BirthDate: null,
      Education: "H",
      EmploymentStatus: "J",
      Occupation: 1,
      Referral: "M"
    },
    HomeAdrs: {
      StrAdrs: "09 Crownhardt Park",
      City: "Atlanta",
      State: "GA",
      Zip: "30392",
      HomePhone: "404-285-0336",
      MobilePhone: "256-159-8491",
      Email: "datrillz@nyu.edu",
      AltEmail: "datrillz@skype.com"
    },
    WorkAdrs: {
      StrAdrs: "43379 Sauthoff Parkway",
      City: "Anniston",
      State: "AL",
      Zip: "36205",
      Phone: "309-130-8295",
      PhoneExt: 242,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 37,
    FirstName: "Darlleen",
    LastName: "Lace",
    DateStarted: "08/17/2017",
    Position: 16,
    Subject: "GE",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 10,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "C1",
      BirthDate: "06/02/1992",
      Education: "C",
      EmploymentStatus: "E",
      Occupation: 4,
      Referral: "R"
    },
    HomeAdrs: {
      StrAdrs: "62 Union Park",
      City: "Largo",
      State: "FL",
      Zip: "33777",
      HomePhone: "727-399-7641",
      MobilePhone: "804-367-1531",
      Email: "dlace10@yellowpages.com",
      AltEmail: "dlace10@buzzfeed.com"
    },
    WorkAdrs: {
      StrAdrs: "02373 Sheridan Avenue",
      City: "Richmond",
      State: "VA",
      Zip: "23242",
      Phone: "415-698-4080",
      PhoneExt: 297,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 38,
    FirstName: "Tedd",
    LastName: "Ca",
    DateStarted: "12/05/2019",
    Position: 1,
    Subject: "E",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 12,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "C1",
      BirthDate: "12/13/1979",
      Education: "H",
      EmploymentStatus: "A",
      Occupation: 7,
      Referral: "D"
    },
    HomeAdrs: {
      StrAdrs: "11895 Jana Terrace",
      City: "Baton Rouge",
      State: "LA",
      Zip: "70820",
      HomePhone: "225-717-4387",
      MobilePhone: "718-712-1091",
      Email: "tca11@list-manage.com",
      AltEmail: "tca11@furl.net"
    },
    WorkAdrs: {
      StrAdrs: "208 Charing Cross Road",
      City: "Bronx",
      State: "NY",
      Zip: "10459",
      Phone: "415-985-3583",
      PhoneExt: 462,
      CanMail: true,
      CanCall: true
    }
  },
  {
    id: 39,
    FirstName: "Damian",
    LastName: "Piatto",
    DateStarted: "08/08/2006",
    Position: 18,
    Subject: "B",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 4,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "E1",
      BirthDate: "01/14/1980",
      Education: "H",
      EmploymentStatus: "I",
      Occupation: 4,
      Referral: "AA"
    },
    HomeAdrs: {
      StrAdrs: "47 Rockefeller Road",
      City: "Santa Fe",
      State: "NM",
      Zip: "87505",
      HomePhone: "505-507-5364",
      MobilePhone: "405-570-6685",
      Email: "dpiatto12@blogtalkradio.com",
      AltEmail: "dpiatto12@123-reg.co.uk"
    },
    WorkAdrs: {
      StrAdrs: "29787 Maywood Alley",
      City: "Oklahoma City",
      State: "OK",
      Zip: "73142",
      Phone: "859-864-6694",
      PhoneExt: 217,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 40,
    FirstName: "Ilise",
    LastName: "Jacobovitch",
    DateStarted: "10/04/2008",
    Position: 20,
    Subject: "BE",
    PaidVolunteer: "P",
    TimeStatus: "P",
    ExperienceYears: 1,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "B1",
      BirthDate: "10/31/1998",
      Education: "G",
      EmploymentStatus: "F",
      Occupation: 8,
      Referral: "Z"
    },
    HomeAdrs: {
      StrAdrs: "508 Northport Lane",
      City: "Chicago",
      State: "IL",
      Zip: "60691",
      HomePhone: "312-317-3587",
      MobilePhone: "940-547-5868",
      Email: "ijacobovitch13@sohu.com",
      AltEmail: "ijacobovitch13@washingtonpost.com"
    },
    WorkAdrs: {
      StrAdrs: "565 Comanche Pass",
      City: "Wichita Falls",
      State: "TX",
      Zip: "76310",
      Phone: "601-723-0167",
      PhoneExt: 273,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 41,
    FirstName: "Haydon",
    LastName: "Bosman",
    DateStarted: "10/31/2011",
    Position: 14,
    Subject: "ES",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 7,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "E1",
      BirthDate: "08/17/1982",
      Education: "G",
      EmploymentStatus: "B",
      Occupation: 3,
      Referral: "X"
    },
    HomeAdrs: {
      StrAdrs: "869 Ludington Alley",
      City: "Marietta",
      State: "GA",
      Zip: "30066",
      HomePhone: "678-535-8244",
      MobilePhone: "469-361-2424",
      Email: "hbosman14@de.vu",
      AltEmail: "hbosman14@4shared.com"
    },
    WorkAdrs: {
      StrAdrs: "19661 Pearson Center",
      City: "Dallas",
      State: "TX",
      Zip: "75236",
      Phone: "304-165-2337",
      PhoneExt: 45,
      CanMail: false,
      CanCall: false
    }
  },
  {
    id: 42,
    FirstName: "Sherm",
    LastName: "Simonaitis",
    DateStarted: "08/09/2009",
    Position: 20,
    Subject: "ES",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 2,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "A1",
      BirthDate: "07/28/1972",
      Education: "A",
      EmploymentStatus: "F",
      Occupation: 6,
      Referral: "X"
    },
    HomeAdrs: {
      StrAdrs: "24945 Lakewood Gardens Court",
      City: "Philadelphia",
      State: "PA",
      Zip: "19191",
      HomePhone: "215-388-9167",
      MobilePhone: "501-187-8022",
      Email: "ssimonaitis15@amazon.co.uk",
      AltEmail: "ssimonaitis15@bloglines.com"
    },
    WorkAdrs: {
      StrAdrs: "63118 Redwing Hill",
      City: "Little Rock",
      State: "AR",
      Zip: "72231",
      Phone: "210-358-4855",
      PhoneExt: 483,
      CanMail: false,
      CanCall: false
    }
  },
  {
    id: 43,
    FirstName: "Tandie",
    LastName: "Ginnally",
    DateStarted: "01/10/2010",
    Position: 16,
    Subject: "MA",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 9,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "B2",
      BirthDate: "02/06/1994",
      Education: "D",
      EmploymentStatus: "H",
      Occupation: 6,
      Referral: "R"
    },
    HomeAdrs: {
      StrAdrs: "94 Westridge Way",
      City: "Odessa",
      State: "TX",
      Zip: "79764",
      HomePhone: "432-447-7595",
      MobilePhone: "626-188-3400",
      Email: "tginnally16@gmpg.org",
      AltEmail: "tginnally16@bbc.co.uk"
    },
    WorkAdrs: {
      StrAdrs: "2016 Forest Dale Park",
      City: "Pasadena",
      State: "CA",
      Zip: "91117",
      Phone: "404-209-1198",
      PhoneExt: 368,
      CanMail: true,
      CanCall: true
    }
  },
  {
    id: 44,
    FirstName: "Guinna",
    LastName: "Vasyukhin",
    DateStarted: "11/08/2011",
    Position: 11,
    Subject: "BN",
    PaidVolunteer: "P",
    TimeStatus: "F",
    ExperienceYears: 6,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "C2",
      BirthDate: "05/10/1993",
      Education: "C",
      EmploymentStatus: "D",
      Occupation: 1,
      Referral: "L"
    },
    HomeAdrs: {
      StrAdrs: "42693 Clarendon Junction",
      City: "Los Angeles",
      State: "CA",
      Zip: "90076",
      HomePhone: "323-260-3907",
      MobilePhone: "260-310-7506",
      Email: "gvasyukhin17@chronoengine.com",
      AltEmail: "gvasyukhin17@psu.edu"
    },
    WorkAdrs: {
      StrAdrs: "3421 Northridge Way",
      City: "Fort Wayne",
      State: "IN",
      Zip: "46825",
      Phone: "210-161-5764",
      PhoneExt: 232,
      CanMail: true,
      CanCall: true
    }
  },
  {
    id: 45,
    FirstName: "Quill",
    LastName: "Teague",
    DateStarted: "11/16/2015",
    Position: 1,
    Subject: "BE",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 14,
    AdditionalInfo: {
      Gender: "M",
      Ethnicity: "A2",
      BirthDate: "10/25/1980",
      Education: "G",
      EmploymentStatus: "C",
      Occupation: 4,
      Referral: "H P"
    },
    HomeAdrs: {
      StrAdrs: "7 Dryden Trail",
      City: "Midland",
      State: "TX",
      Zip: "79710",
      HomePhone: "432-395-3529",
      MobilePhone: "309-154-3248",
      Email: "qteague18@google.de",
      AltEmail: "qteague18@sakura.ne.jp"
    },
    WorkAdrs: {
      StrAdrs: "933 Bashford Avenue",
      City: "Peoria",
      State: "IL",
      Zip: "61629",
      Phone: "717-425-2339",
      PhoneExt: 162,
      CanMail: true,
      CanCall: true
    }
  },
  {
    id: 46,
    FirstName: "Madelon",
    LastName: "Spencock",
    DateStarted: "02/07/2015",
    Position: 8,
    Subject: "CLS",
    PaidVolunteer: "P",
    TimeStatus: "F",
    ExperienceYears: 2,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "D",
      BirthDate: "06/21/1980",
      Education: "C",
      EmploymentStatus: "A",
      Occupation: 2,
      Referral: "I"
    },
    HomeAdrs: {
      StrAdrs: "1 Prairieview Circle",
      City: "Shreveport",
      State: "LA",
      Zip: "71130",
      HomePhone: "318-627-2132",
      MobilePhone: "775-156-8793",
      Email: "mspencock19@gravatar.com",
      AltEmail: "mspencock19@adobe.com"
    },
    WorkAdrs: {
      StrAdrs: "55149 Holy Cross Street",
      City: "Carson City",
      State: "NV",
      Zip: "89706",
      Phone: "786-908-2375",
      PhoneExt: 295,
      CanMail: true,
      CanCall: false
    }
  },
  {
    id: 47,
    FirstName: "Mindy",
    LastName: "Mazzia",
    DateStarted: "05/10/2010",
    Position: 16,
    Subject: "ES",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 13,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "C2",
      BirthDate: "01/06/1991",
      Education: "B",
      EmploymentStatus: "C",
      Occupation: 6,
      Referral: "Z"
    },
    HomeAdrs: {
      StrAdrs: "290 Linden Crossing",
      City: "Fort Smith",
      State: "AR",
      Zip: "72916",
      HomePhone: "479-746-9880",
      MobilePhone: "360-362-7060",
      Email: "mmazzia1a@yandex.ru",
      AltEmail: "mmazzia1a@xing.com"
    },
    WorkAdrs: {
      StrAdrs: "42010 Cascade Drive",
      City: "Olympia",
      State: "WA",
      Zip: "98506",
      Phone: "716-520-9868",
      PhoneExt: 216,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 48,
    FirstName: "Rosmunda",
    LastName: "Gayforth",
    DateStarted: "05/09/2019",
    Position: 1,
    Subject: "B",
    PaidVolunteer: "V",
    TimeStatus: "F",
    ExperienceYears: 1,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "C2",
      BirthDate: "12/09/1992",
      Education: "A",
      EmploymentStatus: "G",
      Occupation: 7,
      Referral: "D"
    },
    HomeAdrs: {
      StrAdrs: "082 Crescent Oaks Circle",
      City: "Grand Forks",
      State: "ND",
      Zip: "58207",
      HomePhone: "701-734-9735",
      MobilePhone: "915-774-5249",
      Email: "rgayforth1b@cnbc.com",
      AltEmail: "rgayforth1b@theglobeandmail.com"
    },
    WorkAdrs: {
      StrAdrs: "4 Weeping Birch Alley",
      City: "El Paso",
      State: "TX",
      Zip: "79984",
      Phone: "816-977-5774",
      PhoneExt: 561,
      CanMail: true,
      CanCall: true
    }
  },
  {
    id: 49,
    FirstName: "Madeline",
    LastName: "Lauxmann",
    DateStarted: "01/23/2008",
    Position: 1,
    Subject: "CL",
    PaidVolunteer: "V",
    TimeStatus: "P",
    ExperienceYears: 12,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "C1",
      BirthDate: "05/16/1981",
      Education: "G",
      EmploymentStatus: "C",
      Occupation: 2,
      Referral: "AD"
    },
    HomeAdrs: {
      StrAdrs: "34 Drewry Alley",
      City: "Portland",
      State: "OR",
      Zip: "97271",
      HomePhone: "971-561-2178",
      MobilePhone: "512-421-3709",
      Email: "mlauxmann1c@com.com",
      AltEmail: "mlauxmann1c@prweb.com"
    },
    WorkAdrs: {
      StrAdrs: "2 Vidon Pass",
      City: "Austin",
      State: "TX",
      Zip: "78715",
      Phone: "716-881-9896",
      PhoneExt: 525,
      CanMail: false,
      CanCall: true
    }
  },
  {
    id: 50,
    FirstName: "Ranique",
    LastName: "Corness",
    DateStarted: "05/06/2014",
    Position: 8,
    Subject: "BN",
    PaidVolunteer: "P",
    TimeStatus: "P",
    ExperienceYears: 8,
    AdditionalInfo: {
      Gender: "F",
      Ethnicity: "A2",
      BirthDate: "10/21/1991",
      Education: "G",
      EmploymentStatus: "U",
      Occupation: 3,
      Referral: "J"
    },
    HomeAdrs: {
      StrAdrs: "07 Stephen Parkway",
      City: "Memphis",
      State: "TN",
      Zip: "38126",
      HomePhone: "901-473-1966",
      MobilePhone: "603-578-3731",
      Email: "rcorness1d@craigslist.org",
      AltEmail: "rcorness1d@fastcompany.com"
    },
    WorkAdrs: {
      StrAdrs: "67 Lotheville Trail",
      City: "Portsmouth",
      State: "NH",
      Zip: "03804",
      Phone: "336-229-5229",
      PhoneExt: 517,
      CanMail: true,
      CanCall: true
    }
  }
];

const positionList = {
  1: "Administrative",
  2: "Case Manager",
  3: "Counselor",
  4: "Counselor / Case Manager",
  5: "Managerial / Counselor",
  6: "Managerial / Supervisory",
  7: "Managerial / Teacher",
  8: "Paraprofessional",
  9: "Teacher",
  10: "Teacher / Counselor",
  11: "Other",
  12: "Place Holder",
  13: "Trainer",
  14: "Tutor",
  15: "Board Member",
  16: "Trainer & Tutor",
  17: "Board Member & Tutor",
  18: "Admin Support & Tutor",
  19: "Substitute",
  20: "Clerical",
  27: "Fundraiser",
  28: "Board Member & Trainer"
};

const subjectList = {
  B: "B BE",
  BE: "BE BE (NRS and/or EPE)",
  BEES: "BEES Both (BE & ES)",
  BN: "BN BENL",
  CL: "CL Computer Lab (EPE)",
  CLS: "CLs Career & Life Skills",
  E: "E ESOL",
  EB: "EB ESOL-B (NRS)",
  ES: "ES ESOL (NRS and/or EPE)",
  GE: "GE GED (NRS and/or EPE)",
  H: "H HSE (NRS and/or EPE)",
  J: "J J",
  MA: "MA Maths (NRS and/or EPE)",
  NI: "NI Non-Instructional",
  O: "O Other (EPE)",
  OS: "OS Office Skills",
  W: "W",
  X: "X",
  Y: "Y"
};

const paidList = {
  P: "Paid",
  V: "Volunteer"
};

const timeStatusList = {
  F: "Full-time",
  P: "Part-time"
};

const yearsXPlist = {
  1: "Less than one year",
  2: "One to three years",
  3: "More than three years"
};

const placeholderList = [
  "First Name",
  "Last Name",
  "Start Date",
  "Seniority",
  ["Position", positionList],
  ["Subject", subjectList],
  ["Paid/Volunteer", paidList],
  ["Time Status", timeStatusList],
  ["Experience", yearsXPlist]
];

const headerList = [
  "id",
  "Last Name",
  "First Name",
  "Year Started",
  "Position"
];

const addInfoList = [
  "Gender",
  "Ethnicity",
  "Birth Date",
  "Education Level",
  "Employment Status",
  "Occupation",
  "Referral"
];

const homeAdrsList = [
  "Street Address",
  "City",
  "State",
  "ZIP",
  "Home Phone",
  "Mobile Phone",
  "Email",
  "Alternate Email"
];

const workAdrsList = [
  "Street Address",
  "City",
  "State",
  "ZIP",
  "Work Phone",
  "Extension",
  "Can receive mail?",
  "Can be called?"
];

const createNewRecord = () => {
  for (let i = 0; i < placeholderList.length; i++) {
    const elmnt = placeholderList[i];
    const optionReq = elmnt !== "Length of Stay (yrs)" ? "required" : "";

    if (elmnt instanceof Array) {
      const [nameElmnt, elmntValues] = elmnt;
      let options = `<option class='red-text' selected disabled>Select ${nameElmnt}</option>`;

      for (value in elmntValues) {
        options += `<option class='blue-text' value=${value}>${elmntValues[value]}</option> `;
      }

      $("#new-personnel").append(
        `<select name='${nameElmnt}' class='form-control red-text' required>${options}</select>`
      );
    } else {
      let optionClass = "";
      if (elmnt === "Start Date" || elmnt === "Seniority")
        optionClass = "medium-cell";
      $("#new-personnel").append(`<input
    type="text"
    class="form-control ${optionClass}"
    placeholder='${elmnt}'
    ${optionReq}
  />`);
    }
  }

  $("#new-personnel").append(
    `<button type="submit" id="submit-btn" class="btn btn-primary">Add</button>`
  );
};

const viewHeaders = () => {
  for (let i = 1; i < headerList.length; i++) {
    $(".table thead").append(`<th>${headerList[i]}</th>`);
  }
};

const createDataRow = obj => {
  let row = "";
  const rowLabel = Object.keys(obj);
  const rowData = rowLabel.map(label => obj[label]);
  for (let i = 1; i < rowLabel.length; i++) {
    const option = headerList[i].replace(/\s/gi, "-").toLowerCase();
    row += `<td class="cell-data ${option}">${rowData[i]}</td>`;
  }
  return row;
};

const viewData = arr => {
  for (let i = 0; i < arr.length; i++) {
    $(".table tbody").append(
      `<tr class='table-row' id=${
        arr[i].id
      } title='click to Edit'>${createDataRow(arr[i])}</tr>`
    );
  }
};

//* Flattens a nested JSON object
const flatten = (obj, path = "") => {
  if (!(obj instanceof Object)) return { [path.replace(/\.$/g, "")]: obj };

  return Object.keys(obj).reduce((output, key) => {
    return obj instanceof Array
      ? { ...output, ...flatten(obj[key], path) }
      : { ...output, ...flatten(obj[key], path + key + "-") };
  }, {});
};

const createListFields = num => {
  const selectedRecord = personnelData.filter(record => record.id === num);
  const flattenedRecord = flatten(selectedRecord);
  const keyList = Object.keys(flattenedRecord);
  const list = keyList.map((key, indx) => [
    key.slice(0, key.length - 1),
    flattenedRecord[key]
  ]);
  return list;
};

const persoInfo = arr => {
  const [labelId, val] = arr[0];
  let result = `<div class="input-field">
          <label for=${labelId}>id</label>
          <input type="text" id=${labelId} value='${val}' disabled>
          </div>`;

  for (let i = 1; i < 4; i++) {
    const labelField = placeholderList[i - 1];
    const [keyField, valueField] = arr[i];
    const classOption = labelField.replace(/\s/, "-").toLowerCase();

    result += `<div class="input-field">
          <label for=${keyField}>${labelField}</label>
          <input type="text" id=${keyField} class=${classOption} value='${valueField}'>
          </div>`;
  }

  const seniorityYears = moment(arr[3], "MM/DD/YYYY")
    .fromNow()
    .replace(" ago", "");
  result += `<div class="input-field">
<label for="seniority">Seniority</label>
<input type="text" id="seniority" class="seniorityClass" value='${seniorityYears}' disabled>
</div>`;

  for (let j = 4; j < arr.length; j++) {
    const labelField = placeholderList[j];
    const [keyField, valueField] = arr[j];
    const classOption = labelField[0].replace(/\s/, "-").toLowerCase();
    const value =
      keyField === "ExperienceYears"
        ? "1 to 3 years"
        : labelField[1][valueField];
    result += `<div class="input-field">
          <label for=${keyField}>${labelField[0]}</label>
          <input type="text" id=${keyField} class=${classOption} value='${value}'>
          </div>`;
  }
  return result;
};

const persoAddOn = arr => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    const labelField = addInfoList[i];
    const [keyField, valueField] = arr[i];
    const classOption = labelField.replace(/\s/, "-").toLowerCase();

    result += `<div class="input-field">
          <label for=${keyField}>${labelField}</label>
          <input type="text" id=${keyField} class=${classOption} value='${valueField}'>
          </div>`;
  }
  return result;
};

const personHomeAdrs = arr => {
  let result = "<div class='sub-header'>Home Adress</div>";
  for (let i = 0; i < arr.length; i++) {
    const labelField = homeAdrsList[i];
    const [keyField, valueField] = arr[i];
    const classOption = labelField.replace(/\s/, "-").toLowerCase();

    result += `<div class="input-field">
          <label for=${keyField}>${labelField}</label>
          <input type="text" id=${keyField} class=${classOption} value='${valueField}'>
          </div>`;
  }
  return result;
};

const personWorkAdrs = arr => {
  let result = "<div class='sub-header'>Work Adress</div>";
  for (let i = 0; i < arr.length - 2; i++) {
    const labelField = workAdrsList[i];
    const [keyField, valueField] = arr[i];
    const classOption = labelField.replace(/\s/, "-").toLowerCase();

    result += `<div class="input-field">
          <label for=${keyField}>${labelField}</label>
          <input type="text" id=${keyField} class=${classOption} value='${valueField}'>
          </div>`;
  }

  for (const field of arr.slice(-2)) {
    const indx = arr.indexOf(field);
    const labelField = workAdrsList[indx];
    const [keyField, valueField] = field;
    const classOption = labelField.replace(/\s/, "-").toLowerCase();
    const checkOption = valueField ? "checked" : "";
    result += `<div class="checkbox-field">
          <label for=${keyField}>${labelField}</label>
          <input type="checkbox" id=${keyField} class=${classOption} ${checkOption}>
          </div>`;
  }
  return result;
};

$(document).ready(() => {
  //* Back to Top button
  const btnToTop = $("#btn-top");
  $("window").scroll(() => {
    btnToTop.style.display =
      $("window").scrollTop() > 600 || $("body".scrollTop() > 600)
        ? "inline-block"
        : "none";
  });
  btnToTop.click(e => {
    e.stopPropagation();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });

  // * data viewing
  createNewRecord();

  //* Adding a new team member
  $("#add-new-member").click(function(e) {
    e.stopPropagation();
    $("#new-personnel").toggleClass("hidden");
  });

  //* Search personnel
  $("#search-btn").click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    const searchArg = $("#search-input")
      .val()
      .toLowerCase();
    const result = personnelData
      .filter(
        person =>
          person.LastName.toLowerCase().includes(searchArg) ||
          person.FirstName.toLowerCase().includes(searchArg)
      )
      .sort((a, b) => (a.LastName > b.LastName ? 1 : -1))
      .map(person => {
        const { id, LastName, FirstName, DateStarted, Position } = person;
        const yearStarted = DateStarted.substr(-4);
        const fullPosition = positionList[Position];
        return { id, LastName, FirstName, yearStarted, fullPosition };
      });
    selectedStaff = result;
    viewHeaders();
    viewData(selectedStaff);
  });

  //* Select person in short list
  $("tbody").on("click", "[title^='click']", function(e) {
    e.stopPropagation();
    e.preventDefault();
    const rowID = Number($(this).attr("id"));
    const listFields = createListFields(rowID);
    $("thead").empty();
    $("tbody").empty();
    $("#search-input").val("");
    const blocPerso = persoInfo(listFields.slice(0, 9));
    const blocPersoAddOn = persoAddOn(listFields.slice(9, 16));
    const homeAdrsFields = listFields.filter(item =>
      item[0].startsWith("HomeAdrs")
    );
    const workAdrsFields = listFields.filter(item =>
      item[0].startsWith("WorkAdrs")
    );

    const blocHomeAdrs = personHomeAdrs(homeAdrsFields);
    const blocWorkAdrs = personWorkAdrs(workAdrsFields);

    $(".hero").append(`<div class="container personView"><div class="row">
    <div class="bloc-perso col-md-6">${blocPerso}${blocPersoAddOn}</div>
    <div class="bloc-adrs col-md-6">${blocHomeAdrs}${blocWorkAdrs}</div>
    </div></div>`);

    return false;
  });

  //* Deleting source
});
