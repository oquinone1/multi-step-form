import { Card, CardContent, Typography, Checkbox } from "@mui/material";
import { useStore } from "../store/store";
import { usePickAddOns } from "../hooks/hooks";
import "../styling/addOns.scss";

const PickAddOnsComponent = () => {
  const store: any = useStore();
  const { setOnlineService, setLargerStorage, setCustomizableProfile } =
    usePickAddOns();

  return (
    <main className="add-ons-container" aria-label="Select add ons">
      <header>
        <Typography id="header-text">Pick add-ons</Typography>
        <Typography id="description-text">
          Add-ons help enhance your gaming experience
        </Typography>
      </header>

      <>
        <Card className="card-container">
          <div className="checkbox-container">
            <Checkbox
              checked={store.onlineService}
              onClick={() => setOnlineService()}
              onKeyDown={(e) => {
                if (e.key === "Enter") setOnlineService();
              }}
            />
          </div>
          <CardContent className="card-content">
            <div>
              <Typography
                className="card-text-header"
                aria-label="Online Service"
              >
                Online Service
              </Typography>
              <Typography className="card-description">
                Access to mulitplayer games
              </Typography>
            </div>
            <>
              <Typography className="card-price">
                {store.monthlyOrYearlyPlan ? "+$10/yr" : "+$1/mo"}
              </Typography>
            </>
          </CardContent>
        </Card>

        <Card className="card-container">
          <div className="checkbox-container">
            <Checkbox
              checked={store.largerStorage}
              onClick={() => setLargerStorage()}
              onKeyDown={(e) => {
                if (e.key === "Enter") setLargerStorage();
              }}
            />
          </div>
          <CardContent className="card-content">
            <div>
              <Typography className="card-text-header">
                Larger Storage
              </Typography>
              <Typography className="card-description">
                Extra 1TB of cloud save
              </Typography>
            </div>

            <>
              <Typography className="card-price">
                {store.monthlyOrYearlyPlan ? "+$20/yr" : "+$2/mo"}
              </Typography>
            </>
          </CardContent>
        </Card>

        <Card className="card-container">
          <div className="checkbox-container">
            <Checkbox
              checked={store.customizableProfile}
              onClick={() => setCustomizableProfile()}
              onKeyDown={(e) => {
                if (e.key === "Enter") setCustomizableProfile();
              }}
            />
          </div>
          <CardContent className="card-content">
            <div>
              <Typography className="card-text-header">
                Customizable profile
              </Typography>
              <Typography className="card-description">
                Custom theme on your profile
              </Typography>
            </div>

            <>
              <Typography className="card-price">
                {store.monthlyOrYearlyPlan ? "+$20/yr" : "+$2/mo"}
              </Typography>
            </>
          </CardContent>
        </Card>
      </>
    </main>
  );
};

export default PickAddOnsComponent;
