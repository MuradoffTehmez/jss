
// //1.Daxil olunan ədədin sadə yoxsa mürəkkəb olduğu tapın.function sademiMurekkeb(eded) 
{
    if (eded <= 1) {
      return "Nə mürekkəb, nə sadədir";
    } else {
      for (let i = 2; i < eded; i++) {
        if (eded % i === 0) {
          return "Mürəkkəb";
        }
      }
      return "Sadə";
    }
  }
  
  let eded = +prompt("Ədəd daxil edin: ");
  console.log(sademiMurekkeb(eded));

//   //2.Daxil olunan ədədin mükəmməl olub olmadığını tapın.
//   function mukemmelMi(eded) {
//     let sum = 0;
//     for (let i = 1; i < eded; i++) {
//       if (eded % i === 0) {
//         sum += i;
//       }
//     }
//     return eded === sum;
//   }
  
//   let reqem = +prompt("Ədəd daxil edin: ");
//   if (mukemmelMi(reqem)) {
//     console.log(`${reqem} mükəmməldir`);
//   } else {
//     console.log(`${reqem} mükəmməl deyil`);
//   }
  
//   //3.Daxil olunan 2 ədəd arasındaki mükəmməl ədədləri göstərin.
//   function mukemmelAra(ilkEded, sonEded) {
//     console.log("Mükəmməl ədədlər: ");
//     for (let eded = ilkEded; eded <= sonEded; eded++) {
//       if (mukemmelMi(eded)) {
//         console.log(`${eded} mükəmməl ədəddir`);
//       }
//     }
//   }
  
//   let baslangic = +prompt("Ədəd daxil edin: ");
//   let son = +prompt("Ədəd daxil edin: ");
//   mukemmelAra(baslangic, son);

//   //Sadə ədədləri tapmaq üçün funksiya
//   function sadeEdedler(baslangic, son) {
//     console.log("Sadə ədədlər: ");
//     for (let i = baslangic; i <= son; i++) {
//       let saded = true;
//       if (i < 2) {
//         saded = false;
//       } else {
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//           if (i % j === 0) {
//             saded = false;
//             break;
//           }
//         }
//       }
//       if (saded) {
//         console.log(i);
//       }
//     }
//   }
  
//   let baslangic1 = +prompt("Ədəd daxil edin: ");
//   let son1 = +prompt("Ədəd daxil edin: ");
//   sadeEdedler(baslangic1, son1);

//   //sonu 7 ilə bitən ədədləri tapmaq üçün funksiya
//   function sonuYedi(ilkEded, sonEded) {
//     console.log("Sonu 7 ilə bitən ədədlər: ");
//     for (let i = ilkEded; i <= sonEded; i++) {
//       if (i % 10 === 7) {
//         console.log(i);
//       }
//     }
//   }
  
//   let baslangic3 = +prompt("Ədəd daxil edin: ");
//   let son3 = +prompt("Ədəd daxil edin: ");
//   sonuYedi(baslangic3, son3);
  