require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine (assuming EJS for this example)
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));  

// Sample route
app.get('/', (req, res) => {
   res.render("deathCertificate");
});
app.get('/a', (req, res) => {
   res.render("1");
});

app.get('/deathCertificate/urmila', (req, res) => {
   res.render("2");
});
app.get('/deathCertificate/anshudevilakhaura', (req, res) => {
   res.render("3");
});
app.get('/deathCertificate/miradevilakhaura', (req, res) => {
   res.render("4");
});
app.get('/deathCertificate/reetadeviharsidhi', (req, res) => {
   res.render("5");
});
app.get('/deathCertificate/CHAMPADEVIKOTWA', (req, res) => {
   res.render("6");
});
app.get('/deathCertificate/GEETADEVIHARSIDHI', (req, res) => {
   res.render("7");
});
app.get('/deathCertificate/MANJUDEVIHARSIDHI', (req, res) => {
   res.render("8");
});
app.get('/deathCertificate/NIKUKUMARIKOTWA', (req, res) => {
   res.render("9");
});
app.get('/deathCertificate/CHINTUDEVIHARSIDHI', (req, res) => {
   res.render("10");
});


app.get('/deathCertificate/CHINTUDEVIHARSIDHI', (req, res) => {
   res.render("11");
});


app.get('/deathCertificate/SUNITADEVIKOTWA', (req, res) => {
   res.render("12");
});
app.get('/deathCertificate/SHANTIDEVIKALYANPUR', (req, res) => {
   res.render("13");
});
app.get('/deathCertificate/ANUDEVIKALYANPUR', (req, res) => {
   res.render("14");
});
app.get('/deathCertificate/SARITADEVIKALYANPUR', (req, res) => {
   res.render("15");
});
app.get('/deathCertificate/CHHAYAKUMARIJAGDISHPUR', (req, res) => {
   res.render("16");
});
app.get('/deathCertificate/RAMBHADEVIJAGDISHPUR', (req, res) => {
   res.render("17");
});
app.get('/deathCertificate/GAYTREEDEVIKOTWA', (req, res) => {
   res.render("18");
});
app.get('/deathCertificate/KAMRUNKHATUNKOTWA', (req, res) => {
   res.render("19");
});
app.get('/deathCertificate/ASAMAKHATUNKOTWA', (req, res) => {
   res.render("20");
});



app.get('/deathCertificate/AFSANAKHATUNKOTWA', (req, res) => {
   res.render("21");
});
app.get('/deathCertificate/SABILAKHATUNKOTWA', (req, res) => {
   res.render("22");
});
app.get('/deathCertificate/SONADEVIKOTWA', (req, res) => {
   res.render("23");
});
app.get('/deathCertificate/SIYADEVIHARSIDHI', (req, res) => {
   res.render("24");
});
app.get('/deathCertificate/RAMAWATIKUMARIHARSIDHI', (req, res) => {
   res.render("25");
});
app.get('/deathCertificate/BABITADEVIHARSIDHI', (req, res) => {
   res.render("26");
});
app.get('/deathCertificate/REKHADEVIKOTWA', (req, res) => {
   res.render("27");
});
app.get('/deathCertificate/SHARDADEVILAKHAURA', (req, res) => {
   res.render("28");
});
app.get('/deathCertificate/ANITADEVIKALYANPUR', (req, res) => {
   res.render("29");
});
app.get('/deathCertificate/ANITADEVIKALYANPOUREC', (req, res) => {
   res.render("30");
});


app.get('/deathCertificate/GITADEVIJAGDISHPUR', (req, res) => {
   res.render("31");
});
app.get('/deathCertificate/PUNAMDEVIJAGDISHPUR', (req, res) => {
   res.render("32");
});
app.get('/deathCertificate/CHANDADEVIJAGDISHPUR', (req, res) => {
   res.render("33");
});
app.get('/deathCertificate/GEETADEVIJAGDISHPUR', (req, res) => {
   res.render("34");
});
app.get('/deathCertificate/ARSWATIDEVIJAGDISHPUR', (req, res) => {
   res.render("35");
});


