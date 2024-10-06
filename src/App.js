import HeaderComponent from "./HeaderComponent";
import InteriorDesign from "./InteriorDesign";
import OurServices from "./OurServices";
import BrowseProjects from "./BrowseProjects";
import Services from "./Services";
import FooterComponent from "./FooterComponent";
import "./App.css";
import PortFolio from "./PortFolioComponent/PortFolio";

const App = () => {
  // var longestCommonPrefix = function (arr1, arr2) {
  //   let prefixValueLength = 0;
  //   let length = 0;

  //   for (const value of arr1) {
  //     for (const data of arr2) {
  //       length = 0;
  //       const minLength = Math.min(String(value).length, String(data).length);
  //       for (let i = 0; i < minLength; i++) {
  //         if (prefixValueLength > minLength) break;
  //         if (String(value)[i] !== String(data)[i]) break;
  //         length++;
  //       }
  //       prefixValueLength = Math.max(prefixValueLength, length);
  //     }
  //   }

  //   return prefixValueLength;
  // };

  // const arr1 = [
  //   1127, 1339, 4640, 3229, 3381, 1753, 4297, 2428, 3899, 3276, 3001, 1565,
  //   3211, 4761, 4643, 1524, 3211, 594, 3562, 1599, 1968, 3737, 4083, 1488, 3546,
  //   4137, 3718, 1102, 2216, 3910, 707, 1561, 3421, 3683, 1973, 1581, 2109, 4138,
  //   1340, 1119, 1409, 239, 3885, 981, 479, 1928, 1778, 654, 4032, 4520,
  // ];

  // const arr2 = [
  //   2620, 3293, 2494, 2514, 3723, 4134, 87, 2910, 1002, 2820, 4284, 2109, 1931,
  //   715, 2729, 2590, 2809, 2422, 848, 775, 3172, 2391, 914, 3315, 149, 3722,
  //   4231, 2000, 2260, 978, 1276, 2840, 4972, 1691, 2976, 1143, 3806, 4159, 1505,
  //   1683, 2794, 3855, 304, 4684, 2025, 702, 4591, 3104, 3121, 1247,
  // ];

  // const candies = [2, 2, 3, 1, 5];
  // const extraCandies = 3;

  // var kidsWithCandies = function (candies, extraCandies) {
  //   const maxCandies = Math.max(...candies);
  //   console.log("maxCandies :", maxCandies);
  //   return candies.map((candy) => candy + extraCandies >= maxCandies);
  //   const newArr = [];

  //   for (const values of candies) {
  //     newArr.push(largeNumber - values <= extraCandies);
  //   }
  //   return candies.map((value) => largeNumber - value <= extraCandies);
  // };

  // const flowerbed = [1, 0, 0, 0, 0, 1],
  //   n = 2;

  // var canPlaceFlowers = function (flowerbed, n) {
  //   let flowerCanBePlanted = 0;

  //   for (let i = 0; i < flowerbed.length; i++) {
  //     // Check if the current spot is empty and the adjacent spots are also empty
  //     if (
  //       flowerbed[i] === 0 &&
  //       (i === 0 || flowerbed[i - 1] === 0) &&
  //       (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
  //     ) {
  //       flowerCanBePlanted++;
  //       flowerbed[i] = 1; // Plant the flower to avoid counting it again
  //     }
  //   }
  //   console.log("flowerbed :", flowerbed);

  //   return flowerCanBePlanted >= n;
  // };

  // const s = "IceCreAm";
  // const s = "leetcode"
  // Output: "leotcede"
  // Output: "AceCreIm"

  // var reverseVowels = function (s) {
  //   const vowels = ["a", "e", "i", "o", "u"];
  //   let vowelsPosition = [];
  //   for (let i = 0; i < s.length; i++) {
  //     vowels.includes(s[i].toLowerCase()) && vowelsPosition.push({ [i]: s[i] });
  //   }

  //   for (let i = 0; i < vowelsPosition.length; i++) {}
  //   console.log("vowelsPosition :", vowelsPosition);
  // };

  return (
    <div className="App">
      {/* <div>1st test : {JSON.stringify(longestCommonPrefix(arr1, arr2))}</div> */}
      {/* <div>
        2nt test : {JSON.stringify(longestCommonPrefix([14, 2, 3], [44, 4, 4]))}
      </div> */}

      {/* <div>3rd test : {JSON.stringify(reverseVowels(s))}</div> */}
      {/* <div>
        4th test : {JSON.stringify(longestCommonPrefix([10], [17, 11]))}
      </div> */}
      <HeaderComponent />
      <InteriorDesign />
      <OurServices />
      <BrowseProjects />
      <Services />
      <PortFolio />
      <FooterComponent />
    </div>
  );
};

export default App;
