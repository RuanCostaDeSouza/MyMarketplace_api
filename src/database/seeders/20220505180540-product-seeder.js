'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        id:"34c352b4-dcb7-4b6f-8424-6190a0bf26d8",
        name:"Samsung Galaxy S21 Ultra",
        price:234.40,
        image:"https://images.samsung.com/ca/smartphones/galaxy-s21/buy/s21_ultra_group_kv_mo_img.jpg",
        created_at:"2022-05-05 12:56:09.843-03",
        updated_at:"2022-05-05 12:56:09.843-03",
      },
      {
        id:"f91c08ce-b67f-41b1-a897-d754f5bfe991",
        name:"Motorola Moto G60",
        price:234.40,
        image:"https://a-static.mlcdn.com.br/618x463/smartphone-motorola-moto-g60-128gb-4g-6gb-ram-octa-core-camera-tripla-6000mah-champagne-pana0001br/kabum/158626/8c56db7640eba48824f87a4ec51ae2bf.jpg",
        created_at:"2022-05-05 12:56:09.843-03",
        updated_at:"2022-05-05 12:56:09.843-03",
      },
      {
        id:"ae3c1e1e-60c2-4b69-8a46-143c55815210",
        name:"Poco X3 Pro",
        price:234.40,
        image:"https://s2.glbimg.com/8m4wcW45v-zfl-RT8lfLSvX_TuE=/967x94:2412x1216/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/X/7/o4MXJKQRyUVSozk0vrKQ/overview01-pc.jpg",
        created_at:"2022-05-05 12:56:09.843-03",
        updated_at:"2022-05-05 12:56:09.843-03",
      },
      {
        id:"4fda81ba-5e7b-498d-ab08-42d9ead357b0",
        name:"iPhone 12 Pro Max",
        price:234.40,
        image:"https://s2.glbimg.com/nM9JnsnsS9p2QnaDMMtM7Y8w3oo=/0x0:1605x1102/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/b/r/nZtMnQSbe3otM3CAAl4Q/apple-announce-iphone12pro-10132020.jpg",
        created_at:"2022-05-05 12:56:09.843-03",
        updated_at:"2022-05-05 12:56:09.843-03",
      },
      {
        id:"b31b2ca1-6be3-47ef-8314-8c5ccaa63f23",
        name:"Moto G100",
        price:234.40,
        image:"https://t.ctcdn.com.br/rplckW5VD84vLEgN3njiKKgMx9s=/1024x0/smart/i445206.jpeg",
        created_at:"2022-05-05 12:56:09.843-03",
        updated_at:"2022-05-05 12:56:09.843-03",
      },
      {
        id:"984431ab-44ff-4ed8-90f5-d033f26c0c1d",
        name:"Samsung Galaxy Z Flip 3",
        price:234.40,
        image:"https://images.samsung.com/my/smartphones/galaxy-z-flip3-5g/buy/zflip3_carousel_colorcombokv_ex_mo.jpg",
        created_at:"2022-05-05 12:56:09.843-03",
        updated_at:"2022-05-05 12:56:09.843-03",
      },
      {
        id:"87f0462b-4c1d-4af0-8ae0-18e3362b8c72",
        name:"iPhone 13",
        price:234.40,
        image:"https://i.zst.com.br/thumbs/12/2d/11/-14452337.jpg",
        created_at:"2022-05-05 12:56:09.843-03",
        updated_at:"2022-05-05 12:56:09.843-03",
      },
      {
        id:"edb6d2a9-56f0-41cc-b117-13f3c6770e6c",
        name:"Samsung Galaxy S20 FE",
        price:234.40,
        image:"https://i.zst.com.br/thumbs/12/32/15/-13445510.jpg",
        created_at:"2022-05-05 12:56:09.843-03",
        updated_at:"2022-05-05 12:56:09.843-03",
      },
      {
        id:"8994b6b0-cb32-4f5e-a7ec-63442194a85f",
        name:"Moto G10",
        price:234.40,
        image:"https://s2.glbimg.com/fHTFgtSeUUnt22j3TJAVM2qHyVo=/0x0:700x700/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/o/W/dWHVU2SXGGBHKNMAehrQ/divulgacao-motorola.png",
        created_at:"2022-05-05 12:56:09.843-03",
        updated_at:"2022-05-05 12:56:09.843-03",
      },
      {
        id:"280c8a3d-a80a-4f98-9ab6-368a67bba346",
        name:"iPhone 11",
        price:234.40,
        image:"https://t.ctcdn.com.br/_UppfS8i57KSQiW617mwwF9S9oo=/512x288/smart/filters:format(webp)/i505988.jpeg",
        created_at:"2022-05-05 12:56:09.843-03",
        updated_at:"2022-05-05 12:56:09.843-03",
      },
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  
  }
};
