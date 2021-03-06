import { useState } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import { makeStyles } from "@mui/styles";

import Paragraph from "../components/Page1/Paragraph";

const text = [
  {
    title: "Why are we asking you to take part?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet est ut sodales blandit. Ut rhoncus accumsan dui, at ornare justo cursus sit amet. Nam eget aliquam sapien, id pellentesque urna. Nullam accumsan vitae est sit amet placerat. Proin mollis, tellus vitae porta dictum, odio ligula imperdiet ante, vel porttitor lorem neque at orci. Vivamus ut risus sit amet odio convallis eleifend. Donec sed lorem ligula. Ut vel nunc faucibus, faucibus nibh nec, condimentum ex. Sed eget lacus mattis, feugiat mi et, dictum diam. Donec at fermentum urna. Sed luctus, enim in lobortis consectetur, lorem enim congue ex, eu efficitur tortor eros sit amet erat. Aliquam non sem pulvinar, eleifend purus vitae, vestibulum nisi. Etiam suscipit felis eu tristique fringilla. ",
  },
  {
    title: "What would i need to do?",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis semper faucibus. Sed ultricies scelerisque nisi ac sollicitudin. Nulla porttitor lorem vel egestas dignissim. Vestibulum a erat ut sapien scelerisque scelerisque. Pellentesque aliquam ex condimentum venenatis rhoncus. Donec quis orci purus. Nulla euismod enim placerat leo iaculis, non auctor augue vestibulum. Nunc nec quam id lacus laoreet egestas eu at erat. Proin varius vestibulum elit quis lobortis. Duis tristique eros et tellus faucibus ultrices. Duis consectetur porta mi, ac aliquam nunc finibus eget. Maecenas ac mi sollicitudin, faucibus mauris nec, ullamcorper tellus. Duis id laoreet enim, non pulvinar metus. Suspendisse sem ipsum, condimentum ut lorem non, accumsan posuere massa. Curabitur ac viverra magna. \n\n Duis pretium accumsan mauris, cursus elementum lectus dignissim eu. Integer sed eros cursus, laoreet tortor in, tempus velit. Sed porta, dui in molestie mattis, mi magna molestie orci, a porta nibh augue a ipsum. Maecenas quis lorem augue. Suspendisse in hendrerit est. Nullam dignissim est vel ex placerat feugiat. Nam vel risus lectus. Vivamus quam neque, ultrices vitae libero sed, rhoncus imperdiet sapien. Vestibulum elit metus, pretium sed nisi vitae, blandit placerat quam. Aliquam tincidunt dolor vitae nibh interdum fringilla. Suspendisse congue dolor in vehicula mattis. Ut luctus nisl eu leo facilisis, eget hendrerit dui sollicitudin. Pellentesque lacinia sagittis quam sed porttitor. Pellentesque pretium elit odio, ut fringilla enim tincidunt ac. \n\nUt id enim id velit semper maximus. Sed vitae volutpat odio, sit amet dictum arcu. Nunc ut tempus ipsum. Phasellus sed erat nisi. Quisque et turpis metus. Integer nulla urna, semper quis diam eu, fermentum viverra purus. Sed ornare faucibus leo, at gravida dui blandit a.`,
  },
  {
    title: "How will we use the information?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet est ut sodales blandit. Ut rhoncus accumsan dui, at ornare justo cursus sit amet. Nam eget aliquam sapien, id pellentesque urna. Nullam accumsan vitae est sit amet placerat. Proin mollis, tellus vitae porta dictum, odio ligula imperdiet ante, vel porttitor lorem neque at orci. Vivamus ut risus sit amet odio convallis eleifend. Donec sed lorem ligula. Ut vel nunc faucibus, faucibus nibh nec, condimentum ex. Sed eget lacus mattis, feugiat mi et, dictum diam. Donec at fermentum urna. Sed luctus, enim in lobortis consectetur, lorem enim congue ex, eu efficitur tortor eros sit amet erat. Aliquam non sem pulvinar, eleifend purus vitae, vestibulum nisi. Etiam suscipit felis eu tristique fringilla. ",
  },
  {
    title: "What if i change my mind?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet est ut sodales blandit. Ut rhoncus accumsan dui, at ornare justo cursus sit amet. Nam eget aliquam sapien, id pellentesque urna. Nullam accumsan vitae est sit amet placerat. Proin mollis, tellus vitae porta dictum, odio ligula imperdiet ante, vel porttitor lorem neque at orci. Vivamus ut risus sit amet odio convallis eleifend. Donec sed lorem ligula. Ut vel nunc faucibus, faucibus nibh nec, condimentum ex. Sed eget lacus mattis, feugiat mi et, dictum diam. Donec at fermentum urna. Sed luctus, enim in lobortis consectetur, lorem enim congue ex, eu efficitur tortor eros sit amet erat. Aliquam non sem pulvinar, eleifend purus vitae, vestibulum nisi. Etiam suscipit felis eu tristique fringilla. ",
  },
  {
    title: "How can i find out the result of the research?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet est ut sodales blandit. Ut rhoncus accumsan dui, at ornare justo cursus sit amet. Nam eget aliquam sapien, id pellentesque urna. Nullam accumsan vitae est sit amet placerat. Proin mollis, tellus vitae porta dictum, odio ligula imperdiet ante, vel porttitor lorem neque at orci. Vivamus ut risus sit amet odio convallis eleifend. Donec sed lorem ligula. Ut vel nunc faucibus, faucibus nibh nec, condimentum ex. Sed eget lacus mattis, feugiat mi et, dictum diam. Donec at fermentum urna. Sed luctus, enim in lobortis consectetur, lorem enim congue ex, eu efficitur tortor eros sit amet erat. Aliquam non sem pulvinar, eleifend purus vitae, vestibulum nisi. Etiam suscipit felis eu tristique fringilla. ",
  },
  {
    title: "Who do i contact to ask question, or if i want to complain?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet est ut sodales blandit. Ut rhoncus accumsan dui, at ornare justo cursus sit amet. Nam eget aliquam sapien, id pellentesque urna. Nullam accumsan vitae est sit amet placerat. Proin mollis, tellus vitae porta dictum, odio ligula imperdiet ante, vel porttitor lorem neque at orci. Vivamus ut risus sit amet odio convallis eleifend. Donec sed lorem ligula. Ut vel nunc faucibus, faucibus nibh nec, condimentum ex. Sed eget lacus mattis, feugiat mi et, dictum diam. Donec at fermentum urna. Sed luctus, enim in lobortis consectetur, lorem enim congue ex, eu efficitur tortor eros sit amet erat. Aliquam non sem pulvinar, eleifend purus vitae, vestibulum nisi. Etiam suscipit felis eu tristique fringilla. ",
  },
];

const useStyles = makeStyles(() => ({
  container: {
    fontFamily: "'Open Sans', cursive",

    minHeight: "calc(100vh - 8rem)",
    marginBottom: "-4rem",
    padding: "5rem 0",
  },
  box: {
    width: "90%",
    // margin: "0 3rem",
    margin: "auto",
    border: "3px solid #e3e3e3",
    borderRadius: "1rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "0.8rem",
  },
  title: {
    margin: "0",
    marginTop: "4rem",
    padding: "0 2rem",
  },
  title2: {
    margin: "0",

    padding: "0 2rem",
  },
  textCenter: {
    margin: "0",

    fontSize: "1.2rem",
    width: "55%",
    textAlign: "center",
  },
  small_box: {
    width: "70%",
    margin: "2rem 0",
    // padding: "2rem",

    borderRadius: "3rem",
    backgroundColor: "#b8d7ff",

    display: "flex",
    flexDirection: "column",
  },
  buttons: {
    width: "70%",
    margin: "2rem 0",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cancel: {
    // background: "red",
    // color: "#040a4f",
    color: "red",
    width: "30%",
  },
  agree: {
    width: "65%",
    background: "#040a4f",
    color: "white",
  },
  disagree: {
    width: "65%",
    background: "white",
    color: "gray",
    outline: "none",
  },

  pusher: {
    height: "4rem",
    margin: "0",
  },
}));

const Page1 = () => {
  const classes = useStyles();

  const [agree, setAgree] = useState(false);

  // let recaptcha_response = "";

  // const submitUserForm = () => {
  //   if (recaptcha_response.length == 0) {
  //     document.getElementById("g-recaptcha-error").innerHTML =
  //       '<span style="color:red;">This field is required.</span>';
  //     return false;
  //   }
  //   return true;
  // };

  // const verifyCaptcha = (token) => {
  //   recaptcha_response = token;
  //   document.getElementById("g-recaptcha-error").innerHTML = "";
  // };

  const quitHandler = (e) => {
    e.preventDefault();
    window.close();
  };

  // console.log(grecaptcha.getResponse());

  return (
    <div className={classes.container}>
      <Box className={classes.box}>
        <h1 className={classes.title}>Thank you for you interest</h1>

        <i className={classes.title2}>Please read the in formation below</i>

        <p className={classes.textCenter}>
          Once you have read and understood the information. If you agree to
          take part in the research, click on the <b>"I Agree"</b>button to
          begin the survey.
        </p>

        <Box className={classes.small_box}>
          {text.map((para, index) => (
            <Paragraph title={para.title} desc={para.desc} key={index} />
          ))}
        </Box>

        {/* https://stackoverflow.com/questions/3232904/using-recaptcha-on-localhost */}
        {/* <div
          className="g-recaptcha"
          data-sitekey="6Lc5WYQfAAAAAFNWBSXRahFUMtMzxP9ROBGWFgI1"
        />
         */}
        {/* https://www.npmjs.com/package/react-google-recaptcha */}
        <ReCAPTCHA
          sitekey="6Lc5WYQfAAAAAFNWBSXRahFUMtMzxP9ROBGWFgI1"
          onChange={() => {
            setAgree(true);
          }}
          onErrored={() => {
            setAgree(false);
          }}
          onExpired={() => {
            setAgree(false);
          }}
        />

        <Box className={classes.buttons}>
          <Button
            variant="outlined"
            className={classes.cancel}
            onClick={quitHandler}
          >
            Cancel
          </Button>

          <Button
            component={Link}
            to="/page_2"
            variant="contained"
            color="primary"
            className={classes.agree}
            disabled={!agree}
          >
            I have read and agree with the term of use
          </Button>
        </Box>
      </Box>

      <div className={classes.pusher} />
    </div>
  );
};

export default Page1;
