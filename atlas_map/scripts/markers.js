//Map Layer Creation
var map = L.map('map').setView([0.000413, 0.00018], 24);
L.tileLayer('map/{z}/{x}/{y}.webp', {
    continuousWorld: false,
    noWrap: true,
    minZoom: 20,
    maxZoom: 25,
}).addTo(map);


/* //Dummy Coordinate Marker, uncomment if needing to find coordinates
var marker = L.marker([0.000413, 0.00018], {
    draggable: true,
}).addTo(map);
marker.bindPopup('LatLng Marker').openPopup();
marker.on('dragend', function(e) {
marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
}); */

//Custom Icons
var LocIcon = L.Icon.extend({
    options: {
        iconSize: [40, 40],
        popupAnchor: [10, 10]
    }
});

var capitol = new LocIcon({ iconUrl: 'icons/capitol.svg' });
var city = new LocIcon({ iconUrl: 'icons/city.svg' });
var forest = new LocIcon({ iconUrl: 'icons/forest.svg' });
var military = new LocIcon({ iconUrl: 'icons/military.svg' });
var mountain = new LocIcon({ iconUrl: 'icons/mountain.svg' });
var town = new LocIcon({ iconUrl: 'icons/town.svg' });
var village = new LocIcon({ iconUrl: 'icons/village.svg' });
var water = new LocIcon({ iconUrl: 'icons/water.svg' });
var home = new LocIcon({ iconUrl: 'icons/home.svg' });

/*
THE FOLLOWING ARE COORDINATE MARKER VARIABLES.
*/

/* Hesperides */
//Capitols

//Leonychus
var hes_cap_kardia = L.marker([0.000467, 0.000226], { icon: capitol }).bindPopup('<b>Kardia</b><p></p>');
var hes_cap_asaak = L.marker([0.000454, 0.000293], { icon: capitol }).bindPopup('<b>Asaak</b><p>The original capital of the country of Mithras which was split up into Mithras, Ghida, Mazraya, and Alziraya by Androcles Leonychus upon being conquered.</p>');
var hes_cap_kamran = L.marker([0.00044, 0.000291], { icon: capitol }).bindPopup('<b>Kamran</b><p></p>');
var hes_cap_tayakoli = L.marker([0.000447, 0.000274], { icon: capitol }).bindPopup('<b>Tayakoli</b><p></p>');
var hes_cap_enayat = L.marker([0.000437, 0.000277], { icon: capitol }).bindPopup('<b>Enayat</b><p></p>');
var hes_cap_orrin = L.marker([0.000429, 0.000292], { icon: capitol }).bindPopup('<b>Orrin</b><p>The original capital of the country of Eyrr which was split up into Eyrr, Vidir, Svima, and Virki by Androcles Leonychus upon being conquered.</p>');
var hes_cap_herlaug = L.marker([0.000425, 0.00028], { icon: capitol }).bindPopup('<b>Herlaug</b><p></p>');
var hes_cap_valdis = L.marker([0.00042, 0.000294], { icon: capitol }).bindPopup('<b>Valdis</b><p></p>');
var hes_cap_vili = L.marker([0.00042, 0.000299], { icon: capitol }).bindPopup('<b>Vili</b><p></p>');
var hes_cap_hallvard = L.marker([0.000419, 0.000279], { icon: capitol }).bindPopup('<b>Hallvard</b><p></p>');
var hes_cap_gildr = L.marker([0.000414, 0.000273], { icon: capitol }).bindPopup('<b>Gildr</b><p>The original capital of the country of Akkeri which was split up into Akkeri, Vilja, and Skjoldr by Androcles Leonychus upon being conquered.</p>');
var hes_cap_asketill = L.marker([0.000407, 0.000261], { icon: capitol }).bindPopup('<b>Asketill</b><p></p>');
var hes_cap_xanthos = L.marker([0.000423, 0.000249], { icon: capitol }).bindPopup('<b>Xanthos</b><p></p>');
var hes_cap_kydonia = L.marker([0.000427, 0.000253], { icon: capitol }).bindPopup('<b>Kydonia</b><p>The original capital of the country of Talamh which was split up into Kjoll, Talamh, Baideal, and Cuan by Androcles Leonychus upon being conquered.</p>');
var hes_cap_iasg = L.marker([0.00043, 0.000248], { icon: capitol }).bindPopup('<b>Iasg</b><p></p>');
var hes_cap_reumh = L.marker([0.000435, 0.000264], { icon: capitol }).bindPopup('<b>Reumh</b><p></p>');
var hes_cap_portcaishen = L.marker([0.000447, 0.000235], { icon: capitol }).bindPopup('<b>Port Caishen</b><p>Primary trading hub of the empire with expansive seafaring and airfaring ports. All trade must first be catalogued and approved by imperial customs at this port before proceeding to its final destination.</p>');

//Floraison
var hes_cap_pessac = L.marker([0.000396, 0.000272], { icon: capitol }).bindPopup('<b>Pessac</b><p></p>');

//Cities

//Leonychus
var hes_cit_callipolis = L.marker([0.000459, 0.000215], { icon: city }).bindPopup('<b>Callipolis</b><p></p>');
var hes_cit_apollonia = L.marker([0.000467, 0.000237], { icon: city }).bindPopup('<b>Apollonia</b><p></p>');
var hes_cit_ambrosius = L.marker([0.000459, 0.00026], { icon: city }).bindPopup('<b>Ambrosius</b><p></p>');
var hes_cit_isfahan = L.marker([0.000451, 0.000288], { icon: city }).bindPopup('<b>Isfahan</b><p></p>');
var hes_cit_abbasi = L.marker([0.000448, 0.000292], { icon: city }).bindPopup('<b>Abbasi</b><p></p>');
var hes_cit_reza = L.marker([0.000445, 0.000285], { icon: city }).bindPopup('<b>Reza</b><p></p>');
var hes_cit_arzhang = L.marker([0.000451, 0.000272], { icon: city }).bindPopup('<b>Arzhang</b><p></p>');
var hes_cit_javad = L.marker([0.000436, 0.000295], { icon: city }).bindPopup('<b>Javad</b><p></p>');
var hes_cit_mar = L.marker([0.000429, 0.000298], { icon: city }).bindPopup('<b>Mar</b><p></p>');
var hes_cit_birstan = L.marker([0.000423, 0.00029], { icon: city }).bindPopup('<b>Birstan</b><p></p>');
var hes_cit_grimar = L.marker([0.000419, 0.000287], { icon: city }).bindPopup('<b>Grimar</b><p></p>');
var hes_cit_hrelling = L.marker([0.000412, 0.000268], { icon: city }).bindPopup('<b>Hrelling</b><p></p>');
var hes_cit_raghnall = L.marker([0.000412, 0.000247], { icon: city }).bindPopup('<b>Raghnall</b><p></p>');
var hes_cit_ainmire = L.marker([0.000415, 0.000241], { icon: city }).bindPopup('<b>Ainmire</b><p></p>');
var hes_cit_clothach = L.marker([0.000426, 0.000262], { icon: city }).bindPopup('<b>Clothach</b><p></p>');
var hes_cit_oldcliff = L.marker([0.000445, 0.00023], { icon: city }).bindPopup('<b>Oldcliff</b><p></p>');

//Floraison
var hes_cit_daxcitadel = L.marker([0.000399, 0.000272], { icon: city }).bindPopup('<b>Dax Citadel</b><p></p>');
var hes_cit_talence = L.marker([0.000391, 0.000284], { icon: city }).bindPopup('<b>Talence</b><p></p>');
var hes_cit_veritas = L.marker([0.000385, 0.000267], { icon: city }).bindPopup('<b>Veritas</b><p></p>');

//Forests
//Leonychus
var hes_for_frostnorthtimberland = L.marker([0.000469, 0.000257], { icon: forest }).bindPopup('<b>Frostnorth Timberland</b><p></p>');
var hes_for_mapleridgegrove = L.marker([0.000454, 0.000289], { icon: forest }).bindPopup('<b>Mapleridge Groves</b><p></p>');
var hes_for_nmagewilds = L.marker([0.000404, 0.000263], { icon: forest }).bindPopup('<b>Northern Magewilds</b><p></p>');
var hes_for_bonadenforest = L.marker([0.000417, 0.000245], { icon: forest }).bindPopup('<b>Bonaden Forest</b><p></p>');

//Floraison
var hes_for_smagewilds = L.marker([0.000386, 0.000273], { icon: forest }).bindPopup('<b>Southern Magewilds</b><p></p>');


//Military Installations
//Leonychus
var hes_mil_duzakh = L.marker([0.000482, 0.000252], { icon: military }).bindPopup('<b>Duzakh</b><p></p>');
var hes_mil_alder = L.marker([0.00046, 0.00022], { icon: military }).bindPopup('<b>Fort Alder</b><p></p>');
var hes_mil_craven = L.marker([0.000463, 0.000209], { icon: military }).bindPopup('<b>Fort Craven</b><p></p>');
var hes_mil_quartermain = L.marker([0.000485, 0.00022], { icon: military }).bindPopup('<b>Fort Quartermain</b><p></p>');
var hes_mil_khalida = L.marker([0.00047, 0.000294], { icon: military }).bindPopup('<b>Fort Khalida</b><p></p>');
var hes_mil_hughes = L.marker([0.000456, 0.000295], { icon: military }).bindPopup('<b>Fort Hughes</b><p></p>');
var hes_mil_adil = L.marker([0.000466, 0.000242], { icon: military }).bindPopup('<b>Fort Adil</b><p></p>');
var hes_mil_yancey = L.marker([0.000446, 0.000234], { icon: military }).bindPopup('<b>Fort Yancey</b><p></p>');
var hes_mil_arcturus = L.marker([0.00044, 0.000234], { icon: military }).bindPopup('<b>Fort Arcturus</b><p></p>');
var hes_mil_lim = L.marker([0.000434, 0.000298], { icon: military }).bindPopup('<b>Fort Lim</b><p></p>');
var hes_mil_wil = L.marker([0.000424, 0.000298], { icon: military }).bindPopup('<b>Fort Wil</b><p></p>');
var hes_mil_dy = L.marker([0.000413, 0.000299], { icon: military }).bindPopup('<b>Fort Dy</b><p></p>');
var hes_mil_buttonwood = L.marker([0.000402, 0.000279], { icon: military }).bindPopup('<b>Fort Buttonwood</b><p></p>');
var hes_mil_batan = L.marker([0.000404, 0.000264], { icon: military }).bindPopup('<b>Fort Batan</b><p></p>');
var hes_mil_swythe = L.marker([0.000409, 0.000251], { icon: military }).bindPopup('<b>Fort Swythe</b><p></p>');
var hes_mil_vera = L.marker([0.000411, 0.000241], { icon: military }).bindPopup('<b>Fort Vera</b><p></p>');
var hes_mil_halliwell = L.marker([0.00043, 0.000244], { icon: military }).bindPopup('<b>Fort Halliwell</b><p></p>');
var hes_mil_holm = L.marker([0.00046, 0.000278], { icon: military }).bindPopup('<b>Fort Holm</b><p></p>');

//Floraison
var hes_mil_dormont = L.marker([0.000402, 0.000274], { icon: military }).bindPopup('<b>Fort d\'Ormont</b><p></p>');
var hes_mil_dalen = L.marker([0.000401, 0.000267], { icon: military }).bindPopup('<b>Fort d\'Alen</b><p></p>');
var hes_mil_arlot = L.marker([0.000399, 0.000264], { icon: military }).bindPopup('<b>Fort Arlot</b><p></p>');
var hes_mil_risban = L.marker([0.000396, 0.000262], { icon: military }).bindPopup('<b>Fort Risban</b><p></p>');
var hes_mil_daurore = L.marker([0.000391, 0.000262], { icon: military }).bindPopup('<b>Fort d\'Aurore</b><p></p>');
var hes_mil_mahon = L.marker([0.000381, 0.000273], { icon: military }).bindPopup('<b>Fort Mahon</b><p></p>');
var hes_mil_despoir = L.marker([0.000386, 0.00026], { icon: military }).bindPopup('<b>Fort d\'Espoir</b><p></p>');
var hes_mil_dorages = L.marker([0.000394, 0.000286], { icon: military }).bindPopup('<b>Fort d\'Orages</b><p></p>');
var hes_mil_calais = L.marker([0.000399, 0.000278], { icon: military }).bindPopup('<b>Fort Calais</b><p></p>');
var hes_mil_dos = L.marker([0.0004, 0.000265], { icon: military }).bindPopup('<b>Fort d\'Os</b><p></p>');

//Mountains
//Leonychus
var hes_mtn_alagar = L.marker([0.000494, 0.000267], { icon: mountain }).bindPopup('<b>Alagar Mountains</b><p></p>');
var hes_mtn_racroft = L.marker([0.000482, 0.000274], { icon: mountain }).bindPopup('<b>Racroft Mountains</b><p></p>');
var hes_mtn_saldiac = L.marker([0.00048, 0.000236], { icon: mountain }).bindPopup('<b>Saldiac Mountains</b><p></p>');
var hes_mtn_exquet = L.marker([0.000422, 0.000252], { icon: mountain }).bindPopup('<b>Exquet Mountains</b><p></p>');

