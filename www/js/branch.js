
function getCurrentLoc(){
       var currentLoc = '';
    // Check for geolocation support
    if (navigator.geolocation) {
        // Use method getCurrentPosition to get coordinates
        
    
        navigator.geolocation.getCurrentPosition(function (position) {
            // Access them accordingly
            
            currentLoc = new google.maps.LatLng(position.coords.latitude,position.coords.longitude)

            localStorage.setItem("currentLat", position.coords.latitude);
            localStorage.setItem("currentLong", position.coords.longitude);

            $('#map_canvas').gmap('addMarker', { 'position':currentLoc, 'icon':'img/current-pointer.png'} );
            $('#map_canvas').gmap({'center': position.coords.latitude + ", " + position.coords.longitude, 'zoom': 12,'disableDefaultUI':true, });
            $('#map_canvas').gmap('get','map').panTo(currentLoc);
            $('#map_canvas').gmap('option', 'zoom', 16);

        });

        convertedVal = convertToMeter(localStorage.getItem("currentLong"), localStorage.getItem("currentLat"), localStorage.getItem("targetLong"), localStorage.getItem("targetLat") );
        console.log(convertedVal );

        //$('#map_canvas').gmap('clear', 'markers');
        //$('#map_canvas').gmap({action:'clear', tag:'1'});
    } 
    else{
        alert('Your GPS is disable!');
    }
}

getCurrentLoc();



        var storeData = '';
        //$.getJSON( "http://localhost:8000/getNearMeList/"+localStorage.getItem("currentLat")+"/"+localStorage.getItem("currentLong"), function( data ) {

        $.ajax({
          url: "https://crossorigin.me/http://api.eglobalmd.net/getNearMeList/"+localStorage.getItem("currentLat")+"/"+localStorage.getItem("currentLong"),
          async: false,
          dataType: 'json',
          success: function (json) {
            storeData = json;
          }
        });


 console.log(storeData);
var img_marker = 'img/marker-icon.png';