app.get('/deathCertificate/KAUSHLYAKUMARIJAGDISHPUR', (req, res) => {
   res.render("36");
});app.get('/deathCertificate/RUMALIDEVIJAGDISHPUR', (req, res) => {
   res.render("37");
});app.get('/deathCertificate/PARWATIDEVIJOGAPATI', (req, res) => {
   res.render("38");
});app.get('/deathCertificate/PRATIMADEVIJOGAPATTI', (req, res) => {
   res.render("39");
});app.get('/deathCertificate/URMILADEVIJOGAPATTI', (req, res) => {
   res.render("40");
});app.get('/deathCertificate/RINKUDEVIJOGAPPATI', (req, res) => {
   res.render("41");
});app.get('/deathCertificate/LAXMIDEVIJOGAPATTI', (req, res) => {
   res.render("42");
});app.get('/deathCertificate/CHAINIDEVIJOGAPATTI', (req, res) => {
   res.render("43");
});app.get('/deathCertificate/ASHADEVIJOGAPATTI', (req, res) => {
   res.render("44");
});app.get('/deathCertificate/PRAMILADEVIJOGAPATTI', (req, res) => {
   res.render("45");
});
app.get('/deathCertificate/SAYRAKHATUNJOGAPATTI', (req, res) => {
   res.render("46");
});
app.get('/deathCertificate/REHANAKHATUNJOGAPATTI', (req, res) => {
   res.render("47");
});
app.get('/deathCertificate/LALMUNIDEVIJOGAPATTI', (req, res) => {
   res.render("48");
});
app.get('/deathCertificate/RITADEVIJOGAPATTI', (req, res) => {
   res.render("49");
});
app.get('/deathCertificate/MADHUDEVIJOGAPATTI', (req, res) => {
   res.render("50");
});

