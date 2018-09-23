var sqlite = {
    "type": "query results",
    "query": "SELECT docs.date, docTypes.name AS document, docs.id AS document_id, products.image, products.name AS product,\nproducts.price, rows.quantity, products.removed\n    FROM docs LEFT OUTER JOIN rows ON docs.id=rows.docId, docTypes, products\n       WHERE docs.typeId = docTypes.id\n        AND rows.productId = products.id\n        AND docs.removed = false\n        AND docTypes.removed = false\n        AND rows.removed=false\n          ORDER BY docs.date",
    "columns": [
        {
            "displayName": "date",
            "name": "date",
            "database": null,
            "table": "docs",
            "type": "DATETIME"
        },
        {
            "displayName": "document",
            "name": "name",
            "database": null,
            "table": "docTypes",
            "type": "DATETIME"
        },
        {
            "displayName": "document_id",
            "name": "id",
            "database": null,
            "table": "docs",
            "type": "DATETIME"
        },
        {
            "displayName": "image",
            "name": "image",
            "database": null,
            "table": "products",
            "type": "DATETIME"
        },
        {
            "displayName": "product",
            "name": "name",
            "database": null,
            "table": "products",
            "type": "DATETIME"
        },
        {
            "displayName": "price",
            "name": "price",
            "database": null,
            "table": "products",
            "type": "DATETIME"
        },
        {
            "displayName": "quantity",
            "name": "quantity",
            "database": null,
            "table": "rows",
            "type": "DATETIME"
        },
        {
            "displayName": "removed",
            "name": "removed",
            "database": null,
            "table": "products",
            "type": "DATETIME"
        }
    ],
    "rows": [
        [
            "2017-10-16 12:07:07",
            "Расход",
            564564867361367,
            "http:\/\/ecosned.ru\/image\/cache\/catalog\/categories\/iz_fermerskogo_moloka\/tvorog\/7\/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg",
            "Творог 9% с курагой",
            121,
            45,
            0
        ],
        [
            "2017-10-16 12:07:07",
            "Расход",
            564564867361367,
            "https:\/\/www.utkonos.ru\/images\/photo\/3265\/3265004H.jpg",
            "Молочный Яблоко 100",
            25.1,
            44,
            0
        ],
        [
            "2017-10-16 12:07:07",
            "Расход",
            564564867361367,
            "http:\/\/irecommend.ru\/sites\/default\/files\/imagecache\/copyright1\/user-images\/299388\/Ydfgl76IXe0nEM2gO6Ww.JPG",
            "Молочный Традиция 100",
            115,
            62,
            0
        ],
        [
            "2017-10-16 12:07:07",
            "Расход",
            564564867361367,
            null,
            "Виноград 0,3л",
            65,
            87,
            0
        ],
        [
            "2017-10-16 12:07:07",
            "Расход",
            564564867361367,
            "https:\/\/mariupolcena.com\/files\/products\/9ff44136e6ccb0afb404ad26f727e67d.jpeg",
            "Русская картошка чедар 50",
            46.3,
            86,
            0
        ],
        [
            "2017-10-16 12:07:07",
            "Расход",
            564564867361367,
            "https:\/\/images.ua.prom.st\/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
            "Молочный Груша 200",
            180,
            80,
            0
        ],
        [
            "2017-10-16 12:07:07",
            "Расход",
            564564867361367,
            "https:\/\/www.utkonos.ru\/images\/photo\/3054\/3054289H.jpg",
            "Аленка карамель 100г Акционный товар Большая скидка",
            73.9,
            94,
            0
        ],
        [
            "2017-10-16 12:07:07",
            "Расход",
            564564867361367,
            "https:\/\/www.utkonos.ru\/images\/photo\/3176\/3176192H.jpg",
            "Сыр 125г",
            131,
            83,
            0
        ],
        [
            "2017-10-16 15:09:08",
            "Расчет",
            564564867361368,
            "http:\/\/карапузик.com.images.1c-bitrix-cdn.ru\/upload\/iblock\/b28\/b28f089d41db757b74cfebfe21609228.jpg",
            "Яблоко-Виноград 0,5л",
            44,
            20,
            0
        ],
        [
            "2017-10-16 15:09:08",
            "Расчет",
            564564867361368,
            "https:\/\/images.ua.prom.st\/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
            "Молочный Груша 200",
            180,
            65,
            0
        ],
        [
            "2017-10-16 15:09:08",
            "Расчет",
            564564867361368,
            "http:\/\/ecosned.ru\/image\/cache\/catalog\/categories\/iz_fermerskogo_moloka\/tvorog\/7\/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg",
            "Творог 9% с курагой",
            121,
            41,
            0
        ],
        [
            "2017-10-16 15:09:08",
            "Расчет",
            564564867361368,
            "https:\/\/www.komus.ru\/medias\/sys_master\/root\/hd3\/h93\/9286922043422.jpg",
            "Молочный Изюм 100",
            102,
            72,
            0
        ],
        [
            "2017-10-16 15:09:08",
            "Расчет",
            564564867361368,
            null,
            "Виноград 0,3л",
            65,
            39,
            0
        ],
        [
            "2017-10-16 18:11:09",
            "Приход",
            564564867361369,
            "http:\/\/irecommend.ru\/sites\/default\/files\/imagecache\/copyright1\/user-images\/299388\/Ydfgl76IXe0nEM2gO6Ww.JPG",
            "Молочный Традиция 100",
            115,
            60,
            0
        ],
        [
            "2017-10-16 18:11:09",
            "Приход",
            564564867361369,
            "https:\/\/www.utkonos.ru\/images\/photo\/3054\/3054289H.jpg",
            "Аленка карамель 100г Акционный товар Большая скидка",
            73.9,
            99,
            0
        ],
        [
            "2017-10-16 18:11:09",
            "Приход",
            564564867361369,
            "https:\/\/mariupolcena.com\/files\/products\/9ff44136e6ccb0afb404ad26f727e67d.jpeg",
            "Русская картошка чедар 50",
            46.3,
            51,
            0
        ],
        [
            "2017-10-16 18:11:09",
            "Приход",
            564564867361369,
            "https:\/\/www.utkonos.ru\/images\/photo\/3117\/3117496H.jpg",
            "Русская картошка икра 50",
            33.1,
            15,
            0
        ],
        [
            "2017-11-01 12:09:03",
            "Приход",
            564564867361360,
            "https:\/\/images.ua.prom.st\/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
            "Молочный Груша 200",
            180,
            96,
            0
        ],
        [
            "2017-11-01 12:09:03",
            "Приход",
            564564867361360,
            null,
            "Парус апельсин 1л",
            150,
            89,
            1
        ],
        [
            "2017-11-01 12:09:03",
            "Приход",
            564564867361360,
            "https:\/\/www.utkonos.ru\/images\/photo\/3265\/3265004H.jpg",
            "Молочный Яблоко 100",
            25.1,
            9,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361361,
            "https:\/\/mariupolcena.com\/files\/products\/9ff44136e6ccb0afb404ad26f727e67d.jpeg",
            "Русская картошка чедар 50",
            46.3,
            62,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361361,
            "http:\/\/produkty-online.ru\/wa-data\/public\/shop\/products\/31\/83\/18331\/images\/1359\/1359.970.jpg",
            "Молочный Сказка 100",
            39,
            67,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361361,
            "https:\/\/www.utkonos.ru\/images\/photo\/3139\/3139296H.jpg",
            "Тоник 0,5л",
            63,
            51,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361361,
            "https:\/\/www.komus.ru\/medias\/sys_master\/root\/hd3\/h93\/9286922043422.jpg",
            "Молочный Изюм 100",
            102,
            4,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361361,
            "http:\/\/ecosned.ru\/image\/cache\/catalog\/categories\/iz_fermerskogo_moloka\/tvorog\/7\/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg",
            "Творог 9% с курагой",
            121,
            60,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361361,
            null,
            "Виноград 0,3л",
            65,
            61,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361361,
            "http:\/\/xn--4-8sbu.xn--p1ai\/thumb\/4KQdJOhw0Uu5AnP0PPIrMQ\/200r200\/761268\/3152.png",
            "Беседа. 50гр",
            36.5,
            41,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361362,
            "https:\/\/www.komus.ru\/medias\/sys_master\/root\/hd3\/h93\/9286922043422.jpg",
            "Молочный Изюм 100",
            102,
            3,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361362,
            "https:\/\/www.utkonos.ru\/images\/photo\/3176\/3176192H.jpg",
            "Сыр 125г",
            131,
            96,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361362,
            "https:\/\/www.utkonos.ru\/images\/photo\/3139\/3139296H.jpg",
            "Тоник 0,5л",
            63,
            31,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361362,
            null,
            "Парус лимон 1л",
            150,
            52,
            1
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361362,
            "http:\/\/www.svoda.ru\/site\/userfiles\/images\/%D0%9A%D0%90%D0%9F%D0%9B%D0%AF%20%D0%A0%D0%9E%D0%A1%D0%AB%201.5%D0%9B%20%D0%93%D0%90%D0%97%D0%98%D0%A0%D0%9E%D0%92%D0%90%D0%9D%D0%9D%D0%90%D0%AF.jpg",
            "Капля росы негаз 1.5л",
            16.9,
            16,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361362,
            "http:\/\/www.calorizator.ru\/sites\/default\/files\/imagecache\/product_512\/product\/tvorog-prostokvashino-1.jpg",
            "Нежирный творог",
            52.41,
            81,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361362,
            "http:\/\/ecosned.ru\/image\/cache\/catalog\/categories\/iz_fermerskogo_moloka\/tvorog\/7\/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg",
            "Творог 9% с курагой",
            121,
            23,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361362,
            "https:\/\/tashkentcena.com\/files\/products\/893eebe7b69146290886dc504a3328ef.jpeg",
            "Горький коньяк 100",
            336,
            52,
            0
        ],
        [
            "2017-11-03 13:11:06",
            "Приход",
            564564867361362,
            "https:\/\/www.utkonos.ru\/images\/photo\/3054\/3054289H.jpg",
            "Аленка карамель 100г Акционный товар Большая скидка",
            73.9,
            12,
            0
        ],
        [
            "2017-11-29 17:26:57",
            "Приход",
            564564867361365,
            "https:\/\/mariupolcena.com\/files\/products\/9ff44136e6ccb0afb404ad26f727e67d.jpeg",
            "Русская картошка чедар 50",
            46.3,
            3,
            0
        ],
        [
            "2017-11-29 17:26:57",
            "Приход",
            564564867361365,
            null,
            "Виноград 0,3л",
            65,
            88,
            0
        ],
        [
            "2017-11-29 17:26:57",
            "Приход",
            564564867361365,
            "http:\/\/www.calorizator.ru\/sites\/default\/files\/imagecache\/product_512\/product\/tvorog-prostokvashino-1.jpg",
            "Нежирный творог",
            52.41,
            20,
            0
        ],
        [
            "2017-11-29 17:26:57",
            "Приход",
            564564867361365,
            "https:\/\/www.utkonos.ru\/images\/photo\/3139\/3139296H.jpg",
            "Тоник 0,5л",
            63,
            64,
            0
        ],
        [
            "2017-11-29 17:26:57",
            "Приход",
            564564867361365,
            "http:\/\/produkty-online.ru\/wa-data\/public\/shop\/products\/31\/83\/18331\/images\/1359\/1359.970.jpg",
            "Молочный Сказка 100",
            39,
            54,
            0
        ],
        [
            "2017-11-29 17:26:57",
            "Приход",
            564564867361365,
            null,
            "Парус апельсин 1л",
            150,
            88,
            1
        ],
        [
            "2017-11-29 17:26:57",
            "Приход",
            564564867361365,
            "https:\/\/teremok.sm.ua\/wa-data\/public\/shop\/products\/82\/25\/82582\/images\/35179\/35179.750@2x.jpg",
            "Сметана и лук 25г",
            30,
            33,
            0
        ],
        [
            "2017-11-29 17:26:57",
            "Приход",
            564564867361365,
            "http:\/\/xn--4-8sbu.xn--p1ai\/thumb\/4KQdJOhw0Uu5AnP0PPIrMQ\/200r200\/761268\/3152.png",
            "Беседа. 50гр",
            36.5,
            6,
            0
        ],
        [
            "2017-11-29 17:26:57",
            "Приход",
            564564867361365,
            null,
            "Парус лимон 1л",
            150,
            65,
            1
        ],
        [
            "2017-11-29 18:29:00",
            "Расход",
            564564867361364,
            "http:\/\/irecommend.ru\/sites\/default\/files\/imagecache\/copyright1\/user-images\/299388\/Ydfgl76IXe0nEM2gO6Ww.JPG",
            "Молочный Традиция 100",
            115,
            64,
            0
        ],
        [
            "2017-11-29 19:31:03",
            "Приход",
            564564867361363,
            "https:\/\/mariupolcena.com\/files\/products\/9ff44136e6ccb0afb404ad26f727e67d.jpeg",
            "Русская картошка чедар 50",
            46.3,
            6,
            0
        ],
        [
            "2017-11-29 19:31:03",
            "Приход",
            564564867361363,
            "https:\/\/teremok.sm.ua\/wa-data\/public\/shop\/products\/82\/25\/82582\/images\/35179\/35179.750@2x.jpg",
            "Сметана и лук 25г",
            30,
            18,
            0
        ],
        [
            "2017-11-29 19:31:03",
            "Приход",
            564564867361363,
            "http:\/\/xn--4-8sbu.xn--p1ai\/thumb\/4KQdJOhw0Uu5AnP0PPIrMQ\/200r200\/761268\/3152.png",
            "Беседа. 50гр",
            36.5,
            99,
            0
        ],
        [
            "2017-11-29 19:31:03",
            "Приход",
            564564867361363,
            "https:\/\/tashkentcena.com\/files\/products\/893eebe7b69146290886dc504a3328ef.jpeg",
            "Горький коньяк 100",
            336,
            94,
            0
        ],
        [
            "2017-11-29 19:31:03",
            "Приход",
            564564867361363,
            "https:\/\/www.utkonos.ru\/images\/photo\/3176\/3176192H.jpg",
            "Сыр 125г",
            131,
            64,
            0
        ],
        [
            "2017-11-29 19:31:03",
            "Приход",
            564564867361363,
            "https:\/\/www.utkonos.ru\/images\/photo\/3265\/3265004H.jpg",
            "Молочный Яблоко 100",
            25.1,
            52,
            0
        ],
        [
            "2017-11-29 19:31:03",
            "Приход",
            564564867361363,
            null,
            "Парус апельсин 1л",
            150,
            43,
            1
        ]
    ]
}