//Floraison
var hes_mtn_tolsay = L.marker([0.000399, 0.00027], { icon: mountain }).bindPopup('<b>Tolsay Mountains</b><p></p>');
var hes_mtn_mannach = L.marker([0.000391, 0.00027], { icon: mountain }).bindPopup('<b>Mannach Mountains</b><p></p>');

//Towns
//Leonychus
var hes_tow_abydos = L.marker([0.000469, 0.000219], { icon: town }).bindPopup('<b>Abydos</b><p></p>');
var hes_tow_rivermeet = L.marker([0.000473, 0.000259], { icon: town }).bindPopup('<b>Rivermeet</b><p></p>');
var hes_tow_heloros = L.marker([0.00046, 0.000264], { icon: town }).bindPopup('<b>Heloros</b><p></p>');
var hes_tow_itanos = L.marker([0.000464, 0.000272], { icon: town }).bindPopup('<b>Itanos</b><p></p>');
var hes_tow_salamis = L.marker([0.000464, 0.000284], { icon: town }).bindPopup('<b>Salamis</b><p></p>');
var hes_tow_mountmead = L.marker([0.000467, 0.000294], { icon: town }).bindPopup('<b>Mountmead</b><p></p>');
var hes_tow_fahraj = L.marker([0.000449, 0.000295], { icon: town }).bindPopup('<b>Fahraj</b><p></p>');
var hes_tow_bayat = L.marker([0.00045, 0.000284], { icon: town }).bindPopup('<b>Bayat</b><p></p>');
var hes_tow_majid = L.marker([0.000446, 0.00028], { icon: town }).bindPopup('<b>Majid</b><p></p>');
var hes_tow_siavash = L.marker([0.000445, 0.00027], { icon: town }).bindPopup('<b>Siavash</b><p></p>');
var hes_tow_parsa = L.marker([0.000442, 0.000268], { icon: town }).bindPopup('<b>Parsa</b><p></p>');
var hes_tow_eleyphis = L.marker([0.000438, 0.000271], { icon: town }).bindPopup('<b>Eleyphis</b><p></p>');
var hes_tow_adaron = L.marker([0.000439, 0.000284], { icon: town }).bindPopup('<b>Adaron</b><p></p>');
var hes_tow_andvett = L.marker([0.000433, 0.000294], { icon: town }).bindPopup('<b>Andvett</b><p></p>');
var hes_tow_vidkunn = L.marker([0.000424, 0.000286], { icon: town }).bindPopup('<b>Vidkunn</b><p></p>');
var hes_tow_hadd = L.marker([0.000415, 0.000296], { icon: town }).bindPopup('<b>Hadd</b><p></p>');
var hes_tow_agmundr = L.marker([0.000416, 0.000278], { icon: town }).bindPopup('<b>Agmundr</b><p></p>');
var hes_tow_naddod = L.marker([0.000408, 0.000281], { icon: town }).bindPopup('<b>Naddod</b><p></p>');
var hes_tow_seakirk = L.marker([0.000407, 0.000277], { icon: town }).bindPopup('<b>Seakirk</b><p></p>');
var hes_tow_borstig = L.marker([0.000407, 0.000269], { icon: town }).bindPopup('<b>Borstig</b><p></p>');
var hes_tow_minka = L.marker([0.000417, 0.000264], { icon: town }).bindPopup('<b>Minka</b><p></p>');
var hes_tow_ayamonn = L.marker([0.000413, 0.000254], { icon: town }).bindPopup('<b>Ayamonn</b><p></p>');
var hes_tow_lochlainn = L.marker([0.000423, 0.000247], { icon: town }).bindPopup('<b>Lochlainn</b><p></p>');
var hes_tow_carhal = L.marker([0.000432, 0.000248], { icon: town }).bindPopup('<b>town_name</b><p></p>');

//Floraison
var hes_tow_ramsay = L.marker([0.000389, 0.000261], { icon: town }).bindPopup('<b>Ramsay</b><p></p>');
var hes_tow_bellegarde = L.marker([0.000392, 0.000274], { icon: town }).bindPopup('<b>Bellegarde</b><p></p>');
var hes_tow_rachdale = L.marker([0.000383, 0.000278], { icon: town }).bindPopup('<b>Rachdale</b><p></p>');

//Villages
//Leonychus
var hes_vil_rizinia = L.marker([0.000462, 0.00021], { icon: village }).bindPopup('<b>Rizinia</b><p></p>');
var hes_vil_pitane = L.marker([0.000463, 0.000217], { icon: village }).bindPopup('<b>Pitane</b><p></p>');
var hes_vil_hewe = L.marker([0.000473, 0.000224], { icon: village }).bindPopup('<b>Hewe</b><p></p>');
var hes_vil_frostedge = L.marker([0.000474, 0.00023], { icon: village }).bindPopup('<b>Frostedge</b><p></p>');
var hes_vil_crescentvalley = L.marker([0.000476, 0.000234], { icon: village }).bindPopup('<b>Crescent Valley</b><p></p>');
var hes_vil_escarcha = L.marker([0.000475, 0.000243], { icon: village }).bindPopup('<b>Escarcha</b><p></p>');
var hes_vil_pinonera = L.marker([0.000471, 0.000248], { icon: village }).bindPopup('<b>Pi??onera</b><p></p>');
var hes_vil_penketh = L.marker([0.000492, 0.000247], { icon: village }).bindPopup('<b>Penketh</b><p></p>');
var hes_vil_holmfirth = L.marker([0.000494, 0.000258], { icon: village }).bindPopup('<b>Holmfirth</b><p></p>');
var hes_vil_skegness = L.marker([0.000497, 0.00027], { icon: village }).bindPopup('<b>Skegness</b><p></p>');
var hes_vil_sutton = L.marker([0.000495, 0.000274], { icon: village }).bindPopup('<b>Sutton</b><p></p>');
var hes_vil_galdreth = L.marker([0.000493, 0.000277], { icon: village }).bindPopup('<b>Galdreth</b><p></p>');
var hes_vil_kilead = L.marker([0.000492, 0.000276], { icon: village }).bindPopup('<b>Kilead</b><p></p>');
var hes_vil_exeter = L.marker([0.000491, 0.000277], { icon: village }).bindPopup('<b>Exeter</b><p></p>');
var hes_vil_valledediamante = L.marker([0.000487, 0.000268], { icon: village }).bindPopup('<b>Valle de Diamante</b><p></p>');
var hes_vil_kinrith = L.marker([0.000488, 0.000287], { icon: village }).bindPopup('<b>Kinrith</b><p></p>');
var hes_vil_makrinos = L.marker([0.000485, 0.000282], { icon: village }).bindPopup('<b>Makrinos</b><p></p>');
var hes_vil_heartwood = L.marker([0.000481, 0.00027], { icon: village }).bindPopup('<b>Heartwood</b><p></p>');
var hes_vil_kald = L.marker([0.000472, 0.000273], { icon: village }).bindPopup('<b>Kald</b><p></p>');
var hes_vil_claethorpes = L.marker([0.000462, 0.000248], { icon: village }).bindPopup('<b>Claethorpes</b><p></p>');
var hes_vil_oakwood = L.marker([0.000461, 0.000251], { icon: village }).bindPopup('<b>Oakwood</b><p></p>');
var hes_vil_greenedge = L.marker([0.000468, 0.000265], { icon: village }).bindPopup('<b>Greenedge</b><p></p>');
var hes_vil_tarradale = L.marker([0.000468, 0.000275], { icon: village }).bindPopup('<b>Tarradale</b><p></p>');
var hes_vil_stratos = L.marker([0.000467, 0.000289], { icon: village }).bindPopup('<b>Stratos</b><p></p>');
var hes_vil_sybaris = L.marker([0.000463, 0.000293], { icon: village }).bindPopup('<b>Sybaris</b><p></p>');
var hes_vil_akylas = L.marker([0.000461, 0.000289], { icon: village }).bindPopup('<b>Akylas</b><p></p>');
var hes_vil_dumajran = L.marker([0.000458, 0.000294], { icon: village }).bindPopup('<b>Dumajran</b><p></p>');
var hes_vil_ganzak = L.marker([0.000448, 0.000283], { icon: village }).bindPopup('<b>Ganzak</b><p></p>');
var hes_vil_dvin = L.marker([0.000446, 0.000288], { icon: village }).bindPopup('<b>Dvin</b><p></p>');
var hes_vil_daving = L.marker([0.000442, 0.000271], { icon: village }).bindPopup('<b>Daving</b><p></p>');
var hes_vil_lauterbrunnen = L.marker([0.000434, 0.000282], { icon: village }).bindPopup('<b>Lauterbrunnen</b><p></p>');
var hes_vil_hillstop = L.marker([0.000436, 0.00029], { icon: village }).bindPopup('<b>Hillstop</b><p></p>');
var hes_vil_gudleif = L.marker([0.000433, 0.000288], { icon: village }).bindPopup('<b>Gudleif</b><p></p>');
var hes_vil_surt = L.marker([0.000432, 0.000284], { icon: village }).bindPopup('<b>Surt</b><p></p>');
var hes_vil_oddny = L.marker([0.000429, 0.000282], { icon: village }).bindPopup('<b>Oddny</b><p></p>');
var hes_vil_sigewulf = L.marker([0.000429, 0.000287], { icon: village }).bindPopup('<b>Sigewulf</b><p></p>');
var hes_vil_ulfheid = L.marker([0.000426, 0.000286], { icon: village }).bindPopup('<b>Uldheid</b><p></p>');
var hes_vil_eivor = L.marker([0.000426, 0.000291], { icon: village }).bindPopup('<b>Eivor</b><p></p>');
var hes_vil_synin = L.marker([0.000425, 0.000297], { icon: village }).bindPopup('<b>Synin</b><p></p>');
var hes_vil_stowe = L.marker([0.000421, 0.000288], { icon: village }).bindPopup('<b>Stowe</b><p></p>');
var hes_vil_lodbrok = L.marker([0.000421, 0.000294], { icon: village }).bindPopup('<b>Lodbrok</b><p></p>');
var hes_vil_midplains = L.marker([0.000413, 0.000294], { icon: village }).bindPopup('<b>Midplains</b><p></p>');
var hes_vil_dracfield = L.marker([0.000409, 0.00029], { icon: village }).bindPopup('<b>Dracfield</b><p></p>');
var hes_vil_shieling = L.marker([0.000412, 0.000285], { icon: village }).bindPopup('<b>Shieling</b><p></p>');
var hes_vil_eldham = L.marker([0.000411, 0.000281], { icon: village }).bindPopup('<b>Eldham</b><p></p>');
var hes_vil_farmersfield = L.marker([0.000418, 0.00027], { icon: village }).bindPopup('<b>Farmer\'s Field</b><p></p>');
var hes_vil_steinn = L.marker([0.00041, 0.000277], { icon: village }).bindPopup('<b>Steinn</b><p></p>');
var hes_vil_wavefront = L.marker([0.000404, 0.000279], { icon: village }).bindPopup('<b>Wavefront</b><p></p>');
var hes_vil_astrakane = L.marker([0.000404, 0.000268], { icon: village }).bindPopup('<b>Astrakane</b><p></p>');
var hes_vil_sakerkeep = L.marker([0.000405, 0.000259], { icon: village }).bindPopup('<b>Saker Keep</b><p></p>');
var hes_vil_willsden = L.marker([0.000409, 0.000263], { icon: village }).bindPopup('<b>Willsden</b><p></p>');
var hes_vil_yngvar = L.marker([0.000413, 0.000262], { icon: village }).bindPopup('<b>Yngvar</b><p></p>');
var hes_vil_cainnech = L.marker([0.000416, 0.000256], { icon: village }).bindPopup('<b>Cainneach</b><p></p>');
var hes_vil_teigue = L.marker([0.000415, 0.000248], { icon: village }).bindPopup('<b>Teigue</b><p></p>');
var hes_vil_tierney = L.marker([0.000411, 0.000243], { icon: village }).bindPopup('<b>Tierney</b><p></p>');
var hes_vil_coalville = L.marker([0.000424, 0.000257], { icon: village }).bindPopup('<b>Coalville</b><p></p>');
var hes_vil_defalls = L.marker([0.000428, 0.000245], { icon: village }).bindPopup('<b>Defalls</b><p></p>');
var hes_vil_muiris = L.marker([0.00043, 0.00025], { icon: village }).bindPopup('<b>Muiris</b><p></p>');
var hes_vil_muireach = L.marker([0.000431, 0.000256], { icon: village }).bindPopup('<b>Muireach</b><p></p>');
var hes_vil_daire = L.marker([0.000432, 0.000255], { icon: village }).bindPopup('<b>Daire</b><p></p>');
var hes_vil_estebahia = L.marker([0.000428, 0.000262], { icon: village }).bindPopup('<b>Estebah??a</b><p></p>');
var hes_vil_gagoza = L.marker([0.000432, 0.000259], { icon: village }).bindPopup('<b>Gagoza</b><p></p>');
var hes_vil_cassair = L.marker([0.000433, 0.000259], { icon: village }).bindPopup('<b>Cassair</b><p></p>');
var hes_vil_labhras = L.marker([0.000433, 0.000266], { icon: village }).bindPopup('<b>Labhras</b><p></p>');
var hes_vil_islasalvaje = L.marker([0.000431, 0.000265], { icon: village }).bindPopup('<b>Isla Salvaje</b><p></p>');
var hes_vil_norcoast = L.marker([0.000448, 0.00023], { icon: village }).bindPopup('<b>Norcoast</b><p></p>');
var hes_vil_dorton = L.marker([0.000442, 0.000236], { icon: village }).bindPopup('<b>Dorton</b><p></p>');
var hes_vil_toftanes = L.marker([0.00044, 0.000239], { icon: village }).bindPopup('<b>Toftanes</b><p></p>');