app.get('/deathCertificate/GWALADEVIJOGAPATTI', (req, res) => {
   res.render("51");
});
app.get('/deathCertificate/RANIDEVIJOGAPATTI', (req, res) => {
   res.render("52");
});
app.get('/deathCertificate/BINDADEVIJOGAPATTI', (req, res) => {
   res.render("53");
});
app.get('/deathCertificate/RENUDEVIJOGAPATTI', (req, res) => {
   res.render("54");
});
app.get('/deathCertificate/RANJITADEVIJOGAPATTI', (req, res) => {
   res.render("55");
});
app.get('/deathCertificate/CHAMPADEVIJOGAPATTI', (req, res) => {
   res.render("56");
});
app.get('/deathCertificate/AMRITADEVIJOGAPATTI', (req, res) => {
   res.render("57");
});
app.get('/deathCertificate/JAGRANIDEVIJOGAPATTI', (req, res) => {
   res.render("58");
});
app.get('/deathCertificate/MAINADEVIJOGAPATTI', (req, res) => {
   res.render("59");
});
app.get('/deathCertificate/PREMSHILADEVIJOGAPATTI', (req, res) => {
   res.render("60");
});
app.get('/deathCertificate/RINKUDEVIJOGAPATTI', (req, res) => {
   res.render("61");
});
app.get('/deathCertificate/GENADEVIJOGAPATTI', (req, res) => {
   res.render("62");
});
app.get('/deathCertificate/AFSANAKHATUNJOGAPATTI', (req, res) => {
   res.render("63");
});
app.get('/deathCertificate/PRABHAWATIDEVIJOGAPATTI', (req, res) => {
   res.render("64");
});
app.get('/deathCertificate/SANGEETADEVIJOGAPATTI', (req, res) => {
   res.render("65");
});
app.get('/deathCertificate/USHAKUMARIJOGAPATTI', (req, res) => {
   res.render("66");
});
app.get('/deathCertificate/RUNADEVIJOGAPATTI', (req, res) => {
   res.render("67");
});
app.get('/deathCertificate/NIRMALADEVIJOGAPATTI', (req, res) => {
   res.render("68");
});
app.get('/deathCertificate/DURGAVATIDEVIYOGAPATTI', (req, res) => {
   res.render("69");
});
app.get('/deathCertificate/PANMATIDEVILAURIYA', (req, res) => {
   res.render("70");
});
app.get('/deathCertificate/FULPATIDEVILAURIYA', (req, res) => {
   res.render("71");
});
app.get('/deathCertificate/MUNIDEVILAURIYA', (req, res) => {
   res.render("72");
});
app.get('/deathCertificate/GYANTIDEVILAURIYA', (req, res) => {
   res.render("73");
});
app.get('/deathCertificate/INDUDEVILAURIYA', (req, res) => {
   res.render("74");
});
app.get('/deathCertificate/ANTIMALAURIYA', (req, res) => {
   res.render("75");
});
app.get('/deathCertificate/SANJUDEVILAURIYA', (req, res) => {
   res.render("76");
});
app.get('/deathCertificate/YASODADEVILAURIYA', (req, res) => {
   res.render("77");
});
app.get('/deathCertificate/AMRITAKUMARILAURIYA', (req, res) => {
   res.render("78");
});
app.get('/deathCertificate/AANARAMADEVILAURIYA', (req, res) => {
   res.render("79");
});
app.get('/deathCertificate/SAROJDEVILAURIYA', (req, res) => {
   res.render("80");
});
app.get('/deathCertificate/PUNAMDEVILAURIYA', (req, res) => {
   res.render("81");
});
app.get('/deathCertificate/ANITADEBILAURIYA', (req, res) => {
   res.render("82");
});
app.get('/deathCertificate/JAYDAKHATUNLAURIYA', (req, res) => {
   res.render("83");
});
app.get('/deathCertificate/RUTANDEVILAURIYA', (req, res) => {
   res.render("84");
});
app.get('/deathCertificate/BEBIDEVILAURIYA', (req, res) => {
   res.render("85");
});
app.get('/deathCertificate/GYANTIDEVILAURIYA', (req, res) => {
   res.render("86");
});
app.get('/deathCertificate/KUNTIDEVILAURIYA', (req, res) => {
   res.render("87");
});
app.get('/deathCertificate/NIDHIKUMARLAURIYA', (req, res) => {
   res.render("88");
});
app.get('/deathCertificate/SIMADEVILAURIYA', (req, res) => {
   res.render("89");
});
app.get('/deathCertificate/SUNITADEVILAURIYA', (req, res) => {
   res.render("90");
});
app.get('/deathCertificate/SANTIDEVILURIYA', (req, res) => {
   res.render("91");
});
app.get('/deathCertificate/KRISHNAWATIDEVILAURIYA', (req, res) => {
   res.render("92");
});
app.get('/deathCertificate/LALITADEVILAURIYA', (req, res) => {
   res.render("93");
});
app.get('/deathCertificate/NAGINAKHATOONLAURIYA', (req, res) => {
   res.render("94");
});
app.get('/deathCertificate/KIRANDEVIKUAHI', (req, res) => {
   res.render("95");
});
app.get('/deathCertificate/RUNNIDEVIKUAHI', (req, res) => {
   res.render("96");
});
app.get('/deathCertificate/MARANIDEVIKUAHI', (req, res) => {
   res.render("97");
});
app.get('/deathCertificate/AKUNTIDEVIKUAHI', (req, res) => {
   res.render("98");
});
app.get('/deathCertificate/RITADEVIKUAHII', (req, res) => {
   res.render("99");
});
app.get('/deathCertificate/MALADEVIKUAHI', (req, res) => {
   res.render("100");
});
app.get('/deathCertificate/GITADEVIKUAHI', (req, res) => {
   res.render("101");
});
app.get('/deathCertificate/ANURADHADEVIKUAHI', (req, res) => {
   res.render("103");
});
app.get('/deathCertificate/SHILADEVILAURIYA', (req, res) => {
   res.render("104");
});
app.get('/deathCertificate/INDUKUMARIKUAHI', (req, res) => {
   res.render("105");
});
app.get('/deathCertificate/NIRMALADEVILAURIYA', (req, res) => {
   res.render("106");
});
app.get('/deathCertificate/SIKILDEVIKUAHI', (req, res) => {
   res.render("107");
});
app.get('/deathCertificate/KABUTARIDEVIKUAHI', (req, res) => {
   res.render("108");
});
app.get('/deathCertificate/SHOBHASINGHKUAHI', (req, res) => {
   res.render("109");
});
app.get('/deathCertificate/MINADEVIKUAHI', (req, res) => {
   res.render("110");
});
app.get('/deathCertificate/KUNHADEVIKUAHI', (req, res) => {
   res.render("111");
});
app.get('/deathCertificate/CHANDANIKUMARIMAHUAGACHHI', (req, res) => {
   res.render("112");
});
app.get('/deathCertificate/NIRMALADEVIMAHUAAGACHHI', (req, res) => {
   res.render("113");
});
app.get('/deathCertificate/SUMINDADEVIMAHUAAGACHHI', (req, res) => {
   res.render("114");
});
app.get('/deathCertificate/PUTULDEVIMAHUAAGACHHI', (req, res) => {
   res.render("115");
});
app.get('/deathCertificate/GITADEVIMAHUAAGACHHI', (req, res) => {
   res.render("116");
});
app.get('/deathCertificate/ROKSANAKHATUNMAHUAAGACHHI', (req, res) => {
   res.render("117");
});
app.get('/deathCertificate/SHANTIDEVILAURIYA', (req, res) => {
   res.render("118");
});
app.get('/deathCertificate/RUBIKHATOONLAURIYA', (req, res) => {
   res.render("119");
});
app.get('/deathCertificate/SOBHADEVILAURIYA', (req, res) => {
   res.render("120");
});
app.get('/deathCertificate/MUNNIDEVILAURIYA', (req, res) => {
   res.render("121");
});
app.get('/deathCertificate/SAMASUNKHATUNLAURIYA', (req, res) => {
   res.render("122");
});
app.get('/deathCertificate/SANDIPAKHATUN', (req, res) => {
   res.render("123");
});
app.get('/deathCertificate/NIRMALADEVILAURIYARAJENDRARAO', (req, res) => {
   res.render("124");
});
app.get('/deathCertificate/ASHADEVILAURIYA', (req, res) => {
   res.render("125");
});
app.get('/deathCertificate/RIMADEVILAURIYA', (req, res) => {
   res.render("126");
});
app.get('/deathCertificate/LALITADEVILAURIYA', (req, res) => {
   res.render("127");
});
app.get('/deathCertificate/SHILADEVILAURIYA', (req, res) => {
   res.render("128");
});
app.get('/deathCertificate/SANGITADEVILAURIYA', (req, res) => {
   res.render("129");
});
app.get('/deathCertificate/NIRMALADEVILAURIYA', (req, res) => {
   res.render("130");
});
app.get('/deathCertificate/SILADEVILAURIYA', (req, res) => {
   res.render("131");
});


