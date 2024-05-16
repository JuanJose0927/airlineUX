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
      image: ""
    },
    {
      nombre: "North Korea",
      curency: "KPW",
      image: ""
    },
    {
      nombre: "Qatar",
      curency: "QAR",
      image: ""
    },
    {
      nombre: "Phillippines",
      curency: "PHP",
      image: ""
    },
    {
      nombre: "Saudi Arabia",
      curency: "SAR",
      image: ""
    },
    {
      nombre: "South Korea",
      curency: "KRW",
      image: ""
    },
    {
      nombre: "United Arab Emirates",
      curency: "AED",
      image: ""
    },
  ]
  Africa = [
    {
      nombre: "",
      curency: "",
      image: ""
    }
  ]
}