//Floraison
var hes_vil_caen = L.marker([0.000399, 0.000268], { icon: village }).bindPopup('<b>Caen</b><p></p>');
var hes_vil_calucon = L.marker([0.000397, 0.000277], { icon: village }).bindPopup('<b>Calu??on</b><p></p>');
var hes_vil_vannes = L.marker([0.000397, 0.000265], { icon: village }).bindPopup('<b>Vannes</b><p></p>');
var hes_vil_orlak = L.marker([0.000388, 0.000266], { icon: village }).bindPopup('<b>Orlak</b><p></p>');
var hes_vil_larkinge = L.marker([0.000388, 0.000271], { icon: village }).bindPopup('<b>Larkinge</b><p></p>');
var hes_vil_briarrose = L.marker([0.000384, 0.000271], { icon: village }).bindPopup('<b>Briar Rose</b><p></p>');
var hes_vil_aramore = L.marker([0.00039, 0.000276], { icon: village }).bindPopup('<b>Aramore</b><p></p>');
var hes_vil_carlisle = L.marker([0.000395, 0.000281], { icon: village }).bindPopup('<b>Carlise</b><p></p>');
var hes_vil_honfleur = L.marker([0.000392, 0.000286], { icon: village }).bindPopup('<b>Honfleur</b><p></p>');

//Bodies of Water
//Leonychus
var hes_wat_baybaie = L.marker([0.000455, 0.000276], { icon: water }).bindPopup('<b>Bay Baie</b><p>Bay Baie was named after an imperial army general tried to extend an olive branch to locals by getting their input on naming for this bay. The locals, enraged at the warring Leonychus Empire and their expansionist policies, decided to play the general for a fool. The name, predictably, translates to, "Bay Bay."</p>');
var hes_wat_horseshoebay = L.marker([0.000428, 0.000271], { icon: water }).bindPopup('<b>Horseshoe Bay</b><p></p>');
var hes_wat_lionclawbay = L.marker([0.000463, 0.000228], { icon: water }).bindPopup('<b>Lionclaw Bay</b><p></p>');
var hes_wat_kilhstedtbay = L.marker([0.000468, 0.000215], { icon: water }).bindPopup('<b>Kihlstedt Bay</b><p></p>');
var hes_wat_bayoflove = L.marker([0.000478, 0.000254], { icon: water }).bindPopup('<b>Bay of Love</b><p>Named as such because of the shape of the bay. Has been seen as cruelly ironic since the establishment of Duzakh.</p>');
var hes_wat_daoimeanach = L.marker([0.000489, 0.00027], { icon: water }).bindPopup('<b>Daoimeanach</b><p>Derived from Sylvan roots which roughly translate to, \'filled with diamonds.\'</p>');
var hes_wat_sirenbay = L.marker([0.000478, 0.000288], { icon: water }).bindPopup('<b>Siren Bay</b><p></p>');
var hes_wat_lakealeyse = L.marker([0.000404, 0.000272], { icon: water }).bindPopup('<b>Lake Aleyse</b><p></p>');
var hes_wat_blackpoolbay = L.marker([0.000402, 0.000284], { icon: water }).bindPopup('<b>Blackpool Bay</b><p></p>');
//Floraison
var hes_wat_baiedonica = L.marker([0.000387, 0.000283], { icon: water }).bindPopup('<b>Baie Donica</b><p></p>');

/* Knife's Edge */
//Capitols

//Cities
var kni_cit_frostmoor = L.marker([0.00048, 0.0001], { icon: city }).bindPopup('<b>Frostmoor</b><p></p>');
var kni_cit_hayle = L.marker([0.000485, 0.000177], { icon: city }).bindPopup('<b>Hayle</b><p></p>');

//Forests
var kni_for_manitouforest = L.marker([0.000483, 0.000164], { icon: forest }).bindPopup('<b>Manitou Forest</b><p></p>');
var kni_for_blackiceforest = L.marker([0.000486, 0.000105], { icon: forest }).bindPopup('<b>Blackice Forest</b><p></p>');
var kni_for_marlwoods = L.marker([0.000488, 0.000192], { icon: forest }).bindPopup('<b>Marlwoods</b><p></p>');
var kni_for_wynnorawoods = L.marker([0.000476, 0.000204], { icon: forest }).bindPopup('<b>Wynnora Woods</b><p></p>');

//Military Installations
var kni_mil_fortbellweather = L.marker([0.000479, 0.000164], { icon: military }).bindPopup('<b>Fort Bellweather</b><p></p>');

//Mountains
var kni_mtn_sharpcliff = L.marker([0.00049, 0.000158], { icon: mountain }).bindPopup('<b>Sharpcliff Mountains</b><p></p>');
var kni_mtn_icebreak = L.marker([0.000493, 0.000109], { icon: mountain }).bindPopup('<b>Icebreak Mountains</b><p></p>');
var kni_mtn_suscona = L.marker([0.00047, 0.000149], { icon: mountain }).bindPopup('<b>Mount Suscona</b><p></p>');
var kni_mtn_alsano = L.marker([0.000476, 0.000114], { icon: mountain }).bindPopup('<b>Mount Alsano</b><p></p>');

//Towns
var kni_tow_craydon = L.marker([0.000477, 0.000172], { icon: town }).bindPopup('<b>Craydon</b><p></p>');
var kni_tow_whithost = L.marker([0.000476, 0.000201], { icon: town }).bindPopup('<b>Whithost</b><p></p>');
var kni_tow_bearspire = L.marker([0.000488, 0.000159], { icon: town }).bindPopup('<b>Bearspire</b><p></p>');

//Villages
var kni_vil_colflora = L.marker([0.000474, 0.000176], { icon: village }).bindPopup('<b>Colflora</b><p></p>');
var kni_vil_avalgard = L.marker([0.000492, 0.000161], { icon: village }).bindPopup('<b>Avalgard</b><p></p>');
var kni_vil_neverthaw = L.marker([0.000495, 0.000099], { icon: village }).bindPopup('<b>Neverthaw</b><p></p>');
var kni_vil_chillcrest = L.marker([0.000495, 0.000087], { icon: village }).bindPopup('<b>Chillcrest</b><p></p>');
var kni_vil_windbreak = L.marker([0.000494, 0.000115], { icon: village }).bindPopup('<b>Windbreak</b><p></p>');
var kni_vil_flurris = L.marker([0.000483, 0.000069], { icon: village }).bindPopup('<b>Flurris</b><p></p>');
var kni_vil_cloudscar = L.marker([0.000493, 0.000151], { icon: village }).bindPopup('<b>Cloudscar</b><p></p>');

//Bodies of Water
var kni_wat_direstrait = L.marker([0.000488, 0.000143], { icon: water }).bindPopup('<b>The Dire Strait</b><p></p>');
var kni_wat_gulfofbexmack = L.marker([0.000481, 0.000175], { icon: water }).bindPopup('<b>Gulf of Bexmack</b><p></p>');
var kni_wat_turmontbay = L.marker([0.000484, 0.000119], { icon: water }).bindPopup('<b>Turmont Bay</b><p></p>');
var kni_wat_weslinetbay = L.marker([0.000479, 0.000109], { icon: water }).bindPopup('<b>Weslinet Bay</b><p></p>');
var kni_wat_scarrockocean = L.marker([0.000495, 0.000148], { icon: water }).bindPopup('<b>Scarrock Ocean</b><p></p>');
var kni_wat_coldscalelake = L.marker([0.000487, 0.000168], { icon: water }).bindPopup('<b>Lake Coldscale</b><p></p>');

/* Lamorra */
//Capitols
var lam_cap_morolihm = L.marker([0.000411, 0.00013], { icon: capitol }).bindPopup('<b>Morolihm</b><p></p>');
var lam_cap_bhaabrun = L.marker([0.000444, 0.000169], { icon: capitol }).bindPopup('<b>Bha\'Abrun</b><p></p>');

//Cities
var lam_cit_kukulded = L.marker([0.000401, 0.000113], { icon: city }).bindPopup('<b>Kukulded</b><p></p>');
var lam_cit_gorgari = L.marker([0.000391, 0.000123], { icon: city }).bindPopup('<b>Gorgari</b><p></p>');
var lam_cit_dhinabul = L.marker([0.000436, 0.000143], { icon: city }).bindPopup('<b>Dhin Abul</b><p></p>');
var lam_cit_dhagruumsh = L.marker([0.000436, 0.000186], { icon: city }).bindPopup('<b>Dha\'Gruumsh</b><p></p>');
var lam_cit_mitamum = L.marker([0.00045, 0.000206], { icon: city }).bindPopup('<b>Mitamum</b><p></p>');
var lam_cit_zeccarid = L.marker([0.00046, 0.000193], { icon: city }).bindPopup('<b>Zeccarid</b><p></p>');
var lam_cit_ganvezag = L.marker([0.000453, 0.000129], { icon: city }).bindPopup('<b>Gan Vezag</b><p></p>');

//Forests
var lam_for_giltaraforest = L.marker([0.000404, 0.000128], { icon: forest }).bindPopup('<b>Giltara Forest</b><p></p>');
var lam_for_saltsidetimberland = L.marker([0.00045, 0.000175], { icon: forest }).bindPopup('<b>Saltside Timberland</b><p></p>');
var lam_for_lunenmistforest = L.marker([0.000433, 0.000203], { icon: forest }).bindPopup('<b>Lunenmist Forest</b><p></p>');
var lam_for_sunstahlwoods = L.marker([0.000446, 0.000206], { icon: forest }).bindPopup('<b>Sunstahl Woods</b><p></p>');
var lam_for_eastalboiagrove = L.marker([0.000456, 0.000135], { icon: forest }).bindPopup('<b>West Alboia Grove</b><p></p>');
var lam_for_westalboiagrove = L.marker([0.000458, 0.000149], { icon: forest }).bindPopup('<b>East Alboia Grove</b><p></p>');

//Military Installations
var lam_mil_ulazun = L.marker([0.000392, 0.000128], { icon: military }).bindPopup('<b>Ul\'Azun</b><p></p>');
var lam_mil_uligoz = L.marker([0.000436, 0.000139], { icon: military }).bindPopup('<b>Ul\'Igoz</b><p></p>');
var lam_mil_ulgurza = L.marker([0.000411, 0.000179], { icon: military }).bindPopup('<b>Ul\'Gurza</b><p></p>');
var lam_mil_ulakan = L.marker([0.000424, 0.000189], { icon: military }).bindPopup('<b>Ul\'Alkan</b><p></p>');
var lam_mil_ulnodke = L.marker([0.000428, 0.000199], { icon: military }).bindPopup('<b>Ul\'Nodke</b><p></p>');
var lam_mil_ulkebuz = L.marker([0.000431, 0.000204], { icon: military }).bindPopup('<b>Ul\'Kebuz</b><p></p>');
var lam_mil_ulalkan = L.marker([0.000441, 0.000207], { icon: military }).bindPopup('<b>Ul\'Alkan</b><p></p>');
var lam_mil_ulghuz = L.marker([0.000449, 0.000207], { icon: military }).bindPopup('<b>Ul\'Ghuz</b><p></p>');
var lam_mil_elerran = L.marker([0.00046, 0.000194], { icon: military }).bindPopup('<b>Ul\'Erran</b><p></p>');
var lam_mil_ulzalfari = L.marker([0.000457, 0.000186], { icon: military }).bindPopup('<b>Ul\'Zalfari</b><p></p>');
var lam_mil_ultow = L.marker([0.000449, 0.000162], { icon: military }).bindPopup('<b>Ul\'Tow</b><p></p>');
var lam_mil_ulharan = L.marker([0.000439, 0.000154], { icon: military }).bindPopup('<b>Ul\'Haran</b><p></p>');
var lam_mil_ulzeffari = L.marker([0.000451, 0.000154], { icon: military }).bindPopup('<b>Ul\'Zeffari</b><p></p>');
var lam_mil_ulimir = L.marker([0.000461, 0.000151], { icon: military }).bindPopup('<b>Ul\'Imir</b><p></p>');
var lam_mil_ulkey = L.marker([0.00045, 0.000134], { icon: military }).bindPopup('<b>Ul\'Key</b><p></p>');
var lam_mil_ultenby = L.marker([0.000461, 0.000125], { icon: military }).bindPopup('<b>Ul\'Tenby</b><p></p>');
var lam_mil_ulkadug = L.marker([0.00046, 0.000137], { icon: military }).bindPopup('<b>Ul\'Kadug</b>');

