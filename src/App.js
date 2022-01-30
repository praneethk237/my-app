import logo from './logo.svg';
import { Provider } from "./context";
import Extras from "./components/extras";
import ExtrasWithoutType from './components/extraswithouttype';
import './App.css';

function App() {
  var mains = [
     
    {name:"Chiken Biriyani", price:"500", description:"white"},
    {name:"Mutton Biriyani", price:"500", description:"yellow"},
    {name:"Tadipatri Biriyani",price:"1500",description:"Tadipatri biriyani famous in tadipatri"}
  
  ];

  var salads = [
    {"name":"Green Salad Fresh",price:"50","isVeg": "yes" },
    {"name":"Onion Salad Fresh",price:"100","isVeg": "yes" },
    {"name":"Cucumber Salad",price:"100","isVeg": "yes" }
  ]
  var soups = 
  [
    {"name":"Hot & Sour Veg Soup",price:"50" , "isVeg": "yes"  },
    {"name":"Veg. Hot Garlic Soup",price:"50","isVeg": "yes" },
    {"name":"Lemon Coriander Veg Soup",price:"50","isVeg": "yes" },
    {"name":"Chiken Hot & Sour soup",price:"50","isVeg": "no" },
    {"name":"Sweet Corn Chiken Soup",price:"50","isVeg": "no" },
    {"name":"Lemon Coriander Chiken Soup",price:"50","isVeg": "no" },
    
  ]
  var papads = [
    {"name":"Roasted Pappad",price:"20" , "isVeg": "yes"  },
    {"name":"Fried Pappad",price:"20" , "isVeg": "yes"  },
    {"name":"Masala Pappad",price:"30" , "isVeg": "yes"  },
  ]
  var GobiStarters = 
  [
    {"name":"Gobi 65",price:"80" , "isVeg": "yes"  },
    {"name":"Gobi Manchurian",price:"80" , "isVeg": "yes"  },
    {"name":"Chilli Gobi",price:"80" , "isVeg": "yes"  },
    {"name":"Chilli Gobi (wet)",price:"80" , "isVeg": "yes"  },
    {"name":"Special Gobi Manchurian",price:"100" , "isVeg": "yes"  },
  ]
  var PannerStarters = 
  [
    {"name":"Paneer 65",price:"120" , "isVeg": "yes"  },
    {"name":"Panner Manchurian",price:"120" , "isVeg": "yes"  },
    {"name":"Chilli Panner",price:"120" , "isVeg": "yes"  },

  ]
  var vegStarters =
  [
    {"name":"Veg Manchurian",price:"90" , "isVeg": "yes"  },
    {"name":"Veg Manchurian (wet)",price:"100" , "isVeg": "yes"  },
    {"name":"French Fries",price:"60" , "isVeg": "yes"  },
    {"name":"Baby Corn Chatpata",price:"100" , "isVeg": "yes"  },
    {"name":"Veg Manchurian",price:"90" , "isVeg": "yes"  },
    {"name":"Veg Manchurian (wet)",price:"100" , "isVeg": "yes"  },
    {"name":"French Fries",price:"60" , "isVeg": "yes"  },
    {"name":"Baby Corn Chatpata",price:"100" , "isVeg": "yes"  },
  ]
  var chickenStarters = 
  [
    {"name":"Chicken Lollipop (4 pcs)",price:"150" , "isVeg": "no"  },
    {"name":"Chicken DrumSticks (4 pcs)",price:"160" , "isVeg": "no"  },
    {"name":"Chicken Spring rolls",price:"170" , "isVeg": "no"  },
    {"name":"Chicken 65",price:"150" , "isVeg": "no"  },
    {"name":"Pepper Chicken",price:"160" , "isVeg": "no"  },
    {"name":"Lemon Chicken",price:"160" , "isVeg": "no"  },
    {"name":"Special Chicken",price:"190" , "isVeg": "no"  },
    {"name":"Chicken Majestic",price:"170" , "isVeg": "no"  },
    {"name":"Chilli Chiken",price:"150" , "isVeg": "no"  },
    {"name":"Ginger Chicken",price:"160" , "isVeg": "no"  },
    {"name":"Apollo Chicken",price:"170" , "isVeg": "no"  },
    {"name":"Chicken Fry",price:"160" , "isVeg": "no"  },
    {"name":"Chicken Roast",price:"150" , "isVeg": "no"  },
    {"name":"Chicken Ghee Roast",price:"170" , "isVeg": "no"  },
  ]
  var eggStarters = 
  [
    {"name":"Egg 65",price:"100" , "isVeg": "no"  },
    {"name":"Egg Chilli",price:"110" , "isVeg": "no"  },
    {"name":"Egg Manchurian",price:"110" , "isVeg": "no"  },
    {"name":"Egg Pepper",price:"110" , "isVeg": "no"  },
    {"name":"Egg Fry",price:"100" , "isVeg": "no"  },
    {"name":"Egg Burz",price:"90" , "isVeg": "no"  },
    {"name":"Egg Masala Omlet (2 Eggs)",price:"40" , "isVeg": "no"  },
    {"name":"Egg Plain Omlet",price:"20" , "isVeg": "no"  },
    {"name":"Boiled Egg (1 piece)",price:"15" , "isVeg": "no"  },
  ]
  var muttonStarters = 
  [
    {"name":"Mutton Curry",price:"250" , "isVeg": "no"  },
    {"name":"Mutton Masala",price:"260" , "isVeg": "no"  },
    {"name":"Mutton Rogan Josh",price:"270" , "isVeg": "no"  },
    {"name":"Andhra Mutton Curry",price:"290" , "isVeg": "no"  },
  ]
  var prawns = 
  [
    {"name":"Prawns 65",price:"240" , "isVeg": "no"  },
    {"name":"Prawns Masala",price:"240" , "isVeg": "no"  },
    {"name":"Pepper Prawns",price:"240" , "isVeg": "no"  },
    {"name":"Prawns Roast",price:"240" , "isVeg": "no"  },
    {"name":"Ginger Prawns",price:"260" , "isVeg": "no"  },
    {"name":"Prawns Ghee Roast",price:"280" , "isVeg": "no"  },
    {"name":"Chilli Prawns",price:"260" , "isVeg": "no"  },
    {"name":"Prawns Manchurian",price:"260" , "isVeg": "no"  },
    {"name":"Andhra Prawns Curry",price:"280" , "isVeg": "no"  },
  ]
  var fish =
  [
    {"name":"Tandoori Fish",price:"240" , "isVeg": "no"  },
    {"name":"Fish Roast",price:"250" , "isVeg": "no"  },
    {"name":"Fish Amritsari",price:"250" , "isVeg": "no"  },
    {"name":"Pepper Fish",price:"250" , "isVeg": "no"  },
    {"name":"Fish Fry",price:"240" , "isVeg": "no"  },
    {"name":"Apollo Fish",price:"260" , "isVeg": "no"  },
    {"name":"Chilli Fish",price:"260" , "isVeg": "no"  },
    {"name":"Fish Ghee Roast",price:"280" , "isVeg": "no"  },
    {"name":"Fish 65",price:"250" , "isVeg": "no"  },
    {"name":"Fish Manchurian",price:"250" , "isVeg": "no"  },
    {"name":"Fish Masala",price:"250" , "isVeg": "no"  },
    {"name":"Andhra Fish Curry",price:"270" , "isVeg": "no"  },

  ]

  var emptyItems = 
  []
  var chineseDelights =
  [
    {"name":"Veg Soft Noodles",price:"80" , "isVeg": "yes"  },
    {"name":"Veg Hakka Noodles",price:"90" , "isVeg": "yes"  },
    {"name":"Baby Corn Noodles",price:"90" , "isVeg": "yes"  },
    {"name":"Mix Veg Soft Noodles",price:"100" , "isVeg": "yes"  },
    {"name":"Amercian Veg Noodles",price:"100" , "isVeg": "yes"  },
    {"name":"Chilli Garlic Noodles",price:"90" , "isVeg": "yes"  },
    {"name":"Chilli Schezwan Noodles",price:"100" , "isVeg": "yes"  },
    {"name":"Manchow veg Fried RIce",price:"100" , "isVeg": "yes"  },
    {"name":"Schezwan Fried Rice",price:"100" , "isVeg": "yes"  },
    {"name":"Mix Veg Fried Rice",price:"100" , "isVeg": "yes"  },
    {"name":"Khaju Fried Rice",price:"130" , "isVeg": "yes"  },


    {"name":"Egg Fried Rice",price:"90" , "isVeg": "no"  },
    {"name":"Egg Soft Noodles",price:"100" , "isVeg": "no"  },
    {"name":"Chicken Soft Noodles",price:"120" , "isVeg": "no"  },
    {"name":"Schezwan Chicken Noodles",price:"120" , "isVeg": "no"  },
    {"name":"Chicken Chilli Garlic Noodles",price:"120" , "isVeg": "no"  },
    {"name":"Schezwan Egg Fried Rice",price:"100" , "isVeg": "no"  },
    {"name":"Schezwan Chiken Fried Rice",price:"130" , "isVeg": "Chiken Fried Rice"  },
    
  ]
  var RiceDelightsVeg = 
  [
    {"name":"Veg Biriyani",price:"120" , "isVeg": "yes"  },
{"name":"Veg Pulav",price:"120" , "isVeg": "yes"  },
{"name":"Veg Fried Rice",price:"120" , "isVeg": "yes"  },
{"name":"Green piece pulav",price:"120" , "isVeg": "yes"  },
{"name":"Ghee Rice",price:"130" , "isVeg": "yes"  },
{"name":"Jeera Rice",price:"100" , "isVeg": "yes"  },
{"name":"Mushroom Fried RIce",price:"120" , "isVeg": "yes"  },
{"name":"Baby corn Biriyani",price:"160" , "isVeg": "yes"  },
{"name":"Panner Biriyani",price:"150" , "isVeg": "yes"  },
{"name":"Panner Fried Rice",price:"150" , "isVeg": "yes"  },
{"name":"Gobi Fried Rice",price:"120" , "isVeg": "yes"  },
{"name":"Steem Rice (1 Bowl)",price:"40" , "isVeg": "yes"  },


  ]
  var RiceDelightsCurd = 
  [
    {"name":"Curd Rice",price:"60" , "isVeg": "yes"  },
{"name":"Plan Curd",price:"20" , "isVeg": "yes"  },


  ]
  var nonVegRice = 
  [
    {"name":"Hyd Chiken Dum Biriyani (Single)",price:"120" , "isVeg": "no"  },
{"name":"Hyd Chicken Dum Biriyani (Full)",price:"180" , "isVeg": "no"  },
{"name":"Hyd. Chicken Dum Biriyani (Family Pack)",price:"400" , "isVeg": "no"  },
{"name":"Chicken Fry Piece Biriyani",price:"200" , "isVeg": "no"  },
{"name":"Chicken MOghalai Biriyani (Bone Less)",price:"260" , "isVeg": "no"  },
{"name":"Chicken Tikka Biriyani",price:"260" , "isVeg": "no"  },
{"name":"Chicken Special Biriyani (B/L) Family Pack",price:"480" , "isVeg": "no"  },
{"name":"Chicken Special Biriyani (B/L) Full",price:"250" , "isVeg": "no"  },
{"name":"Thangdi Biriyani",price:"250" , "isVeg": "no"  },
{"name":"Tandoori Biriyani",price:"250" , "isVeg": "no"  },
{"name":"Hyd. Mutton Dum Biriyani (Single)",price:"200" , "isVeg": "no"  },
{"name":"Hyd. Mutton Dum Biriyani (Full)",price:"280" , "isVeg": "no"  },
{"name":"Hyd. Mutton Dum Biriyani (Family Pack)",price:"600" , "isVeg": "no"  },
{"name":"Mutton Special Biriyani (Full)",price:"320" , "isVeg": "no"  },
{"name":"Egg Biriyani",price:"120" , "isVeg": "no"  },
{"name":"Fish Biriyani",price:"270" , "isVeg": "no"  },
{"name":"Prawns Biriyani",price:"270" , "isVeg": "no"  },
{"name":"Extra Chicken Dum Piece (One)",price:"90" , "isVeg": "no"  },
{"name":"Biriyani Rice",price:"100" , "isVeg": "no"  },
{"name":"Mutton Speical Biriyani (Family Pack)",price:"650" , "isVeg": "no"  },
  ]

  var TandooriIndianBread = 
  [
    {"name":"Plain Roti",price:"30" , "isVeg": "yes"  },
{"name":"Butter Roti",price:"35" , "isVeg": "yes"  },
{"name":"Plain Naan",price:"30" , "isVeg": "yes"  },
{"name":"Butter Naan",price:"35" , "isVeg": "yes"  },
{"name":"Garlic Naan",price:"40" , "isVeg": "yes"  },
{"name":"Plain Kulcha",price:"35" , "isVeg": "yes"  },
{"name":"Masala Kulcha",price:"40" , "isVeg": "yes"  },
{"name":"Stuffed Kulcha",price:"45" , "isVeg": "yes"  },
{"name":"Aloo Paratha",price:"45" , "isVeg": "yes"  },
{"name":"Pulka",price:"20" , "isVeg": "yes"  },
{"name":"Butter Pulka",price:"25" , "isVeg": "yes"  },
{"name":"Lacha Paratha",price:"35" , "isVeg": "yes"  },
{"name":"Pudina Paratha",price:"35" , "isVeg": "yes"  },
{"name":"Butter Kulcha",price:"40" , "isVeg": "yes"  },
{"name":"Panner Parata/Kulcha Panner",price:"50" , "isVeg": "yes"  },
{"name":"Gobi Parata / Kulcha",price:"40" , "isVeg": "yes"  },
{"name":"Methi Parota",price:"40" , "isVeg": "yes"  },
{"name":"Onion Kulcha",price:"40" , "isVeg": "yes"  },

  ]
  var VegIndianGravy = 
  [
    {"name":"Mix Veg Curry",price:"120" , "isVeg": "yes"  },
    {"name":"Aloo Gobi Masala",price:"120" , "isVeg": "yes"  },
    {"name":"Panner Butter Masala",price:"140" , "isVeg": "yes"  },
    {"name":"Palak Panner",price:"130" , "isVeg": "yes"  },
    {"name":"Kadai Panner",price:"140" , "isVeg": "yes"  },
    {"name":"Panner Kolhapuri",price:"140" , "isVeg": "yes"  },
    {"name":"Mushroom Masala",price:"150" , "isVeg": "yes"  },
    {"name":"Baby Corn Masala",price:"150" , "isVeg": "yes"  },
    {"name":"Kaju Curry",price:"170" , "isVeg": "yes"  },
    {"name":"Dal Fry",price:"100" , "isVeg": "yes"  },
    {"name":"Dal Tadka",price:"110" , "isVeg": "yes"  },
    {"name":"Palak Dal",price:"110" , "isVeg": "yes"  },
    {"name":"Plain Palak",price:"110" , "isVeg": "yes"  },
    {"name":"Methi Chaman",price:"150" , "isVeg": "yes"  },
    {"name":"Veg Kolhapuri",price:"130" , "isVeg": "yes"  },
    {"name":"Kaju Tomato",price:"150" , "isVeg": "yes"  },
    {"name":"Veg Kadai",price:"140" , "isVeg": "yes"  },
    {"name":"Veg Kadai Panner",price:"150" , "isVeg": "yes"  },
    {"name":"Panner tikka masala",price:"150" , "isVeg": "yes"  },
    {"name":"Aloo Jeera",price:"110" , "isVeg": "yes"  },
    {"name":"Malai Koftha",price:"170" , "isVeg": "yes"  },
    {"name":"Panner Kaju Curry",price:"180" , "isVeg": "yes"  },
    {"name":"Tomato Curry",price:"100" , "isVeg": "yes"  },
  ]
  var ChickenGravy = 
  [
    {"name":"Chicken Masala",price:"150" , "isVeg": "no"  },
    {"name":"Chicken Curry",price:"150" , "isVeg": "no"  },
    {"name":"Chiken Masala (B/L)",price:"180" , "isVeg": "no"  },
    {"name":"Chicken Curry (B/L)",price:"180" , "isVeg": "no"  },
    {"name":"Kadai Chicken",price:"170" , "isVeg": "no"  },
    {"name":"Butter Chicken",price:"180" , "isVeg": "no"  },
    {"name":"Chicken Tikka Masala",price:"180" , "isVeg": "no"  },
    {"name":"Chicken Moghalai",price:"190" , "isVeg": "no"  },
    {"name":"Chicken Afghani",price:"190" , "isVeg": "no"  },
    {"name":"Chicken Punjabi",price:"190" , "isVeg": "no"  },
    {"name":"Chicken Chatpata",price:"190" , "isVeg": "no"  },
    {"name":"Chicken Kaju Curry",price:"190" , "isVeg": "no"  },
    {"name":"Chicken Kali Mirchi Curry",price:"180" , "isVeg": "no"  },
    {"name":"Andhra Chicken (B/L)",price:"190" , "isVeg": "no"  },
    {"name":"Andhra Chicken",price:"150" , "isVeg": "no"  },
  ]
  var MuttonGravy = 
  [
    {"name":"Mutton Curry",price:"250" , "isVeg": "no"  },
    {"name":"Mutton Masala",price:"260" , "isVeg": "no"  },
    {"name":"Mutton Rogan Josh",price:"270" , "isVeg": "no"  },
    {"name":"Andhra Mutton Curry",price:"290" , "isVeg": "no"  },
  ]
  var chitti = 
  [
    {"name":"Chittimuthyal Mutton Biriyani (Single)",price:"180" , "isVeg": "no"  },
    {"name":"Chittimuthyal Mutton Biriyani (Full)",price:"250" , "isVeg": "no"  },
    {"name":"Chittimuthyal Chiken Biriyani (Single)",price:"120" , "isVeg": "no"  },
    {"name":"Chittimuthyal Chiken Biriyani (Full)",price:"170" , "isVeg": "no"  },
    {"name":"Mana Inti Mutton Biriyani",price:"180" , "isVeg": "no"  },
    {"name":"Mana Chiken Mutton Biriyani",price:"99" , "isVeg": "no"  },
  ]


  var Beverages = 
  [
    {"name":"Mineral Water Bottle",price:"25" , "isVeg": "yes"  },
    {"name":"Soft Drinks",price:"25" , "isVeg": "yes"  },
    {"name":"Butter Milk",price:"30" , "isVeg": "yes"  },
  ]
  return (
    <>
    <div>
      
    </div>
    <Provider>
      <div className="menu">
      <Extras type="Salads" items={salads} />
          <Extras type="Soups" items={soups}/>
          <Extras type="Papad's" items={papads} />
          
          <Extras type="ChineseDelights" items={chineseDelights} />
          <Extras type="Starters" items={emptyItems} />
          <ExtrasWithoutType subtype="Gobi" items={GobiStarters} ></ExtrasWithoutType>
          <ExtrasWithoutType subtype="Panner" items={PannerStarters} ></ExtrasWithoutType>
          <ExtrasWithoutType subtype="Veg" items={vegStarters} ></ExtrasWithoutType>
          <ExtrasWithoutType subtype="Egg" items={eggStarters} ></ExtrasWithoutType>
          <ExtrasWithoutType subtype="Chicken" items={chickenStarters} ></ExtrasWithoutType>
          <ExtrasWithoutType subtype="Mutton" items={muttonStarters} ></ExtrasWithoutType>

          <Extras type="Sea Food" items={emptyItems} />
          <ExtrasWithoutType subtype="Prawns" items={prawns} ></ExtrasWithoutType>
          <ExtrasWithoutType subtype="Fish" items={fish} ></ExtrasWithoutType>
          

          
          

          <Extras type="Tandoori Indian Breads" items={TandooriIndianBread} />
          <Extras type="Indian Veg Gravy" items={VegIndianGravy} />
          <Extras type="Chicken Gravy" items={ChickenGravy} />
          <Extras type="Mutton Gravy" items={MuttonGravy} />

          <Extras type="Veg Rice Delights" items={emptyItems} />
          <ExtrasWithoutType subtype="Veg" items={RiceDelightsVeg} ></ExtrasWithoutType>
          <ExtrasWithoutType subtype="Curd" items={RiceDelightsCurd} ></ExtrasWithoutType>

          <Extras type="Non-Veg Rice Delights" items={nonVegRice} />
          <ExtrasWithoutType subtype="Chitti Muthyal Biriyani" items={chitti} ></ExtrasWithoutType>


          <Extras type="Beverages" items={Beverages} />
      </div>
    </Provider>
    </>
  );
}

export default App;
