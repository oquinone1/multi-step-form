import { TextField, Typography } from "@mui/material";
import { useStore } from "../store/store";
import "../styling/personalInfo.scss";

const PersonalInfoComponent = () => {
  const store: any = useStore();

  return (
    <main
      className="info-container"
      aria-label="Enter full name, email, and phone number"
    >
      <header>
        <Typography id="info-header">Personal Info</Typography>
        <Typography id="info-description">
          Please provide your name, email address, and phone number
        </Typography>
      </header>
      <TextField
        error={store.hasNameBeenEntered ? false : true}
        id="name-textbox"
        label="Name"
        aria-label="Enter Full Name"
        variant="outlined"
        className="input-box"
        helperText={store.hasNameBeenEntered ? "" : "Must enter name"}
        value={store.name}
        onChange={(e) => store.setName(e.target.value)}
        onBlur={() => {
          store.name
            ? store.setHasNameBeenEntered(true)
            : store.setHasNameBeenEntered(false);
        }}
      />
      <TextField
        error={store.hasEmailBeenEntered ? false : true}
        helperText={store.hasEmailBeenEntered ? "" : "Must enter email"}
        id="email-address-textbox"
        aria-label="Enter Email Address"
        label="Email Address"
        variant="outlined"
        className="input-box"
        value={store.email}
        onChange={(e) => store.setEmail(e.target.value)}
        onBlur={() => {
          store.email
            ? store.setHasEmailBeenEntered(true)
            : store.setHasEmailBeenEntered(false);
        }}
      />
      <TextField
        id="Phone Number"
        label="Phone Number"
        aria-label="Enter Phone Number"
        variant="outlined"
        className="input-box"
        value={store.phoneNumber}
        onChange={(e) => store.setPhoneNumber(e.target.value)}
      />
    </main>
  );
};

export default PersonalInfoComponent;