//Mountains
var lam_mtn_uram = L.marker([0.00044, 0.000179], { icon: mountain }).bindPopup('<b>Uram Mountains</b><p></p>');
var lam_mtn_dulpeaks = L.marker([0.000456, 0.000144], { icon: mountain }).bindPopup('<b>Dulpeaks</b><p></p>');

//Towns
var lam_tow_loccuzen = L.marker([0.000403, 0.000124], { icon: town }).bindPopup('<b>Locuzzen</b><p></p>');
var lam_tow_unamed = L.marker([0.000401, 0.000136], { icon: town }).bindPopup('<b>Un\'Amed</b><p></p>');
var lam_tow_zilbran = L.marker([0.00041, 0.000147], { icon: town }).bindPopup('<b>Zilbran</b><p></p>');
var lam_tow_khorrokh = L.marker([0.000449, 0.000188], { icon: town }).bindPopup('<b>Khorrokh</b><p></p>');
var lam_tow_boldogvez = L.marker([0.00045, 0.000163], { icon: town }).bindPopup('<b>Bol Dogvez</b><p></p>');
var lam_tow_iloghol = L.marker([0.000454, 0.000137], { icon: town }).bindPopup('<b>Il Oghol</b><p></p>');

//Villages
var lam_vil_ognu = L.marker([0.000395, 0.000118], { icon: village }).bindPopup('<b>Ognu</b><p></p>');
var lam_vil_dakhobal = L.marker([0.000397, 0.000114], { icon: village }).bindPopup('<b>Dakh Obal</b><p></p>');
var lam_vil_bholberd = L.marker([0.000403, 0.000118], { icon: village }).bindPopup('<b>Bholberd</b><p></p>');
var lam_vil_dalgrar = L.marker([0.000401, 0.000126], { icon: village }).bindPopup('<b>Dalgrar</b><p></p>');
var lam_vil_ludgeg = L.marker([0.000399, 0.000133], { icon: village }).bindPopup('<b>Ludgeg</b><p></p>');
var lam_vil_newcresthill = L.marker([0.000404, 0.000133], { icon: village }).bindPopup('<b>New Cresthill</b><p></p>');
var lam_vil_cresthill = L.marker([0.000407, 0.000131], { icon: village }).bindPopup('<b>Cresthill</b><p></p>');
var lam_vil_kagdural = L.marker([0.000407, 0.000137], { icon: village }).bindPopup('<b>Kagdural</b><p></p>');
var lam_vil_nurrugh = L.marker([0.000409, 0.000141], { icon: village }).bindPopup('<b>Nurrugh</b><p></p>');
var lam_vil_kilarum = L.marker([0.000412, 0.000137], { icon: village }).bindPopup('<b>Kilarum</b><p></p>');
var lam_vil_gralka = L.marker([0.000415, 0.000123], { icon: village }).bindPopup('<b>Gralka</b><p></p>');
var lam_vil_lilkal = L.marker([0.000416, 0.000141], { icon: village }).bindPopup('<b>Lilkal</b><p></p>');
var lam_vil_lum = L.marker([0.000424, 0.000143], { icon: village }).bindPopup('<b>Lum</b><p></p>');
var lam_vil_murzon = L.marker([0.000419, 0.000142], { icon: village }).bindPopup('<b>Murzon</b><p></p>');
var lam_vil_vretkag = L.marker([0.000427, 0.000146], { icon: village }).bindPopup('<b>Vretkag</b><p></p>');
var lam_vil_vradux = L.marker([0.00043, 0.000149], { icon: village }).bindPopup('<b>Vradux</b><p></p>');
var lam_vil_urag = L.marker([0.000428, 0.000154], { icon: village }).bindPopup('<b>Urag</b><p></p>');
var lam_vil_gelria = L.marker([0.000422, 0.000152], { icon: village }).bindPopup('<b>Gelria</b><p></p>');
var lam_vil_keldihr = L.marker([0.000421, 0.000169], { icon: village }).bindPopup('<b>Keldihr</b><p></p>');
var lam_vil_dibashnul = L.marker([0.000434, 0.000172], { icon: village }).bindPopup('<b>Dibashnul</b><p></p>');
var lam_vil_badbog = L.marker([0.000445, 0.000209], { icon: village }).bindPopup('<b>Badbog</b><p></p>');
var lam_vil_gulfim = L.marker([0.000456, 0.000184], { icon: village }).bindPopup('<b>Gulfim</b><p></p>');
var lam_vil_batul = L.marker([0.000456, 0.000187], { icon: village }).bindPopup('<b>Batul</b><p></p>');
var lam_vil_eaglehaven = L.marker([0.000441, 0.000164], { icon: village }).bindPopup('<b>Eagle Haven</b><p></p>');
var lam_vil_skegness = L.marker([0.000441, 0.000159], { icon: village }).bindPopup('<b>Skegness</b><p></p>');
var lam_vil_culcheth = L.marker([0.000444, 0.00016], { icon: village }).bindPopup('<b>Culcheth</b><p></p>');
var lam_vil_anghorwat = L.marker([0.000452, 0.000152], { icon: village }).bindPopup('<b>Anghor Wat</b><p></p>');
var lam_vil_hugmug = L.marker([0.000454, 0.00015], { icon: village }).bindPopup('<b>Hugmug</b><p></p>');
var lam_vil_lagakh = L.marker([0.000456, 0.000148], { icon: village }).bindPopup('<b>Lagakh</b><p></p>');
var lam_vil_mazoga = L.marker([0.000455, 0.000145], { icon: village }).bindPopup('<b>Mazoga</b><p></p>');
var lam_vil_dazzez = L.marker([0.000455, 0.000142], { icon: village }).bindPopup('<b>Dazzez</b><p></p>');
var lam_vil_narod = L.marker([0.000455, 0.00014], { icon: village }).bindPopup('<b>Narod</b><p></p>');
var lam_vil_joromai = L.marker([0.000452, 0.000141], { icon: village }).bindPopup('<b>Joromai</b><p></p>');
var lam_vil_umog = L.marker([0.000452, 0.000139], { icon: village }).bindPopup('<b>Umog</b><p></p>');
var lam_vil_newham = L.marker([0.000452, 0.000133], { icon: village }).bindPopup('<b>Newham</b><p></p>');
var lam_vil_wolford = L.marker([0.000458, 0.00013], { icon: village }).bindPopup('<b>Wolford</b><p></p>');
var lam_vil_stawford = L.marker([0.000459, 0.000129], { icon: village }).bindPopup('<b>Stawford</b><p></p>');

//Bodies of Water
var lam_wat_dreghkozhral = L.marker([0.000428, 0.000136], { icon: water }).bindPopup('<b>Dregh Kozhral</b><p></p>');
var lam_wat_dreghmenur = L.marker([0.000446, 0.000161], { icon: water }).bindPopup('<b>Dregh Menur</b><p></p>');
var lam_wat_dreghraghor = L.marker([0.000402, 0.000176], { icon: water }).bindPopup('<b>Dregh Raghor</b><p></p>');
var lam_wat_khorrazul = L.marker([0.000426, 0.000193], { icon: water }).bindPopup('<b>Khor Razul</b><p></p>');
var lam_wat_dreghmanshov = L.marker([0.000429, 0.000204], { icon: water }).bindPopup('<b>Dregh Manshov</b><p></p>');