//var markers = [{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.288613,121.112580', 'title': 'BHS - GOLDEN CITY'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.291183,121.099429', 'title': 'BHS - NISSIN / BALIBAGO'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.364722,121.055556', 'title': 'BHS - ROSARIO COMPLEX'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.284302,121.088893', 'title': 'BHS - SAN LORENZO'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.316027,121.079939', 'title': 'BHS - SOUTH CITY'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.284302,121.088893', 'title': 'BHS - LM MARKET AREA'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.151948,121.267836', 'title': 'BHS - LOS BANOS'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.364722,121.055556', 'title': 'BHS - PACITA COMPLEX'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.213078,121.149560', 'title': 'BHS - PARIAN'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.238430,121.152424', 'title': 'BHS - MAMATID'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.211445,121.123744', 'title': 'BHS - MAYAPA'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.364722,121.055556', 'title': 'BHS - SAN PEDRO BAYAN'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.349995,121.062891', 'title': 'BHS - ELVINDA'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.210894,121.121982', 'title': 'BHS - MAYAPA'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.333313,121.081835', 'title': 'BHS - OLIVARES'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.333282,121.093698', 'title': 'BHS - SAN ANTONIO'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.205902,121.155765', 'title': 'BHS - WALTERMART/CALAMBA'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.284302,121.088893', 'title': 'BHS - CHESTNUT'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.284302,121.088893', 'title': 'BHS - POOC'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.287749,121.413697', 'title': 'BHS - STA. CRUZ'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.219571,121.139213', 'title': 'BHS - BUCAL'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.284302,121.088893', 'title': 'BHS - BRGY. IBABA'},{'icon': images[0], 'tags':Array('Laguna'), 'bound':true, 'position': '14.064211,121.323337', 'title': 'BHS - San Pablo'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.115286,120.962116', 'title': 'BHS - TAGAYTAY / MENDEZ'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.115286,120.962116', 'title': 'BHS - TAGAYTAY ROTONDA'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.383333,120.883333', 'title': 'BHS - GEN. TRIAS BAYAN'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.291894,120.910956', 'title': 'BHS - GEN. TRIAS MANGGAHAN'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.299018,120.958970', 'title': 'BHS - FCIE DASMA'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.316667,121.050000', 'title': 'BHS - PASEO DE CARMONA'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.316667,121.050000', 'title': 'BHS - SOUTHVILLE'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.320550,120.961563', 'title': 'BHS - DLSU DASMA'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.336515,120.981896', 'title': 'BHS - SALAWAG'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.351967,120.838409', 'title': 'BHS - TANZA'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.401681,120.926151', 'title': 'BHS - MALAGASANG'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.479130,120.896963', 'title': 'BHS - CAVITE CITY'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.416667,120.850000', 'title': 'BHS - ROSARIO'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.315258,120.768413', 'title': 'BHS - NAIC'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.426539,120.891986', 'title': 'BHS - KAWIT 1'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.282754,120.964643', 'title': 'BHS - PIEZA'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.316667,121.050000', 'title': 'BHS - CARMONA'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.398214,120.974143', 'title': 'BHS - BAHAYANG PAGASA'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.281766,120.901550', 'title': 'BHS - BROOKSIDE'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.316667,120.766667', 'title': 'BHS - AMAYA'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.289167,121.011944', 'title': 'BHS - BANGKAL'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.106280,120.966680', 'title': 'BHS - SILANG/TAGAYTAY'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.283333,120.850000', 'title': 'BHS - TRECE MARTIREZ'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.223468,120.973631', 'title': 'BHS - SILANG-DASMA'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.351967,120.838409', 'title': 'BHS - PARADAHAN'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.405374,120.924148', 'title': 'BHS - BUCANDALA'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.128611,120.905833', 'title': 'BHS -MENDEZ'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.433333,120.900000', 'title': 'BHS - KAWIT 2'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.414392,120.900686', 'title': 'BHS - LANCASTER'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.479130,120.896963', 'title': 'BHS - TRECE MARTIREZ'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.322130,120.969706', 'title': 'BHS - DASMA AREA-C'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.218309,120.972854', 'title': 'BHS - LALAAN 2'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.412993,120.973679', 'title': 'BHS - ZAPOTE'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.479130,120.896963', 'title': 'BHS - TANZA/TRECE'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.441965,120.953929', 'title': 'BHS - PANAPAAN'},{'icon': images[0], 'tags':Array('Cavite'), 'bound':true, 'position': '14.218309,120.972854', 'title': 'BHS - PUTING KAHOY SILANG'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.644488,120.974739', 'title': 'BHS - CALOOCAN'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.648047,120.973312', 'title': 'BHS - MAYPAJO'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.450257,120.991271', 'title': 'BHS - URCI'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.463000,120.989306', 'title': 'BHS - NAGA ROAD'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.428245,121.002621', 'title': 'BHS - MARCOS ALVAREZ'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.434763,121.011636', 'title': 'BHS - SM SOUTHMALL'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.449099,120.977945', 'title': 'BHS - PHILAMLIFE'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.464573,120.967189', 'title': 'BHS - PULANGLUPA UNO'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.576990,121.006725', 'title': 'BHS - PALANAN'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.543800,121.011528', 'title': 'BHS - BANGKAL    '},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.565280,121.011978', 'title': 'BHS - CHINO ROCES'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.579444,121.035917', 'title': 'BHS - MANDALUYONG'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.589611,121.002998', 'title': 'BHS - PANDACAN'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.616657,120.982741', 'title': 'BHS - TAYUMAN'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.610556,120.998333', 'title': 'BHS - SAMPALOC - LOYOLA'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.617773,120.969848', 'title': 'BHS - TONDO'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.589597,120.974726', 'title': 'BHS - INTRAMUROS'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.581548,121.013675', 'title': 'BHS - PEDRO GIL'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.607698,120.982860', 'title': 'BHS - FUGOSO'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.472234,121.027931', 'title': 'BHS - STA. ANA'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.598328,120.970512', 'title': 'BHS - BINONDO'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.650730,121.102855', 'title': 'BHS - MARIKINA'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.646744,121.105159', 'title': 'BHS - MARIKINA 2'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.386750,121.045210', 'title': 'BHS - SUSANA HEIGHTS'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.372545,121.036377', 'title': 'BHS - TUNASAN '},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.398330,121.045830', 'title': 'BHS - SOLDIERS HILLS'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.416689,121.024866', 'title': 'BHS - MADRIGAL ALABANG'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.417034,121.047619', 'title': 'BHS - ALABANG'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.417034,121.047619', 'title': 'BHS - CITI ARCADE'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.432446,121.045213', 'title': 'BHS - WEST SERVICE ROAD'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.482094,120.996051', 'title': 'BHS - SM SUCAT'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.498213,121.024909', 'title': 'BHS - MERVILLE'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.483738,121.033569', 'title': 'BHS - BETTERLIVING'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.455598,121.011608', 'title': 'BHS - AGUIRRE AVE'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.440062,120.998203', 'title': 'BHS - FRIENDSHIP ROAD'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.489044,121.001728', 'title': 'BHS - MULTINATIONAL'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.491371,121.037121', 'title': 'BHS - SUN VALLEY'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.454611,121.049277', 'title': 'BHS - SUCAT'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.501183,120.991217', 'title': 'BHS - LA HUERTA'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.529416,120.997102', 'title': 'BHS - BACLARAN'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.566179,120.993391', 'title': 'BHS - TAFT'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.588859,121.103994', 'title': 'BHS - ORTIGAS EXT'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.562119,121.076725', 'title': 'BHS - KAPASIGAN'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.677033,121.031729', 'title': 'BHS - TANDANG SORA'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.616595,121.077221', 'title': 'BHS - LIBIS'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.640641,121.014874', 'title': 'BHS - FRISCO'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.642180,121.047080', 'title': 'BHS - EAST AVE'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.702179,121.068210', 'title': 'BHS - FAIRVIEW'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.721402,121.052141', 'title': 'BHS - NOVALICHES'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.665076,121.043566', 'title': 'BHS - VISAYAS AVE'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.717418,121.055486', 'title': 'BHS - LAGRO'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.570983,121.022971', 'title': 'BHS - TAGUIG'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.694823,120.964170', 'title': 'BHS - MALINTA'},{'icon': images[0], 'tags':Array('Metro Manila'), 'bound':true, 'position': '14.617290,121.059309', 'title': 'BHS - CUBAO'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '14.824786,120.293365', 'title': 'BHS - OLONGAPO'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '14.950000,120.883333', 'title': 'BHS - BALIUAG'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '14.916667,120.766667', 'title': 'BHS - CALUMPIT'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '14.852739,120.816038', 'title': 'BHS - TIKAY MALOLOS'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '14.671013,120.497784', 'title': 'BHS - BALANGA'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '14.883333,120.850000', 'title': 'BHS - PLARIDEL'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '15.078889,120.941944', 'title': 'BHS - SAN ILDEFONSO'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '15.028516,120.934564', 'title': 'BHS - SAN RAFAEL'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '14.764168,120.993054', 'title': 'BHS - MEYCAUAYAN'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '15.059394,120.656705', 'title': 'BHS - SAN FERNANDO'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '15.144985,120.588703', 'title': 'BHS - ANGELES'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '14.833680,120.865685', 'title': 'BHS - TABANG'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '14.805667,120.935788', 'title': 'BHS - BOCAUE'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '14.816667,120.950000', 'title': 'BHS - STA MARIA'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '14.758056,120.948056', 'title': 'BHS - MARILAO'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '15.486505,120.973393', 'title': 'BHS - CABANATUAN'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '13.939357,121.613608', 'title': 'BHS - PAOMBONG'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '13.939357,121.613608', 'title': 'BHS - LUCENA 1'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '13.939357,121.613608', 'title': 'BHS - LUCENA 2'},{'icon': images[0], 'tags':Array('North of Metro Manila'), 'bound':true, 'position': '13.833333,121.983333', 'title': 'BHS - UNISAN'}];
var json_data = {"branch":storeData};
var json_data_promo = {"October":[{"id":"1","branch_id":"24","promo_title":"Test title","promo_content":"this is the content","promo_photo_file":"img/album-bb.jpg","promo_month":"October","promo_date_from":"2015-10-08","promo_date_to":"2015-10-25"}],"November":[{"id":"2","branch_id":"110","promo_title":"Test title 3","promo_content":"this is the content","promo_photo_file":"","promo_month":"November","promo_date_from":"2015-11-06","promo_date_to":"2015-11-16"},{"id":"3","branch_id":"110","promo_title":"Test title 3","promo_content":"this is the content","promo_photo_file":"","promo_month":"November","promo_date_from":"2015-11-06","promo_date_to":"2015-11-16"}]};
var json_data_menu = {"Menu":[{"id":1,"name":"Double Classic Ebi - 048508","price":5,"photo_file":"https:\/\/d80dy3s918e47.cloudfront.net\/sg\/static\/1475465468617\/assets\/65\/products\/100256.png?"},{"id":2,"name":"Fish Dippers with Tartar Sauce (9 Pc) - 048508","price":8.75,"photo_file":"https:\/\/d80dy3s918e47.cloudfront.net\/sg\/static\/1475465468617\/assets\/65\/products\/101031.png?"},{"id":3,"name":"Signature - Spicy Tortilla - 048508","price":9.5,"photo_file":"https:\/\/d80dy3s918e47.cloudfront.net\/sg\/static\/1475465468617\/assets\/65\/products\/100616.png?"}]};
var province = [];
var branch = [];
var menu = [];


