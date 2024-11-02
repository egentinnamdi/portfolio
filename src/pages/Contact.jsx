import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import Footer from "../ui/Footer";
import { ChatBubble, LocationCityOutlined, Phone } from "@mui/icons-material";
import Details from "../ui/Details";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
const details = [
  {
    icon: <ChatBubble />,
    title: "talk to me",
    value: "egentinnamdi10@gmail.com",
  },
  {
    icon: <Phone />,
    title: "call me",
    value: "+2348157950762",
  },
  {
    icon: <LocationCityOutlined />,
    title: "address",
    value: "Lagos, Nigeria",
  },
];

function Contact({ navScroll }) {
  const [submitting, setSubmitting] = useState(false);
  const contactForm = useRef(null);
  emailjs.init({
    publicKey: "sIXzlA_mGeqf0lQXh",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const submitPromise = emailjs
      .sendForm("service_9r196ri", "contact_form", this)
      .finally(() => {
        setSubmitting(false);
        contactForm.current.reset();
      });

    toast.promise(submitPromise, {
      loading: "Sending...",
      success: "Email sent successfully...",
      error: "There was an issue sending email...",
    });
  }

  useEffect(function () {
    contactForm.current.addEventListener("submit", handleSubmit);

    return function () {
      contactForm.current.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <Box className="min-h-[50vh] space-y-14 p-4" id="contact">
      <Box className="flex flex-col items-center space-y-10 capitalize">
        <Typography
          variant="h2"
          component="h2"
          className="border-b-8 border-util pb-5 !text-4xl !font-light lg:!text-5xl"
        >
          contact me
        </Typography>
        <Typography variant="body1" component="span" className="!text-lg">
          got a project? let's talk
        </Typography>
      </Box>
      <Stack
        spacing={5}
        direction={{
          xs: "column",
          lg: "row",
        }}
      >
        <Box className="space-y-7 lg:w-2/4 lg:px-20" ref={navScroll}>
          <Typography
            className="text-center uppercase lg:text-left"
            variant="body1"
            component="p"
          >
            contact info
          </Typography>
          <Typography
            variant="h2"
            component="h3"
            className="text-center !text-4xl font-light capitalize lg:text-left lg:!text-5xl"
          >
            get in touch
          </Typography>
          {details.map((item) => (
            <Details item={item} key={item.title} />
          ))}
        </Box>
        <Box
          ref={contactForm}
          className="!placeholder:capitalize pt-14 capitalize lg:w-2/4"
          component="form"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <TextField
                required
                label="first name"
                type="text"
                name="firstName"
                placeholder="first name"
                className="w-full"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                label="last name"
                required
                type="text"
                name="lastName"
                placeholder="last name"
                className="w-full"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                label="email"
                required
                type="email"
                name="email"
                placeholder="email"
                className="w-full"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                label="phone"
                required
                type="tel"
                name="phone"
                placeholder="phone no"
                className="w-full"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                required
                rows={5}
                label="message"
                type="text"
                name="message"
                placeholder="leave a message"
                className="w-full"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={submitting ? true : false}
                variant="contained"
                type="submit"
                className="w-full !bg-text !p-3 capitalize"
              >
                send message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}

export default Contact;