/* Nograd */
//Capitols
var nog_cap_vonghardon = L.marker([0.00042, 0.000204], { icon: capitol }).bindPopup('<b>Von Ghardon</b><p></p>');
var nog_cap_zreddulbhoz = L.marker([0.000389, 0.000197], { icon: capitol }).bindPopup('<b>Zreddul Bhoz</b><p></p>');
var nog_cap_kradvorrod = L.marker([0.000408, 0.000206], { icon: capitol }).bindPopup('<b>Krad Vorrod</b><p></p>');
var nog_cap_bhilzog = L.marker([0.000382, 0.000226], { icon: capitol }).bindPopup('<b>Bhilzog</b><p></p>');
//Cities
var nog_cit_ighar = L.marker([0.00038, 0.000243], { icon: city }).bindPopup('<b>Ighar</b><p></p>');
var nog_cit_moggedor = L.marker([0.000414, 0.000214], { icon: city }).bindPopup('<b>Mogged Or</b><p></p>');
var nog_cit_velbrugan = L.marker([0.000408, 0.000191], { icon: city }).bindPopup('<b>Vel Brugan</b><p></p>');
var nog_cit_bulgrakh = L.marker([0.000383, 0.000178], { icon: city }).bindPopup('<b>Bulgrakh</b><p></p>');
var nog_cit_pellaswish = L.marker([0.000378, 0.000168], { icon: city }).bindPopup('<b>Pella\'s Wish</b><p></p>');
var nog_cit_dushnu = L.marker([0.000391, 0.000191], { icon: city }).bindPopup('<b>Dushnu</b><p></p>');
var nog_cit_zorindug = L.marker([0.000391, 0.000208], { icon: city }).bindPopup('<b>Zorin Dug</b><p></p>');
//Forests
var nog_for_twilsanoforest = L.marker([0.000407, 0.000202], { icon: forest }).bindPopup('<b>Twilsano Forest</b><p></p>');
var nog_for_soughatwoodlands = L.marker([0.000387, 0.000185], { icon: forest }).bindPopup('<b>Soughat Woodlands</b><p></p>');
var nog_for_opogukforest = L.marker([0.000398, 0.000232], { icon: forest }).bindPopup('<b>Opoguk Forest</b><p></p>');
var nog_for_oogorimwilderness = L.marker([0.000376, 0.000232], { icon: forest }).bindPopup('<b>Oogorim Wilderness</b><p></p>');
//Military Installations
var nog_mil_ulbragge = L.marker([0.000381, 0.000175], { icon: military }).bindPopup('<b>Ul\'Bragge</b><p></p>');
var nog_mil_ulvaz = L.marker([0.000393, 0.00019], { icon: military }).bindPopup('<b>Ul\'Vaz</b><p></p>');
var nog_mil_ulkhe = L.marker([0.000382, 0.000195], { icon: military }).bindPopup('<b>Ul\'Khe</b><p></p>');
var nog_mil_ulkron = L.marker([0.000396, 0.000201], { icon: military }).bindPopup('<b>Ul\'Kron</b><p></p>');
var nog_mil_ulmirad = L.marker([0.00041, 0.000191], { icon: military }).bindPopup('<b>Ul\'Mirad</b><p></p>');
var nog_mil_uldheg = L.marker([0.000423, 0.000192], { icon: military }).bindPopup('<b>Ul\'Dheg</b><p></p>');
var nog_mil_ulera = L.marker([0.000426, 0.0002], { icon: military }).bindPopup('<b>Ul\'Era</b><p></p>');
var nog_mil_ulbheddad = L.marker([0.000405, 0.000196], { icon: military }).bindPopup('<b>Ul\'Bheddad</b><p></p>');
var nog_mil_ulqal = L.marker([0.000404, 0.000222], { icon: military }).bindPopup('<b>Ul\'Qal</b><p></p>');
var nog_mil_ulvoccal = L.marker([0.000382, 0.000229], { icon: military }).bindPopup('<b>Ul\'Voccal</b><p></p>');
var nog_mil_uligrod = L.marker([0.000381, 0.00024], { icon: military }).bindPopup('<b>Ul\'Igrod</b><p></p>');
var nog_mil_ulmadoz = L.marker([0.000391, 0.00023], { icon: military }).bindPopup('<b>Ul\'Madoz</b><p></p>');
//Mountains
var nog_mtn_trilug = L.marker([0.00041, 0.000206], { icon: mountain }).bindPopup('<b>Trilug Mountains</b><p></p>');
//Towns
var nog_tow_buzzar = L.marker([0.000376, 0.000173], { icon: town }).bindPopup('<b>Buzzar</b><p></p>');
var nog_tow_aberdeen = L.marker([0.000389, 0.000179], { icon: town }).bindPopup('<b>Aberdeen</b><p></p>');
var nog_tow_lewes = L.marker([0.000383, 0.000191], { icon: town }).bindPopup('<b>Lewes</b><p></p>');
var nog_tow_dhashnor = L.marker([0.000403, 0.000203], { icon: town }).bindPopup('<b>Dhashnor</b><p></p>');
var nog_tow_lire = L.marker([0.000419, 0.000198], { icon: town }).bindPopup('<b>Lire</b><p></p>');
var nog_tow_almodgrid = L.marker([0.000402, 0.000214], { icon: town }).bindPopup('<b>Al Modgrid</b><p></p>');
var nog_tow_arraz = L.marker([0.000405, 0.000221], { icon: town }).bindPopup('<b>Arraz</b><p></p>');
var nog_tow_espines = L.marker([0.000395, 0.000218], { icon: town }).bindPopup('<b>Espines</b><p></p>');
var nog_tow_baymouth = L.marker([0.000401, 0.000225], { icon: town }).bindPopup('<b>Baymouth</b><p></p>');
var nog_tow_bleyton = L.marker([0.000393, 0.000233], { icon: town }).bindPopup('<b>Bleyton</b><p></p>');
var nog_tow_ubir = L.marker([0.000373, 0.000247], { icon: town }).bindPopup('<b>Ubir</b><p></p>');
//Villages
var nog_vil_keld = L.marker([0.000379, 0.000165], { icon: village }).bindPopup('<b>Keld</b><p></p>');
var nog_vil_murkwell = L.marker([0.00038, 0.000176], { icon: village }).bindPopup('<b>Murkwell</b><p></p>');
var nog_vil_kozord = L.marker([0.000387, 0.000174], { icon: village }).bindPopup('<b>Kozord</b><p></p>');
var nog_vil_vroddul = L.marker([0.00038, 0.000184], { icon: village }).bindPopup('<b>Vroddul</b><p></p>');
var nog_vil_leefside = L.marker([0.000379, 0.000188], { icon: village }).bindPopup('<b>Leefside</b><p></p>');
var nog_vil_gredad = L.marker([0.000379, 0.000193], { icon: village }).bindPopup('<b>Gredad</b><p></p>');
var nog_vil_nozzod = L.marker([0.000381, 0.000198], { icon: village }).bindPopup('<b>Nozzod</b><p></p>');
var nog_vil_aramoor = L.marker([0.000382, 0.0002], { icon: village }).bindPopup('<b>Aramoor</b><p></p>');
var nog_vil_noshbal = L.marker([0.000384, 0.0002], { icon: village }).bindPopup('<b>Noshbal</b><p></p>');
var nog_vil_gobi = L.marker([0.000384, 0.000197], { icon: village }).bindPopup('<b>Gobi</b><p></p>');
var nog_vil_woodhurst = L.marker([0.000386, 0.000199], { icon: village }).bindPopup('<b>Woodhurst</b><p></p>');
var nog_vil_glossop = L.marker([0.000387, 0.000203], { icon: village }).bindPopup('<b>Glossop</b><p></p>');
var nog_vil_tarnstead = L.marker([0.000389, 0.0002], { icon: village }).bindPopup('<b>Tarnstead</b><p></p>');
var nog_vil_trudid = L.marker([0.000395, 0.000193], { icon: village }).bindPopup('<b>Trudid</b><p></p>');
var nog_vil_wigston = L.marker([0.00039, 0.000184], { icon: village }).bindPopup('<b>Wigston</b><p></p>');
var nog_vil_dozdrug = L.marker([0.000383, 0.000173], { icon: village }).bindPopup('<b>Dozdrug</b><p></p>');
var nog_vil_keddad = L.marker([0.000402, 0.000198], { icon: village }).bindPopup('<b>Keddad</b><p></p>');
var nog_vil_sandhill = L.marker([0.0004, 0.000203], { icon: village }).bindPopup('<b>Sandhill</b><p></p>');
var nog_vil_wilson = L.marker([0.0004, 0.000211], { icon: village }).bindPopup('<b>Wilson</b><p></p>');
var nog_vil_navatalos = L.marker([0.000425, 0.000208], { icon: village }).bindPopup('<b>Navatalos</b><p></p>');
var nog_vil_bhigvel = L.marker([0.000419, 0.00021], { icon: village }).bindPopup('<b>Bhigvel</b><p></p>');
var nog_vil_ummalin = L.marker([0.000416, 0.000207], { icon: village }).bindPopup('<b>Ummalin</b><p></p>');
var nog_vil_lorkran = L.marker([0.000414, 0.000205], { icon: village }).bindPopup('<b>Lorkran</b><p></p>');
var nog_vil_ylel = L.marker([0.000415, 0.000204], { icon: village }).bindPopup('<b>Ylel</b><p></p>');
var nog_vil_kulbar = L.marker([0.00041, 0.000215], { icon: village }).bindPopup('<b>Kulbar</b><p></p>');
var nog_vil_escary = L.marker([0.000398, 0.000212], { icon: village }).bindPopup('<b>Escary</b><p></p>');
var nog_vil_eboz = L.marker([0.000401, 0.000222], { icon: village }).bindPopup('<b>Eboz</b><p></p>');
var nog_vil_ragzun = L.marker([0.000403, 0.000229], { icon: village }).bindPopup('<b>Ragzun</b><p></p>');
var nog_vil_moggrim = L.marker([0.0004, 0.00023], { icon: village }).bindPopup('<b>Moggrim</b><p></p>');
var nog_vil_pendle = L.marker([0.000398, 0.000236], { icon: village }).bindPopup('<b>Pendle</b><p></p>');
var nog_vil_kodde = L.marker([0.000396, 0.000231], { icon: village }).bindPopup('<b>Kodde</b><p></p>');
var nog_vil_golrest = L.marker([0.000394, 0.000228], { icon: village }).bindPopup('<b>Golrest</b><p></p>');
var nog_vil_windrip = L.marker([0.000392, 0.000236], { icon: village }).bindPopup('<b>Windrip</b><p></p>');
var nog_vil_dudkal = L.marker([0.00039, 0.000226], { icon: village }).bindPopup('<b>Dudkal</b><p></p>');
var nog_vil_azzud = L.marker([0.000388, 0.000232], { icon: village }).bindPopup('<b>Azzud</b><p></p>');
var nog_vil_coalfell = L.marker([0.000388, 0.000223], { icon: village }).bindPopup('<b>Coalfell</b><p></p>');
var nog_vil_alwick = L.marker([0.000385, 0.000228], { icon: village }).bindPopup('<b>Alwick</b><p></p>');
var nog_vil_aynor = L.marker([0.000378, 0.00023], { icon: village }).bindPopup('<b>Aynor</b><p></p>');
var nog_vil_sekasser = L.marker([0.000374, 0.000228], { icon: village }).bindPopup('<b>Se\'kasser</b><p></p>');
var nog_vil_ecral = L.marker([0.000376, 0.000235], { icon: village }).bindPopup('<b>Ecral</b><p></p>');
var nog_vil_aguefort = L.marker([0.000373, 0.000239], { icon: village }).bindPopup('<b>Aguefort</b><p></p>');
var nog_vil_draycott = L.marker([0.000372, 0.000237], { icon: village }).bindPopup('<b>Draycott</b><p></p>');
var nog_vil_emelle = L.marker([0.000369, 0.00024], { icon: village }).bindPopup('<b>Emelle</b><p></p>');
var nog_vil_ezur = L.marker([0.00037, 0.000243], { icon: village }).bindPopup('<b>Ezur</b><p></p>');
var nog_vil_labol = L.marker([0.000371, 0.000245], { icon: village }).bindPopup('<b>Labol</b><p></p>');
var nog_vil_agbodo = L.marker([0.000379, 0.000235], { icon: village }).bindPopup('<b>Ag\'Bodo</b><p></p>');
//Bodies of Water
var nog_wat_dregharkiz = L.marker([0.000396, 0.000224], { icon: water }).bindPopup('<b>Dregh Arkiz</b><p></p>');

/* Abhainn */
//Capitols

//Cities

//Forests

//Military Installations
var abh_mil_ulzadon = L.marker([0.000392, 0.000169], { icon: military }).bindPopup('<b>Ul\'Zadon</b><p></p>');
var abh_mil_ulnog = L.marker([0.000408, 0.000155], { icon: military }).bindPopup('<b>Ul\'Nog</b><p></p>');

//Mountains
var abh_mtn_cian = L.marker([0.000397, 0.000157], { icon: mountain }).bindPopup('<b>Cian Mountains</b><p></p>');
var abh_mtn_cresrood = L.marker([0.000384, 0.000144], { icon: mountain }).bindPopup('<b>Mt. Cresrood</b><p></p>');

//Towns

//Villages
var abh_vil_taewe = L.marker([0.000396, 0.000155], { icon: village }).bindPopup('<b>Taewe</b><p>A lone settlement at the heart of Abhainn. Difficult to find even when plotted on a map because of the untamed wilds.');

//Bodies of Water

/* Prizrak Drakona */
//Capitols
var pri_cap_torgov = L.marker([0.000405, 0.000085], { icon: capitol }).bindPopup('<b>Torgov</b><p></p>');
//Cities
var pri_cit_govets = L.marker([0.000433, 0.000124], { icon: city }).bindPopup('<b>Govets</b><p></p>');
var pri_cit_munovo = L.marker([0.000461, 0.000087], { icon: city }).bindPopup('<b>Munovo</b><p></p>');
var pri_cit_yugan = L.marker([0.000425, 0.000066], { icon: city }).bindPopup('<b>Yugan</b><p></p>');
var pri_cit_abavda = L.marker([0.000381, 0.000088], { icon: city }).bindPopup('<b>Abavda</b><p></p>');
//Forests
var pri_for_valerian = L.marker([0.000439, 0.000115], { icon: forest }).bindPopup('<b>Valerian Bamboo Grove</b> <p>A dense forest of bamboo that separates the border of Lamorra from Prizrak Drakona.</p>');
var pri_for_chemeris = L.marker([0.000444, 0.000075], { icon: forest }).bindPopup('<b>Chemeris Rainforest</b><p></p>');
var pri_for_khotov = L.marker([0.00041, 0.00009], { icon: forest }).bindPopup('<b>Khotov Rainforest</b><p></p>');
//Military Installations
var pri_mil_alekhna = L.marker([0.000376, 0.000085], { icon: military }).bindPopup('<b>Alekhna</b><p></p>');
var pri_mil_novokurod = L.marker([0.000411, 0.000081], { icon: military }).bindPopup('<b>Novokurod</b><p></p>');
var pri_mil_balazniki = L.marker([0.00043, 0.000105], { icon: military }).bindPopup('<b>Balazniki</b><p></p>');
var pri_mil_draythas = L.marker([0.000454, 0.000117], { icon: military }).bindPopup('<b>Draythas</b><p></p>');
var pri_mil_trouskan = L.marker([0.000437, 0.000063], { icon: military }).bindPopup('<b>Trouskan</b><p></p>');
//Mountains
var pri_mtn_tolbanov = L.marker([0.000452, 0.00009], { icon: mountain }).bindPopup('<b>Tolbanov Mountains</b><p></p>');
//Towns
var pri_tow_kagorsk = L.marker([0.000439, 0.000077], { icon: town }).bindPopup('<b>Kagorsk</b><p></p>');
var pri_tow_merod = L.marker([0.000452, 0.000093], { icon: town }).bindPopup('<b>Merod</b><p></p>');
var pri_tow_luccajar = L.marker([0.000435, 0.000111], { icon: town }).bindPopup('<b>Luccajar</b><p></p>');
var pri_tow_vorziros = L.marker([0.000424, 0.000101], { icon: town }).bindPopup('<b>Vorziros</b><p></p>');
var pri_tow_vybolma = L.marker([0.000414, 0.000089], { icon: town }).bindPopup('<b>Vybolma</b><p></p>');
var pri_tow_inkon = L.marker([0.000407, 0.000079], { icon: town }).bindPopup('<b>Inkon</b><p></p>');
var pri_tow_kutsk = L.marker([0.000383, 0.000086], { icon: town }).bindPopup('<b>Kutsk</b><p></p>');
//Villages
var pri_vil_tuasta = L.marker([0.000424, 0.000095], { icon: village }).bindPopup('<b>Tuasta</b><p></p>');
var pri_vil_loravys = L.marker([0.000461, 0.000106], { icon: village }).bindPopup('<b>Loravys</b><p></p>');
var pri_vil_gaskoye = L.marker([0.000418, 0.000072], { icon: village }).bindPopup('<b>Gaskoye</b><p></p>');
var pri_vil_loluk = L.marker([0.000453, 0.000084], { icon: village }).bindPopup('<b>Loluk</b><p></p>');
var pri_vil_kazino = L.marker([0.000437, 0.000092], { icon: village }).bindPopup('<b>Kazino</b><p></p>');
var pri_vil_yanxak = L.marker([0.000448, 0.00012], { icon: village }).bindPopup('<b>Yanxak</b><p></p>');
var pri_vil_nacoria = L.marker([0.000434, 0.000127], { icon: village }).bindPopup('<b>Nacoria</b><p></p>');
var pri_vil_samasensk = L.marker([0.000397, 0.000085], { icon: village }).bindPopup('<b>Samasensk</b><p></p>');
var pri_vil_heseth = L.marker([0.00039, 0.000096], { icon: village }).bindPopup('<b>Heseth</b><p></p>');
var pri_vil_arroth = L.marker([0.000381, 0.000094], { icon: village }).bindPopup('<b>Arroth</b><p></p>');
//Bodies of Water
var pri_wat_priglaz = L.marker([0.000432, 0.000071], { icon: water }).bindPopup('<b>Priglaz</b><p>Translates from Draconic into, \'Eye of the Shadow\'.</p>');
var pri_wat_lakezeleshov = L.marker([0.000442, 0.000089], { icon: water }).bindPopup('<b>Lake Zeleshov</b><p></p>');
var pri_wat_lakeiskimas = L.marker([0.000447, 0.000093], { icon: water }).bindPopup('<b>Lake Iskimas</b><p></p>');
var pri_wat_drakoglaz = L.marker([0.000391, 0.000085], { icon: water }).bindPopup('<b>Drakoglaz</b><p>Translates from Draconic into, \'Eye of the Dragon\'.</p>');
var pri_wat_stukalabay = L.marker([0.000389, 0.000092], { icon: water }).bindPopup('<b>Stukala Bay</b><p></p>');
var pri_wat_vimtasinlet = L.marker([0.000421, 0.000074], { icon: water }).bindPopup('<b>Vimtas Inlet</b><p></p>');
var pri_wat_beretiminlet = L.marker([0.000435, 0.00008], { icon: water }).bindPopup('<b>Beretim Inlet</b><p></p>');