$.each(json_data.branch, function(key, value) {
    branch.push(value);
});
branch.sort();

$.each(json_data_menu.Menu, function(key, value) {
    menu.push(value);
});
menu.sort();

// console.log(branch);

$( document ).on( "pagebeforeshow", ".pageload", function() {
        
    // var arr_str = [];   

    // arr_str.push('<ul>');
    //     arr_str.push('<li><a href="branch.html" data-ajax="false" data-icon="grid" class="ui-btn-active">Branch</a></li>');
    //     arr_str.push('<li><a href="map.html" data-ajax="false" data-icon="star">Map</a></li>');
    //     arr_str.push('<li><a href="#" data-icon="gear">Promos</a></li>');
    //     arr_str.push('<li><a href="#" data-icon="star">Reservation</a></li>');
    //     arr_str.push('<li><a href="#" data-icon="star">Fav</a></li>');
    // arr_str.push('</ul>');

    // $('#footer-nav-item').html(arr_str.join(''))).listview('refresh');

});


function getBranchDetailsById(id){
    
    var data = json_data.branch;

    var result = data.filter(function (data) {
        return data.id == id;
    });

    return result[0];
}

function getPromoDetailsById(id, month){

    var data = json_data_promo[month];
            var result = data.filter(function (data) {
                return data.id == id;
            });

    return result[0];
}

