import axios from "axios";

interface MortgageProp {
  purchasePrice: number;
  period: number;
  interestRate: number;
  setError: Function;
  setTotal: Function;
}

export const calculateMortgage = async ({
  purchasePrice,
  period,
  interestRate,
  setError,
  setTotal,
}: MortgageProp) => {
  try {
    const url = `/api/mortgageCalculation?principal=${purchasePrice}&termOfLoan=${period}&annualInterestRate=${interestRate}`;

    await axios.post(url).then((res: any) => {
      if (res.status === 200) {
        // Request Success
        let { monthlyPayment } = res.data;
        setTotal(Number(monthlyPayment));
      }
    });
  } catch (err: any) {
    const status = err.response.status;
    const { error } = err.response.data;

    if (status === 404) {
      // Server not found
      setError("Server Down");
    } else if (status === 400) {
      // Failed Param failed conditions (Interest Rates < 1)
      setError(error + ". Interest Rates must be greater or equal to 1.");
    } else {
      setError("Internal Server Error");
    }
  }
};