/* Properties Belonging to the Portales */
var portales_devilsbane = L.marker([0.00045, 0.000158], { icon: home }).bindPopup('<b>Devil\'s Bane Island</b><p></p>');

/*
THE FOLLOWING ARE MARKER GROUPS.
*/

var capitols_group = L.layerGroup([
    //Capitols, Nograd
    nog_cap_vonghardon,
    nog_cap_zreddulbhoz,
    nog_cap_kradvorrod,
    nog_cap_bhilzog,
    //Capitols, Leonychus
    hes_cap_kardia,
    hes_cap_asaak,
    hes_cap_kamran,
    hes_cap_tayakoli,
    hes_cap_enayat,
    hes_cap_orrin,
    hes_cap_herlaug,
    hes_cap_valdis,
    hes_cap_vili,
    hes_cap_hallvard,
    hes_cap_gildr,
    hes_cap_asketill,
    hes_cap_xanthos,
    hes_cap_kydonia,
    hes_cap_iasg,
    hes_cap_reumh,
    hes_cap_portcaishen,
    //Capitols, Floraison
    hes_cap_pessac,
    //Capitols, Prizrak Drakona
    pri_cap_torgov,
    //Capitols, Lamorra
    lam_cap_morolihm,
    lam_cap_bhaabrun
]);

var cities_group = L.layerGroup([
    //Cities, Nograd
    nog_cit_ighar,
    nog_cit_moggedor,
    nog_cit_velbrugan,
    nog_cit_bulgrakh,
    nog_cit_pellaswish,
    nog_cit_dushnu,
    nog_cit_zorindug,
    //Cities, Leonychus
    hes_cit_callipolis,
    hes_cit_apollonia,
    hes_cit_ambrosius,
    hes_cit_isfahan,
    hes_cit_abbasi,
    hes_cit_reza,
    hes_cit_arzhang,
    hes_cit_javad,
    hes_cit_mar,
    hes_cit_birstan,
    hes_cit_grimar,
    hes_cit_hrelling,
    hes_cit_raghnall,
    hes_cit_ainmire,
    hes_cit_clothach,
    hes_cit_oldcliff,
    //Cities, Floraison
    hes_cit_daxcitadel,
    hes_cit_talence,
    hes_cit_veritas,
    //Cities, Prizrak Drakona
    pri_cit_govets,
    pri_cit_munovo,
    pri_cit_yugan,
    pri_cit_abavda,
    //Cities, Lamorra
    lam_cit_kukulded,
    lam_cit_gorgari,
    lam_cit_dhinabul,
    lam_cit_dhagruumsh,
    lam_cit_mitamum,
    lam_cit_zeccarid,
    lam_cit_ganvezag,
    //Cities, Knife's Edge
    kni_cit_frostmoor,
    kni_cit_hayle
]);

var nograd_group = L.layerGroup([
    //Capitols
    nog_cap_vonghardon,
    nog_cap_zreddulbhoz,
    nog_cap_kradvorrod,
    nog_cap_bhilzog,
    //Cities
    nog_cit_ighar,
    nog_cit_moggedor,
    nog_cit_velbrugan,
    nog_cit_bulgrakh,
    nog_cit_pellaswish,
    nog_cit_dushnu,
    nog_cit_zorindug,
    //Forests
    nog_for_twilsanoforest,
    nog_for_soughatwoodlands,
    nog_for_opogukforest,
    nog_for_oogorimwilderness,
    //Military Installations
    nog_mil_ulbragge,
    nog_mil_ulvaz,
    nog_mil_ulkhe,
    nog_mil_ulkron,
    nog_mil_ulmirad,
    nog_mil_uldheg,
    nog_mil_ulera,
    nog_mil_ulbheddad,
    nog_mil_ulqal,
    nog_mil_ulvoccal,
    nog_mil_uligrod,
    //Mountains
    nog_mtn_trilug,
    //Towns
    nog_tow_buzzar,
    nog_tow_aberdeen,
    nog_tow_lewes,
    nog_tow_dhashnor,
    nog_tow_lire,
    nog_tow_almodgrid,
    nog_tow_arraz,
    nog_tow_espines,
    nog_tow_baymouth,
    nog_tow_bleyton,
    nog_tow_ubir,
    //Villages
    nog_vil_keld,
    nog_vil_murkwell,
    nog_vil_kozord,
    nog_vil_vroddul,
    nog_vil_leefside,
    nog_vil_gredad,
    nog_vil_nozzod,
    nog_vil_aramoor,
    nog_vil_noshbal,
    nog_vil_woodhurst,
    nog_vil_glossop,
    nog_vil_tarnstead,
    nog_vil_trudid,
    nog_vil_wigston,
    nog_vil_dozdrug,
    nog_vil_keddad,
    nog_vil_sandhill,
    nog_vil_navatalos,
    nog_vil_bhigvel,
    nog_vil_ummalin,
    nog_vil_lorkran,
    nog_vil_ylel,
    nog_vil_kulbar,
    nog_vil_escary,
    nog_vil_eboz,
    nog_vil_ragzun,
    nog_vil_moggrim,
    nog_vil_pendle,
    nog_vil_kodde,
    nog_vil_golrest,
    nog_vil_windrip,
    nog_vil_dudkal,
    nog_vil_azzud,
    nog_vil_coalfell,
    nog_vil_alwick,
    nog_vil_aynor,
    nog_vil_sekasser,
    nog_vil_ecral,
    nog_vil_aguefort,
    nog_vil_draycott,
    nog_vil_emelle,
    nog_vil_ezur,
    nog_vil_labol,
    nog_vil_gobi,
    nog_vil_wilson,
    //Bodies of Water
    nog_wat_dregharkiz
]);

var forests_group = L.layerGroup([
    //Floraison, Forests
    hes_for_smagewilds,
    //Leonychus, Forests
    hes_for_frostnorthtimberland,
    hes_for_mapleridgegrove,
    hes_for_nmagewilds,
    hes_for_bonadenforest,
    //Knife's Edge, Forests
    kni_for_manitouforest,
    kni_for_blackiceforest,
    kni_for_marlwoods,
    kni_for_wynnorawoods,
    //Lamorra, Forests
    lam_for_giltaraforest,
    lam_for_saltsidetimberland,
    lam_for_lunenmistforest,
    lam_for_sunstahlwoods,
    lam_for_eastalboiagrove,
    lam_for_westalboiagrove,
    //Prizrak Drakona, Forests
    pri_for_valerian,
    pri_for_chemeris,
    pri_for_khotov,
    //Nograd, Forests
    nog_for_twilsanoforest,
    nog_for_soughatwoodlands,
    nog_for_opogukforest,
    nog_for_oogorimwilderness
]);

var military_group = L.layerGroup([
    //Nograd, Military Installations
    nog_mil_ulbragge,
    nog_mil_ulvaz,
    nog_mil_ulkhe,
    nog_mil_ulkron,
    nog_mil_ulmirad,
    nog_mil_uldheg,
    nog_mil_ulera,
    nog_mil_ulbheddad,
    nog_mil_ulqal,
    nog_mil_ulvoccal,
    nog_mil_uligrod,
    //Leonychus, Military Installations
    hes_mil_duzakh,
    hes_mil_alder,
    hes_mil_craven,
    hes_mil_quartermain,
    hes_mil_khalida,
    hes_mil_hughes,
    hes_mil_adil,
    hes_mil_yancey,
    hes_mil_arcturus,
    hes_mil_lim,
    hes_mil_wil,
    hes_mil_dy,
    hes_mil_buttonwood,
    hes_mil_batan,
    hes_mil_swythe,
    hes_mil_vera,
    hes_mil_halliwell,
    hes_mil_holm,
    //Floraison, Military Installations
    hes_mil_dormont,
    hes_mil_dalen,
    hes_mil_arlot,
    hes_mil_risban,
    hes_mil_daurore,
    hes_mil_mahon,
    hes_mil_despoir,
    hes_mil_dorages,
    hes_mil_calais,
    hes_mil_dos,
    //Prizrak Drakona, Military Installations
    pri_mil_alekhna,
    pri_mil_novokurod,
    pri_mil_balazniki,
    pri_mil_draythas,
    pri_mil_trouskan,
    //Lamorra, Military Installations
    lam_mil_ulazun,
    lam_mil_uligoz,
    lam_mil_ulgurza,
    lam_mil_ulakan,
    lam_mil_ulnodke,
    lam_mil_ulkebuz,
    lam_mil_ulalkan,
    lam_mil_ulghuz,
    lam_mil_elerran,
    lam_mil_ulzalfari,
    lam_mil_ultow,
    lam_mil_ulharan,
    lam_mil_ulzeffari,
    lam_mil_ulimir,
    lam_mil_ulkey,
    lam_mil_ultenby,
    lam_mil_ulkadug,
    //Abhainn, Military Installations
    abh_mil_ulnog,
    abh_mil_ulzadon,
    //Knife's Edge, Military Installations
    kni_mil_fortbellweather
]);


var mountains_group = L.layerGroup([
    hes_mtn_alagar,
    hes_mtn_racroft,
    hes_mtn_saldiac,
    hes_mtn_exquet,
    hes_mtn_tolsay,
    hes_mtn_mannach,
    kni_mtn_sharpcliff,
    kni_mtn_icebreak,
    kni_mtn_suscona,
    lam_mtn_uram,
    lam_mtn_dulpeaks,
    nog_mtn_trilug,
    abh_mtn_cian,
    abh_mtn_cresrood,
    pri_mtn_tolbanov
]);

var towns_group = L.layerGroup([
    //Nograd, Towns
    nog_tow_buzzar,
    nog_tow_aberdeen,
    nog_tow_lewes,
    nog_tow_dhashnor,
    nog_tow_lire,
    nog_tow_almodgrid,
    nog_tow_arraz,
    nog_tow_espines,
    nog_tow_baymouth,
    nog_tow_bleyton,
    nog_tow_ubir,
    //Towns, Leonychus
    hes_tow_abydos,
    hes_tow_rivermeet,
    hes_tow_heloros,
    hes_tow_itanos,
    hes_tow_salamis,
    hes_tow_mountmead,
    hes_tow_fahraj,
    hes_tow_bayat,
    hes_tow_majid,
    hes_tow_siavash,
    hes_tow_parsa,
    hes_tow_eleyphis,
    hes_tow_adaron,
    hes_tow_andvett,
    hes_tow_vidkunn,
    hes_tow_hadd,
    hes_tow_agmundr,
    hes_tow_naddod,
    hes_tow_seakirk,
    hes_tow_borstig,
    hes_tow_minka,
    hes_tow_ayamonn,
    hes_tow_lochlainn,
    hes_tow_carhal,
    //Towns, Floraison
    hes_tow_ramsay,
    hes_tow_bellegarde,
    hes_tow_rachdale,
    //Towns, Prizrak Drakona
    pri_tow_kagorsk,
    pri_tow_merod,
    pri_tow_luccajar,
    pri_tow_vorziros,
    pri_tow_vybolma,
    pri_tow_inkon,
    pri_tow_kutsk,
    //Towns, Lamorra
    lam_tow_loccuzen,
    lam_tow_unamed,
    lam_tow_zilbran,
    lam_tow_khorrokh,
    lam_tow_boldogvez,
    lam_tow_iloghol,
    //Towns, Knife's Edge
    kni_tow_craydon,
    kni_tow_whithost,
    kni_tow_bearspire
]);

