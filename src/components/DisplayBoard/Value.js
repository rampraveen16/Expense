export const thousands_separators = (num) => 
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }


  export const getAmount = (props,str) => {
    // eslint-disable-next-line array-callback-return
    let incomeAmount = props.data.amount.filter((ele) => {
      if(ele.status=== str){
          return ele;
      }  
    })
    let getIncome = incomeAmount.map((ele => ele.amount));
    let totalIncome =0;
    if(getIncome.length !==0){
     totalIncome =getIncome.reduce((a,b)=>{
         return parseInt(a) + parseInt(b)
    })
    }
    return totalIncome
  }