app.get('/deathCertificate/RIMADEVILAURIYA', (req, res) => {
   res.render("132");
});

app.get('/deathCertificate/NIRMALADEVILAURIYA', (req, res) => {
   res.render("133");
});
app.get('/deathCertificate/ASHADEVILAURIYA', (req, res) => {
   res.render("134");
});
app.get('/deathCertificate/SHOBHADEVILAURIYA', (req, res) => {
   res.render("135");
});
app.get('/deathCertificate/RUBIKHATULAURIYA', (req, res) => {
   res.render("136");
});
app.get('/deathCertificate/MUNNIDEVILAURIYA', (req, res) => {
   res.render("137");
});
app.get('/deathCertificate/MALADEVILAURIYA', (req, res) => {
   res.render("138");
});
app.get('/deathCertificate/SAMSUNKHATUNLAURIUYA', (req, res) => {
   res.render("139");
});
app.get('/deathCertificate/RAGANIKUMARINAUTAN', (req, res) => {
   res.render("140");
});
app.get('/deathCertificate/PRIYANKAKUMARINAUTAN', (req, res) => {
   res.render("141");
});
app.get('/deathCertificate/PUNAMDEVINAUTAN', (req, res) => {
   res.render("142");
});
app.get('/deathCertificate/RENUDEVINAUTAN', (req, res) => {
   res.render("143");
});
app.get('/deathCertificate/GAYTRIDEVINAUTAN', (req, res) => {
   res.render("144");
});
app.get('/deathCertificate/KRISHNAVATIDEVINAUTAN', (req, res) => {
   res.render("145");
});
app.get('/deathCertificate/USHADEVISHEOHAR', (req, res) => {
   res.render("146");
});
app.get('/deathCertificate/BIBHAKUMARISHEOHAR', (req, res) => {
   res.render("147");
});
app.get('/deathCertificate/KUNTIDEVISHEOHAR', (req, res) => {
   res.render("148");
});
app.get('/deathCertificate/REENADEVISHEOHAR', (req, res) => {
   res.render("149");
});
app.get('/deathCertificate/SANGITADEVISHEOHAR', (req, res) => {
   res.render("150");
});