var villages_group = L.layerGroup([
    //Knife's Edge, Villages
    kni_vil_colflora,
    kni_vil_avalgard,
    kni_vil_neverthaw,
    kni_vil_chillcrest,
    kni_vil_windbreak,
    kni_vil_flurris,
    kni_vil_cloudscar,
    //Lamorra, Villages
    lam_vil_ognu,
    lam_vil_dakhobal,
    lam_vil_bholberd,
    lam_vil_dalgrar,
    lam_vil_ludgeg,
    lam_vil_newcresthill,
    lam_vil_cresthill,
    lam_vil_kagdural,
    lam_vil_nurrugh,
    lam_vil_kilarum,
    lam_vil_gralka,
    lam_vil_lum,
    lam_vil_murzon,
    lam_vil_vretkag,
    lam_vil_vradux,
    lam_vil_urag,
    lam_vil_gelria,
    lam_vil_keldihr,
    lam_vil_dibashnul,
    lam_vil_badbog,
    lam_vil_gulfim,
    lam_vil_batul,
    lam_vil_eaglehaven,
    lam_vil_skegness,
    lam_vil_culcheth,
    lam_vil_anghorwat,
    lam_vil_hugmug,
    lam_vil_lagakh,
    lam_vil_mazoga,
    lam_vil_dazzez,
    lam_vil_narod,
    lam_vil_joromai,
    lam_vil_umog,
    lam_vil_newham,
    lam_vil_wolford,
    lam_vil_stawford,
    //Prizrak Drakona, Villages
    pri_vil_tuasta,
    pri_vil_loravys,
    pri_vil_gaskoye,
    pri_vil_loluk,
    pri_vil_kazino,
    pri_vil_yanxak,
    pri_vil_nacoria,
    pri_vil_samasensk,
    pri_vil_heseth,
    pri_vil_arroth,
    //Leonychus, Villages
    hes_vil_rizinia,
    hes_vil_pitane,
    hes_vil_hewe,
    hes_vil_frostedge,
    hes_vil_crescentvalley,
    hes_vil_escarcha,
    hes_vil_pinonera,
    hes_vil_penketh,
    hes_vil_holmfirth,
    hes_vil_skegness,
    hes_vil_sutton,
    hes_vil_galdreth,
    hes_vil_kilead,
    hes_vil_exeter,
    hes_vil_valledediamante,
    hes_vil_kinrith,
    hes_vil_makrinos,
    hes_vil_heartwood,
    hes_vil_kald,
    hes_vil_claethorpes,
    hes_vil_oakwood,
    hes_vil_greenedge,
    hes_vil_stratos,
    hes_vil_sybaris,
    hes_vil_akylas,
    hes_vil_dumajran,
    hes_vil_ganzak,
    hes_vil_dvin,
    hes_vil_daving,
    hes_vil_lauterbrunnen,
    hes_vil_hillstop,
    hes_vil_gudleif,
    hes_vil_surt,
    hes_vil_oddny,
    hes_vil_sigewulf,
    hes_vil_ulfheid,
    hes_vil_eivor,
    hes_vil_synin,
    hes_vil_stowe,
    hes_vil_lodbrok,
    hes_vil_midplains,
    hes_vil_dracfield,
    hes_vil_shieling,
    hes_vil_eldham,
    hes_vil_farmersfield,
    hes_vil_steinn,
    hes_vil_wavefront,
    hes_vil_astrakane,
    hes_vil_sakerkeep,
    hes_vil_willsden,
    hes_vil_yngvar,
    hes_vil_cainnech,
    hes_vil_teigue,
    hes_vil_tierney,
    hes_vil_coalville,
    hes_vil_defalls,
    hes_vil_muiris,
    hes_vil_muireach,
    hes_vil_daire,
    hes_vil_estebahia,
    hes_vil_gagoza,
    hes_vil_cassair,
    hes_vil_labhras,
    hes_vil_islasalvaje,
    hes_vil_norcoast,
    hes_vil_dorton,
    hes_vil_toftanes,
    //Floraison, Villages
    hes_vil_caen,
    hes_vil_calucon,
    hes_vil_vannes,
    hes_vil_orlak,
    hes_vil_larkinge,
    hes_vil_briarrose,
    hes_vil_aramore,
    hes_vil_carlisle,
    hes_vil_honfleur,
    //Nograd, Villages
    nog_vil_keld,
    nog_vil_murkwell,
    nog_vil_kozord,
    nog_vil_vroddul,
    nog_vil_leefside,
    nog_vil_gredad,
    nog_vil_nozzod,
    nog_vil_aramoor,
    nog_vil_noshbal,
    nog_vil_woodhurst,
    nog_vil_glossop,
    nog_vil_tarnstead,
    nog_vil_trudid,
    nog_vil_wigston,
    nog_vil_dozdrug,
    nog_vil_keddad,
    nog_vil_sandhill,
    nog_vil_navatalos,
    nog_vil_bhigvel,
    nog_vil_ummalin,
    nog_vil_lorkran,
    nog_vil_ylel,
    nog_vil_kulbar,
    nog_vil_escary,
    nog_vil_eboz,
    nog_vil_ragzun,
    nog_vil_moggrim,
    nog_vil_pendle,
    nog_vil_kodde,
    nog_vil_golrest,
    nog_vil_windrip,
    nog_vil_dudkal,
    nog_vil_azzud,
    nog_vil_coalfell,
    nog_vil_alwick,
    nog_vil_aynor,
    nog_vil_sekasser,
    nog_vil_ecral,
    nog_vil_aguefort,
    nog_vil_draycott,
    nog_vil_emelle,
    nog_vil_ezur,
    nog_vil_labol,
    nog_vil_gobi,
    nog_vil_wilson
]);

var hesperides_group = L.layerGroup([
    //Capitols
    //Leonychus
    hes_cap_kardia,
    hes_cap_asaak,
    hes_cap_kamran,
    hes_cap_tayakoli,
    hes_cap_enayat,
    hes_cap_orrin,
    hes_cap_herlaug,
    hes_cap_valdis,
    hes_cap_vili,
    hes_cap_hallvard,
    hes_cap_gildr,
    hes_cap_asketill,
    hes_cap_xanthos,
    hes_cap_kydonia,
    hes_cap_iasg,
    hes_cap_reumh,
    hes_cap_portcaishen,
    //Floraison
    hes_cap_pessac,

    //Cities
    //Leonychus
    hes_cit_callipolis,
    hes_cit_apollonia,
    hes_cit_ambrosius,
    hes_cit_isfahan,
    hes_cit_abbasi,
    hes_cit_reza,
    hes_cit_arzhang,
    hes_cit_javad,
    hes_cit_mar,
    hes_cit_birstan,
    hes_cit_grimar,
    hes_cit_hrelling,
    hes_cit_raghnall,
    hes_cit_ainmire,
    hes_cit_clothach,
    hes_cit_oldcliff,

    //Floraison
    hes_cit_daxcitadel,
    hes_cit_talence,
    hes_cit_veritas,

    //Forests
    //Leonychus
    hes_for_frostnorthtimberland,
    hes_for_mapleridgegrove,
    hes_for_nmagewilds,
    hes_for_bonadenforest,

    //Floraison
    hes_for_smagewilds,

    //Military Installations
    //Leonychus
    hes_mil_duzakh,
    hes_mil_alder,
    hes_mil_craven,
    hes_mil_quartermain,
    hes_mil_khalida,
    hes_mil_hughes,
    hes_mil_adil,
    hes_mil_yancey,
    hes_mil_arcturus,
    hes_mil_lim,
    hes_mil_wil,
    hes_mil_dy,
    hes_mil_buttonwood,
    hes_mil_batan,
    hes_mil_swythe,
    hes_mil_vera,
    hes_mil_halliwell,
    hes_mil_holm,

    //Floraison
    hes_mil_dormont,
    hes_mil_dalen,
    hes_mil_arlot,
    hes_mil_risban,
    hes_mil_daurore,
    hes_mil_mahon,
    hes_mil_despoir,
    hes_mil_dorages,
    hes_mil_calais,
    hes_mil_dos,

    //Mountains
    //Leonychus
    hes_mtn_alagar,
    hes_mtn_racroft,
    hes_mtn_saldiac,
    hes_mtn_exquet,

    //Floraison
    hes_mtn_tolsay,
    hes_mtn_mannach,

    //Towns
    //Leonychus
    hes_tow_abydos,
    hes_tow_rivermeet,
    hes_tow_heloros,
    hes_tow_itanos,
    hes_tow_salamis,
    hes_tow_mountmead,
    hes_tow_fahraj,
    hes_tow_bayat,
    hes_tow_majid,
    hes_tow_siavash,
    hes_tow_parsa,
    hes_tow_eleyphis,
    hes_tow_adaron,
    hes_tow_andvett,
    hes_tow_vidkunn,
    hes_tow_hadd,
    hes_tow_agmundr,
    hes_tow_naddod,
    hes_tow_seakirk,
    hes_tow_borstig,
    hes_tow_minka,
    hes_tow_ayamonn,
    hes_tow_lochlainn,
    hes_tow_carhal,

    //Floraison
    hes_tow_ramsay,
    hes_tow_bellegarde,
    hes_tow_rachdale,
    //Villages
    //Leonychus
    hes_vil_rizinia,
    hes_vil_pitane,
    hes_vil_hewe,
    hes_vil_frostedge,
    hes_vil_crescentvalley,
    hes_vil_escarcha,
    hes_vil_pinonera,
    hes_vil_penketh,
    hes_vil_holmfirth,
    hes_vil_skegness,
    hes_vil_sutton,
    hes_vil_galdreth,
    hes_vil_kilead,
    hes_vil_exeter,
    hes_vil_valledediamante,
    hes_vil_kinrith,
    hes_vil_makrinos,
    hes_vil_heartwood,
    hes_vil_kald,
    hes_vil_claethorpes,
    hes_vil_oakwood,
    hes_vil_greenedge,
    hes_vil_stratos,
    hes_vil_sybaris,
    hes_vil_akylas,
    hes_vil_dumajran,
    hes_vil_ganzak,
    hes_vil_dvin,
    hes_vil_daving,
    hes_vil_lauterbrunnen,
    hes_vil_hillstop,
    hes_vil_gudleif,
    hes_vil_surt,
    hes_vil_oddny,
    hes_vil_sigewulf,
    hes_vil_ulfheid,
    hes_vil_eivor,
    hes_vil_synin,
    hes_vil_stowe,
    hes_vil_lodbrok,
    hes_vil_midplains,
    hes_vil_dracfield,
    hes_vil_shieling,
    hes_vil_eldham,
    hes_vil_farmersfield,
    hes_vil_steinn,
    hes_vil_wavefront,
    hes_vil_astrakane,
    hes_vil_sakerkeep,
    hes_vil_willsden,
    hes_vil_yngvar,
    hes_vil_cainnech,
    hes_vil_teigue,
    hes_vil_tierney,
    hes_vil_coalville,
    hes_vil_defalls,
    hes_vil_muiris,
    hes_vil_muireach,
    hes_vil_daire,
    hes_vil_estebahia,
    hes_vil_gagoza,
    hes_vil_cassair,
    hes_vil_labhras,
    hes_vil_islasalvaje,
    hes_vil_norcoast,
    hes_vil_dorton,
    hes_vil_toftanes,

    //Floraison
    hes_vil_caen,
    hes_vil_calucon,
    hes_vil_vannes,
    hes_vil_orlak,
    hes_vil_larkinge,
    hes_vil_briarrose,
    hes_vil_aramore,
    hes_vil_carlisle,
    hes_vil_honfleur,

    //Bodies of Water
    //Leonychus
    hes_wat_baybaie,
    hes_wat_horseshoebay,
    hes_wat_lionclawbay,
    hes_wat_kilhstedtbay,
    hes_wat_bayoflove,
    hes_wat_daoimeanach,
    hes_wat_sirenbay,
    hes_wat_lakealeyse,
    hes_wat_blackpoolbay,
    //Floraison
    hes_wat_baiedonica
]);

var prizrak_drakona_group = L.layerGroup([
    //Capitols
    pri_cap_torgov,
    //Cities
    pri_cit_govets,
    pri_cit_munovo,
    pri_cit_yugan,
    pri_cit_abavda,
    //Forests
    pri_for_valerian,
    pri_for_chemeris,
    pri_for_khotov,
    //Military Installations
    pri_mil_alekhna,
    pri_mil_novokurod,
    pri_mil_balazniki,
    pri_mil_draythas,
    pri_mil_trouskan,
    //Mountains
    pri_mtn_tolbanov,
    //Towns
    pri_tow_kagorsk,
    pri_tow_merod,
    pri_tow_luccajar,
    pri_tow_vorziros,
    pri_tow_vybolma,
    pri_tow_inkon,
    pri_tow_kutsk,
    //Villages
    pri_vil_tuasta,
    pri_vil_loravys,
    pri_vil_gaskoye,
    pri_vil_loluk,
    pri_vil_kazino,
    pri_vil_yanxak,
    pri_vil_nacoria,
    pri_vil_samasensk,
    pri_vil_heseth,
    pri_vil_arroth,
    //Bodies of Water
    pri_wat_priglaz,
    pri_wat_lakezeleshov,
    pri_wat_lakeiskimas,
    pri_wat_drakoglaz,
    pri_wat_stukalabay,
    pri_wat_vimtasinlet,
    pri_wat_beretiminlet
]);

