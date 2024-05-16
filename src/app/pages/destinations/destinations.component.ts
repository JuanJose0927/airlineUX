import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent {
  destinationsEuropa = [
    {
      nombre: "Spain",
      curency: "EUR",
      image: "https://assets.vogue.com/photos/6603d64d13a27b5703522946/master/w_2560%2Cc_limit/509288876"
    },
    {
      nombre: "France",
      curency: "EUR",
      image: "https://assets-global.website-files.com/5e9aa66fd3886aa2b4ec01ca/6548605a76d8f3c0c708ffef_living%20in%20france%20(1).png"
    },
    {
      nombre: "Albania",
      curency: "ALL",
      image: "https://images.theconversation.com/files/494717/original/file-20221110-21-yd03jv.jpg?ixlib=rb-4.1.0&rect=2%2C5%2C982%2C491&q=45&auto=format&w=1356&h=668&fit=crop"
    },
    {
      nombre: "Germany",
      curency: "EUR",
      image: "https://assets-global.website-files.com/5e9aa66fd3886aa2b4ec01ca/6527754fcade3889092679fd_living%20in%20germany%20(1).png"
    },
    {
      nombre: "Belgium",
      curency: "EUR",
      image: "https://i.natgeofe.com/k/96b6f0ce-38f7-4ee9-8510-7f39f0bbe9e7/belgium-brussels-grand-palace_4x3.jpg"
    },
    {
      nombre: "Netherlands",
      curency: "EUR",
      image: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F924f77db-c0b4-4d33-89bf-0dad7a1ff1ee.jpg?crop=1564%2C880%2C318%2C0"
    },
    {
      nombre: "Norway",
      curency: "EUR",
      image: "https://a.cdn-hotels.com/gdcs/production122/d1611/bba027a5-f1eb-4c95-820d-cc63c89fa143.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    },
    {
      nombre: "Russia",
      curency: "RUB",
      image: "https://www.state.gov/wp-content/uploads/2018/11/Russia-2499x1406.jpg"
    },
    {
      nombre: "Sweden",
      curency: "SEK",
      image: "https://media.timeout.com/images/105237902/750/422/image.jpg"
    },
    {
      nombre: "Switzerland",
      curency: "CHF",
      image: "https://znaki.fm/static/content/thumbs/1600x900/6/91/rhktpc---c16x9x50px50p--fa13e00d29397c29de7b89ed3d57a916.webp"
    },
    {
      nombre: "Vatican City",
      curency: "EUR",
      image: "https://i0.wp.com/www.touristitaly.com/wp-content/uploads/2023/06/shutterstock_1218983827-scaled.jpg?fit=5352%2C3504&ssl=1"
    },
  ]
  destinationsAmerica = [
    {
      nombre: "Colombia",
      curency: "COP",
      image: "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/Colombia_CartagenadeIndias_shutterstock_170733722_Jess%20Kraft_Shutterstock.jpg?itok=-raqxsNk"
    },
    {
      nombre: "Brazil",
      curency: "BRl",
      image: "https://www.celebritycruises.com/blog/content/uploads/2021/09/what-is-brazil-known-for-christ-the-redeemer-aerial-hero-1920x890.jpg"
    },
    {
      nombre: "Argentina",
      curency: "ARS",
      image: "https://media.admagazine.com/photos/61b005f1f49d0094eb3dc9fc/4:3/w_1884,h_1413,c_limit/buenos%20ires.jpg"
    },
    {
      nombre: "Uruguay",
      curency: "UYU",
      image: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2022/11/03/63645401a9377.jpeg"
    },
    {
      nombre: "Mexico",
      curency: "MXN",
      image: "https://a.cdn-hotels.com/gdcs/production122/d447/86731787-fc69-44a8-8683-f9fbb45149f3.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    },
    {
      nombre: "United States",
      curency: "USD",
      image: "https://qph.cf2.quoracdn.net/main-qimg-336debe00b99dc672d154b31633552da-lq"
    },
  ]
  destinationsAsia = [
    {
      nombre: "Japan",
      curency: "JPY",
      image: "https://cdn.britannica.com/63/59363-050-F082087B/Garden-Kinkaku-Temple-shelter-structure-use-landscape.jpg"
    },
    {
      nombre: "North Korea",
      curency: "KPW",
      image: "https://i.natgeofe.com/k/8c2c618a-3daa-40dc-9ee4-32f15b811e2f/City_N-Korea_KIDS_0521_16x9.jpg"
    },
    {
      nombre: "Qatar",
      curency: "QAR",
      image: "https://wyandottedaily.com/wp-content/uploads/2024/01/Qatar.jpg"
    },
    {
      nombre: "Phillippines",
      curency: "PHP",
      image: "https://i.natgeofe.com/n/54720271-2656-4eae-a088-a2023cc25c9f/historic-colonial-town-of-vigan_3x2.jpg"
    },
    {
      nombre: "Saudi Arabia",
      curency: "SAR",
      image: "https://cdn.britannica.com/11/189711-050-2EFCF158/view-Mecca-Saudi-Arabia.jpg"
    },
    {
      nombre: "South Korea",
      curency: "KRW",
      image: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F15ebd41e-09ac-41db-be13-6dbead2c03e6.jpg?crop=1564%2C880%2C318%2C0&resize=1200"
    },
    {
      nombre: "United Arab Emirates",
      curency: "AED",
      image: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg "
    },
    {
      nombre: "Thailand",
      curency: "THB",
      image: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/bltf2f8a1a85ab37903/63c8b28ec82c4c38f2dbeef4/thailand_sukhothai_historical-park-1100.jpg"
    },
    {
      nombre: "Uzbekistan",
      curency: "UZS",
      image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/10/25/154544.jpg"
    },
    {
      nombre: "India",
      curency: "INR",
      image: "https://humanidades.com/wp-content/uploads/2018/12/India-1-e1585355432124.jpg"
    },
    {
      nombre: "China",
      curency: "CNY",
      image: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/08/china_shanghai_yuyuan-garden-city.jpg"
    }
  ]
  Africa = [
    {
      nombre: "Algeria",
      curency: "DZD",
      image: "https://cdn.britannica.com/00/77300-050-F7C43044/View-city-Algiers-Algeria.jpg"
    },
    {
      nombre: "Angola",
      curency: "AOA",
      image: "https://mediaim.expedia.com/destination/1/812169e9f9280fb407e27725a022e4f5.jpg"
    },
    {
      nombre: "Cameroon",
      curency: "XAF",
      image: "https://africanmediaagency.com/wp-content/uploads/2023/06/image-27.png"
    },
    {
      nombre: "Central African Republic",
      curency: "XAF",
      image: "https://untamedborders.com/wp-content/uploads/2022/04/IMG_5713.jpg"
    },
    {
      nombre: "Republic of the Congo",
      curency: "XAF",
      image: "https://pic-roc.com/wp-content/uploads/2023/10/Explorer-la-Republique-du-Congo-blog-hero.jpg"
    },
    {
      nombre: "Egypt",
      curency: "EGP",
      image: "https://www.rjtravelagency.com/wp-content/uploads/2023/07/Cairo-Egypt.jpg"
    },
    {
      nombre: "Ghana",
      curency: "GHS",
      image: "https://mediaim.expedia.com/destination/1/be0ad25550296ffd601bb7d3dd6e3807.jpg"
    },
    {
      nombre: "Kenya",
      curency: "KES",
      image: "https://commonwealthchamber.com/wp-content/uploads/2021/07/kenya-1.jpg"
    },
    {
      nombre: "Madagascar",
      curency: "MGA",
      image: "https://static.wixstatic.com/media/7b021c_d33e629d12fc4ba1a1ed3ccc8a0de840~mv2.jpg/v1/fill/w_1000,h_664,al_c,q_85,enc_auto/7b021c_d33e629d12fc4ba1a1ed3ccc8a0de840~mv2.jpg"
    },
    {
      nombre: "Morocco",
      curency: "MAD",
      image: "https://media.nomadicmatt.com/moroccoguide.jpg"
    },
    {
      nombre: "Mozambique",
      curency: "MZN",
      image: "https://cdn.britannica.com/07/93107-050-A0D6E501/Maputo-Mozambique.jpg"
    },
    {
      nombre: "Nigeria",
      curency: "MZN",
      image: "https://images.adsttc.com/media/images/5f35/9efe/b357/657e/fc00/0072/large_jpg/Lagos_Nigeria.jpg?1597349616"
    },
    {
      nombre: "Senegal",
      curency: "XOF",
      image: "https://lp-cms-production.imgix.net/2023-03/GettyImages-694213668.jpg?sharp=10&vib=20&w=1200&w=600&h=400"
    },
    {
      nombre: "South Africa",
      curency: " ZAR",
      image: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F4b50e023-2a4b-4f99-8cb4-6d383858a385.jpg?crop=1564%2C880%2C318%2C0&resize=1200"
    },
    {
      nombre: "Tanzania",
      curency: " TZS",
      image: "https://viajesportanzania.com/wp-content/uploads/viaje-a-tanzania-medida-taranna-005-680x383.jpg"
    },
  ]
}
