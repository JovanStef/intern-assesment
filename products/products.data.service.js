import IntervalService from "../services/interval.service.js";

export default class ProductsDataService {
  static prooducts = [
    {
      id: 1,
      title: "V8 Pet",
      description: "Displ apophyseal fx l femr, 7thJ",
      category: {
        slug: "exploit distributed relationships",
        name: "Regrant",
        url: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
        review: {
          rating: 22,
          comment:
            "Accident to powered aircraft at takeoff or landing injuring parachutist (military) (other)",
          date: "2/27/2024",
        },
      },
    },
    {
      id: 2,
      title: "Broom - Push",
      description: "Displacement of bile duct prosthesis, sequela",
      category: {
        slug: "revolutionize bleeding-edge vortals",
        name: "Bytecard",
        url: "http://dummyimage.com/177x100.png/5fa2dd/ffffff",
        review: {
          rating: 33,
          comment:
            "Other specified fetal and placental problems, affecting management of mother, delivered, with or without mention of antepartum condition",
          date: "12/27/2023",
        },
      },
    },
    {
      id: 3,
      title: "Cardamon Ground",
      description: "Inj unsp musc/tend at lower leg level, right leg, init",
      category: {
        slug: "innovate cutting-edge niches",
        name: "Stringtough",
        url: "http://dummyimage.com/220x100.png/cc0000/ffffff",
        review: {
          rating: 38,
          comment: "Other disorders of globe",
          date: "5/14/2024",
        },
      },
    },
    {
      id: 4,
      title: "Tart Shells - Savory, 3",
      description: "Poisoning by unsp hormones and synthetic sub, assault",
      category: {
        slug: "streamline real-time markets",
        name: "Home Ing",
        url: "http://dummyimage.com/183x100.png/5fa2dd/ffffff",
        review: {
          rating: 13,
          comment: "Urethral discharge",
          date: "1/25/2024",
        },
      },
    },
    {
      id: 5,
      title: "Oven Mitts 17 Inch",
      description: "Displ transverse fx shaft of r ulna, 7thB",
      category: {
        slug: "mesh web-enabled initiatives",
        name: "Subin",
        url: "http://dummyimage.com/181x100.png/dddddd/000000",
        review: {
          rating: 83,
          comment: "Preauricular sinus or fistula",
          date: "6/29/2024",
        },
      },
    },
    {
      id: 6,
      title: "Versatainer Nc - 9388",
      description: "Superficial foreign body of breast",
      category: {
        slug: "morph synergistic deliverables",
        name: "Trippledex",
        url: "http://dummyimage.com/233x100.png/dddddd/000000",
        review: {
          rating: 46,
          comment: "Hypervitaminosis D",
          date: "1/25/2024",
        },
      },
    },
    {
      id: 7,
      title: "Salt And Pepper Mix - White",
      description: "Other fracture of shaft of radius, left arm",
      category: {
        slug: "extend one-to-one paradigms",
        name: "Wrapsafe",
        url: "http://dummyimage.com/139x100.png/ff4444/ffffff",
        review: {
          rating: 69,
          comment:
            "Manic affective disorder, recurrent episode, severe, specified as with psychotic behavior",
          date: "1/25/2024",
        },
      },
    },
    {
      id: 8,
      title: "Kolrabi",
      description: "Disp fx of lateral condyle of unsp humer, 7thP",
      category: {
        slug: "grow plug-and-play e-services",
        name: "Bytecard",
        url: "http://dummyimage.com/166x100.png/5fa2dd/ffffff",
        review: {
          rating: 89,
          comment:
            "Coagulation defects complicating pregnancy, childbirth, or the puerperium, delivered, with or without mention of antepartum condition",
          date: "11/2/2023",
        },
      },
    },
    {
      id: 9,
      title: "Pie Box - Cello Window 2.5",
      description: "Person outsd 3-whl mv inj in clsn w pedl cyc in traf, sqla",
      category: {
        slug: "facilitate out-of-the-box vortals",
        name: "Greenlam",
        url: "http://dummyimage.com/226x100.png/ff4444/ffffff",
        review: { rating: 88, comment: "Prickly heat", date: "7/31/2024" },
      },
    },
    {
      id: 10,
      title: "Ice - Clear, 300 Lb For Carving",
      description: "Chronic sphenoidal sinusitis",
      category: {
        slug: "deploy visionary paradigms",
        name: "Y-Solowarm",
        url: "http://dummyimage.com/120x100.png/cc0000/ffffff",
        review: {
          rating: 1,
          comment:
            "Accidental poisoning by agents primarily affecting gastrointestinal system",
          date: "11/25/2023",
        },
      },
    },
    {
      id: 11,
      title: "Muffin - Mix - Strawberry Rhubarb",
      description: "Congenital rubella syndrome",
      category: {
        slug: "productize holistic functionalities",
        name: "Bitchip",
        url: "http://dummyimage.com/134x100.png/dddddd/000000",
        review: {
          rating: 56,
          comment: "Late effect of burn of eye, face, head, and neck",
          date: "5/28/2024",
        },
      },
    },
    {
      id: 12,
      title: "Turkey Tenderloin Frozen",
      description:
        "Inj musc/tend peroneal grp at low leg level, right leg, init",
      category: {
        slug: "empower viral infrastructures",
        name: "Bigtax",
        url: "http://dummyimage.com/221x100.png/cc0000/ffffff",
        review: {
          rating: 63,
          comment:
            "Injury to other and multiple intra-abdominal organs without mention of open wound into cavity",
          date: "5/29/2024",
        },
      },
    },
    {
      id: 13,
      title: "Spinach - Packaged",
      description:
        "Complete traumatic amputation of l low leg, level unsp, subs",
      category: {
        slug: "morph end-to-end methodologies",
        name: "Treeflex",
        url: "http://dummyimage.com/192x100.png/cc0000/ffffff",
        review: {
          rating: 54,
          comment: "Accidents occurring in other specified places",
          date: "6/19/2024",
        },
      },
    },
    {
      id: 14,
      title: "Momiji Oroshi Chili Sauce",
      description: "Effusion, right shoulder",
      category: {
        slug: "e-enable out-of-the-box infomediaries",
        name: "Mat Lam Tam",
        url: "http://dummyimage.com/219x100.png/ff4444/ffffff",
        review: {
          rating: 14,
          comment:
            "Screening examination for other specified parasitic infections",
          date: "2/27/2024",
        },
      },
    },
    {
      id: 15,
      title: "Split Peas - Yellow, Dry",
      description: "Toxic effect of soaps, assault, subsequent encounter",
      category: {
        slug: "synergize back-end platforms",
        name: "Span",
        url: "http://dummyimage.com/137x100.png/5fa2dd/ffffff",
        review: {
          rating: 34,
          comment: "Mononeuritis multiplex",
          date: "12/26/2023",
        },
      },
    },
    {
      id: 16,
      title: "Ham Black Forest",
      description:
        "Underdosing of cephalospor/oth beta-lactm antibiotics, subs",
      category: {
        slug: "enable cross-media deliverables",
        name: "Bytecard",
        url: "http://dummyimage.com/204x100.png/ff4444/ffffff",
        review: {
          rating: 23,
          comment:
            "Other benign neoplasm of connective and other soft tissue of pelvis",
          date: "5/23/2024",
        },
      },
    },
    {
      id: 17,
      title: "Cheese - Parmesan Cubes",
      description: "Adverse effect of unsp drug/meds/biol subst, init",
      category: {
        slug: "mesh cross-platform infrastructures",
        name: "Regrant",
        url: "http://dummyimage.com/109x100.png/dddddd/000000",
        review: {
          rating: 44,
          comment:
            "Mechanical complication of other vascular device, implant, and graft",
          date: "10/27/2023",
        },
      },
    },
    {
      id: 18,
      title: "Carbonated Water - Strawberry",
      description:
        "Unsp fx shaft of left radius, subs for clos fx w delay heal",
      category: {
        slug: "streamline strategic partnerships",
        name: "Stringtough",
        url: "http://dummyimage.com/222x100.png/cc0000/ffffff",
        review: {
          rating: 40,
          comment:
            "Breech or other malpresentation successfully converted to cephalic presentation, antepartum condition or complication",
          date: "5/21/2024",
        },
      },
    },
    {
      id: 19,
      title: "Salt - Rock, Course",
      description: "Sltr-haris Type I physl fx upr end unsp tibia, 7thD",
      category: {
        slug: "evolve world-class e-tailers",
        name: "Sub-Ex",
        url: "http://dummyimage.com/233x100.png/ff4444/ffffff",
        review: {
          rating: 75,
          comment:
            "Nonspecific abnormal results of other specified function study",
          date: "6/5/2024",
        },
      },
    },
    {
      id: 20,
      title: "Cognac - Courvaisier",
      description: "Nondisp commnt fx shaft of rad, r arm, 7thQ",
      category: {
        slug: "recontextualize scalable networks",
        name: "Transcof",
        url: "http://dummyimage.com/132x100.png/cc0000/ffffff",
        review: {
          rating: 69,
          comment: "Other occupational circumstances or maladjustment",
          date: "5/12/2024",
        },
      },
    },
    {
      id: 21,
      title: "Flower - Commercial Spider",
      description: "Nondisp pilon fx left tibia, subs for clos fx w nonunion",
      category: {
        slug: "deploy cross-media portals",
        name: "Solarbreeze",
        url: "http://dummyimage.com/205x100.png/ff4444/ffffff",
        review: {
          rating: 47,
          comment: "Histoplasmosis, unspecified, pneumonia",
          date: "4/3/2024",
        },
      },
    },
    {
      id: 22,
      title: "Cinnamon - Stick",
      description: "Oth fracture of unsp ilium, subs for fx w delay heal",
      category: {
        slug: "monetize synergistic e-business",
        name: "Holdlamis",
        url: "http://dummyimage.com/203x100.png/dddddd/000000",
        review: {
          rating: 44,
          comment:
            "Toxic effect of other specified noxious substances eaten as food",
          date: "4/3/2024",
        },
      },
    },
    {
      id: 23,
      title: "Food Colouring - Pink",
      description: "Conversion disorder with sensory symptom or deficit",
      category: {
        slug: "redefine mission-critical metrics",
        name: "Flexidy",
        url: "http://dummyimage.com/111x100.png/5fa2dd/ffffff",
        review: {
          rating: 15,
          comment:
            "Carrier or suspected carrier of other gastrointestinal pathogens",
          date: "7/3/2024",
        },
      },
    },
    {
      id: 24,
      title: "Apple - Macintosh",
      description: "Cholera, unspecified",
      category: {
        slug: "recontextualize turn-key models",
        name: "Matsoft",
        url: "http://dummyimage.com/175x100.png/cc0000/ffffff",
        review: {
          rating: 41,
          comment:
            "Subarachnoid hemorrhage following injury without mention of open intracranial wound, with brief [less than one hour] loss of consciousness",
          date: "10/19/2023",
        },
      },
    },
    {
      id: 25,
      title: "Tomatoes - Cherry",
      description: "Puncture wound with foreign body of penis",
      category: {
        slug: "engage B2B schemas",
        name: "Tres-Zap",
        url: "http://dummyimage.com/158x100.png/dddddd/000000",
        review: {
          rating: 88,
          comment:
            "Legally induced abortion, complicated by damage to pelvic organs or tissues, complete",
          date: "2/16/2024",
        },
      },
    },
    {
      id: 26,
      title: "Stock - Fish",
      description:
        "Breakdown (mechanical) of int fix of bone of r low leg, init",
      category: {
        slug: "brand clicks-and-mortar models",
        name: "Overhold",
        url: "http://dummyimage.com/134x100.png/cc0000/ffffff",
        review: {
          rating: 33,
          comment: "Closed fracture of rib(s), unspecified",
          date: "9/30/2024",
        },
      },
    },
    {
      id: 27,
      title: "Bread - Pita, Mini",
      description: "Maternal care for fetal abnormality and damage, unsp, unsp",
      category: {
        slug: "cultivate mission-critical deliverables",
        name: "Tempsoft",
        url: "http://dummyimage.com/149x100.png/cc0000/ffffff",
        review: {
          rating: 36,
          comment:
            "Tobacco use disorder complicating pregnancy, childbirth, or the puerperium, unspecified as to episode of care or not applicable",
          date: "5/31/2024",
        },
      },
    },
    {
      id: 28,
      title: "Ecolab Crystal Fusion",
      description: "Burn of first degree of left elbow, sequela",
      category: {
        slug: "engineer e-business e-commerce",
        name: "Latlux",
        url: "http://dummyimage.com/193x100.png/cc0000/ffffff",
        review: { rating: 72, comment: "Human bite", date: "3/22/2024" },
      },
    },
    {
      id: 29,
      title: "Carrots - Purple, Organic",
      description: "Phonological disorder",
      category: {
        slug: "drive viral ROI",
        name: "Transcof",
        url: "http://dummyimage.com/164x100.png/ff4444/ffffff",
        review: {
          rating: 33,
          comment: "Foreign body in iris or ciliary body",
          date: "2/20/2024",
        },
      },
    },
    {
      id: 30,
      title: "Cranberries - Dry",
      description: "Nonrheumatic mitral valve disorder, unspecified",
      category: {
        slug: "matrix open-source e-business",
        name: "Y-find",
        url: "http://dummyimage.com/108x100.png/ff4444/ffffff",
        review: {
          rating: 73,
          comment: "Other psychological trauma",
          date: "3/3/2024",
        },
      },
    },
    {
      id: 31,
      title: "Fudge - Chocolate Fudge",
      description:
        "Tox eff of carb monx fr incmpl combst dmst fuel, asslt, sqla",
      category: {
        slug: "disintermediate sticky relationships",
        name: "Konklab",
        url: "http://dummyimage.com/143x100.png/cc0000/ffffff",
        review: {
          rating: 49,
          comment: "Screening for genetic disease carrier status",
          date: "11/15/2023",
        },
      },
    },
    {
      id: 32,
      title: "Pop - Club Soda Can",
      description: "Maternal care for abnlt of vulva and perineum, unsp tri",
      category: {
        slug: "target strategic interfaces",
        name: "Zathin",
        url: "http://dummyimage.com/120x100.png/dddddd/000000",
        review: {
          rating: 26,
          comment: "Other specified cardiovascular syphilis",
          date: "1/29/2024",
        },
      },
    },
    {
      id: 33,
      title: "Potatoes - Parissienne",
      description: "Path fracture in oth disease, unsp ulna and radius, init",
      category: {
        slug: "enable vertical systems",
        name: "Daltfresh",
        url: "http://dummyimage.com/205x100.png/5fa2dd/ffffff",
        review: {
          rating: 58,
          comment: "Other autosomal deletions",
          date: "10/28/2023",
        },
      },
    },
    {
      id: 34,
      title: "Bar Special K",
      description: "Displ transverse fx unsp acetab, subs for fx w delay heal",
      category: {
        slug: "seize global relationships",
        name: "Matsoft",
        url: "http://dummyimage.com/163x100.png/dddddd/000000",
        review: {
          rating: 91,
          comment: "Penetration of eyeball with magnetic foreign body",
          date: "4/26/2024",
        },
      },
    },
    {
      id: 35,
      title: "Soup - Campbells, Chix Gumbo",
      description: "Disp fx of base of metacarpal bone, subs for fx w nonunion",
      category: {
        slug: "engineer leading-edge metrics",
        name: "Andalax",
        url: "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
        review: { rating: 64, comment: "Alpha thalassemia", date: "12/1/2023" },
      },
    },
    {
      id: 36,
      title: "Coke - Classic, 355 Ml",
      description:
        "Sltr-haris Type I physeal fx upper end of left fibula, init",
      category: {
        slug: "aggregate world-class infrastructures",
        name: "Prodder",
        url: "http://dummyimage.com/122x100.png/ff4444/ffffff",
        review: {
          rating: 54,
          comment: "Residual stage of angle-closure glaucoma",
          date: "12/12/2023",
        },
      },
    },
    {
      id: 37,
      title: "Glass Clear 7 Oz Xl",
      description: "Toxic eff of unsp noxious sub eaten as food, slf-hrm, subs",
      category: {
        slug: "utilize bleeding-edge e-business",
        name: "Transcof",
        url: "http://dummyimage.com/155x100.png/dddddd/000000",
        review: {
          rating: 49,
          comment:
            "Unspecified disproportion, unspecified as to episode of care or not applicable",
          date: "9/23/2024",
        },
      },
    },
    {
      id: 38,
      title: "Shrimp - 150 - 250",
      description: "Car driver injured in clsn w nonmtr vehicle nontraf, subs",
      category: {
        slug: "implement plug-and-play paradigms",
        name: "Sonsing",
        url: "http://dummyimage.com/239x100.png/ff4444/ffffff",
        review: {
          rating: 85,
          comment:
            "Malignant mast cell tumors, lymph nodes of head, face, and neck",
          date: "8/16/2024",
        },
      },
    },
    {
      id: 39,
      title: "Napkin - Beverage 1 Ply",
      description: "Maternal care for fetal problem, unsp, second tri, fetus 1",
      category: {
        slug: "transform one-to-one e-tailers",
        name: "Daltfresh",
        url: "http://dummyimage.com/146x100.png/cc0000/ffffff",
        review: {
          rating: 99,
          comment: "Subperiosteal abscess of mastoid",
          date: "9/5/2024",
        },
      },
    },
    {
      id: 40,
      title: "Food Colouring - Orange",
      description: "Burn of unsp deg mult sites of head, face, and neck, init",
      category: {
        slug: "engage efficient systems",
        name: "Trippledex",
        url: "http://dummyimage.com/161x100.png/cc0000/ffffff",
        review: {
          rating: 88,
          comment: "Malignant neoplasm of sigmoid colon",
          date: "2/19/2024",
        },
      },
    },
    {
      id: 41,
      title: "Beans - Turtle, Black, Dry",
      description:
        "Injury of digital nerve of right thumb, subsequent encounter",
      category: {
        slug: "brand intuitive models",
        name: "Matsoft",
        url: "http://dummyimage.com/116x100.png/cc0000/ffffff",
        review: {
          rating: 45,
          comment: "Aggressive periodontitis, unspecified",
          date: "5/17/2024",
        },
      },
    },
    {
      id: 42,
      title: "Otomegusa Dashi Konbu",
      description: "Unsp superficial injuries of l frnt wl of thorax, sequela",
      category: {
        slug: "optimize clicks-and-mortar e-commerce",
        name: "Holdlamis",
        url: "http://dummyimage.com/187x100.png/ff4444/ffffff",
        review: {
          rating: 18,
          comment: "Unspecified disorder of choroid",
          date: "10/9/2024",
        },
      },
    },
    {
      id: 43,
      title: "Carbonated Water - Peach",
      description:
        "Fall from other flat-bottomed pedestrian conveyance, sequela",
      category: {
        slug: "embrace bricks-and-clicks communities",
        name: "Zathin",
        url: "http://dummyimage.com/115x100.png/dddddd/000000",
        review: {
          rating: 27,
          comment:
            "Subarachnoid hemorrhage following injury with open intracranial wound, unspecified state of consciousness",
          date: "4/30/2024",
        },
      },
    },
    {
      id: 44,
      title: "Cleaner - Comet",
      description: "Obstructed labor due to brow presentation, fetus 3",
      category: {
        slug: "generate end-to-end bandwidth",
        name: "Alpha",
        url: "http://dummyimage.com/237x100.png/cc0000/ffffff",
        review: {
          rating: 58,
          comment:
            "Phlebitis and thrombophlebitis of upper extremities, unspecified",
          date: "2/24/2024",
        },
      },
    },
    {
      id: 45,
      title: "Gelatine Powder",
      description: "Glare sensitivity",
      category: {
        slug: "deliver cutting-edge metrics",
        name: "Cardguard",
        url: "http://dummyimage.com/147x100.png/5fa2dd/ffffff",
        review: {
          rating: 60,
          comment:
            "Tuberculosis of bronchus, bacteriological or histological examination not done",
          date: "3/20/2024",
        },
      },
    },
    {
      id: 46,
      title: "Bananas",
      description: "Nondisp spiral fx shaft of rad, r arm, 7thD",
      category: {
        slug: "strategize customized action-items",
        name: "Span",
        url: "http://dummyimage.com/121x100.png/5fa2dd/ffffff",
        review: {
          rating: 96,
          comment: "Fitting and adjustment of breast prosthesis and implant",
          date: "8/22/2024",
        },
      },
    },
    {
      id: 47,
      title: "7up Diet, 355 Ml",
      description: "Corrosion of unspecified degree of back of right hand",
      category: {
        slug: "integrate best-of-breed models",
        name: "Fixflex",
        url: "http://dummyimage.com/209x100.png/ff4444/ffffff",
        review: {
          rating: 21,
          comment:
            "Deep necrosis of underlying tissues [deep third degree] with loss of a body part, of breast",
          date: "8/6/2024",
        },
      },
    },
    {
      id: 48,
      title: "Wine - Cabernet Sauvignon",
      description: "Injury of ulnar nerve at wrs/hnd lv of right arm, sequela",
      category: {
        slug: "deploy interactive content",
        name: "Stim",
        url: "http://dummyimage.com/111x100.png/5fa2dd/ffffff",
        review: {
          rating: 89,
          comment: "Benign carcinoid tumor of the sigmoid colon",
          date: "10/11/2024",
        },
      },
    },
    {
      id: 49,
      title: "Banana - Green",
      description: "Oth fx head/neck of unsp femr, 7thQ",
      category: {
        slug: "whiteboard value-added channels",
        name: "Matsoft",
        url: "http://dummyimage.com/250x100.png/ff4444/ffffff",
        review: {
          rating: 24,
          comment:
            "Burn [any degree] involving 50-59 percent of body surface with third degree burn, 10-19%",
          date: "2/6/2024",
        },
      },
    },
    {
      id: 50,
      title: "Chicken - Base, Ultimate",
      description:
        "Poisn by oth parasympath and spasmolytics, slf-hrm, sequela",
      category: {
        slug: "leverage world-class infomediaries",
        name: "Voyatouch",
        url: "http://dummyimage.com/196x100.png/cc0000/ffffff",
        review: {
          rating: 12,
          comment: "Coxa valga (acquired)",
          date: "1/30/2024",
        },
      },
    },
    {
      id: 51,
      title: "Muffin Hinge Container 6",
      description: "Abrasion of right front wall of thorax, initial encounter",
      category: {
        slug: "cultivate bleeding-edge e-business",
        name: "Overhold",
        url: "http://dummyimage.com/109x100.png/cc0000/ffffff",
        review: { rating: 96, comment: "Photokeratitis", date: "11/11/2023" },
      },
    },
    {
      id: 52,
      title: "Beef - Ground, Extra Lean, Fresh",
      description: "Displ unsp condyle fx low end unsp femr, 7thN",
      category: {
        slug: "unleash transparent supply-chains",
        name: "Keylex",
        url: "http://dummyimage.com/101x100.png/ff4444/ffffff",
        review: {
          rating: 2,
          comment: "Contact with and (suspected) exposure to arsenic",
          date: "8/1/2024",
        },
      },
    },
    {
      id: 53,
      title: "Vinegar - Balsamic, White",
      description: "Nondisplaced fracture of trapezium, left wrist, sequela",
      category: {
        slug: "transform scalable models",
        name: "Otcom",
        url: "http://dummyimage.com/121x100.png/dddddd/000000",
        review: {
          rating: 69,
          comment: "Other specified trigeminal nerve disorders",
          date: "11/16/2023",
        },
      },
    },
    {
      id: 54,
      title: "Honey - Liquid",
      description: "Displaced Maisonneuve's fracture of unspecified leg",
      category: {
        slug: "integrate clicks-and-mortar models",
        name: "Solarbreeze",
        url: "http://dummyimage.com/145x100.png/ff4444/ffffff",
        review: {
          rating: 96,
          comment:
            "Tuberculous encephalitis or myelitis, tubercle bacilli not found by bacteriological examination, but tuberculosis confirmed histologically",
          date: "12/22/2023",
        },
      },
    },
    {
      id: 55,
      title: "Phyllo Dough",
      description: "Mech compl of gastrointestinal prosth dev/grft, init",
      category: {
        slug: "maximize efficient e-markets",
        name: "Konklux",
        url: "http://dummyimage.com/157x100.png/5fa2dd/ffffff",
        review: {
          rating: 75,
          comment:
            "Other and unspecified local anesthetics causing adverse effects in therapeutic use",
          date: "3/21/2024",
        },
      },
    },
    {
      id: 56,
      title: "Chocolate - Semi Sweet, Calets",
      description: "Unsp maternal infec/parastc disease comp preg, third tri",
      category: {
        slug: "embrace interactive users",
        name: "Alpha",
        url: "http://dummyimage.com/135x100.png/dddddd/000000",
        review: { rating: 97, comment: "Aphakia", date: "1/3/2024" },
      },
    },
    {
      id: 57,
      title: "Gatorade - Xfactor Berry",
      description: "Toxic effect of formaldehyde",
      category: {
        slug: "utilize end-to-end schemas",
        name: "Otcom",
        url: "http://dummyimage.com/221x100.png/5fa2dd/ffffff",
        review: {
          rating: 15,
          comment:
            "Smallpox vaccine causing adverse effects in therapeutic use",
          date: "9/24/2024",
        },
      },
    },
    {
      id: 58,
      title: "Cheese - Parmigiano Reggiano",
      description: "Atherosclerosis of autologous vein CABG w angina pectoris",
      category: {
        slug: "optimize sticky content",
        name: "Sonsing",
        url: "http://dummyimage.com/104x100.png/ff4444/ffffff",
        review: {
          rating: 70,
          comment:
            "Need for prophylactic vaccination and inoculation against tuberculosis [BCG]",
          date: "3/23/2024",
        },
      },
    },
    {
      id: 59,
      title: "Turkey - Breast, Boneless Sk On",
      description: "Centrally-acting and adrenergic-neuron- blocking agents",
      category: {
        slug: "envisioneer ubiquitous supply-chains",
        name: "Tampflex",
        url: "http://dummyimage.com/161x100.png/5fa2dd/ffffff",
        review: {
          rating: 78,
          comment: "Antipruritics causing adverse effects in therapeutic use",
          date: "4/3/2024",
        },
      },
    },
    {
      id: 60,
      title: "V8 Pet",
      description: "Acquired absence of ovaries",
      category: {
        slug: "drive best-of-breed infomediaries",
        name: "Job",
        url: "http://dummyimage.com/234x100.png/cc0000/ffffff",
        review: {
          rating: 38,
          comment: "Transfusion reaction, unspecified",
          date: "2/25/2024",
        },
      },
    },
    {
      id: 61,
      title: "Eggs - Extra Large",
      description: "Malignant melanoma of left upper limb, including shoulder",
      category: {
        slug: "benchmark efficient networks",
        name: "Zaam-Dox",
        url: "http://dummyimage.com/116x100.png/cc0000/ffffff",
        review: {
          rating: 76,
          comment:
            "Mechanical failure of instrument or apparatus during unspecified procedure",
          date: "1/28/2024",
        },
      },
    },
    {
      id: 62,
      title: "Bread - Italian Roll With Herbs",
      description: "Other extraarticular fracture of lower end of left radius",
      category: {
        slug: "deploy out-of-the-box channels",
        name: "Ventosanzap",
        url: "http://dummyimage.com/230x100.png/cc0000/ffffff",
        review: {
          rating: 54,
          comment: "Hodgkin's disease, lymphocytic depletion, spleen",
          date: "6/14/2024",
        },
      },
    },
    {
      id: 63,
      title: "Bread - 10 Grain",
      description: "Secondary carcinoid tumors of peritoneum",
      category: {
        slug: "whiteboard intuitive channels",
        name: "Sonair",
        url: "http://dummyimage.com/121x100.png/dddddd/000000",
        review: {
          rating: 68,
          comment:
            "Acute miliary tuberculosis, bacteriological or histological examination not done",
          date: "4/6/2024",
        },
      },
    },
    {
      id: 64,
      title: "Mussels - Frozen",
      description: "Nondisp fx of base of nk of unsp femr, 7thK",
      category: {
        slug: "morph viral convergence",
        name: "Lotstring",
        url: "http://dummyimage.com/106x100.png/5fa2dd/ffffff",
        review: {
          rating: 43,
          comment: "Open fracture of shaft of ulna (alone)",
          date: "11/4/2023",
        },
      },
    },
    {
      id: 65,
      title: "Cookie - Dough Variety",
      description: "Unsp disseminated chorioretinal inflammation, unsp eye",
      category: {
        slug: "deliver wireless deliverables",
        name: "Konklab",
        url: "http://dummyimage.com/180x100.png/5fa2dd/ffffff",
        review: {
          rating: 28,
          comment: "Other specified anomalies of ear",
          date: "5/18/2024",
        },
      },
    },
    {
      id: 66,
      title: "Bread - Hamburger Buns",
      description: "Other injury of urethra, subsequent encounter",
      category: {
        slug: "implement mission-critical e-tailers",
        name: "Toughjoyfax",
        url: "http://dummyimage.com/245x100.png/ff4444/ffffff",
        review: {
          rating: 65,
          comment: "Gastrointestinal hemorrhage of fetus or newborn",
          date: "11/20/2023",
        },
      },
    },
    {
      id: 67,
      title: "Muffin - Mix - Strawberry Rhubarb",
      description: "Corrosion of first degree of left thigh, initial encounter",
      category: {
        slug: "unleash clicks-and-mortar bandwidth",
        name: "Y-Solowarm",
        url: "http://dummyimage.com/175x100.png/cc0000/ffffff",
        review: {
          rating: 39,
          comment:
            "Unspecified complication of labor and delivery, delivered, with mention of postpartum complication",
          date: "9/8/2024",
        },
      },
    },
    {
      id: 68,
      title: "Bread - Italian Roll With Herbs",
      description: "Dislocation of other carpometacarpal joint of right hand",
      category: {
        slug: "facilitate leading-edge partnerships",
        name: "Y-find",
        url: "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
        review: {
          rating: 46,
          comment:
            "Leukemic reticuloendotheliosis, lymph nodes of head, face, and neck",
          date: "1/2/2024",
        },
      },
    },
    {
      id: 69,
      title: "Tray - 16in Rnd Blk",
      description:
        "Abn findings on dx imaging of abd regions, inc retroperiton",
      category: {
        slug: "engineer wireless systems",
        name: "Tres-Zap",
        url: "http://dummyimage.com/114x100.png/dddddd/000000",
        review: {
          rating: 87,
          comment: "Other specified arthropathy, lower leg",
          date: "9/15/2024",
        },
      },
    },
    {
      id: 70,
      title: "Wine - Niagara Peninsula Vqa",
      description: "Oth incomplete lesion at C6, sequela",
      category: {
        slug: "scale distributed networks",
        name: "Namfix",
        url: "http://dummyimage.com/133x100.png/dddddd/000000",
        review: {
          rating: 31,
          comment: "Benign carcinoid tumor of hindgut, not otherwise specified",
          date: "1/11/2024",
        },
      },
    },
    {
      id: 71,
      title: "Oven Mitts 17 Inch",
      description:
        "Cicatricial entropion of unspecified eye, unspecified eyelid",
      category: {
        slug: "innovate interactive supply-chains",
        name: "Viva",
        url: "http://dummyimage.com/195x100.png/ff4444/ffffff",
        review: {
          rating: 77,
          comment: "Other diseases of trachea and bronchus",
          date: "8/1/2024",
        },
      },
    },
    {
      id: 72,
      title: "Pasta - Fettuccine, Egg, Fresh",
      description: "Cervical disc disorder, unspecified",
      category: {
        slug: "exploit mission-critical action-items",
        name: "Ventosanzap",
        url: "http://dummyimage.com/249x100.png/ff4444/ffffff",
        review: {
          rating: 39,
          comment: "Open wound of scalp, without mention of complication",
          date: "1/25/2024",
        },
      },
    },
    {
      id: 73,
      title: "Parsley - Dried",
      description: "Perforated corneal ulcer, right eye",
      category: {
        slug: "deploy mission-critical bandwidth",
        name: "Matsoft",
        url: "http://dummyimage.com/132x100.png/cc0000/ffffff",
        review: {
          rating: 40,
          comment:
            "Motor vehicle traffic accident of unspecified nature injuring unspecified person",
          date: "1/10/2024",
        },
      },
    },
    {
      id: 74,
      title: "Appetizer - Asian Shrimp Roll",
      description: "Myiasis, unspecified",
      category: {
        slug: "syndicate plug-and-play web services",
        name: "Toughjoyfax",
        url: "http://dummyimage.com/205x100.png/cc0000/ffffff",
        review: {
          rating: 90,
          comment: "Other developmental speech or language disorder",
          date: "5/30/2024",
        },
      },
    },
    {
      id: 75,
      title: "Pasta - Rotini, Colour, Dry",
      description: "Puncture wound without foreign body, left hip, init encntr",
      category: {
        slug: "implement virtual markets",
        name: "Aerified",
        url: "http://dummyimage.com/128x100.png/5fa2dd/ffffff",
        review: {
          rating: 23,
          comment:
            "Open fracture of vault of skull with other and unspecified intracranial hemorrhage, with no loss of consciousness",
          date: "3/21/2024",
        },
      },
    },
    {
      id: 76,
      title: "Chilli Paste, Sambal Oelek",
      description: "Malignant otitis externa, unspecified ear",
      category: {
        slug: "exploit open-source metrics",
        name: "Zontrax",
        url: "http://dummyimage.com/170x100.png/cc0000/ffffff",
        review: {
          rating: 38,
          comment: "Tracheoesophageal fistula, esophageal atresia and stenosis",
          date: "5/14/2024",
        },
      },
    },
    {
      id: 77,
      title: "Arrowroot",
      description: "Other chronic osteomyelitis, unspecified tibia and fibula",
      category: {
        slug: "orchestrate world-class experiences",
        name: "Fix San",
        url: "http://dummyimage.com/205x100.png/cc0000/ffffff",
        review: {
          rating: 11,
          comment: "Corneal degeneration, unspecified",
          date: "5/21/2024",
        },
      },
    },
    {
      id: 78,
      title: "Sugar - Cubes",
      description: "Inj unsp blood vessel at ank/ft level, left leg, init",
      category: {
        slug: "expedite rich supply-chains",
        name: "Otcom",
        url: "http://dummyimage.com/165x100.png/dddddd/000000",
        review: {
          rating: 65,
          comment: "Malignant neoplasm of corpus uteri, except isthmus",
          date: "11/8/2023",
        },
      },
    },
    {
      id: 79,
      title: "Quail Eggs - Canned",
      description:
        "Age-rel osteopor w current path fracture, right ank/ft, init",
      category: {
        slug: "generate collaborative infrastructures",
        name: "Namfix",
        url: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
        review: {
          rating: 53,
          comment: "Injury to cervical nerve root",
          date: "3/26/2024",
        },
      },
    },
    {
      id: 80,
      title: "Sherbet - Raspberry",
      description: "Nondisp bicondylar fx r tibia, subs for clos fx w nonunion",
      category: {
        slug: "drive granular applications",
        name: "Lotlux",
        url: "http://dummyimage.com/209x100.png/ff4444/ffffff",
        review: {
          rating: 21,
          comment: "Other disorders of lipoid metabolism",
          date: "1/13/2024",
        },
      },
    },
    {
      id: 81,
      title: "Mushroom - Morels, Dry",
      description:
        "Driver of pk-up/van injured in collision w pedl cyc nontraf",
      category: {
        slug: "empower front-end infomediaries",
        name: "Zoolab",
        url: "http://dummyimage.com/115x100.png/dddddd/000000",
        review: {
          rating: 13,
          comment: "Other chronic disease of tonsils and adenoids",
          date: "11/12/2023",
        },
      },
    },
    {
      id: 82,
      title: "Pork - Bones",
      description: "Open bite of left great toe without damage to nail",
      category: {
        slug: "extend rich portals",
        name: "Cookley",
        url: "http://dummyimage.com/194x100.png/cc0000/ffffff",
        review: {
          rating: 31,
          comment: "Other human herpesvirus encephalitis",
          date: "7/8/2024",
        },
      },
    },
    {
      id: 83,
      title: "Potatoes - Idaho 80 Count",
      description: "Unspecified fracture of lower end of left humerus, sequela",
      category: {
        slug: "engage sexy platforms",
        name: "Bigtax",
        url: "http://dummyimage.com/189x100.png/cc0000/ffffff",
        review: { rating: 63, comment: "Ileostomy status", date: "11/7/2023" },
      },
    },
    {
      id: 84,
      title: "Bread - English Muffin",
      description: "Unsp intcrn injury w LOC >24 hr w/o ret consc w surv, sqla",
      category: {
        slug: "deploy synergistic ROI",
        name: "Tin",
        url: "http://dummyimage.com/191x100.png/ff4444/ffffff",
        review: {
          rating: 49,
          comment: "Inconclusive mammogram",
          date: "3/9/2024",
        },
      },
    },
    {
      id: 85,
      title: "Black Currants",
      description: "Other physeal fracture of left metatarsal, 7thP",
      category: {
        slug: "recontextualize sticky platforms",
        name: "Tres-Zap",
        url: "http://dummyimage.com/247x100.png/dddddd/000000",
        review: {
          rating: 92,
          comment: "Acute edema of lung, unspecified",
          date: "2/6/2024",
        },
      },
    },
    {
      id: 86,
      title: "Longos - Penne With Pesto",
      description: "Bennett's fracture, right hand, subs for fx w nonunion",
      category: {
        slug: "exploit open-source convergence",
        name: "Fintone",
        url: "http://dummyimage.com/175x100.png/dddddd/000000",
        review: {
          rating: 65,
          comment: "Sedative, hypnotic or anxiolytic dependence, unspecified",
          date: "1/16/2024",
        },
      },
    },
    {
      id: 87,
      title: "Ezy Change Mophandle",
      description: "Pnctr w/o fb of r bk wl of thorax w penet thoracic cavity",
      category: {
        slug: "productize scalable e-commerce",
        name: "Tempsoft",
        url: "http://dummyimage.com/168x100.png/dddddd/000000",
        review: {
          rating: 35,
          comment:
            "Persistent migraine aura with cerebral infarction, without mention of intractable migraine with status migrainosus",
          date: "5/23/2024",
        },
      },
    },
    {
      id: 88,
      title: "Broom And Brush Rack Black",
      description: "Unilateral post-traumatic osteoarthritis of hip",
      category: {
        slug: "streamline customized bandwidth",
        name: "Cardify",
        url: "http://dummyimage.com/188x100.png/cc0000/ffffff",
        review: {
          rating: 96,
          comment: "Pneumococcal meningitis",
          date: "8/18/2024",
        },
      },
    },
    {
      id: 89,
      title: "Peas - Pigeon, Dry",
      description:
        "Disord of amnio fluid and membrns, unsp, second tri, fetus 1",
      category: {
        slug: "redefine dynamic platforms",
        name: "Bytecard",
        url: "http://dummyimage.com/170x100.png/cc0000/ffffff",
        review: {
          rating: 85,
          comment: "Acute Eustachian salpingitis",
          date: "8/18/2024",
        },
      },
    },
    {
      id: 90,
      title: "Bagelers - Cinn / Brown",
      description: "Maternal care for scar from previous cesarean delivery",
      category: {
        slug: "facilitate real-time technologies",
        name: "Namfix",
        url: "http://dummyimage.com/223x100.png/5fa2dd/ffffff",
        review: {
          rating: 24,
          comment:
            "Premature separation of placenta, antepartum condition or complication",
          date: "7/9/2024",
        },
      },
    },
    {
      id: 91,
      title: "Wine - Soave Folonari",
      description: "Displ apophyseal fx l femr, 7thF",
      category: {
        slug: "deploy holistic communities",
        name: "Ventosanzap",
        url: "http://dummyimage.com/175x100.png/5fa2dd/ffffff",
        review: {
          rating: 78,
          comment: "Chronic mastoiditis",
          date: "8/20/2024",
        },
      },
    },
    {
      id: 92,
      title: "Goat - Whole Cut",
      description: "Oth fx low end r ulna, 7thF",
      category: {
        slug: "scale scalable action-items",
        name: "Flowdesk",
        url: "http://dummyimage.com/249x100.png/cc0000/ffffff",
        review: {
          rating: 66,
          comment:
            "Unspecified adverse effect of unspecified drug, medicinal and biological substance",
          date: "8/27/2024",
        },
      },
    },
    {
      id: 93,
      title: "French Kiss Vanilla",
      description: "Open bite of abd wall, l upr q w/o penet perit cav, subs",
      category: {
        slug: "synthesize one-to-one supply-chains",
        name: "Subin",
        url: "http://dummyimage.com/161x100.png/ff4444/ffffff",
        review: {
          rating: 2,
          comment: "Impaction of intestine, unspecified",
          date: "9/4/2024",
        },
      },
    },
    {
      id: 94,
      title: "Shrimp - Black Tiger 16/20",
      description: "Fb in oth and multiple parts of external eye, unsp eye",
      category: {
        slug: "expedite synergistic e-business",
        name: "Sonair",
        url: "http://dummyimage.com/151x100.png/ff4444/ffffff",
        review: {
          rating: 61,
          comment: "Temporal sclerosis",
          date: "1/21/2024",
        },
      },
    },
    {
      id: 95,
      title: "Bread - Kimel Stick Poly",
      description: "Toxic effect of contact with venomous marine plant",
      category: {
        slug: "visualize turn-key bandwidth",
        name: "Bytecard",
        url: "http://dummyimage.com/107x100.png/dddddd/000000",
        review: {
          rating: 46,
          comment: "Screening for alcoholism",
          date: "4/4/2024",
        },
      },
    },
    {
      id: 96,
      title: "Wine - Lamancha Do Crianza",
      description: "Accidental hit or strike by another person, sequela",
      category: {
        slug: "empower user-centric niches",
        name: "Greenlam",
        url: "http://dummyimage.com/142x100.png/dddddd/000000",
        review: {
          rating: 71,
          comment:
            "Other motor vehicle nontraffic accident involving collision with stationary object injuring pedestrian",
          date: "10/2/2024",
        },
      },
    },
    {
      id: 97,
      title: "Shrimp - Black Tiger 16/20",
      description: "Occup of bus injured in collision w ped/anml nontraf, subs",
      category: {
        slug: "recontextualize next-generation initiatives",
        name: "Bigtax",
        url: "http://dummyimage.com/127x100.png/dddddd/000000",
        review: {
          rating: 62,
          comment: "Internal hemorrhoids with other complication",
          date: "12/14/2023",
        },
      },
    },
    {
      id: 98,
      title: "Wine - White, Riesling, Henry Of",
      description: "Congenital absence, atresia and stenosis of jejunum",
      category: {
        slug: "recontextualize B2C action-items",
        name: "Y-find",
        url: "http://dummyimage.com/128x100.png/ff4444/ffffff",
        review: {
          rating: 8,
          comment: "Strabismic amblyopia",
          date: "10/24/2023",
        },
      },
    },
    {
      id: 99,
      title: "Zucchini - Green",
      description: "Disp fx of body of right calcaneus, init for opn fx",
      category: {
        slug: "syndicate real-time methodologies",
        name: "Transcof",
        url: "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
        review: {
          rating: 82,
          comment: "Paratyphoid fever, unspecified",
          date: "6/22/2024",
        },
      },
    },
    {
      id: 100,
      title: "Shrimp - 16/20, Peeled Deviened",
      description: "External constriction of unspecified hand, sequela",
      category: {
        slug: "synergize seamless e-business",
        name: "Redhold",
        url: "http://dummyimage.com/150x100.png/ff4444/ffffff",
        review: {
          rating: 13,
          comment:
            "Full-thickness skin loss [third degree, not otherwise specified] of palm of hand",
          date: "6/5/2024",
        },
      },
    },
  ];

  static async getProducts() {
    const interval = IntervalService.getRandomNumberInRange(1000, 5000);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.prooducts);
      }, interval);
    });
  }
}
