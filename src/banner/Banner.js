import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner2.jpeg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    height: "40%",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{ fontWeight: "bold", fontFamily: "Montserrat" }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ color: "darkgrey", fontFamily: "Montserrat" }}
          >
            Get All The Info Regarding Your Favorite Crypto Currency
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