app.get('/deathCertificate/SANJUDEVISHEOHAR', (req, res) => {
   res.render("151");
});
app.get('/deathCertificate/sarojdevinautan', (req, res) => {
   res.render("152");
});
app.get('/deathCertificate/RAGNIKUMARISHEOHAR', (req, res) => {
   res.render("153");
});
app.get('/deathCertificate/shardadevinautan', (req, res) => {
   res.render("154");
});
app.get('/deathCertificate/PARWATIDEVISHEOHAR', (req, res) => {
   res.render("155");
});
app.get('/deathCertificate/RAMBHADEVISHEOHAR', (req, res) => {
   res.render("156");
});
app.get('/deathCertificate/MARANIDEVISHEOHAR', (req, res) => {
   res.render("157");
});
app.get('/deathCertificate/manishakumarisheohar', (req, res) => {
   res.render("158");
});
app.get('/deathCertificate/anitadevisheohar', (req, res) => {
   res.render("159");
});
app.get('/deathCertificate/KAVITADEVISHEOHAR', (req, res) => {
   res.render("160");
});



// some route bug inside the section
app.get('/deathCertificate/nikkikumarisheohar', (req, res) => {
   res.render("161");
});
app.get('/deathCertificate/ANITADEVISHEOHAR', (req, res) => {
   res.render("162");
});
app.get('/deathCertificate/RANIDEVISHEOHAR', (req, res) => {
   res.render("163");
});
app.get('/deathCertificate/RAMKALIDEVISHEOHAR', (req, res) => {
   res.render("164");
});
app.get('/deathCertificate/MARADHIYAKHATUNSHEOHAR', (req, res) => {
   res.render("165");
});
app.get('/deathCertificate/KANTIKUMARISHEOHAR', (req, res) => {
   res.render("167");
});
app.get('/deathCertificate/PINKIDEVISHEOHAR', (req, res) => {
   res.render("166");
});
app.get('/deathCertificate/RINKUDEVISHEOHAR', (req, res) => {
   res.render("168");
});
app.get('/deathCertificate/PRIYANKADEVISHEOHAR', (req, res) => {
   res.render("169");
});
app.get('/deathCertificate/TABBSUMKHATUNSHEOHAR', (req, res) => {
   res.render("170");
});
app.get('/deathCertificate/LEELADEVISHEOHAR', (req, res) => {
   res.render("171");
});
app.get('/deathCertificate/ANITADEVISHEOHAR', (req, res) => {
   res.render("172");
});
app.get('/deathCertificate/REKHADEVISHEOHAR', (req, res) => {
   res.render("173");
});
app.get('/deathCertificate/CHANCHALADEVISHEOHAR', (req, res) => {
   res.render("174");
});
app.get('/deathCertificate/RAMSAKHIDEVISHEOAHAR', (req, res) => {
   res.render("175");
});
app.get('/deathCertificate/CHANDANIKUMARIMAHUAAGACHHI', (req, res) => {
   res.render("176");
});
app.get('/deathCertificate/NIRMALADEVIMAHUAAGACHHI1', (req, res) => {
   res.render("177");
});
app.get('/deathCertificate/SUMINDADEVIMAHUAAGACHHI3', (req, res) => {
   res.render("178");
});
app.get('/deathCertificate/PUTULDEVIMAHUAAGACHHI2', (req, res) => {
   res.render("179");
});
app.get('/deathCertificate/GITADEVIMAHUAAGACHHI2', (req, res) => {
   res.render("180");
});
app.get('/deathCertificate/ROKSHANAKHATUNMAHUAAGACHHI', (req, res) => {
   res.render("181");
});
app.get('/deathCertificate/SAMINDAKHATUNMAHUAAGACHHI', (req, res) => {
   res.render("182");
});
app.get('/deathCertificate/MANJUDEVIMAHUAAGACHHI', (req, res) => {
   res.render("183");
});
app.get('/deathCertificate/KIRANDEVIMAHUAAGACHHI1', (req, res) => {
   res.render("184");
});
app.get('/deathCertificate/RANIDEVIMAHUAAGACHHI', (req, res) => {
   res.render("185");
});
app.get('/deathCertificate/PRITIKUMARIMAHUAAGACHHI', (req, res) => {
   res.render("186");
});
app.get('/deathCertificate/PUNAMDEVISHEOHAR', (req, res) => {
   res.render("187");
});
app.get('/deathCertificate/ARTIDEVISHEOHAR', (req, res) => {
   res.render("188");
});
app.get('/deathCertificate/AMBIKAKUMARIMAHUAAGACHHI', (req, res) => {
   res.render("189");
});
app.get('/deathCertificate/SITAKUMARIMAHUAAGACHHI', (req, res) => {
   res.render("190");
});
app.get('/deathCertificate/SHAILKUMARIDEVIMAHUAGACHHI', (req, res) => {
   res.render("191");
});
app.get('/deathCertificate/RENUDEVIMAHUAAGACHHI', (req, res) => {
   res.render("192");
});
app.get('/deathCertificate/BIBHADEVIMAHUAGACHHI', (req, res) => {
   res.render("193");
});
app.get('/deathCertificate/ANITADEVIMAHUAAGACHHI', (req, res) => {
   res.render("194");
});
app.get('/deathCertificate/RUKMANIKUMARIMAHUAGACHHI', (req, res) => {
   res.render("195");
});
app.get('/deathCertificate/RANIKUMARIMAHUAGACHHI', (req, res) => {
   res.render("196");
});
app.get('/deathCertificate/VIBHAKUMARIJAGDISHPUR2', (req, res) => {
   res.render("197");
});
app.get('/deathCertificate/REKHAKUMARIJAGDISHPUR', (req, res) => {
   res.render("198");
});
app.get('/deathCertificate/ANITADEVIHARSIDHI', (req, res) => {
   res.render("199");
});
app.get('/deathCertificate/ANITADEVIMAHUAAGACHHI2', (req, res) => {
   res.render("201");
});
app.get('/deathCertificate/SARITADEVIHARSIDHI', (req, res) => {
   res.render("202");
});
app.get('/deathCertificate/CHHAYAKUMARIJAGDISHPUR', (req, res) => {
   res.render("203");
});
app.get('/deathCertificate/RITADEVIMAHUAAGACHHI', (req, res) => {
   res.render("204");
});
app.get('/deathCertificate/SITADEVISHEOHAR', (req, res) => {
   res.render("205");
});
app.get('/deathCertificate/KHAISAKHATUNSHEOHAR', (req, res) => {
   res.render("206");
});
app.get('/deathCertificate/SITADEVISHEOHAR2', (req, res) => {
   res.render("207");
});
app.get('/deathCertificate/LALITADEVISHEOHAR', (req, res) => {
   res.render("208");
});
app.get('/deathCertificate/ANITAKUMARISHEOHAR', (req, res) => {
   res.render("209");
});
app.get('/deathCertificate/KHUSHBUKUMARISHEOHAR', (req, res) => {
   res.render("210");
});
app.get('/deathCertificate/ANSHUKUMARISHEOHAR', (req, res) => {
   res.render("211");
});
app.get('/deathCertificate/PINKIKUMARISHEOHAR', (req, res) => {
   res.render("212");
});
app.get('/deathCertificate/RUBYDEVISHEOHAR', (req, res) => {
   res.render("213");
});
app.get('/deathCertificate/NIKYKUMARISHEOHAR', (req, res) => {
   res.render("214");
});
app.get('/deathCertificate/MADHUKUMARISHEOHAR', (req, res) => {
   res.render("215");
});
app.get('/deathCertificate/RUNADEVISHEOHAR', (req, res) => {
   res.render("216");
});
app.get('/deathCertificate/RUKHSANAKHATUNSHEOHAR', (req, res) => {
   res.render("217");
});
app.get('/deathCertificate/BINDUDEVISHEOHAR', (req, res) => {
   res.render("218");
});
app.get('/deathCertificate/RUPADEVISHEOHAR', (req, res) => {
   res.render("219");
});
app.get('/deathCertificate/RENUDEVISHEOHAR', (req, res) => {
   res.render("220");
});
app.get('/deathCertificate/URMILADEVISHEOHAR', (req, res) => {
   res.render("221");
});
app.get('/deathCertificate/RANIDEVISHEOHAR ', (req, res) => {
   res.render("222");
});
app.get('/deathCertificate/SONIKUMARISHEOHAR', (req, res) => {
   res.render("223");
});
app.get('/deathCertificate/RAMBHADEVISHEOHAR2', (req, res) => {
   res.render("224");
});
app.get('/deathCertificate/USHADEVIMOTIHARI', (req, res) => {
   res.render("225");
});
app.get('/deathCertificate/SHAHINAKHATUNMOTIHARI', (req, res) => {
   res.render("226");
});
app.get('/deathCertificate/KIRANDEVIMOTIHARI', (req, res) => {
   res.render("227");
});
app.get('/deathCertificate/SABAKHATUNMOTIHARI', (req, res) => {
   res.render("228");
});
app.get('/deathCertificate/VIDANTIDEVIMOTIHARI', (req, res) => {
   res.render("229");
});
app.get('/deathCertificate/SANGITADEVIMOTIHARI', (req, res) => {
   res.render("230");
});
app.get('/deathCertificate/RITADEVIMOTIHARI', (req, res) => {
   res.render("231");
});
app.get('/deathCertificate/MANISHADEVIMOTIHARI', (req, res) => {
   res.render("232");
});
app.get('/deathCertificate/ABIDAKHATUNMOTIHARI', (req, res) => {
   res.render("233");
});
app.get('/deathCertificate/MUNNIKHATUNMOTIHARI', (req, res) => {
   res.render("234");
});
app.get('/deathCertificate/GULSANARAMOTIHARI', (req, res) => {
   res.render("235");
});
app.get('/deathCertificate/KHUSHBOOTARAMOTIHARI', (req, res) => {
   res.render("236");
});
app.get('/deathCertificate/PUJAKUMARIMOTIHARI', (req, res) => {
   res.render("237");
});
app.get('/deathCertificate/RADHIKADEVIMOTIHARI', (req, res) => {
   res.render("238");
});
app.get('/deathCertificate/LALTIDEVIMOTIHARI', (req, res) => {
   res.render("239");
});
app.get('/deathCertificate/SIMADEVIMOTIHARI', (req, res) => {
   res.render("240");
});
app.get('/deathCertificate/SAHANARADEVIMOTIHARI', (req, res) => {
   res.render("241");
});
app.get('/deathCertificate/KANTIDEVIMOTIHARI', (req, res) => {
   res.render("242");
});
app.get('/deathCertificate/LAICHIDEVIMOTIHARI', (req, res) => {
   res.render("243");
});
app.get('/deathCertificate/HASBUNKHATUNMOTIHARI', (req, res) => {
   res.render("244");
});
app.get('/deathCertificate/KANCHANDEVIMOTIHARI', (req, res) => {
   res.render("245");
});
app.get('/deathCertificate/PUJADEVIMOTIHARI', (req, res) => {
   res.render("246");
});
app.get('/deathCertificate/SABYAKHATUNMOTIHARI', (req, res) => {
   res.render("247");
});
app.get('/deathCertificate/RINKUDEVIMOTIHARI', (req, res) => {
   res.render("248");
});
app.get('/deathCertificate/SUNAINADEVIMOTIHARI', (req, res) => {
   res.render("249");
});
app.get('/deathCertificate/MAMTADEVINAUTAN', (req, res) => {
   res.render("250");
});
app.get('/deathCertificate/SAMINAKHATUNNAUTAN', (req, res) => {
   res.render("251");
});
app.get('/deathCertificate/SHANTIDEVINAUTAN', (req, res) => {
   res.render("252");
});
app.get('/deathCertificate/ARTIDEVINAUTAN', (req, res) => {
   res.render("253");
});
app.get('/deathCertificate/SANGITAKUMARINAUTAN', (req, res) => {
   res.render("254");
});
app.get('/deathCertificate/BABITAKUMARINAUTAN', (req, res) => {
   res.render("255");
});
app.get('/deathCertificate/BILARDEVINAUTAN', (req, res) => {
   res.render("256");
});
app.get('/deathCertificate/SHAHJAHAKHUTNNAUTAN', (req, res) => {
   res.render("257");
});
app.get('/deathCertificate/CHANDADEVINAUTAN', (req, res) => {
   res.render("258");
});
app.get('/deathCertificate/LAXMIDEVINAUTAN', (req, res) => {
   res.render("259");
});
app.get('/deathCertificate/RIMAKUMARINAUTAN', (req, res) => {
   res.render("260");
});
app.get('/deathCertificate/SHIVPATTIDEVINAUTAN', (req, res) => {
   res.render("261");
});
app.get('/deathCertificate/GAYTRIDEVINAUTAN2', (req, res) => {
   res.render("262");
});
app.get('/deathCertificate/KAVITADEVINAUTAN', (req, res) => {
   res.render("263");
});
app.get('/deathCertificate/SUVASINIDEVINAUTAN', (req, res) => {
   res.render("264");
});
app.get('/deathCertificate/MUNNIDEVINAUTAN', (req, res) => {
   res.render("265");
});
app.get('/deathCertificate/GEETADEVINAUTAN', (req, res) => {
   res.render("266");
});
app.get('/deathCertificate/MALTIDEVINAUTAN', (req, res) => {
   res.render("267");
});
app.get('/deathCertificate/MEHNAKHATOONNAUTAN', (req, res) => {
   res.render("268");
});
app.get('/deathCertificate/USHADEVINAUTAN', (req, res) => {
   res.render("269");
});


app.get('/deathCertificate/KUMANTIDEVINAUTAN', (req, res) => {
   res.render("270");
});
app.get('/deathCertificate/MAYADEVINAUTAN', (req, res) => {
   res.render("271");
});
app.get('/deathCertificate/RITADEVINAUTAN', (req, res) => {
   res.render("272");
});
app.get('/deathCertificate/SATIDEVINAUTAN', (req, res) => {
   res.render("273");
});
app.get('/deathCertificate/SHOBHADEVINAUTAN', (req, res) => {
   res.render("274");
});



// Start the server
app.listen(port, () => {
  console.log(`${port}`);
});