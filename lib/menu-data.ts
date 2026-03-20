export type MenuItem = {
  name: string
  detail: string
  duration: string
  price: string
}

export type Menu = {
  id: string
  tab: string
  enTitle: string
  image: string
  descriptionParagraphs: string[]
  items: MenuItem[]
  steps: string[]
}

export const menus: Menu[] = [
  {
    id: "relaxation",
    tab: "リラクゼーション",
    enTitle: "Relaxation Head Spa",
    image: "/images/relaxation-bg.png",
    descriptionParagraphs: [
      "オールハンドで頭・首・額の筋膜を丹念にほぐし、アロマクリームバス・スチーム・ホットストーンで血流とリンパを極上に活性化。",
      "電気バリブラシと頭皮化粧水で頭皮を整え、眼精疲労を解き放ち、フェイスラインと頭皮を優美にリフトアップ。五感すべてに響く、唯一無二の至福体験をお届けします。",
    ],
    items: [
      {
        name: "Relaxation Head Spa",
        detail: "",
        duration: "90min",
        price: "¥16,000",
      },
    ],
    steps: [
      "ブラッシング",
      "足湯",
      "カッサ",
      "アロマクリームスパ",
      "ホットストーン",
      "ホットスチーム",
      "濃密泡シャンプー",
      "高保水Wトリートメント",
      "頭皮保湿",
      "電気バリブラシ",
      "ヘアドライ",
    ],
  },
  {
    id: "scalp",
    tab: "育毛×ヘッドスパ",
    enTitle: "Scalp Care Head Spa",
    image: "/images/menu-scalp.jpg",
    descriptionParagraphs: [
      "お客様指名No.1として支持される、頭皮と髪を根本から整えるラグジュアリーな育毛ヘッドスパ。",
      "医師も推奨する上質なヒト臍帯由来幹細胞上清液を贅沢に使用し、頭皮環境を健やかに整え、ハリ・コシのある美しい髪へ導きます。",
      "頭皮・髪・心まで満たされる、至福のスパ体験をご提供いたします。",
    ],
    items: [
      {
        name: "Scalp Care | Level 3",
        detail: "ヒト臍帯由来Premium",
        duration: "90min",
        price: "¥35,000",
      },
      {
        name: "Scalp Care | Level 2",
        detail: "ヒト臍帯由来Base",
        duration: "90min",
        price: "¥21,000",
      },
      {
        name: "Scalp Care | Level 1",
        detail: "ヒト臍帯由来Light",
        duration: "90min",
        price: "¥18,000",
      },
    ],
    steps: [
      "頭皮マイクロスコープ",
      "ブラッシング",
      "足湯",
      "カッサ",
      "アロマクリームスパ",
      "ホットストーン",
      "ホットスチーム",
      "ヒト幹細胞配合シャンプー",
      "高保水Wトリートメント",
      "ヒト幹細胞塗布",
      "電気バリブラシ",
      "ヘアドライ",
    ],
  },
  {
    id: "color",
    tab: "ヘアカラー×ヘッドスパ",
    enTitle: "Hair Color Head Spa",
    image: "/images/menu-color.jpg",
    descriptionParagraphs: [
      "ゼロテクニックカラーで、頭皮への刺激をできる限り抑えながら、髪への負担にも配慮し、美しいカラーデザインとスカルプケアを同時に叶える贅沢なハイブリッドメニューです。",
      "アロマクリームバスを用い、血流・リンパ・自律神経のバランスにやさしく丁寧にアプローチ。心地よい癒しの時間の中で、頭皮と髪を健やかな状態へ導きます。",
      "※ブリーチは使用しておりません。",
    ],
    items: [
      {
        name: "Hair Color Head Spa + Scalp Care",
        detail: "ヒト臍帯由来Base使用",
        duration: "90min",
        price: "¥26,000",
      },
      {
        name: "Hair Color Head Spa",
        detail: "",
        duration: "90min",
        price: "¥21,000",
      },
    ],
    steps: [
      "ブラッシング",
      "頭皮保護",
      "ゼロテクカラー",
      "アロマクリームスパ",
      "濃密泡シャンプー",
      "高保水Wトリートメント",
      "頭皮保湿",
      "電気バリブラシ",
      "残留ジアミン除去",
      "ヘアドライ",
    ],
  },
]