//console.log(getPromoDetailsById('2','November').promo_title);




$( document ).on( "pagebeforeshow", "#branch-screen", function() {
        
    var arr_str = [];   

    $('#brachlist').html('');

    $.each(branch, function(i, tag) {
        
        var distance = parseFloat(tag.distance);
        distance =distance.toFixed(4);

        arr_str.push('<li class="sub-item" data-filtertext="'+tag.name + ' ' + tag.postal_code + '"><a href="#" class="showDetails" data-position="'+tag.map_lat + ', ' + tag.map_long+'" data-branch="'+tag.name+'" data-id="'+tag.id+'"><div class="sub-item-title">'+tag.name+'</div> Address: '+tag.address+' '+tag.postal_code+'<br />Distance: '+distance+' km</a></li>');      



    });

    $('#brachlist').append(arr_str.join('')).trigger('create');

});


$( document ).on( "pagebeforeshow", "#branch-info", function() {
  
    var branch_id = localStorage.getItem("selected-branch-id");

    if(branch_id == '' )
    {
        window.location = "#branch-screen";
    }

    var details = getBranchDetailsById(branch_id);

    var arr_str = [];

    if(details.name != null)     arr_str.push('<li class="main"><label>'+details.name+'</label></li>');
    if(details.address != null)         arr_str.push('<li><label>Address:</label> <div class="info">'+details.address+' '+details.postal_code+'</div></li>');
    if(details.phone_no != null)         arr_str.push('<li><label>Phone No.:</label> <div class="info">'+details.phone_no+'</div></li>');    


    $('#branch-details').html(arr_str.join(''));

    var arr_str_photo = [];
    
    arr_str_photo.push('<ul class="menu-item">');
    $.each(menu, function(key, value) {

    
            arr_str_photo.push('<li><a href="#popupPhotoLarge" class="showPopupPhoto" data-rel="popup" data-position-to="window" data-transition="fade"><img class="popphoto" src="'+value.photo_file+'" alt="Paris, France" style="width:30%"></a><br />'+value.name+'<br /> <strong>Price: $'+value.price+'</strong></li>');
      
    });
    arr_str_photo.push('</ul>');
    var photoHeader = '';
    if(arr_str_photo.length > 0)
    {
        photoHeader = '<h2>MENU ITEMS</h2>';
    } 
    $('#branch-photo-list').html(photoHeader + arr_str_photo.join(''));


});