var lamorra_group = L.layerGroup([
    //Capitols
    lam_cap_morolihm,
    lam_cap_bhaabrun,
    //Cities
    lam_cit_kukulded,
    lam_cit_gorgari,
    lam_cit_dhinabul,
    lam_cit_dhagruumsh,
    lam_cit_mitamum,
    lam_cit_zeccarid,
    lam_cit_ganvezag,
    //Forests
    lam_for_giltaraforest,
    lam_for_saltsidetimberland,
    lam_for_lunenmistforest,
    lam_for_sunstahlwoods,
    lam_for_eastalboiagrove,
    lam_for_westalboiagrove,
    //Military Installations
    lam_mil_ulazun,
    lam_mil_uligoz,
    lam_mil_ulgurza,
    lam_mil_ulakan,
    lam_mil_ulnodke,
    lam_mil_ulkebuz,
    lam_mil_ulalkan,
    lam_mil_ulghuz,
    lam_mil_elerran,
    lam_mil_ulzalfari,
    lam_mil_ultow,
    lam_mil_ulharan,
    lam_mil_ulzeffari,
    lam_mil_ulimir,
    lam_mil_ulkey,
    lam_mil_ultenby,
    lam_mil_ulkadug,
    //Mountains
    lam_mtn_uram,
    lam_mtn_dulpeaks,
    //Towns
    lam_tow_loccuzen,
    lam_tow_unamed,
    lam_tow_zilbran,
    lam_tow_khorrokh,
    lam_tow_boldogvez,
    lam_tow_iloghol,
    //Villages
    lam_vil_ognu,
    lam_vil_dakhobal,
    lam_vil_bholberd,
    lam_vil_dalgrar,
    lam_vil_ludgeg,
    lam_vil_newcresthill,
    lam_vil_cresthill,
    lam_vil_kagdural,
    lam_vil_nurrugh,
    lam_vil_kilarum,
    lam_vil_gralka,
    lam_vil_lum,
    lam_vil_murzon,
    lam_vil_vretkag,
    lam_vil_vradux,
    lam_vil_urag,
    lam_vil_gelria,
    lam_vil_keldihr,
    lam_vil_dibashnul,
    lam_vil_badbog,
    lam_vil_gulfim,
    lam_vil_batul,
    lam_vil_eaglehaven,
    lam_vil_skegness,
    lam_vil_culcheth,
    lam_vil_anghorwat,
    lam_vil_hugmug,
    lam_vil_lagakh,
    lam_vil_mazoga,
    lam_vil_dazzez,
    lam_vil_narod,
    lam_vil_joromai,
    lam_vil_umog,
    lam_vil_newham,
    lam_vil_wolford,
    lam_vil_stawford,
    //Bodies of Water
    lam_wat_dreghkozhral,
    lam_wat_dreghmenur,
    lam_wat_dreghraghor,
    lam_wat_khorrazul,
    lam_wat_dreghmanshov,
    //Portales Base
    portales_devilsbane
]);

var abhainn_group = L.layerGroup([
    //Mountains
    abh_mtn_cian,
    abh_mtn_cresrood,
    //Military Installations
    abh_mil_ulnog,
    abh_mil_ulzadon,
    //Villages
    abh_vil_taewe
]);

var knifes_edge_group = L.layerGroup([
    //Cities
    kni_cit_frostmoor,
    kni_cit_hayle,
    //Forests
    kni_for_manitouforest,
    kni_for_blackiceforest,
    kni_for_marlwoods,
    kni_for_wynnorawoods,
    //Military Installations
    kni_mil_fortbellweather,
    //Mountains
    kni_mtn_sharpcliff,
    kni_mtn_icebreak,
    kni_mtn_suscona,
    kni_mtn_alsano,
    //Towns
    kni_tow_craydon,
    kni_tow_whithost,
    kni_tow_bearspire,
    //Villages
    kni_vil_colflora,
    kni_vil_avalgard,
    kni_vil_neverthaw,
    kni_vil_chillcrest,
    kni_vil_windbreak,
    kni_vil_flurris,
    kni_vil_cloudscar,
    //Bodies of Water
    kni_wat_direstrait,
    kni_wat_gulfofbexmack,
    kni_wat_turmontbay,
    kni_wat_weslinetbay,
    kni_wat_scarrockocean,
    kni_wat_coldscalelake
]);

var imperial_group = L.layerGroup([
    //Capitols
    hes_cap_kardia,
    hes_cap_asaak,
    hes_cap_kamran,
    hes_cap_tayakoli,
    hes_cap_enayat,
    hes_cap_orrin,
    hes_cap_herlaug,
    hes_cap_valdis,
    hes_cap_vili,
    hes_cap_hallvard,
    hes_cap_gildr,
    hes_cap_asketill,
    hes_cap_xanthos,
    hes_cap_kydonia,
    hes_cap_iasg,
    hes_cap_reumh,
    hes_cap_portcaishen,
    //Cities
    hes_cit_callipolis,
    hes_cit_apollonia,
    hes_cit_ambrosius,
    hes_cit_isfahan,
    hes_cit_abbasi,
    hes_cit_reza,
    hes_cit_arzhang,
    hes_cit_javad,
    hes_cit_mar,
    hes_cit_birstan,
    hes_cit_grimar,
    hes_cit_hrelling,
    hes_cit_raghnall,
    hes_cit_ainmire,
    hes_cit_clothach,
    hes_cit_oldcliff,
    //Forests
    hes_for_frostnorthtimberland,
    hes_for_mapleridgegrove,
    hes_for_nmagewilds,
    hes_for_bonadenforest,
    //Military Installations
    hes_mil_duzakh,
    hes_mil_alder,
    hes_mil_craven,
    hes_mil_quartermain,
    hes_mil_khalida,
    hes_mil_hughes,
    hes_mil_adil,
    hes_mil_yancey,
    hes_mil_arcturus,
    hes_mil_lim,
    hes_mil_wil,
    hes_mil_dy,
    hes_mil_buttonwood,
    hes_mil_batan,
    hes_mil_swythe,
    hes_mil_vera,
    hes_mil_halliwell,
    hes_mil_holm,
    //Mountains
    hes_mtn_alagar,
    hes_mtn_racroft,
    hes_mtn_saldiac,
    hes_mtn_exquet,
    //Towns
    hes_tow_abydos,
    hes_tow_rivermeet,
    hes_tow_heloros,
    hes_tow_itanos,
    hes_tow_salamis,
    hes_tow_mountmead,
    hes_tow_fahraj,
    hes_tow_bayat,
    hes_tow_majid,
    hes_tow_siavash,
    hes_tow_parsa,
    hes_tow_eleyphis,
    hes_tow_adaron,
    hes_tow_andvett,
    hes_tow_vidkunn,
    hes_tow_hadd,
    hes_tow_agmundr,
    hes_tow_naddod,
    hes_tow_seakirk,
    hes_tow_borstig,
    hes_tow_minka,
    hes_tow_ayamonn,
    hes_tow_lochlainn,
    hes_tow_carhal,
    //Villages
    hes_vil_rizinia,
    hes_vil_pitane,
    hes_vil_hewe,
    hes_vil_frostedge,
    hes_vil_crescentvalley,
    hes_vil_escarcha,
    hes_vil_pinonera,
    hes_vil_penketh,
    hes_vil_holmfirth,
    hes_vil_skegness,
    hes_vil_sutton,
    hes_vil_galdreth,
    hes_vil_kilead,
    hes_vil_exeter,
    hes_vil_valledediamante,
    hes_vil_kinrith,
    hes_vil_makrinos,
    hes_vil_heartwood,
    hes_vil_kald,
    hes_vil_claethorpes,
    hes_vil_oakwood,
    hes_vil_greenedge,
    hes_vil_stratos,
    hes_vil_sybaris,
    hes_vil_akylas,
    hes_vil_dumajran,
    hes_vil_ganzak,
    hes_vil_dvin,
    hes_vil_daving,
    hes_vil_lauterbrunnen,
    hes_vil_hillstop,
    hes_vil_gudleif,
    hes_vil_surt,
    hes_vil_oddny,
    hes_vil_sigewulf,
    hes_vil_ulfheid,
    hes_vil_eivor,
    hes_vil_synin,
    hes_vil_stowe,
    hes_vil_lodbrok,
    hes_vil_midplains,
    hes_vil_dracfield,
    hes_vil_shieling,
    hes_vil_eldham,
    hes_vil_farmersfield,
    hes_vil_steinn,
    hes_vil_wavefront,
    hes_vil_astrakane,
    hes_vil_sakerkeep,
    hes_vil_willsden,
    hes_vil_yngvar,
    hes_vil_cainnech,
    hes_vil_teigue,
    hes_vil_tierney,
    hes_vil_coalville,
    hes_vil_defalls,
    hes_vil_muiris,
    hes_vil_muireach,
    hes_vil_daire,
    hes_vil_estebahia,
    hes_vil_gagoza,
    hes_vil_cassair,
    hes_vil_labhras,
    hes_vil_islasalvaje,
    hes_vil_norcoast,
    hes_vil_dorton,
    hes_vil_toftanes,
    //Bodies of Water
    hes_wat_baybaie,
    hes_wat_horseshoebay,
    hes_wat_lionclawbay,
    hes_wat_kilhstedtbay,
    hes_wat_bayoflove,
    hes_wat_daoimeanach,
    hes_wat_sirenbay,
    hes_wat_lakealeyse,
    hes_wat_blackpoolbay,
]);

var floriason_group = L.layerGroup([
    //Capitols
    hes_cap_pessac,
    //Cities
    hes_cit_daxcitadel,
    hes_cit_talence,
    hes_cit_veritas,
    //Forests
    hes_for_smagewilds,
    //Military Installations
    hes_mil_dormont,
    hes_mil_dalen,
    hes_mil_arlot,
    hes_mil_risban,
    hes_mil_daurore,
    hes_mil_mahon,
    hes_mil_despoir,
    hes_mil_dorages,
    hes_mil_calais,
    hes_mil_dos,
    //Mountains
    hes_mtn_tolsay,
    hes_mtn_mannach,
    //Towns
    hes_tow_ramsay,
    hes_tow_bellegarde,
    hes_tow_rachdale,
    //Villages
    hes_vil_caen,
    hes_vil_calucon,
    hes_vil_vannes,
    hes_vil_orlak,
    hes_vil_larkinge,
    hes_vil_briarrose,
    hes_vil_aramore,
    hes_vil_carlisle,
    hes_vil_honfleur,
    //Bodies of Water
    hes_wat_baiedonica
]);

var water_group = L.layerGroup([
    //Knife's Edge, Bodies of Water
    kni_wat_direstrait,
    kni_wat_gulfofbexmack,
    kni_wat_turmontbay,
    kni_wat_weslinetbay,
    kni_wat_scarrockocean,
    kni_wat_coldscalelake,
    //Lamorra, Bodies of Water
    lam_wat_dreghkozhral,
    lam_wat_dreghmenur,
    lam_wat_dreghraghor,
    lam_wat_khorrazul,
    lam_wat_dreghmanshov,
    //Prizrak Drakona, Bodies of Water
    pri_wat_priglaz,
    pri_wat_lakezeleshov,
    pri_wat_lakeiskimas,
    pri_wat_drakoglaz,
    pri_wat_stukalabay,
    pri_wat_vimtasinlet,
    pri_wat_beretiminlet,
    //Leonychus, Bodies of Water
    hes_wat_baybaie,
    hes_wat_horseshoebay,
    hes_wat_lionclawbay,
    hes_wat_kilhstedtbay,
    hes_wat_bayoflove,
    hes_wat_daoimeanach,
    hes_wat_sirenbay,
    hes_wat_lakealeyse,
    hes_wat_blackpoolbay,
    //Floraison, Bodies of Water
    hes_wat_baiedonica,
    //Nograd, Bodies of Water
    nog_wat_dregharkiz
]);

var portales_group = L.layerGroup([
    portales_devilsbane
]);

//Marker Overlay
var overlays = {
    "Base of Operation: Portales": portales_group,
    "Capitols": capitols_group,
    "Cities": cities_group,
    "Towns": towns_group,
    "Villages": villages_group,
    "Military Installations": military_group,

    "Mountains": mountains_group,
    "Forests": forests_group,
    "Bodies of Water": water_group,

    "Abhainn": abhainn_group,
    "Hesperides": hesperides_group,
    "Knife's Edge": knifes_edge_group,
    "Lamorra": lamorra_group,
    "Nograd": nograd_group,
    "Prizrak Drakona": prizrak_drakona_group,

    "Leonychus Empire": imperial_group,
    "Floraison": floriason_group
}

//Marker Visbility Controls
L.control.layers(null, overlays).addTo(map);