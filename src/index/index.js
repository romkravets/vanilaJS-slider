import './index.scss';
import { Slider } from './scripts/slider';


 const sliderData = [
  {
    img: "https://scontent.fiev21-1.fna.fbcdn.net/v/t1.0-9/34191086_242321746518049_1635227550055661568_n.jpg?_nc_cat=109&_nc_eui2=AeHs09IO3F7Qw1y7Pa4jt1QnctXhS4DozSOR1tpB-I5S-KD_mEYKMe4ZG8ydBTrHSY6j82tAEGZQcJVVPMyCpC2L-YUEAyXhETt_az5kiBZ-Vg&_nc_ht=scontent.fiev21-1.fna&oh=7bb8a1d21cf03616c3389cd3fe45b958&oe=5D6FC587",
    name: "Kremenets",
    desc: "Kremenets is one of Ukraine’s most ancient cities. It lies in a picturesque location, among the wooded slopes of the Kremenets Mountains. These mountains, rich in silicon (in Ukrainian, ‘kremeniy’) give the city its name."
  },
  {
    img: "https://scontent.fiev21-2.fna.fbcdn.net/v/t1.0-9/34258748_242321829851374_4360894812065366016_n.jpg?_nc_cat=103&_nc_eui2=AeHBj5fUObxC1RRFToEijo3AmMpLt37y5iVUNCy2fXwSB9vipwSoRPOZ-Y7dU0AhAiCrD2KXyYqXUey2fG7cYBjjwg3JIO2jpN_umAbcT1ycQQ&_nc_ht=scontent.fiev21-2.fna&oh=4309063a0be741dd4a13b53e427baa00&oe=5D530792",
    name: "Kremenets’ history",
    desc: "Is closely connected to one of its main tourist attractions - a fortress on the Zamkova Mountain. Historians believe that the fortification building has stood here since the 8th century and consider it to be extremely strong. The fact that the fortress was one of the few, if any, Kyivan Rus’ citadels that withstood the onslaught of Tatar and Mongol invaders in 1240 underscores this belief."
  },
  {
    img: "https://scontent.fiev21-2.fna.fbcdn.net/v/t1.0-9/34200230_242321523184738_1303246167420698624_n.jpg?_nc_cat=103&_nc_eui2=AeHQfPo2ozJmXaZd6wlKJA4xSS2sBA7ckDhuCZ-qoMAgL7Ow8lT5vUwDbhQ0AsfN8emhmq3yME8e7DB5w8nhtwjtzhrPiuvBbnpoSYEAS7bMtg&_nc_ht=scontent.fiev21-2.fna&oh=9e0f4dcd30e5eba69881e98ebe8fe489&oe=5D6CA325",
    name: "In the 16th century",
    desc: "In the 16th century, Poland’s king Sigismund I presented the castle to his wife, Neapolitan princess Bona Sforza, who immediately ordered the fortress to be reinforced even more. Sforza owned the castle for 20 years, and during her rule the city experienced rapid growth. The queen was an unusual persona, and plenty of rumors still circulate about her."
  },
  {
    img: "https://scontent.fiev21-1.fna.fbcdn.net/v/t1.0-9/34343778_242321789851378_3010263245425475584_n.jpg?_nc_cat=110&_nc_eui2=AeHz3dHi_id_3Fsu-tDxIi8fbO04OhDg9q_NuRc7NolSCWg7iY3za56HIJNAUmNyEmV0KWL-BmB6eGfsT8gUZOmOCT4KNPhyiJc-Vmnktkhk3Q&_nc_ht=scontent.fiev21-1.fna&oh=fb2252f252bf95b2883e0391f23941e1&oe=5D2AB28E",
    name: "Batu Khan",
    desc: "The fortress, which in the 13th century the Batu Khan forces failed to capture, was taken by the Cossacks in 1648, after a six-week siege. Since then, Kremenets lost its defensive eminence and its defenses were not rebuilt. Until today, only the ruins of the Gothic gate tower with and fragments of the wall survived. Yet even today, the ancient castle’s remains impress its visitors, as does the view from the mountain on which they are located."
  },
  {
    img: "https://scontent.fiev21-2.fna.fbcdn.net/v/t1.0-9/34418491_242321666518057_8269553885966761984_n.jpg?_nc_cat=107&_nc_eui2=AeFL6nd4hDNdA5HaIiWcGtPvu6nR77sG1GqIy7F6JIczOnbHPyXEhPknrPaqHTuWrOfNgZx2RMxM3vd3Ji3jMmAwSLyM2iH2-C0YthUXg-H1CA&_nc_ht=scontent.fiev21-2.fna&oh=ca77b7d5cb68e66d422e80dd74c09daf&oe=5D74A7ED",
    name: "Jesuit Monastery",
    desc: "The most beautiful structure in Kremenets is rightly considered to be the complex of the Jesuit Monastery and Seminary, in whose design the traces of Baroque and Rococo styles are interwoven. The ensemble consists of a Catholic church (now it is a Church of Transfiguration) and two adjoining educational buildings. In the 18th century, the Jesuit Seminary was one of the preeminent educational centers in the West. Now, this building is occupied by the Kremenets Pedagogical Institute."
  },
  {
    img: "https://scontent.fiev21-2.fna.fbcdn.net/v/t1.0-9/34105152_242321633184727_8240539693960134656_n.jpg?_nc_cat=107&_nc_eui2=AeE0g24nNuYoC5YHdmoAnJTlYC9GuB2mrBwKT1QUWfQAjHn4vK3DsIWDqrAJHTxkWcKtbPaHljs-yOQ6R42ZAOzw4tqB7UwgUmyEWuOhzlXswg&_nc_ht=scontent.fiev21-2.fna&oh=dd0e4cf6f0637561a7467de28db2b939&oe=5D66EE12",
    name: "Welcome",
    desc: 'Kremenets is a very compact town, and all the main tourist attractions are located close to one another. Generally, one day is enough for travelers to see this wonderful place and feel its unique spirit.'
  }
];


new Slider(document.querySelector('#sliderRoot'), sliderData);