$('#branch-info').on('click','.showPopupPhoto',function(e) { 

    $("#img-large-photo").attr('src',$(this).find('img').attr('src'));

});


$('#branch-screen').on('click','.showDetails',function(e) { 

    if(localStorage.getItem("selected-branch") != '')
    {
        localStorage.removeItem('selected-branch');
        localStorage.removeItem('selected-branch-position');
        localStorage.removeItem('reference-page');
    }

    localStorage.setItem("selected-branch-id", $(this).data('id'));
    localStorage.setItem("selected-branch", $(this).data('branch'));
    localStorage.setItem("selected-branch-position", $(this).data('position'));
    localStorage.setItem("reference-page", 'branch.html');   

    window.location = "#branch-info";

});



$('#branch-info').on('click','.showmap',function(e) { 

    localStorage.setItem("reference-page", 'branch.html');  
    window.location = "map.html";

});

$('#branch-info').on('click','.showPromo',function(e) { 

    localStorage.setItem("reference-page", 'branch.html#branch-info');  

    window.location = "promo.html";
});

// $('#branch-screen').on('click','.showmap',function(e) { 

//     if(localStorage.getItem("selected-branch") != '')
//     {
//         localStorage.removeItem('selected-branch');
//         localStorage.removeItem('selected-branch-position');
//         localStorage.removeItem('reference-page');
//     }

//     localStorage.setItem("selected-branch", $(this).data('branch'));
//     localStorage.setItem("selected-branch-position", $(this).data('position'));
//     localStorage.setItem("reference-page", 'branch.html');    
//     window.location = "map.html";
// });


function convertToMeter(currentLongitude, currentLatitude, long1, lat1) {
    erdRadius = 6371;

    currentLongitude = currentLongitude * (Math.PI / 180);
    currentLatitude = currentLatitude * (Math.PI / 180);
    long1 = long1 * (Math.PI / 180);
    lat1 = lat1 * (Math.PI / 180);

    x0 = currentLongitude * erdRadius * Math.cos(currentLatitude);
    y0 = currentLatitude * erdRadius;

    x1 = long1 * erdRadius * Math.cos(lat1);
    y1 = lat1 * erdRadius;

    dx = x0 - x1;
    dy = y0 - y1;

    d = Math.sqrt((dx * dx) + (dy * dy));


    return Math.round(d * 1000);
};


function getNearestBranch(currentLongitude, currentLatitude, targetRadius)
{
     var distanceObj = [],
        i = 0
        convertedVal = '';

    $.each(markers, function (a, marker) {
        var str = marker['position'];
        var res = str.split(",");

        convertedVal = convertToMeter(currentLongitude, currentLatitude,res[1], res[0]);

        if((convertedVal / 1000) <= targetRadius)
        {
            distanceObj[i] = { distance: convertedVal, location: marker['title'] };
            ++i;
        }
        
        
    });

    distanceObj.sort(function(a,b) {
        return parseInt(a.distance) - parseInt(b.distance)
    });

  

    return distanceObj;
}
