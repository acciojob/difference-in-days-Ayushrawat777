var dateDiffInDays = function (date1, date2) {
  //   write your code here
	 let date11 = new Date(date1);
let date22 = new Date(date2);

let Difference_In_Time =
	date22.getTime() - date11.getTime();
let Difference_In_Days =
	Math.round
		(Difference_In_Time / (1000 * 3600 * 24));


return Difference_In_Days;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
