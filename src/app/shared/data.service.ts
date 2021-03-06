import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
export class DataService implements InMemoryDbService{
  createDb() {
    const suggess = [
        {
        "error":null,
        "data":["long giang, vietnam", "ha long, quang ninh, vietnam", "bai tu long/ hai phong, vietnam", "hanoi, vietnam"]
        }
    ]
    const query_basic = [
      {
        "data": [
          { 
            "id":1,
            "name": "Bonne Nuit Hotel1",
            "hotelId": "404047",
            "latitude": 21.03479875,
            "longitude": 105.8454925,
            "addressLines": "30A Cua Dong1",
            "cheapestPrice": 100000,
            "savingPercent": 0,
            "savingAmount": 0,
            "distance": 0,
            "stars": 1,
            "trustYouScore": "4.45",
            "priority": 12,
            "facilities": [
              {
              "code": "BU",
              "description": "Business person1"
              },
              {
              "code": "FIN",
              "description": "Free Internet1"
              },
              {
              "code": "PA",
              "description": "Parking1"
              },
              {
              "code": "ME",
              "description": "Meeting room1"
              },
              {
              "code": "RE",
              "description": "Restaurant1"
              },
              {
              "code": "SP",
              "description": "Spa1"
              },
              {
              "code": "AC",
              "description": "Air conditioner1"
              }
            ],
            "images": [
              {
              "caption": "Featured Image1",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg"
              },
              {
              "caption": "Lobby1",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg"
              },
              {
              "caption": "Reception1",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg"
              },
              {
              "caption": "Lobby Sitting Area1",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg"
              },
              {
              "caption": "Lobby Lounge1",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg"
              }
            ]
          },
          { 
            "id":2,
            "name": "Bonne Nuit Hotel2",
            "hotelId": "404048",
            "latitude": 21.03479875,
            "longitude": 105.8454925,
            "addressLines": "30A Cua Dong2",
            "cheapestPrice": 200000,
            "savingPercent": 0,
            "savingAmount": 0,
            "distance": 0,
            "stars": 1.5,
            "trustYouScore": "4.45",
            "priority": 12,
            "facilities": [
              {
              "code": "BU",
              "description": "Business person2"
              },
              {
              "code": "FIN",
              "description": "Free Internet2"
              },
              {
              "code": "PA",
              "description": "Parking2"
              },
              {
              "code": "ME",
              "description": "Meeting room2"
              },
              {
              "code": "RE",
              "description": "Restaurant2"
              },
              {
              "code": "SP",
              "description": "Spa2"
              },
              {
              "code": "AC",
              "description": "Air conditioner2"
              }
            ],
            "images": [
              {
              "caption": "Featured Image2",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg"
              },
              {
              "caption": "Lobby2",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg"
              },
              {
              "caption": "Reception2",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg"
              },
              {
              "caption": "Lobby Sitting Area2",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg"
              },
              {
              "caption": "Lobby Lounge2",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg"
              }
            ]
          },
          { 
            "id":3,
            "name": "Bonne Nuit Hotel3",
            "hotelId": "404049",
            "latitude": 21.03479875,
            "longitude": 105.8454925,
            "addressLines": "30A Cua Dong3",
            "cheapestPrice": 300000,
            "savingPercent": 0,
            "savingAmount": 0,
            "distance": 0,
            "stars": 2,
            "trustYouScore": "4.45",
            "priority": 12,
            "facilities": [
              {
              "code": "BU",
              "description": "Business person3"
              },
              {
              "code": "FIN",
              "description": "Free Internet3"
              },
              {
              "code": "PA",
              "description": "Parking3"
              },
              {
              "code": "ME",
              "description": "Meeting room3"
              },
              {
              "code": "RE",
              "description": "Restaurant3"
              },
              {
              "code": "SP",
              "description": "Spa3"
              },
              {
              "code": "AC",
              "description": "Air conditioner3"
              }
            ],
            "images": [
              {
              "caption": "Featured Image3",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg"
              },
              {
              "caption": "Lobby3",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg"
              },
              {
              "caption": "Reception3",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg"
              },
              {
              "caption": "Lobby Sitting Area3",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg"
              },
              {
              "caption": "Lobby Lounge3",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg"
              }
            ]
          },
          { 
            "id":4,
            "name": "Bonne Nuit Hotel4",
            "hotelId": "404050",
            "latitude": 21.03479875,
            "longitude": 105.8454925,
            "addressLines": "30A Cua Dong4",
            "cheapestPrice": 400000,
            "savingPercent": 0,
            "savingAmount": 0,
            "distance": 0,
            "stars": 2.5,
            "trustYouScore": "4.45",
            "priority": 12,
            "facilities": [
              {
              "code": "BU",
              "description": "Business person4"
              },
              {
              "code": "FIN",
              "description": "Free Internet4"
              },
              {
              "code": "PA",
              "description": "Parking4"
              },
              {
              "code": "ME",
              "description": "Meeting room4"
              },
              {
              "code": "RE",
              "description": "Restaurant4"
              },
              {
              "code": "SP",
              "description": "Spa4"
              },
              {
              "code": "AC",
              "description": "Air conditioner4"
              }
            ],
            "images": [
              {
              "caption": "Featured Image4",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg"
              },
              {
              "caption": "Lobby4",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg"
              },
              {
              "caption": "Reception4",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg"
              },
              {
              "caption": "Lobby Sitting Area4",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg"
              },
              {
              "caption": "Lobby Lounge4",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg"
              }
            ]
          },
          { 
            "id":5,
            "name": "Bonne Nuit Hotel5",
            "hotelId": "404051",
            "latitude": 21.03479875,
            "longitude": 105.8454925,
            "addressLines": "30A Cua Dong5",
            "cheapestPrice": 500000,
            "savingPercent": 0,
            "savingAmount": 0,
            "distance": 0,
            "stars": 3,
            "trustYouScore": "4.45",
            "priority": 12,
            "facilities": [
              {
              "code": "BU",
              "description": "Business person5"
              },
              {
              "code": "FIN",
              "description": "Free Internet5"
              },
              {
              "code": "PA",
              "description": "Parking5"
              },
              {
              "code": "ME",
              "description": "Meeting room5"
              },
              {
              "code": "RE",
              "description": "Restaurant5"
              },
              {
              "code": "SP",
              "description": "Spa5"
              },
              {
              "code": "AC",
              "description": "Air conditioner5"
              }
            ],
            "images": [
              {
              "caption": "Featured Image5",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg"
              },
              {
              "caption": "Lobby5",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg"
              },
              {
              "caption": "Reception5",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg"
              },
              {
              "caption": "Lobby Sitting Area5",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg"
              },
              {
              "caption": "Lobby Lounge5",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg"
              }
            ]
          },
          { 
            "id":6,
            "name": "Bonne Nuit Hotel6",
            "hotelId": "404052",
            "latitude": 21.03479875,
            "longitude": 105.8454925,
            "addressLines": "30A Cua Dong6",
            "cheapestPrice": 600000,
            "savingPercent": 0,
            "savingAmount": 0,
            "distance": 0,
            "stars": 3.5,
            "trustYouScore": "4.45",
            "priority": 12,
            "facilities": [
              {
              "code": "BU",
              "description": "Business person6"
              },
              {
              "code": "FIN",
              "description": "Free Internet6"
              },
              {
              "code": "PA",
              "description": "Parking6"
              },
              {
              "code": "ME",
              "description": "Meeting room6"
              },
              {
              "code": "RE",
              "description": "Restaurant6"
              },
              {
              "code": "SP",
              "description": "Spa6"
              },
              {
              "code": "AC",
              "description": "Air conditioner6"
              }
            ],
            "images": [
              {
              "caption": "Featured Image6",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg"
              },
              {
              "caption": "Lobby",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg"
              },
              {
              "caption": "Reception6",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg"
              },
              {
              "caption": "Lobby Sitting Area6",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg"
              },
              {
              "caption": "Lobby Lounge6",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg"
              }
            ]
          },
          { 
            "id":7,
            "name": "Bonne Nuit Hotel7",
            "hotelId": "404053",
            "latitude": 21.03479875,
            "longitude": 105.8454925,
            "addressLines": "30A Cua Dong7",
            "cheapestPrice": 700000,
            "savingPercent": 0,
            "savingAmount": 0,
            "distance": 0,
            "stars": 4,
            "trustYouScore": "4.45",
            "priority": 12,
            "facilities": [
              {
              "code": "BU",
              "description": "Business person7"
              },
              {
              "code": "FIN",
              "description": "Free Internet7"
              },
              {
              "code": "PA",
              "description": "Parking7"
              },
              {
              "code": "ME",
              "description": "Meeting room7"
              },
              {
              "code": "RE",
              "description": "Restaurant7"
              },
              {
              "code": "SP",
              "description": "Spa7"
              },
              {
              "code": "AC",
              "description": "Air conditioner7"
              }
            ],
            "images": [
              {
              "caption": "Featured Image7",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg"
              },
              {
              "caption": "Lobby7",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg"
              },
              {
              "caption": "Reception7",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg"
              },
              {
              "caption": "Lobby Sitting Area7",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg"
              },
              {
              "caption": "Lobby Lounge7",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg"
              }
            ]
          },
          { 
            "id":8,
            "name": "Bonne Nuit Hotel8",
            "hotelId": "404054",
            "latitude": 21.03479875,
            "longitude": 105.8454925,
            "addressLines": "30A Cua Dong8",
            "cheapestPrice": 800000,
            "savingPercent": 0,
            "savingAmount": 0,
            "distance": 0,
            "stars": 4.5,
            "trustYouScore": "4.45",
            "priority": 12,
            "facilities": [
              {
              "code": "BU",
              "description": "Business person8"
              },
              {
              "code": "FIN",
              "description": "Free Internet8"
              },
              {
              "code": "PA",
              "description": "Parking8"
              },
              {
              "code": "ME",
              "description": "Meeting room8"
              },
              {
              "code": "RE",
              "description": "Restaurant8"
              },
              {
              "code": "SP",
              "description": "Spa8"
              },
              {
              "code": "AC",
              "description": "Air conditioner8"
              }
            ],
            "images": [
              {
              "caption": "Featured Image8",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg"
              },
              {
              "caption": "Lobby8",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg"
              },
              {
              "caption": "Reception8",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg"
              },
              {
              "caption": "Lobby Sitting Area8",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg"
              },
              {
              "caption": "Lobby Lounge8",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg"
              }
            ]
          },
          { 
            "id":9,
            "name": "Bonne Nuit Hotel9",
            "hotelId": "404055",
            "latitude": 21.03479875,
            "longitude": 105.8454925,
            "addressLines": "30A Cua Dong9",
            "cheapestPrice": 900000,
            "savingPercent": 0,
            "savingAmount": 0,
            "distance": 0,
            "stars": 5,
            "trustYouScore": "4.45",
            "priority": 12,
            "facilities": [
              {
              "code": "BU",
              "description": "Business person9"
              },
              {
              "code": "FIN",
              "description": "Free Internet9"
              },
              {
              "code": "PA",
              "description": "Parking9"
              },
              {
              "code": "ME",
              "description": "Meeting room9"
              },
              {
              "code": "RE",
              "description": "Restaurant9"
              },
              {
              "code": "SP",
              "description": "Spa9"
              },
              {
              "code": "AC",
              "description": "Air conditioner9"
              }
            ],
            "images": [
              {
              "caption": "Featured Image9",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg"
              },
              {
              "caption": "Lobby9",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg"
              },
              {
              "caption": "Reception9",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg"
              },
              {
              "caption": "Lobby Sitting Area9",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg"
              },
              {
              "caption": "Lobby Lounge9",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg"
              }
            ]
          },
          { 
            "id":10,
            "name": "Bonne Nuit Hotel10",
            "hotelId": "404047",
            "latitude": 21.03479875,
            "longitude": 105.8454925,
            "addressLines": "30A Cua Dong",
            "cheapestPrice": 100000,
            "savingPercent": 0,
            "savingAmount": 0,
            "distance": 0,
            "stars": 5,
            "trustYouScore": "4.45",
            "priority": 12,
            "facilities": [
              {
              "code": "BU",
              "description": "Business person10"
              },
              {
              "code": "FIN",
              "description": "Free Internet10"
              },
              {
              "code": "PA",
              "description": "Parking10"
              },
              {
              "code": "ME",
              "description": "Meeting room10"
              },
              {
              "code": "RE",
              "description": "Restaurant10"
              },
              {
              "code": "SP",
              "description": "Spa10"
              },
              {
              "code": "AC",
              "description": "Air conditioner10"
              }
            ],
            "images": [
              {
              "caption": "Featured Image10",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/6bc8cedc_b.jpg"
              },
              {
              "caption": "Lobby10",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5bf89650_b.jpg"
              },
              {
              "caption": "Reception10",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/5068837e_b.jpg"
              },
              {
              "caption": "Lobby Sitting Area10",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/7c126f62_b.jpg"
              },
              {
              "caption": "Lobby Lounge10",
              "thumbnailUrl": "https://static.goquo.com/eean-w350/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg",
              "url":
              "https://static.goquo.com/eean/hotels/10000000/9480000/9477500/9477462/68c112e1_b.jpg"
              }
            ]
          }
      ],
        "error": null
      }
    ];
    return {suggess, query_basic};
  }
}
