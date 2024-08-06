import { useEffect, useState } from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { useStore } from "../store/store";
import "../styling/summary.scss";

const SummaryComponent = () => {
  const store: any = useStore();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let calculateTotal = 0;
    calculateTotal += store.price;
    calculateTotal += store.onlineService ? store.onlineServicePrice : 0;
    calculateTotal += store.largerStorage ? store.largerStoragePrice : 0;
    calculateTotal += store.customizableProfile
      ? store.customizableProfilePrice
      : 0;
    setTotal(calculateTotal);
  }, [
    store.price,
    store.onlineService,
    store.onlineServicePrice,
    store.largerStorage,
    store.largerStoragePrice,
    store.customizableProfile,
    store.customizableProfilePrice,
  ]);

  return (
    <main className="summary-container">
      <Typography id="summary-header-text">Finishing up</Typography>
      <Typography id="summary-description-text">
        Double-check everything looks OK before confirming.
      </Typography>

      <Card id="card-container">
        <CardContent>
          <div className="plan-summary">
            <span>
              <Typography id="plan-text">{`${store.planSelected} ${
                store.monthlyOrYearlyPlan ? "(Yearly)" : "(Monthly)"
              }`}</Typography>
              <Typography>Change</Typography>
            </span>
            <>
              <Typography id="price-text">{`$${store.price}/${
                store.monthlyOrYearlyPlan ? "yr" : "mo"
              }`}</Typography>
            </>
          </div>
          <div className="break" />

          <div>
            {store.onlineService ? (
              <div className="add-ons">
                <Typography className="add-ons-name">Online Service</Typography>
                <Typography className="add-ons-price">{`+$${
                  store.onlineServicePrice
                }/${store.monthlyOrYearlyPlan ? "yr" : "mo"}`}</Typography>
              </div>
            ) : null}

            {store.largerStorage ? (
              <div className="add-ons">
                <Typography className="add-ons-name">Larger Storage</Typography>
                <Typography className="add-ons-price">{`+$${
                  store.largerStoragePrice
                }/${store.monthlyOrYearlyPlan ? "yr" : "mo"}`}</Typography>
              </div>
            ) : null}

            {store.customizableProfile ? (
              <div className="add-ons">
                <Typography className="add-ons-name">
                  Customizable Profile
                </Typography>
                <Typography className="add-ons-price">{`+$${
                  store.customizableProfilePrice
                }/${store.monthlyOrYearlyPlan ? "yr" : "mo"}`}</Typography>
              </div>
            ) : null}
          </div>
        </CardContent>
      </Card>
      <div id="totals-container">
        <Typography id="totals-container-header">{`Total (per ${
          store.monthlyOrYearlyPlan ? "year" : "month"
        })`}</Typography>
        <Typography>{`$${total}/${
          store.monthlyOrYearlyPlan ? "yr" : "mo"
        }`}</Typography>
      </div>
    </main>
  );
};
export default SummaryComponent;
