import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Stack,
  Switch,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import IconArcade from "../images/icon-arcade.svg";
import IconAdvance from "../images/icon-advanced.svg";
import IconPro from "../images/icon-pro.svg";
import "../styling/selectPlan.scss";
import { useStore } from "../store/store";
import { useSelectPlan } from "../hooks/hooks";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "black" : "black",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    // backgroundColor:
    //   theme.palette.mode === "dark"
    //     ? "rgba(255,255,255,.35)"
    //     : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const SelectPlanComponent = () => {
  const { setSelectedPlan, monthlyOrYearlyPlan } = useSelectPlan();
  const store: any = useStore();

  return (
    <main id="select-plan-container" aria-label="Select monthly or yearly plan">
      <header>
        <Typography id="header-text">Select your plan</Typography>
        <Typography id="p-text">
          You have the option of monthly or yearly billing
        </Typography>
      </header>

      <section className="outer-card-container" aria-label="Select plan">
        {/* Arcade */}
        <Card
          className="card-container"
          id={`${store.planSelected === "Arcade" ? "selected" : ""}`}
          onClick={() => setSelectedPlan(0)}
        >
          <CardActionArea className="card-action-area">
            <CardMedia
              component="img"
              sx={{ width: 50 }}
              image={IconArcade}
              alt="Arcade Icon"
              className="card-media-container"
            />
            <CardContent className="card-text-container">
              <Typography className="card-text-description">Arcade</Typography>
              <Typography className="card-text-price">{`${
                store.monthlyOrYearlyPlan ? "$90/yr" : "$9/mo"
              }`}</Typography>
              {store.monthlyOrYearlyPlan ? (
                <Typography className="card-text-free-months">
                  2 months free
                </Typography>
              ) : (
                ""
              )}
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Advanced */}
        <Card
          className="card-container"
          id={`${store.planSelected === "Advanced" ? "selected" : ""}`}
          onClick={() => setSelectedPlan(1)}
        >
          <CardActionArea className="card-action-area">
            <CardMedia
              component="img"
              sx={{ width: 50 }}
              image={IconAdvance}
              alt="Advanced"
              className="card-media-container"
            />
            <CardContent className="card-text-container">
              <Typography className="card-text-description">
                Advanced
              </Typography>
              <Typography className="card-text-price">{`${
                store.monthlyOrYearlyPlan ? "$120/yr" : "$12/mo"
              }`}</Typography>
              {store.monthlyOrYearlyPlan ? (
                <Typography className="card-text-free-months">
                  2 months free
                </Typography>
              ) : (
                ""
              )}
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Pro */}
        <Card
          className="card-container"
          id={`${store.planSelected === "Pro" ? "selected" : ""}`}
          onClick={() => setSelectedPlan(2)}
        >
          <CardActionArea className="card-action-area">
            <CardMedia
              component="img"
              sx={{ width: 50 }}
              image={IconPro}
              alt="Advanced"
              className="card-media-container"
            />
            <CardContent className="card-text-container">
              <Typography className="card-text-description">Pro</Typography>
              <Typography className="card-text-price">{`${
                store.monthlyOrYearlyPlan ? "$150/yr" : "$15/mo"
              }`}</Typography>
              {store.monthlyOrYearlyPlan ? (
                <Typography className="card-text-free-months">
                  2 months free
                </Typography>
              ) : (
                ""
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      </section>

      <section
        className="type-of-plan"
        aria-label="Select if the plan is monthly or yearly"
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography id="monthly-text">Monthly</Typography>
          <AntSwitch
            checked={store.monthlyOrYearlyPlan}
            onChange={() => monthlyOrYearlyPlan()}
            onKeyDown={(e) => {
              if (e.key === "Enter") monthlyOrYearlyPlan();
            }}
            autoFocus
          />
          <Typography id="yearly-text">Yearly</Typography>
        </Stack>
      </section>
      <>
        {store.hasPlanBeenSelected ? null : (
          <Alert variant="filled" severity="error">
            Must Select A Plan.
          </Alert>
        )}
      </>
    </main>
  );
};
export default SelectPlanComponent;
