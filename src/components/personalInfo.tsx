import { TextField, Typography } from "@mui/material";
import { useStore } from "../store/store";
import "../styling/personalInfo.scss";

const PersonalInfoComponent = () => {
  const store: any = useStore();

  return (
    <div className="info-container">
      <Typography id="info-header">Personal Info</Typography>
      <Typography id="info-description">
        Please prodive your name, email address, and phone number
      </Typography>
      <TextField
        error={store.hasNameBeenEntered ? false : true}
        id="name-textbox"
        label="Name"
        variant="outlined"
        className="input-box"
        helperText={store.hasNameBeenEntered ? "" : "Must enter name"}
        value={store.name}
        onChange={(e) => store.setName(e.target.value)}
      />
      <TextField
        error={store.hasEmailBeenEntered ? false : true}
        helperText={store.hasEmailBeenEntered ? "" : "Must enter email"}
        id="email-address-textbox"
        label="Email Address"
        variant="outlined"
        className="input-box"
        value={store.email}
        onChange={(e) => store.setEmail(e.target.value)}
      />
      <TextField
        id="Phone Number"
        label="Phone Number"
        variant="outlined"
        className="input-box"
        value={store.phoneNumber}
        onChange={(e) => store.setPhoneNumber(e.target.value)}
      />
    </div>
  );
};

export default PersonalInfoComponent;
