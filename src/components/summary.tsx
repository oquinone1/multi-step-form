import { Typography, Card, CardContent, Button } from "@mui/material";
import "../styling/summary.scss";
import { useSummaryHook } from "../hooks/hooks";
import { useStore } from "../store/store";

const SummaryComponent = (props: any) => {
  const { allowUserToChangePlan } = props || {};
  const { total } = useSummaryHook();
  const store: any = useStore();

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
              <Button
                onClick={() => allowUserToChangePlan()}
                variant="text"
                size="small"
                sx={{ textTransform: "lowercase", textDecoration: "underline" }}
              >
                Change
              </Button>
            </span>
            <>
              <Typography id="price-text">{`$${store.price}/${
                store.monthlyOrYearlyPlan ? "yr" : "mo"
              }`}</Typography>
            </>
          </div>
          {store.onlineService ||
          store.largerStorage ||
          store.customizableProfile ? (
            <div className="break" />
          ) : null}

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
